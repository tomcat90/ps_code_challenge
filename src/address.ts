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