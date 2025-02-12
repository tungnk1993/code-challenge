import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9f7ffb65ea4343e9843a01c21ae71be0");

const tokenAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const tokenAbi = [  
  "function decimals() public view returns (uint8)",
  "function balanceOf(address) view returns (uint)"
];
const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);

const addresses = [
	"0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
	"0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
	"0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];

async function main() {
	let decimalNumber = await Promise.resolve(tokenContract.decimals());
	// console.log(decimalNumber);

	for (let entry of addresses) {
		let balance = await Promise.resolve(tokenContract.balanceOf(entry));
		let formattedBalance = ethers.utils.commify(ethers.utils.formatUnits(balance, decimalNumber));
		console.log(entry, formattedBalance);
	}
};

main();
