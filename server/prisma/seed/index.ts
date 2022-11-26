import prisma from "..";

const seed = async () => {
  const { id: userId } = await prisma.user.create({
    data: {},
    select: { id: true },
  });
  const { id: taskId } = await prisma.task.create({
    data: { passScore: 90, userId },
    select: { id: true },
  });
  const { id: markingId } = await prisma.marking.create({
    data: { payload: "Marking I", taskId },
    select: { id: true },
  });
  const { id: contentId } = await prisma.content.create({
    data: { markingId },
    select: { id: true },
  });
  const { id: sentenceId } = await prisma.sentence.create({
    data: { contentId },
    select: { id: true },
  });

  const d = await prisma.word.create({
    data: { payload: "d", sentenceId, nextWordId: undefined },
  });

  const c = await prisma.word.create({
    data: { payload: "c", sentenceId, nextWordId: d.id },
  });

  const b = await prisma.word.create({
    data: { payload: "b", sentenceId, nextWordId: c.id },
  });

  const a = await prisma.word.create({
    data: { payload: "a", sentenceId, nextWordId: b.id },
  });
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
