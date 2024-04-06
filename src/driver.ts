import { Address } from 'src/address';
import { vowelCount, consonantCount, getFactors } from "src/util";
// For ease this is here, but should be in a types folder if this project got larger

export type Driver = {
  name: string;
  length: number;
  vowels: number;
  consonants: number;
  selectedAddress: Address | null;
  selectedAddressScore: number;
  factors: Array<number>;
}

export const processDrivers = (drivers: string): Array<Driver> => {
  return drivers.split('\n').map((driver) => {
    driver = driver.trim();
    return {
      name: driver,
      length: driver.length,
      vowels: vowelCount(driver),
      consonants: consonantCount(driver),
      factors: getFactors(driver.length),
      selectedAddress: null,
    }
  });
}