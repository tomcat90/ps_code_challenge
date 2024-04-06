import fs from 'fs';
import path from 'path';
import { resolvePath } from 'src/util';
import { processDrivers } from 'src/driver';
import { processAddresses } from 'src/address';
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

// Calculate the scores
calculateScores(drivers, addresses);

const totalScore = drivers.reduce((acc, driver) => acc + driver.selectedAddressScore, 0);

const finalResults = {
	totalScore,
	drivers: drivers.map(driver => {
		return {
			name: driver.name,
			address: driver.selectedAddress.address,
			score: driver.selectedAddressScore
		}
	})
}

console.log(finalResults);