import zod from "zod";

export const wordToCreate = zod.object({
  action: zod.literal("create"),
  id: zod.string().uuid(),
  payload: zod.string(),
  previousWordId: zod.string().uuid().optional(),
  nextWordId: zod.string().uuid().optional(),
  sentenceId: zod.string().uuid(),
});

export const wordToDelete = zod.object({
  action: zod.literal("delete"),
  id: zod.string().uuid(),
});

export const wordToModify = zod.object({
  action: zod.literal("modify"),
  id: zod.string().uuid(),
  payload: zod.string(),
});

export const schema = zod.array(
  zod.discriminatedUnion("action", [wordToCreate, wordToDelete, wordToModify])
);
