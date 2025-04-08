// src/pages/Marketplace.js
import React, { useEffect, useState, useContext } from 'react';
import { Button, Grid, Card, Typography } from '@mui/material';
import EthereumContext from '../contexts/EthereumContext';

const Marketplace = () => {
  const { contract, walletAddress } = useContext(EthereumContext);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch NFTs from the blockchain (Example: NFT ids or metadata)
    const fetchNFTs = async () => {
      try {
        // Example: Fetch NFTs owned by the user or for sale
        const nftData = [];  // Placeholder: Fetch actual NFT data
        setNfts(nftData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNFTs();
  }, [contract]);

  const handleBuy = async (tokenId) => {
    try {
      // Example function to buy NFT (or interact with smart contract)
      await contract.transferRevenue(tokenId, walletAddress, ethers.utils.parseEther("0.05"));
      alert("NFT purchased!");
    } catch (error) {
      console.error(error);
      alert("Error purchasing NFT");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Typography>Loading NFTs...</Typography>
      ) : (
        <Grid container spacing={4}>
          {nfts.map((nft) => (
            <Grid item xs={12} md={4} key={nft.tokenId}>
              <Card className="p-5 shadow-lg">
                <Typography variant="h6">{nft.name}</Typography>
                <Button onClick={() => handleBuy(nft.tokenId)} variant="contained" color="primary">
                  Buy NFT
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Marketplace;
