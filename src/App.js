import './App.css';
import React, {useEffect, useState} from 'react'
import { init , getOwnBalance, getStakes, addy, stakeIds, stakedDays, stakedHearts, stakeHex} from './ERC20';
import {Popup, Button} from 'semantic-ui-react'
import {Popup as Popup2} from 'reactjs-popup' 



// you already know that literally all of the code possible is going to go in this doc
function App() {
	const [balance, setBalance] = useState(null);
  	const [stakes, setStakes] = useState(null);
  	const [address, setAddress] = useState(null);

	const [shares, setShares] = useState('')
	const [time, setTime] = useState('')
	const [list, setList] = useState(null)




useEffect(() => {
  init()
  fetchList()
  fetchHexBalance()
  fetchStakes()
  fetchAddress()
  
}, [])


const startStake = () => {
	stakeHex(shares,time)
		.then((contract) => {
			console.log(contract);
		})
		.catch((err) => {
			console.log(err);
			alert("Invalid Parameters!")
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

const fetchList = () => {
	stakedDays(0)
		.then((list) => {
			setList(list)
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
		  console.log("ADDY", address)

	  
		}

		
		console.log("What's up", list)

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
		 
		  <div className ='form-control'>
			<label>
			  Address 
			</label>
			<input autoComplete='off' type="text" id="address" defaultValue={address} readOnly /> 
			<Button id='myButton' type="submit" value="ugh" onClick={function() {
			if (document.getElementById("address").hasAttribute("readOnly")) {
				document.getElementById("address").removeAttribute("readOnly");
				document.getElementById("myButton").innerText = "Save Address"}
			else {
				document.getElementById("address").readOnly = true;
				document.getElementById("myButton").innerText = "Edit Address"
			}
		}
		
		}>Edit Address</Button>
			<Popup trigger={<Button>Info</Button>} content={"The reinbursement address for the supplier"} hoverable position="right center"/>
		  </div>
		 
		  
		 
		  <Popup2  trigger={ <button type="submit"> Start Stake </button>} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
			    <div className='container'> 
				<h3>Are you sure the following information is correct</h3>
				<div>
					Shares :: {shares}
				</div>
				<div>
					Time :: {time}
				</div>
				<div>
					Address :: {address}
				</div>

	
				<button position= 'center' onClick={startStake}>Confirm Stake</button>
				</div>
			</Popup2>
		  </form>
		  
		</article>

		<div>
			stake Hearts : {list}
		</div>






		</>


	  };


export default App;