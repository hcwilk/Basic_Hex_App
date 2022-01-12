import './App.css';
import React, {useEffect, useState} from 'react'
import { init , getOwnBalance, getStakes, addy} from './ERC20';




// you already know that literally all of the code possible is going to go in this doc
function App() {
	const [balance, setBalance] = useState(null);
  	const [stakes, setStakes] = useState(null);
  	const [address, setAddress] = useState(null);
	// const [stake, setStake] = useState(null);

	const [shares, setShares] = useState('')
	const [time, setTime] = useState('')
	const [receiver, setReceiver] = useState('0x2b591e99afe9f32eaa6214f7b7629768c40eeb39')
	const [premium, setPremium] = useState('')



useEffect(() => {
  init()
  fetchHexBalance()
  fetchStakes()
  fetchAddress()
  
}, [])




const fetchAddress = () => {
	addy()
		.then((address) => {
			setAddress(address);
		})
		.catch((err) => {
			console.log(err);
		});
};

// const fetchStake = () => {
// 	viewStake()
// 		.then((stake) => {
// 			setStake(stake)
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };


	const fetchHexBalance = () => {
		getOwnBalance()
			.then((balance) => {
				setBalance(balance/100000000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const fetchStakes = () => {
		getStakes()
		.then((stakes) => {
			setStakes(stakes);
		})
		.catch((err) => {
			console.log(err);
		})
	};
		const handleSubmit = (e) => {
		  e.preventDefault();
		  console.log("SHARES",shares)
		  console.log("TIME", time)
		  console.log("RECEIVER", receiver)
		  console.log("ADDY", address)
		  console.log("PREm", premium)

	  
		}

		

		return <>
	 <div>
	 Your balance is {balance}
	 </div>
	<div> 
	Your address is {address}
	</div>
	<div>
	Your number of stakes is {stakes}
	</div>


		</>
	  };


export default App;