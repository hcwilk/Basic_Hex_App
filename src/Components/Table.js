import React, {useEffect, useState} from 'react'
import './Popups.css'
import {whole_stake, endStake} from '../ERC20';
import {Table} from 'react-bootstrap'



function Tables() {
	const [list_of_stakes] = useState([]);
	var dec1_miliseconds = 18232*60*60*24*1000;
	
	const dates = (miliseconds) => {
		var date = new Date(miliseconds);
		return (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
	}

	  useEffect(() => {
		for (var i = 0; i < 100
			; i++) {
			whole_stake(i)
			.then((stake) => {
				list_of_stakes.push(stake);
				console.log("two???")})};
	  }, [])

    return  (<>
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
	</Table>
		</> ) 
}

export default Tables