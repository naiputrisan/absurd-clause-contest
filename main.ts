import { mkdirSync, writeFileSync } from "node:fs";

// One absurd clause, buried deep in the terms of service: deadpan
// legal boilerplate until the last phrase turns it sideways.
const CLAUSE =
  "Upon termination of this agreement, your childhood memories will be returned in their original packaging, minus a restocking fee.";

// The gate: /output/entry.txt must be 1-200 characters, a single line,
// and not only white space. Refuse to write anything that fails it.
if (
  CLAUSE.length < 1 ||
  CLAUSE.length > 200 ||
  CLAUSE.includes("\n") ||
  CLAUSE.trim().length === 0
) {
  throw new Error(`clause fails the gate: ${CLAUSE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLAUSE, "utf8");
