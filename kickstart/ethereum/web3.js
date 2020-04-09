import Web3 from 'web3';
let web3;

if (typeof window !== 'undefined' && window.web3!=='undefined'){
    //We are in the browser and metamask is running

    web3 = new Web3(window.web3.currentProvider);
}else{
    //we are not on the browswer OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/57c73c6a0f62468c92b7999e828fdf56'
    );
    web3 = new Web3(provider);
}
export default web3;