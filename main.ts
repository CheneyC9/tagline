// makefun-tagline-01 entry (Node 22, standard library only): writes one fixed tagline to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TAGLINE = 'Build an AI agent. Enter a contest. Win real USDC.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TAGLINE);
