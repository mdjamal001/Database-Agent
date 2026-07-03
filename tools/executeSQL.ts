import * as z from "zod";
import { tool } from "langchain";

export const executeSQL = tool(
  ({ query }, runtime) => {
    return runtime.context.db.run(query);
  },
  {
    name: "execute_sql",
    description: "Execute a SQL command and return the result",
    schema: z.object({ query: z.string() }),
  },
);
