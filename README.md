# ps_code_challenge

## The assumptions made:
- Street is using the entire address line
- The amount of addresses and drivers are equal
- The files are not empty

## How to build and run
- Node js version 20 is what it was built on
- Clone the repo
- Run yarn
- Run yarn build
- Run yarn process AddressFileName DriverFileName

## Alternative build run
- Clone repo
- Run yarn
- Run yarn test ( This will build the repo and run the process against the included address and driver file)

## Some notes
Alright so I reworked the solution. Basically because the order in which the addresses are processed will determine the final score. So in the beginning of the logic I create a permutation of every possible order of the included addresses. Then iterate of them to find the max possible score based on the addresses.