



export const ShareMinterAddress = '0xe89caA7B7E4CD6CDD6a0bd33b3b4Eec7068a8f85'
export const HexAddress = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39'

export const erc20Abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data1",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "bytes20",
        "name": "btcAddr",
        "type": "bytes20"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "claimToAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
      }
    ],
    "name": "Claim",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data2",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "senderAddr",
        "type": "address"
      }
    ],
    "name": "ClaimAssist",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "updaterAddr",
        "type": "address"
      }
    ],
    "name": "DailyDataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      }
    ],
    "name": "ShareRateChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data1",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "stakerAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      }
    ],
    "name": "StakeEnd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data1",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "stakerAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "senderAddr",
        "type": "address"
      }
    ],
    "name": "StakeGoodAccounting",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "stakerAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      }
    ],
    "name": "StakeStart",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "memberAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "entryId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
      }
    ],
    "name": "XfLobbyEnter",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "memberAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "entryId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
      }
    ],
    "name": "XfLobbyExit",
    "type": "event"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "allocatedSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "rawSatoshis",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "proof",
        "type": "bytes32[]"
      },
      {
        "internalType": "address",
        "name": "claimToAddr",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "pubKeyX",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "pubKeyY",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "claimFlags",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "autoStakeDays",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
      }
    ],
    "name": "btcAddressClaim",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes20",
        "name": "",
        "type": "bytes20"
      }
    ],
    "name": "btcAddressClaims",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes20",
        "name": "btcAddr",
        "type": "bytes20"
      },
      {
        "internalType": "uint256",
        "name": "rawSatoshis",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "proof",
        "type": "bytes32[]"
      }
    ],
    "name": "btcAddressIsClaimable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes20",
        "name": "btcAddr",
        "type": "bytes20"
      },
      {
        "internalType": "uint256",
        "name": "rawSatoshis",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "proof",
        "type": "bytes32[]"
      }
    ],
    "name": "btcAddressIsValid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "claimToAddr",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "claimParamHash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "pubKeyX",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "pubKeyY",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "claimFlags",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "claimMessageMatchesSignature",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "currentDay",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "dailyData",
    "outputs": [
      {
        "internalType": "uint72",
        "name": "dayPayoutTotal",
        "type": "uint72"
      },
      {
        "internalType": "uint72",
        "name": "dayStakeSharesTotal",
        "type": "uint72"
      },
      {
        "internalType": "uint56",
        "name": "dayUnclaimedSatoshisTotal",
        "type": "uint56"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "beginDay",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endDay",
        "type": "uint256"
      }
    ],
    "name": "dailyDataRange",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "list",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "beforeDay",
        "type": "uint256"
      }
    ],
    "name": "dailyDataUpdate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "globalInfo",
    "outputs": [
      {
        "internalType": "uint256[13]",
        "name": "",
        "type": "uint256[13]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "globals",
    "outputs": [
      {
        "internalType": "uint72",
        "name": "lockedHeartsTotal",
        "type": "uint72"
      },
      {
        "internalType": "uint72",
        "name": "nextStakeSharesTotal",
        "type": "uint72"
      },
      {
        "internalType": "uint40",
        "name": "shareRate",
        "type": "uint40"
      },
      {
        "internalType": "uint72",
        "name": "stakePenaltyTotal",
        "type": "uint72"
      },
      {
        "internalType": "uint16",
        "name": "dailyDataCount",
        "type": "uint16"
      },
      {
        "internalType": "uint72",
        "name": "stakeSharesTotal",
        "type": "uint72"
      },
      {
        "internalType": "uint40",
        "name": "latestStakeId",
        "type": "uint40"
      },
      {
        "internalType": "uint128",
        "name": "claimStats",
        "type": "uint128"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "merkleLeaf",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32[]",
        "name": "proof",
        "type": "bytes32[]"
      }
    ],
    "name": "merkleProofIsValid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "pubKeyX",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "pubKeyY",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "claimFlags",
        "type": "uint8"
      }
    ],
    "name": "pubKeyToBtcAddress",
    "outputs": [
      {
        "internalType": "bytes20",
        "name": "",
        "type": "bytes20"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "pubKeyX",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "pubKeyY",
        "type": "bytes32"
      }
    ],
    "name": "pubKeyToEthAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "stakerAddr",
        "type": "address"
      }
    ],
    "name": "stakeCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "stakeIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint40",
        "name": "stakeIdParam",
        "type": "uint40"
      }
    ],
    "name": "stakeEnd",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "stakerAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "stakeIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint40",
        "name": "stakeIdParam",
        "type": "uint40"
      }
    ],
    "name": "stakeGoodAccounting",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "stakeLists",
    "outputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "internalType": "uint72",
        "name": "stakedHearts",
        "type": "uint72"
      },
      {
        "internalType": "uint72",
        "name": "stakeShares",
        "type": "uint72"
      },
      {
        "internalType": "uint16",
        "name": "lockedDay",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "stakedDays",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "unlockedDay",
        "type": "uint16"
      },
      {
        "internalType": "bool",
        "name": "isAutoStake",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newStakedHearts",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newStakedDays",
        "type": "uint256"
      }
    ],
    "name": "stakeStart",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "xfLobby",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
      }
    ],
    "name": "xfLobbyEnter",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "memberAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "entryId",
        "type": "uint256"
      }
    ],
    "name": "xfLobbyEntry",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "rawAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "enterDay",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "name": "xfLobbyExit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "xfLobbyFlush",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "xfLobbyMembers",
    "outputs": [
      {
        "internalType": "uint40",
        "name": "headIndex",
        "type": "uint40"
      },
      {
        "internalType": "uint40",
        "name": "tailIndex",
        "type": "uint40"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "memberAddr",
        "type": "address"
      }
    ],
    "name": "xfLobbyPendingDays",
    "outputs": [
      {
        "internalType": "uint256[2]",
        "name": "words",
        "type": "uint256[2]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "beginDay",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endDay",
        "type": "uint256"
      }
    ],
    "name": "xfLobbyRange",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "list",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export const ShareMinterABI=
    [
      
        {
          "inputs": [
            {
              "internalType": "contract IHEX",
              "name": "_hex",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint40",
              "name": "stakeId",
              "type": "uint40"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "caller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint72",
              "name": "hearts",
              "type": "uint72"
            }
          ],
          "name": "MintEarnings",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint40",
              "name": "stakeId",
              "type": "uint40"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "data0",
              "type": "uint256"
            }
          ],
          "name": "MintShares",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "heartsWithdrawn",
              "type": "uint256"
            }
          ],
          "name": "MinterWithdraw",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "hexContract",
          "outputs": [
            {
              "internalType": "contract IHEX",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "stakeIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint40",
              "name": "stakeId",
              "type": "uint40"
            }
          ],
          "name": "mintEarnings",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint16",
              "name": "shareRatePremium",
              "type": "uint16"
            },
            {
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "supplier",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "newStakedHearts",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newStakedDays",
              "type": "uint256"
            }
          ],
          "name": "mintShares",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "minterHeartsOwed",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minterWithdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint40",
              "name": "",
              "type": "uint40"
            }
          ],
          "name": "stakes",
          "outputs": [
            {
              "internalType": "uint16",
              "name": "shareRatePremium",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "lockedDay",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "stakedDays",
              "type": "uint16"
            },
            {
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ] 

export const shareMarketABI=
[
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_hex",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_minter",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "heartsEarned",
        "type": "uint256"
      }
    ],
    "name": "AddEarnings",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "supplier",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      }
    ],
    "name": "AddListing",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "data1",
        "type": "uint256"
      }
    ],
    "name": "BuyShares",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "claimer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "heartsClaimed",
        "type": "uint256"
      }
    ],
    "name": "ClaimEarnings",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "supplier",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "heartsWithdrawn",
        "type": "uint256"
      }
    ],
    "name": "SupplierWithdraw",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "internalType": "address",
        "name": "shareReceiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "sharesPurchased",
        "type": "uint256"
      }
    ],
    "name": "buyShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      }
    ],
    "name": "claimEarnings",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "hexContract",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      }
    ],
    "name": "listingBalances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "hearts",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      }
    ],
    "name": "listingEarnings",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "heartsEarned",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sharesTotal",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minterContract",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint40",
            "name": "stakeId",
            "type": "uint40"
          },
          {
            "internalType": "uint256",
            "name": "sharesPurchased",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "shareReceiver",
            "type": "address"
          }
        ],
        "internalType": "struct ShareMarket.ShareOrder[]",
        "name": "orders",
        "type": "tuple[]"
      }
    ],
    "name": "multiBuyShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "internalType": "uint72",
        "name": "heartsEarned",
        "type": "uint72"
      }
    ],
    "name": "onEarningsMinted",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "internalType": "address",
        "name": "supplier",
        "type": "address"
      },
      {
        "internalType": "uint72",
        "name": "stakedHearts",
        "type": "uint72"
      },
      {
        "internalType": "uint72",
        "name": "stakeShares",
        "type": "uint72"
      }
    ],
    "name": "onSharesMinted",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "",
        "type": "uint40"
      }
    ],
    "name": "shareEarnings",
    "outputs": [
      {
        "internalType": "uint72",
        "name": "sharesTotal",
        "type": "uint72"
      },
      {
        "internalType": "uint72",
        "name": "heartsEarned",
        "type": "uint72"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "",
        "type": "uint40"
      }
    ],
    "name": "shareListings",
    "outputs": [
      {
        "internalType": "uint72",
        "name": "sharesBalance",
        "type": "uint72"
      },
      {
        "internalType": "uint72",
        "name": "heartsBalance",
        "type": "uint72"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "sharesOwned",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      },
      {
        "internalType": "address",
        "name": "supplier",
        "type": "address"
      }
    ],
    "name": "supplierHeartsPayable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint40",
        "name": "stakeId",
        "type": "uint40"
      }
    ],
    "name": "supplierWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]