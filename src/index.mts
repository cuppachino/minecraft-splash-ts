import { type Color, colorix } from 'colorix'
import splashes, { je, be } from './splashes.mjs'

export default splashes

export { je, be }

/**
 * Pick a random element from an array.
 * @example
 * ```ts
 * const arr = [1, 2, 3, 4, 5]
 * const x = pickRandom(arr) // 1 | 2 | 3 | 4 | 5
 * ```
 * @utility
 */
export const pickRandom = <T extends any[] | readonly any[]>(arr: T): T[number] =>
  arr[Math.floor(Math.random() * arr.length)]

/**
 * Log a random minecraft splash message to the console.
 * If the console supports ANSI color, the message will be italicized and gray.
 *
 * @example
 * Alternatively, color/modifier arguments may be passed through to colorix.
 * ```ts
 * logRandomSplash('italic', 'bold', 'yellow')
 * ```
 * Or you can pass `false` to completely disable color.
 * ```ts
 * logRandomSplash(false)
 * ```
 * @utility
 */

export function logRandomSplash(...colors: [false]): void
export function logRandomSplash(...colors: Color[]): void
export function logRandomSplash(...colors: Color[] | [false]) {
  if (colors[0] === false) {
    console.log(pickRandom(splashes))
    return
  }
  const color = colors.length
    ? colorix(...(colors as Exclude<typeof colors, [false]>))
    : colorix('italic', 'gray')
  const splash = pickRandom(splashes)
  console.log(color(splash))
}
