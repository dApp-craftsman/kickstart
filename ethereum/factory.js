import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xaAef271CFFcd3A42a3E94742318c6DFD5933cc57"
);

export default instance;
