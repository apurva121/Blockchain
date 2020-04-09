import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF87cDAc65C5e1E3b89dD5C348Fa8f689ba23DE88'
);
export default instance;