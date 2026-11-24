import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of sleep: the sharpest true grievance is waking up
// tired after a full night, and the sting lands in the last two words.
const LINE =
  "One star. I spend a third of my life asleep and still wake up tired. Faulty product, no refund, cannot uninstall.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");
const MAX_LENGTH = 160;

function assertWithinLimit(line: string): void {
  if (line.length === 0 || line.length > MAX_LENGTH) {
    throw new Error(
      `Line is ${line.length} characters, outside the 1-${MAX_LENGTH}-character limit.`,
    );
  }
}

function main(): void {
  assertWithinLimit(LINE);

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
