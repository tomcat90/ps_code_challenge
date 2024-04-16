import fs from 'fs';
import path from 'path';
import { resolvePath } from 'src/util';
import { processDrivers, deepCopy } from 'src/driver';
import { processAddresses, generateAddressPermutations } from 'src/address';
import { calculateScores } from 'src/route';

// load the files
let [, , addressPath, driverPath] = process.argv;


if ( !addressPath || !driverPath ) {
	console.log("Please provide two files ");
	process.exit(1);
}

// handles relatives paths
addressPath = resolvePath(addressPath);
driverPath = resolvePath(driverPath);

const addressesStr = fs.readFileSync(path.resolve(__dirname, addressPath), 'utf-8');
const driversStr = fs.readFileSync(path.resolve(__dirname, driverPath), 'utf-8');

const drivers = processDrivers(driversStr);

const addresses = processAddresses(addressesStr);

// Generates an array of all possible permutations of the addresses
const addressPerm = generateAddressPermutations(addresses);

let bestDrivers = [];
let bestScore = 0;

// Find the max best score across all address permutations
for (let addressSet of addressPerm) {
	const driversCopy = deepCopy(drivers);
	const score = calculateScores(driversCopy, addressSet);
	if ( score > bestScore ) {
		bestScore = score;
		bestDrivers = driversCopy;
	}
}

// Format the results
const finalResults = {
	totalScore: bestScore,
	drivers: bestDrivers.map(driver => {
		return {
			name: driver.name,
			address: driver.selectedAddress.address,
			score: driver.selectedAddressScore
		}
	})
}

console.log(finalResults);