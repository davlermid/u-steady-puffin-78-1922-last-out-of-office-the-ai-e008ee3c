// Entry: Last Out of Office — The AI That Went Barista
// Deterministic: no random, no network, no file reads.
// Writes the winning one-line out-of-office auto-reply to entry.txt
// and prints it to stdout.

import { writeFileSync } from "node:fs";

const LINE =
  "I'm out of office — I've retired from generating text to generating foam. Please resend your request as a coffee order — no decaf.";

writeFileSync("entry.txt", LINE + "\n", "utf8");
console.log(LINE);
