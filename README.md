# Minecraft Title Text

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

## `mincraft-title-text`

### Installation

Add to your project using your favorite package manager.

### NPM

```hs
npm install minecraft-title-text
```

### PNPM

```llvm
pnpm add minecraft-title-text
```

### Yarn

```llvm
yarn add minecraft-title-text
```

## Exports

| Feature | Description (literally typed) |
| :---: | :--- |
| [`default`](src/splashes.mts) | Combined 502 splashes from Minecraft (Java + Bedrock) |
| [`je`](src/splashes.mts) | 439 splashes from Minecraft Java Edition |
| [`be`](src/splashes.mts) | 63 splashes from Minecraft Bedrock Edition |
| [`logRandomSplash`](src/index.mts) | Log a random splash to the console (with or without color) |
| [`pickRandom`](src/index.mts) | Pick a random element from an array |

## Omitted Quotes

| Splash Text | Reason |
| :---: | :--- |
| `"code.org/minecraft"` | commercial |
| `"discord.gg/minecraft"` | potentially confusing out of context |
| `"feedback.minecraft.net"` | commercial / potentially confusing out of context |
