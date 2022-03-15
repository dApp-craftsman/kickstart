import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6a04e9228Bc5Cf2794F564e5BAEDd41160e487Ca"
);

export default instance;
