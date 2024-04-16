import { Driver  } from "src/driver";
import { Address  } from "src/address";

/**
 * Calculates a single score for a driver and address
 * @param driver
 * @param address
 * @returns number
 */
export const calculateScore = (driver: Driver, address: Address): number => {
  const isEven = address.addressLength % 2 === 0;
  let score = 0;
  if ( isEven ) {
    score = calculateEven(driver, address);
  } else {
    score = calculateOdd(driver, address);
  }

  // If intersection is not empty, add 50% to the score
  const intersection = driver.factors.filter(element => address.factors.includes(element));
  if ( intersection.length > 0 ) {
    score += score * 0.5;
  }

  return score;
}

export const calculateScores = (drivers: Array<Driver>, addresses: Array<Address>): number => {
  let totalScore = 0;
  addresses.forEach((address) => {
    let bestScore = 0;
    let bestIndex = 0;
    for (let index = 0; index < drivers.length; index++) {
      const driver = drivers[index];
      // Only one address per driver
      if ( driver.selectedAddress ) {
        continue;
      }
      let score = calculateScore(driver, address);
      if ( score > bestScore ) {
        bestScore = score;
        bestIndex = index;
      }
    }
    drivers[bestIndex].selectedAddress = address;
    drivers[bestIndex].selectedAddressScore = bestScore;
    totalScore += bestScore;
  });

  return totalScore;
}

/**
 * For when the addresses length is even
 * @param driver
 * @param address
 * @returns number
 */
const calculateEven = (driver: Driver, address: Address): number => {
  return driver.vowels * 1.5;
}

/**
 * For when the addresses length is odd
 * @param driver
 * @param address
 * @returns
 */
const calculateOdd = (driver: Driver, address: Address): number => {
  return driver.consonants; // multiply by 1 but why do that when it's the same number
}