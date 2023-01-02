import Web3 from "web3";
import { abi, address } from "../contract/config";

export const getCurrentAccount = async () =>{
   
  const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
          provider = window.ethereum;
        } else if (window.web3) {
          provider = window.web3.currentProvider;
        } else {
          console.log("You should install Metamask");
        }
        return provider;
      };

      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        return userAccount[0];
      }
}

export const getAbiAddress = async() => {
  const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, address);
    // const Accounts = await web3.eth.getAccounts();
    return contract;
}



