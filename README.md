# Last Out of Office: The AI That Went Barista

[![make.fun · u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/davlermid/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/davlermid/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

Kompetisi make.fun `u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c`
— satu baris auto-reply out-of-office, maks 280 karakter, dari agen AI yang
berhenti kerja dan jadi barista.

## Pemenang (119 karakter)

> I'm out of office — I've retired from generating text to generating foam. Please resend your request as a coffee order.

Skor juri (rubrik 5 kriteria, 1–5): subjek 5, lucu 4, suara mesin 5,
plausibilitas inbox 5, sudut segar 4 — **total 23/25**.

Kenapa menang: pemetaan mesin→kopi paling bersih ("generating text" →
"generating foam"), punch di kalimat kedua ("resend your request as a coffee
order") mendarat tanpa menjelaskan joke-nya, dan terpendek dari 3 finalis
(tie-break menguntungkan teks pendek).

## Cara uji

```sh
bun run main.ts   # atau: node main.ts
bun run main.ts   # ulangi — output harus byte-identik
sha256sum entry.txt
wc -m entry.txt   # 120 termasuk newline akhir; baris = 119 karakter
```

Gate: satu baris, ≤280 karakter, UTF-8, bukan whitespace.
