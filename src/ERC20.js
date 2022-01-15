import Web3 from 'web3';
import { HexAddress, erc20Abi} from './config'




let selectedAccount;
let erc20Contract;



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

	// console.log(erc20Contract.methods)



	

};

export const addy = async () => {

	if (!isInitialized) {
		await init();
	}
	return selectedAccount;
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


export const whole_stake = async (number) => {
	if (!isInitialized) {
		await init();
	}
	return erc20Contract.methods
	.stakeLists(selectedAccount,number)
	.call()
	.then((stake) => {
		return stake;
	});
}

export const endStake = async (index,id) => {

	if (!isInitialized) {
		await init();
	}
	return erc20Contract.methods
		.stakeEnd(index,id)
		.send({from:selectedAccount});
}



export const stakeHex = async (shares,days) => {

	if (!isInitialized) {
		await init();
	}
	return erc20Contract.methods
		.stakeStart(shares,days)
		.send({from:selectedAccount});
}












