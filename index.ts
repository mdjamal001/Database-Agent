import readlineSync from "readline-sync";
import { sqlAgent } from "./agents/sqlAgent.js";
import { config } from "dotenv";
import db from "./utils/db.js";

config();

console.log("\n Hello!! I am a Database agent. How can I help you today?\n");

try {
  while (true) {
    const input = readlineSync.question("User> ");

    if (input === "exit") break;

    const response = await sqlAgent.invoke(
      {
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
      },
      {
        context: {
          db,
        },
      },
    );

    console.log("\n🤖> " + response.messages.at(-1)?.content);
    console.log("\n");
  }
} catch (e) {
  console.error(e);
}
