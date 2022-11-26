import prisma from "~prisma/index";

interface WordProps {
  id: string;
  sentenceId: string;
  previousWordId?: string;
  nextWordId?: string;
  payload: string;
}

const createWord = async ({
  id,
  nextWordId,
  previousWordId,
  payload,
  sentenceId,
}: WordProps) => {
  const newWord = await prisma.word.create({
    data: { payload, sentenceId, id },
  });

  await prisma.word.update({
    data: { nextWordId: newWord.id },
    where: { id: previousWordId },
  });

  await prisma.word.update({
    data: { nextWordId: nextWordId },
    where: { id: newWord.id },
  });
};

export default createWord;
