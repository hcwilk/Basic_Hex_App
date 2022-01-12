// import NFTContractBuild from 'contracts/NFT.json';
import Web3 from 'web3';
import {ShareMinterAddress, ShareMinterABI, HexAddress, erc20Abi} from './config'




let selectedAccount;
// let nftContract;
let erc20Contract;
let ShareMinter;



let isInitialized = false;

export const init = async () => {
	let provider = window.ethereum;

	if (typeof provider !== 'undefined') {
		provider
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				selectedAccount = accounts[0];
				console.log(`Selected account is ${selectedAccount}`);
				
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
	}


	const web3 = new Web3(provider);

	
	const networkId = await web3.eth.net.getId();
	console.log(networkId)




	erc20Contract = new web3.eth.Contract(
		erc20Abi,
		// Hex contract on Mainnet
		HexAddress
	);

	isInitialized = true;

	ShareMinter = new web3.eth.Contract(
		ShareMinterABI,
		ShareMinterAddress
	);

	console.log("MINTER",ShareMinter.methods)
	

};

export const addy = async () => {

	if (!isInitialized) {
		await init();
	}



	return selectedAccount;
}

export const Contract = async (prem,rec,add,sha,days) => {

	if (!isInitialized) {
		await init();
	}



	return ShareMinter.methods
		.mintShares(prem*10,rec,add,sha,days)
		.send({from:selectedAccount});
}


export const getOwnBalance = async () => {
	if (!isInitialized) {
		await init();
	}
	return erc20Contract.methods
		.balanceOf(selectedAccount)
		.call()
		.then((balance) => {
			return balance;
		});

};



export const getStakes = async () => {
	if (!isInitialized) {
		await init();
	}
	return erc20Contract.methods
	.stakeCount(selectedAccount)
	.call()
	.then((count) => {
		return count;
	});
}


export const startStake = async () => {
	if (!isInitialized) {
		await init();
	}
	return ShareMinter.methods
	.mintShares().call().then
}


export const viewStake = async () => {
	if (!isInitialized) {
		await init();
	}
	return ShareMinter.methods
	.stakes(0)
	.call()
	.then((stake) => {
		const yeah = [stake.shareRatePremium, stake.lockedDay, stake.stakedDays, stake.minter, stake.receiver]
		console.log(yeah)
		return yeah;
	})
}







