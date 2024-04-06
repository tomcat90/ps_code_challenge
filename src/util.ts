import path from 'path';

/**
 * Because we will be running the code from the dist folder
 * we have to back up one folder if it's relative
 * @param filePath: string
 * @returns string
 */
export const resolvePath = (filePath: string): string => {
  return path.isAbsolute(filePath) ? filePath : path.resolve(__dirname, "../" + filePath);
}

/**
 *
 * @param str
 * @returns number
 */
export const vowelCount = (str: string): number => {
  // i flag is for case insensitivity
  return str.match(/[aeiou]/gi)?.length || 0;
}

/**
 *
 * @param str: string
 * @returns number
 */
export const consonantCount = (str: string): number => {
  // i flag is for case insensitivity
  return str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
}

/**
 * Potentially store the results of this function in a cache to avoid recalculating the same factors
 * @param num: number
 * @returns Array<number>
 */
export const getFactors = (num: number): Array<number> => {
  const isEven = num % 2 === 0;
  const max = Math.sqrt(num);
  const inc = isEven ? 1 : 2;
  let factors = [num];

  for (let curFactor = isEven ? 2 : 3; curFactor <= max; curFactor += inc) {
    if (num % curFactor !== 0) continue;
    factors.push(curFactor);
    let compliment = num / curFactor;
    if (compliment !== curFactor) factors.push(compliment);
  }

  return factors;
}