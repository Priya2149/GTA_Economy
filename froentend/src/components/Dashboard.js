// src/components/Dashboard.js
import React, { useState } from "react";
import { Button, TextField, Card, Typography } from "@mui/material";
import { ethers } from "ethers";
import EthereumContext from "../contexts/EthereumContext";
import { useContext } from "react";

const Dashboard = () => {
  const { contract, walletAddress } = useContext(EthereumContext);
  const [assetData, setAssetData] = useState("");
  const [status, setStatus] = useState("");
  const [creatorShare, setCreatorShare] = useState(70); // Example: 70% for the creator

  const handleSubmit = async () => {
    try {
      if (!contract) {
        setStatus("Smart contract not connected.");
        return;
      }

      // Call the mint function of the smart contract to mint the NFT
      const tx = await contract.mint(walletAddress); // Mint NFT for the creator's address
      await tx.wait(); // Wait for the transaction to be confirmed
      setStatus("NFT minted successfully!");
    } catch (error) {
      console.error("Minting failed", error);
      setStatus("Error minting NFT");
    }
  };

  const handleRevenueShare = async () => {
    try {
      // Example: Assuming some revenue sharing model between creator and platform
      const salePrice = ethers.utils.parseEther("0.05"); // Sale price in ETH

      // Transfer a portion of the sale price to the creator's wallet
      const revenueAmount = (salePrice * creatorShare) / 100;
      await contract.transferRevenue(1, walletAddress, revenueAmount); // tokenId: 1 (for example)
      setStatus(`Revenue of ${ethers.utils.formatEther(revenueAmount)} ETH sent to creator.`);
    } catch (error) {
      console.error("Revenue share failed", error);
      setStatus("Error with revenue sharing");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <Card className="p-5 shadow-lg">
        <Typography variant="h6">Submit Your Asset</Typography>
        <TextField
          label="Asset Data"
          variant="outlined"
          fullWidth
          value={assetData}
          onChange={(e) => setAssetData(e.target.value)}
          className="mt-4"
        />
        <Button variant="contained" color="primary" className="mt-5" onClick={handleSubmit}>
          Mint NFT
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="mt-5 ml-4"
          onClick={handleRevenueShare}
        >
          Distribute Revenue
        </Button>
        {status && <Typography variant="body2" color="textSecondary" className="mt-4">{status}</Typography>}
      </Card>
    </div>
  );
};

export default Dashboard;
