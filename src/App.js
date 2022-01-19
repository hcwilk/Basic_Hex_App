import './App.css';
import React, {useEffect, useState} from 'react'
import { init , getOwnBalance, getStakes, addy, whole_stake, stakeHex, endStake} from './ERC20';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import { HexAddress } from './config';
import {Table} from 'react-bootstrap'
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
	const [stakeButton1, setstakeButton1] = useState(false)
	const [stakeButton2, setstakeButton2] = useState(false)
	const [stakeButton3, setstakeButton3] = useState(false)

	const [list_of_stakes] = useState([]);



useEffect(() => {
  init()
  fetchHexBalance()
  fetchStakes()
  fetchAddress()
  
}, [])

useEffect(() => {
	const fetch_stake = () => {
		for (var i = 0; i < stakes; i++) {
			whole_stake(i)
			.then((stake) => {
				list_of_stakes.push(stake);
	
			})
			.catch((err) => {
				console.log(err);
			});
		  }
		//   console.log("testing")
	};
	fetch_stake()
}, [stakes]) // eslint-disable-line react-hooks/exhaustive-deps

const startStake = () => {
	setButton(false);
	stakeHex(shares*100000000/1,time/1)
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

		var dec1_miliseconds = 18232*60*60*24*1000;


		// var d=new Date();
		// console.log(d.getTime()/(1000*60*60*24));
		// var date = new Date(dec1_miliseconds)
		// console.log("december please", date)


		const dates = (miliseconds) => {
			var date = new Date(miliseconds);
			return (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
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
					<button onClick={() => setstakeButton1(true)}>Info</button>
					<Popups trigger={stakeButton1} setTrigger={setstakeButton1}>
						Hex to stake (must be less than {balance})
					</Popups>
					<br></br>
					<input className='bigger' type = 'number' max={balance} min='0' placeholder={'1-'+balance+' Hex'} value={shares} onChange={(e) => setShares(e.target.value)}/>
				</p>


				<br></br>

				<p>
					<label>Stake Length</label>
					<button onClick={() => setstakeButton2(true)}>Info</button>
					<Popups trigger={stakeButton2} setTrigger={setstakeButton2}>
						The number of days you want to lock your HEX, must be between 0 and 5556 days
					</Popups>					<br></br>
					<input className='bigger' type = 'number' max='5555' min='0' value={time} onChange={(e) => setTime(e.target.value)} placeholder='1-5555 days'/>
				</p>

				<br></br>

				<p>
					<label>User Address</label>
					<button onClick={() => setstakeButton3(true)}>Info</button>
					<Popups trigger={stakeButton3} setTrigger={setstakeButton3}>
						The address where the HEX being staked is coming from (This should be your address!)
					</Popups>					<br></br>
					<input className='bigger' autoComplete='off' type="text" id="address" defaultValue={address} readOnly/>
				</p>

				<br></br>

				<button className='stake-button' type='submit' onClick={() => setButton(true)}>Stake</button>

			</form1>
		</div>

		<div className='inputBox'>
			<form2>
				<p> 
					<br></br>
					<text1> HEX Contract </text1> <input value={HexAddress} readOnly></input>
					<br></br> <br></br>
					<text1> User Address</text1> <input value={address} readOnly></input>
					<br></br><br></br>
					<text1> HEX to Stake</text1> <input value={shares/1} readOnly></input>
					<br></br> <br></br>
					<text1> Days to Stake</text1> <input value={time/1} readOnly></input>
					<br></br> <br></br>
				</p>
			</form2>
		</div>
		
		<h2>
			Current Stakes
		</h2>

		<h4>
			Here is where you can see a table of your current stakes. 
			Just click the button and you will see them all! (If you 
			don't have any, try starting one)
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
				<th>Start Date</th>
				<th>End Date</th>
				<th>End Stake</th>
			</tr>
		</thead>
		<tbody>
			
			
			{list_of_stakes.sort((a, b) => a.stakeId > b.stakeId ? 1:-1).map((stake, index) => ( 
			<> 
			<tr>

			<td>
			{index}
			</td>
			<td>
				{stake.stakeId}
			</td>
			<td>
				{stake.stakedHearts/100000000}
			</td>
			<td>
				{stake.stakedDays}
			</td>
			<td>
				{dates(dec1_miliseconds+(stake.lockedDay)*24*60*60*1000)}
				{}

			</td>
			<td>
				{dates(dec1_miliseconds+(+stake.lockedDay + +stake.stakedDays)*24*60*60*1000)}
			</td>

			<button onClick={() => 
				endStake(index,stake.stakeId)
				}>
				End Stake
			</button>
			</tr>

			</>)
		)}
			
		</tbody>
	</Table>:

	<div> You currently don't have any stakes! </div>
		
		}
			
		
		</Popups>
	<button className='stakes-button' onClick={staks}>
		Stakes</button>
		</>
	  };

export default App;
