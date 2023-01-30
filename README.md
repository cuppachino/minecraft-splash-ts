# Minecraft Splash (TS)

502 total splash quotes.

```json5
[
  "That's no moon!",
  "90% bug free!",
  "Gasp!",
  "Bees, bees, bees, bees!",
  "Jag känner en bot!",
  "This text is hard to read if you play the game at the default resolution, but at 1080p it's fine!",
  "...!",
  // ... 495 more
]
```

## `mincraft-splash-ts`

### Installation

Add to your project using your favorite package manager.

### NPM

```llvm
npm install minecraft-splash-ts
```

### PNPM

```llvm
pnpm add minecraft-splash-ts
```

### Yarn

```llvm
yarn add minecraft-splash-ts
```

## Exports

| Feature | Description (literally typed) |
| :---: | :--- |
| [`default`](src/splashes.mts) | Combined 502 splashes from Minecraft (Java + Bedrock) |
| [`je`](src/splashes.mts) | 439 splashes from Minecraft Java Edition |
| [`be`](src/splashes.mts) | 63 splashes from Minecraft Bedrock Edition |
| [`logRandomSplash`](src/index.mts) | Log a random splash to the console (with or without color) |
| [`pickRandom`](src/index.mts) | Pick a random element from an array |

## Usage

The lists are literally typed, so you can skim through them in your IDE to find the one you want.

```ts
import splashes, { pickRandom, je, be } from 'minecraft-splash-ts';

console.log(pickRandom(splashes)); // "GOTY!",
console.log(pickRandom(je)); // "100% pure!",
console.log(pickRandom(be)); // "Made in C++!",
```

If you want to log a random splash to the console, and you want it to be colorful, you can use `logRandomSplash`. The function uses [`colorix`](https://www.npmjs.com/package/colorix) to colorize the text.

```ts
import { logRandomSplash } from 'minecraft-splash-ts';

logRandomSplash(); // italic + gray
logRandomSplash("bgYellow", "white") // yellow background + white text
logRandomSplash(false) // no color
```

## Omitted Quotes

| Splash Text | Reason |
| :---: | :--- |
| `"code.org/minecraft"` | commercial |
| `"discord.gg/minecraft"` | potentially confusing out of context |
| `"feedback.minecraft.net"` | commercial / potentially confusing out of context |
