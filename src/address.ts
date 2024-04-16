import { getFactors } from "src/util";

export type Address = {
  address: string;
  addressLength: number;
  factors: Array<number>;
}

export const processAddresses = (addresses: string): Array<Address> => {
  return addresses.split('\n').map((address) => {
    address = address.trim();
    return {
      address,
      addressLength: address.length,
      factors: getFactors(address.length)
    }
  });
}
export const generateAddressPermutations = (arr: Array<Address>): Array<Array<Address>> => {
  const result: Array<Array<Address>> = [];

  function backtrack(start: number) {
    if (start === arr.length) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      // Swap elements
      [arr[start], arr[i]] = [arr[i], arr[start]];

      // Recursively generate permutations for the remaining elements
      backtrack(start + 1);

      // Revert the swap
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }

  backtrack(0);
  return result;
}