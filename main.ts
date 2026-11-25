import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of sleep, an everyday essential.
// The grievance: it takes eight hours to load, offers no pause,
// and treats recurring dreams about losing teeth as a feature.
// The sting is saved for the final words, after the complaint
// has been read completely straight.
const REVIEW_PARTS = [
  "One star for sleep:",
  "eight hours to load,",
  "no pause button,",
  "and it keeps showing me dreams about my teeth falling out",
  "like that's a feature.",
];
const REVIEW = REVIEW_PARTS.join(" ");

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");
const MAX_LENGTH = 160;

function checkLength(line: string): void {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("The review must not be empty or only whitespace.");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `Review is ${line.length} characters, over the ${MAX_LENGTH}-character limit.`,
    );
  }
}

function main(): void {
  checkLength(REVIEW);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, REVIEW, "utf8");
}

main();
