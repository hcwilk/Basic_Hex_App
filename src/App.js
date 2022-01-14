import './App.css';
import React, {useEffect, useState, Component} from 'react'
import { init , getOwnBalance, getStakes, addy, whole_stake, stakeHex, endStake} from './ERC20';
import {Popup, Button} from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import {FormControl, InputGroup} from 'react-bootstrap';
import { HexAddress } from './config';
import {striped, bordered, hover, Table} from 'react-bootstrap'
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
	stakeHex(shares/1,time/1)
		.then((result) => {
			console.log(result);
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
	for (var i = 0; i < stakes; i++) {
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
		setstakeButton(true);
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
		let Time_Error
		if ((shares >= balance+1||shares === '' || shares===0||shares%1!==0)&&(time >= 5556||time === ''||time===0||time%1!==0)){
			Share_Error = <div>Your proposed staked HEX must be an integer greater than 0 and below {balance}</div>
			Time_Error = <div>Staked Days must be an integer between 0 and 5556 days</div>
			is_Valid = false;
		
		} 
		else if (time >= 5556||time === ''||time%1!==0){
			Time_Error = <div>Staked Days must be an integer between 0 and 5556 days</div>
			Share_Error = <div> </div>
			is_Valid = false;
		} 
		else if (shares >= balance+1||shares === '' || shares===0||shares%1!==0){
			Share_Error = <div> You proposed staked HEX must be an integer greater than 0 and below {balance}</div>
			Time_Error = <div>	 </div>
			is_Valid = false;
		} 
		else {
			Share_Error = <div> You are about to stake {shares/1} HEX </div>
			Time_Error = <div> You are about to stake for {time/1} days </div>

			is_Valid = true;

		}
		let has_Stakes

		if (stakes>=1){
			has_Stakes = true;
		}
		else{
			has_Stakes = false;
		}

		
		
		
		
		return <>
		<header>
			HEX
		</header>

		
		<h2>
			Stake
		</h2>

		<h4>
			Welcome to our HEX Staking Dapp! This is a site where you can stake HEX, 
			see your current stakes, and end stakes. For more information, visit hex.com. 
			We hope you're ready to make a fortune!
		</h4>

		<div className='userInputs'>
			<form1 onSubmit={handleSubmit}>
				
				<p>
					<label>HEX</label>
					<Popup className='popup' trigger={<Button>Info</Button>} content={'Hearts to stake (must be less than '+balance+')'} hoverable position="right center"/>
					<br></br>
					<input className='bigger' type = 'number' max={balance} min='0' placeholder={'HEX to Stake'} value={shares} onChange={(e) => setShares(e.target.value)}/>
				</p>


				<br></br>

				<p>
					<label>Stake Length</label>
					<Popup trigger={<Button>Info</Button>} content={"How long you want to stake your HEX"} hoverable position="right center"/>
					<br></br>
					<input className='bigger' type = 'number' max='5555' min='0' value={time} onChange={(e) => setTime(e.target.value)} placeholder='Days to Stake (1-5555 days)'/>
				</p>

				<br></br>

				<p>
					<label>User Address</label>
					<Popup trigger={<Button>Info</Button>} content={"Always double check that your address is correct"} hoverable position="right center"/>
					<br></br>
					<input className='bigger' autoComplete='off' type="text" id="address" defaultValue={address} readOnly/>
				</p>

				<br></br>

				<button className='stake-button' type='submit' onClick={() => setButton(true)}>Stake</button>

			</form1>
		</div>

		<div className='inputBox'>
			<p> 
				<text1> User Address</text1> <input className='smaller' value={address} readOnly></input>
				<br></br> <br></br>
				<text1> HEX Address</text1> <input className='smaller' value={HexAddress} readOnly></input>
				<br></br> <br></br>
				<text1> HEX to Stake</text1> <input className='smaller' value={shares/1} readOnly></input>
				<br></br> <br></br>
				<text1> Days to Stake</text1> <input className='smaller' value={time/1} readOnly></input>
			</p>
		</div>
		
		<h2>
			Current Stakes
		</h2>

		<h4>
			Here is where you can see a table of your current stakes. Just click the button and you will see them all!
		</h4>

		

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
		
		{ has_Stakes?
		<Table striped bordered hover>
		<thead>
			<tr>
				<th>#</th>
				<th>Stake Id</th>
				<th>HEX Staked</th>
				<th>Staked Days</th>
				<th>Start Day</th>
				<th>End Day</th>
				<th>End Stake</th>
			</tr>
		</thead>
		<tbody>
			
			
			{list_of_stakes.map((stake) => ( <> 
			<tr>

			<td>
			fuck
			</td>
			<td>
				{stake.stakeId}
			</td>
			<td>
				{stake.stakedHearts}
			</td>
			<td>
				{stake.stakedDays}
			</td>
			<td>
				{stake.lockedDay}
			</td>
			<td>
				{+stake.lockedDay + +stake.stakedDays}
			</td>

			


			<button onClick={() => endStake(stake.stakeId-list_of_stakes[0].stakeId,stake.stakeId)}>
				End Stake
			</button>
			</tr>


			
			</>)
		)}
			
		</tbody>
	</Table>:

	<div> YOU have no stakes </div>
		
		}
			
		
		</Popups>
	<button className='stakes-button' onClick={staks}>
		Stakes</button>
		</>
	  };


export default App;
