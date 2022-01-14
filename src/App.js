import './App.css';
import React, {useEffect, useState, Component} from 'react'
import { init , getOwnBalance, getStakes, addy} from './ERC20';
import {Popup, Button} from 'semantic-ui-react'
import {Popup as Popup2} from 'reactjs-popup' 
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
		<header>
			HEX
		</header>

		
		<h2>
			Stake
		</h2>

		<h4>
			What's Up Bitches! This is where a sick description of what hex staking is and how much money you can make until you are just filthy rich!!!!
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

				<button className='stake-button' type='submit'>Stake</button>

			</form1>
		</div>

		<div className='inputBox'>
			<p> 
				<text1> User Address</text1> <input className='smaller' value={address} readOnly></input>
				<br></br> <br></br>
				<text1> HEX Address</text1> <input className='smaller' value={HexAddress} readOnly></input>
				<br></br> <br></br>
				<text1> HEX to Stake</text1> <input className='smaller' value={shares} readOnly></input>
				<br></br> <br></br>
				<text1> Days to Stake</text1> <input className='smaller' value={time} readOnly></input>
			</p>
		</div>
		
		<h2>
			Current Stakes
		</h2>

		<h4>
			What's Up Bitches! This is where a sick description of what hex staking is and how much money you can make until you are just filthy rich!!!!
		</h4>

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
				<tr>
					<td>1</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<td>3</td>
					<td colSpan={2}>Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</Table>
		
		</>
	  };


export default App;
