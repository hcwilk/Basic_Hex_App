import './App.css';
import React, {useEffect, useState} from 'react'
import { init , getOwnBalance, getStakes, addy, whole_stake, stakeHex, endStake} from './ERC20';
import {Popup, Button} from 'semantic-ui-react'
import Popups from './Components/Popups'


// you already know that literally all of the code possible is going to go in this doc
function App() {
	const [balance, setBalance] = useState(null);
  	const [stakes, setStakes] = useState(null);
  	const [address, setAddress] = useState(null);
	const [shares, setShares] = useState('');
	const [time, setTime] = useState('');
	const [button, setButton] = useState(false);
	const [stakeButton, setstakeButton] = useState(false)
	const [list_of_stakes] = useState([]);
	

useEffect(() => {
  init()
  fetchHexBalance()
  fetchStakes()
  fetchAddress()
  
}, [])

useEffect(() => {
	fetch_stake()
}, [stakes])






const startStake = () => {
	stakeHex(shares,time)
		.then((contract) => {
			console.log(contract);
		})
		.catch((err) => {
			console.log(err);
		});
};

const fetchAddress = () => {
	addy()
		.then((address) => {
			setAddress(address);
		})
		.catch((err) => {
			console.log(err);
		});
};

const fetch_stake = () => {
	console.log("running");
	for (var i = 0; i < stakes; i++) {
		console.log("Yes")
		whole_stake(i)
		.then((stake) => {
			list_of_stakes.push(stake);


			// console.log(stake)
		})
		.catch((err) => {
			console.log(err);
		});
	  }


};


	const fetchHexBalance = () => {
		getOwnBalance()
			.then((balance) => {
				setBalance(balance/100000000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const staks = () => {
		console.log(list_of_stakes)

		setstakeButton(true);
	}

	const end_stake = (index,id) => {
		endStake(index,id)
		.then((follow) => {
			console.log(follow)
		})
		.catch((err) => {
			console.log(err);
		});

	}



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
		}



		let is_Valid=true;

		let Share_Error
		if (shares >= balance+1){
			Share_Error = <div>Your prposed staked HEX exceeds your current balance</div>
			is_Valid = false;
		
		} else if (shares == ''){
			Share_Error = <div> HEX to stake must be greater than 0</div>
			is_Valid = false;
		}
		else {
			Share_Error = <div> You are about to stake {shares} HEX </div>
		}

		let Time_Error
		if (time >= 5556 ){
			Time_Error = <div>Time must be between 0 and 5556 days</div>
			is_Valid = false;
		} 
		else if (time == ''){
			Time_Error = <div> Value must be greater than 0</div>
			is_Valid = false;
		} 
		else {
			Time_Error = <div> You are about to stake for {time} days </div>
		}






		

		return <>
		<br/>
		<br/>
				<h4>
			Your hex balance is {balance}
		</h4>
		<h4>
			Your address is {address}
		</h4>
		<h4>
			Your number of stakes is {stakes}
		</h4>
		<article>
		  <form className='form' onSubmit={handleSubmit}>
		  <div className ='form-control'>
			<label>
			  Hex  
			</label>
			<input 
			type = 'number'
			max={balance}
			min='0'
			id="Shares"
			name='Shares' 

			  value={shares}
			  onChange={(e) => setShares(e.target.value)}/>
			  <Popup trigger={<Button>Info</Button>} content={'Hearts to stake (must be less than '+balance+')'} hoverable position="right center"/>
		  </div>
		  <div className ='form-control'>
			<label>
			  Time : 
			</label>
			<input 
			type = 'number'
			max='5555'
			min='0'
			id="Time" 
			name='Time' 
			value={time}
			placeholder='1-5555 days'
			autoComplete='false'
			
			onChange={(e) => setTime(e.target.value)} />
			<Popup trigger={<Button>Info</Button>} content={"How long you want to stake your HEX"} hoverable position="right center"/>
		  </div>
		 

		  <button onClick={() => 
			  setButton(true)
		  }>Stake</button>
		 
		  
		 
		 
		  </form>
		  
		</article>


		<Popups trigger = {button} setTrigger = {setButton}>
			{
				is_Valid?
				<h3> Verify Your Information </h3>:
				<h3> Invalid Parameters </h3>
			}
			
			<div>
				{Share_Error}
				</div>
				<div>
				{Time_Error}
				</div>


			{ is_Valid?
				<button position= 'center' onClick={startStake}>Confirm Stake</button>:
				""
			}
		</Popups>



		<Popups trigger = {stakeButton} setTrigger = {setstakeButton}>
			{list_of_stakes.map((stake) => ( <> 
				<div>
					Stake ID : {stake.stakeId}
				</div>
				<div>
					Staked Hearts : {stake.stakedHearts}
				</div>
				<div>
					Stake Days : {stake.stakedDays}
				</div>
				<div>
					number in list : {stake.stakeId-list_of_stakes[0].stakeId}
				</div>

				<button onClick={() => endStake(stake.stakeId-list_of_stakes[0].stakeId,stake.stakeId)}>
					End Stake
				</button>

				<br/>
				</>)
			)}
		</Popups>
	<button onClick={staks}>
		Stakes</button>

		</>};


export default App;