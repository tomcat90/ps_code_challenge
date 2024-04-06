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
The solution is pretty crude. I'm just looking at the max score for each address against the drivers. Once a driver is assigned the driver is not consider again. This will NOT guarantee the best max score. To get the best max score is actually an NP problem. As to get the best score you'd need to test each driver/address combination against every other driver/address combination. This would obviously fail pretty fast once you got to even a moderate size of drivers and address. A potential solution I started on would be to do local batches. IE take 3 drivers figure out the local max score for the 3 drivers and then do batches like that until you ran out of drivers. The batch size could be adjusted to increase accuracy, with the downside of time complexity. Writing that solution though was very time consuming and for a programming test I opted to stick to the simpler solution.