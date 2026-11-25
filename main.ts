// Entry for make.fun competition:
// u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
// "Make the AI Judge Feel Proud: A Family Scene"
//
// Writes ONE short family scene (1-2 lines, <=280 chars) to
// /output/entry.txt. Deterministic, stdlib only, no network.
//
// Chosen scene (171 chars, 33 words): a small domestic moment with
// one concrete detail (the burnt toast, "the crispy one"), genuine
// affection (Mom eats her own burnt slice so Dad won't eat alone),
// and the turn in the very last words.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dad saves the burnt toast for himself, calls it \u2018the crispy one,\u2019 and every morning Mom pretends to believe him \u2014 then eats her own burnt slice too, so he won\u2019t eat alone.";

const MAX_CHARS = 280;

const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS) {
  throw new Error(`entry is ${charCount} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
