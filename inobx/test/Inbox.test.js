const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);
const {interface, bytecode} = require('../compile');
/* dummy understanding of mocha testing framework
class Car{
    park(){
        return 'stopped';
    }
    drive(){
        return 'vroom';
    }
}
let car;
beforeEach(()=>{
   car  = new Car();
});

describe('Car Class ',()=>{

    it('can park',()=>{
        assert.equal(car.park(),'stopped');
    });

    it('can drive',()=>{
        assert.equal(car.drive(),'vroom');
    });
});
*/
let accounts;
let inbox;

beforeEach(async ()=>{
    //get a list of all accounts
    accounts = await web3.eth.getAccounts();
    //use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode, arguments:['Hi there!']})
        .send({from:accounts[0], gas:'1000000'});

});

describe('Inbox',()=>{
    it('deploys a contract',()=>{
        assert.ok(inbox.options.address);
    });

    it('has a default message',async()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message,'Hi there!');
    });

    it('can change the message',async ()=>{
        await inbox.methods.setMessage('Bye!').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message,'Bye!');
    });
});