import { NextApiRequest, NextApiResponse } from "next";
import prisma from "~prisma/index";

export default async function getSentence(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  if (!id) throw new Error("No id was provided!");

  const sentenceParts = await prisma.sentence.findFirst({
    where: { id },
    include: { Words: true },
  });

  if (!sentenceParts) throw new Error("There is no sentence with the id" + id);

  const words = sentenceParts.Words;
  console.log({ words });
  const nextWords = words.map((word) => word.nextWordId);

  const lastWord = words.find((word) => !word.nextWordId);
  const firstWord = words.find(
    (word) => !nextWords.find((nextWordId) => nextWordId === word.id)
  );

  console.log({ lastWord, firstWord });

  if (!lastWord || !firstWord)
    throw new Error("We couldn't find where the sentence starts");

  let currentWord = firstWord;
  let sentence = "";
  while (currentWord.id !== lastWord.id) {
    sentence += currentWord.payload + " ";
    currentWord = words.find((word) => word.id === currentWord.nextWordId)!;
  }
  sentence += currentWord.payload;

  res.status(200).json({ sentence });
}
