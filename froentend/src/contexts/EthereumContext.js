import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";

const EthereumContext = createContext();

export const EthereumProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // Set up the Ethereum provider and signer
  useEffect(() => {
    const initEthereum = async () => {
      if (window.ethereum) {
        const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(ethProvider);

        const signer = ethProvider.getSigner();
        const userAddress = await signer.getAddress();
        setWalletAddress(userAddress);

        // Set up contract interaction
        const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
        const contractABI = [
          "function mint(address to) public",
          "function transferRevenue(uint256 tokenId, address creator, uint256 amount) public",
          "function ownerOf(uint256 tokenId) public view returns (address)",
        ]; // Replace with your contract ABI

        const ethContract = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(ethContract);
      }
    };

    initEthereum();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } else {
      alert("Please install MetaMask to connect!");
    }
  };

  return (
    <EthereumContext.Provider
      value={{
        walletAddress,
        provider,
        contract,
        connectWallet,
      }}
    >
      {children}
    </EthereumContext.Provider>
  );
};

export default EthereumContext;
