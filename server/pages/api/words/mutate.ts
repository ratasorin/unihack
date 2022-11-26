import { NextApiRequest, NextApiResponse } from "next";
import { schema } from "./dto";
import createWord from "./utils/create";
import deleteWord from "./utils/delete";

export default async function mutateWordsInSentence(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mutations = schema.parse(req.body);

  try {
    for await (const mutation of mutations) {
      if (mutation.action === "create") await createWord(mutation);
      if (mutation.action === "delete") await deleteWord(mutation);
      // if (mutation.action === "modify") modifyWord();
    }
    res
      .status(200)
      .json({ message: "All mutations have been applied successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
}
