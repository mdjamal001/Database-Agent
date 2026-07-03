import { createAgent } from "langchain";
import system_prompt from "../prompts/systemPrompt.js";
import { executeSQL } from "../tools/executeSQL.js";
import { SqlDatabase } from "@langchain/classic/sql_db";
import * as z from "zod";

const contextSchema = z.object({
  db: z.custom<SqlDatabase>(),
});

const tools = [executeSQL];

export const sqlAgent = createAgent({
  model: "google-genai:gemini-3.1-flash-lite",
  tools,
  systemPrompt: system_prompt,
  contextSchema,
});
