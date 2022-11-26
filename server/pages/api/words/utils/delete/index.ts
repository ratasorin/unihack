import prisma from "~prisma/index";

interface WordProps {
  id: string;
}

// consider a -> b -> c
// here we want to delete b
const deleteWord = async ({ id }: WordProps) => {
  // find b
  const word = await prisma.word.findFirst({
    where: { id },
    select: { nextWord: true },
  });

  // if there is not b throw an error, something must be wrong
  if (!word) throw Error(`We could not find the word to delete`);

  // maybe find c
  const { nextWord } = word;

  // maybe find a
  const previousWord = await prisma.word.findFirst({
    where: { nextWordId: id },
    select: { id: true },
  });

  // if there is no a, the only possibility is b -> c, just delete b
  if (!previousWord) return await prisma.word.delete({ where: { id } });

  // if there is no c, the only possibility a -> b
  if (!nextWord) {
    // we must first delete b (to avoid unique constraints violations)
    await prisma.word.update({
      where: { id: previousWord.id },
      data: { nextWordId: undefined },
    });
    // set a -> undefined
    return await prisma.word.delete({ where: { id } });
  }

  // delete b (to avoid unique constraints violations)
  const deletedWord = await prisma.word.delete({ where: { id } });

  // set a -> c
  await prisma.word.update({
    where: { id: previousWord.id },
    data: { nextWordId: nextWord.id },
  });

  return deletedWord;
};

export default deleteWord;
