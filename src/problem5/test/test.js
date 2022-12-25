const { ethers } = require("ethers");
const contract = require("../build/contracts/utility.json");

const ADDR = "0x4B5ea1EA36124DC0E4a4747246d41704F64BD90E";   // your contract address
const ABI = contract.abi;

const ADDRESS = "0x651c415942afd69ff9b93822ea967298708eae76"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x5ffbac75efc9547fbc822166fed19b05cd5890bb",
	"0x5ffbac75efc9547fbc822166fed19b05cd5890bb"
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("https://goerli.infura.io/v3/9f7ffb65ea4343e9843a01c21ae71be0");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);
	const balances = await contract.getBalances(ADDRESS, TOKENS);

	// for (var row of balances) {
	// 	console.log(row.token, ethers.utils.commify(ethers.utils.formatUnits(row.balance, 18)));
	// }

	return balances;
};

test().then(console.log);