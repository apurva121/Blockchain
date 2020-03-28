const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider  = new HDWalletProvider(
    'park soldier judge concert record you pupil come dog fun delay pigeon',
    'https://rinkeby.infura.io/v3/57c73c6a0f62468c92b7999e828fdf56'
);


const web3 =  new Web3(provider);

const deploy = async()=>{
    

    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode,arguments:['Hi there!']})
        .send({gas:'1000000',from:accounts[0]});

    console.log('contract deployed to',result.options.address);
    
};
deploy();