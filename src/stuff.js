
  const [balance, setBalance] = useState(null);
  const [stakes, setStakes] = useState(null);
  const [address, setAddress] = useState(null);
  const [stakeinfo, setStakeInfo] = useState([]);
  const [testing, setTesting] = useState('yes');



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

	const changeTesting = () =>{
		console.log(testing)
		if(testing == 'yes'){
			setTesting('no');
		}
		else{
			setTesting('yes');
		}
	};

  
	const descs = [
		{
			id: 1,
			name: 'Shares',
			description: 'Shares to stake',
			box: 'Shares to stake (must be less than your current balance of '+balance+')'
		},
		{
			id: 2,

			name: 'Receiver',
			description: 'Contact to receive newly minted stake',
			box: 'Receiver Address'
		},
		{
			id: 3,

			name: 'Supplier',
			description: 'The Reinbursement address for the supplier',
			box: address 
		},
		{
			id: 4,

			name: 'Time',
			description: 'How long the recipient wants to stake HEX',
			box: 'Length of Stake'
		},
		{
			id: 5,

			name: 'Premium',
			description: 'What percentage of the T-shares the recipient will keep as a premium',
			box: '0-99.9%'
		}
	]

	function InputList(){
		return(<>
		{descs.map((input) => {
			return(
			<Input key={input.id} input={input}/>
			)
		
		})}
	  </>);
	  }
	

	const Input = (props) =>{
		const {name, description, box} = props.input
		if (name !== 'Supplier')
			return ( <> 
				<h2>{name}   <Popup trigger={<Button>Info</Button>} content={description} hoverable position="right center"/></h2>
				<input autoComplete='off' type="text" id="myText" placeholder={box} style={{width: "400px"}}/>
				</>
		)
		else {
			return ( <> 
				<h2>{name}   <Popup trigger={<Button>Info</Button>} content={description} hoverable position="right center"/></h2>
				<input autoComplete='off' type="text" id="supplier" defaultValue={box} readOnly style={{width: "300px"}}/> <Button id='myButton' type="submit">Edit Supplier</Button>
				</>
		)
		}
	}


	//function editSupplier() {
	//	document.getElementById("supplier").removeAttribute('readonly');
	//}

	//window.onload = function() {
	//	document.getElementById('myButton').onclick = function() {
	//		document.getElementById('myInput').removeAttribute('readonly');
	//		console.log('is this working');
	//	};
	//}

	return (
    
		<div className="App">
               <h1>
		Hello from the Hexico Development Team! Now deployed 
        </h1>
			{/* <h2>Your number of current stakes is {stakes} <br/> Your Hex balance is {balance} HEX  <br/> Your connected Address is {address}</h2> */}
			<InputList/>
			<br/>
			<br/>

			<Popup2 trigger={<button> Stake </button>} position="bottom center">
				<h3>Are you sure the following information is correct</h3>
				<div>
					Address :: {address}
				</div>
				<div>
					Shares :: SHARES
				</div>
				<div>
					Premium :: Premium
				</div>
				<div>
					Time :: TIME
				</div>
				<button position= 'center'>Confirm Stake</button>
			</Popup2>

			<br/> <br/>
			<button type = 'button' onClick={changeTesting}>
				press me
			</button>
			<br/>
			{testing}



		{/* 
    <h3>Shares to stake (Your Hex balance is {balance} HEX) <br/>Shares: <input autocomplete="off" type="text" id="myText" placeholder="Shares to Stake"/></h3>
	 
	<p> Description: The contract to receive the newly minter shares <br/> Receiver: <input autocomplete="off" type="text" id="myText" placeholder="Receiver Address"/></p>
	<p> Description: The reimbursement address for the supplies <br/> Supplier: <input autocomplete="off" type="text" id="myText" placeholder="Supplier Address"/></p>
	<p> Description: How long the recipient wants to stake HEX for <br/> Time: <input autocomplete="off" type="text" id="myText" placeholder="Length of Stake (in Days)"/></p>
    <p> Description: What percentage of the T-Shares the recipient will keep as a premium<br/> Premium: <input autocomplete="off" type="text" id="myText" placeholder="0-99.9%"/> </p>
    <p id="demo"></p> */}


		</div>
	);