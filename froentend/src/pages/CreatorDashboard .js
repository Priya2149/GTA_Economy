import React, { useState, useContext } from 'react';
import { Button, TextField, Card, Typography } from '@mui/material';
import axios from 'axios';
import { ethers } from 'ethers';
import EthereumContext from '../contexts/EthereumContext';
// Removed duplicate import of useContext

const CreatorDashboard = () => {
    const { contract, walletAddress } = useContext(EthereumContext);
    const [assetData, setAssetData] = useState('');
    const [status, setStatus] = useState('');
    const [creatorId] = useState('some-creator-id');  // Ideally, this would come from authentication context
    const [creatorShare, setCreatorShare] = useState(70); // Example: 70% for the creator

    // Handle content submission
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/content/submit', {
                creatorId,
                assetData,
            });
            setStatus('Content submitted successfully');
        } catch (error) {
            setStatus('Error submitting content');
        }
    };

    // Handle minting NFTs and revenue sharing
    const handleMintNFT = async () => {
        try {
            if (!contract) {
                setStatus('Smart contract not connected.');
                return;
            }

            // Mint NFT for the creator's wallet
            const tx = await contract.mint(walletAddress);
            await tx.wait();
            setStatus('NFT minted successfully!');
        } catch (error) {
            console.error("Minting failed", error);
            setStatus('Error minting NFT');
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
                <Typography variant="h6">Submit Your Content</Typography>
                <TextField
                    label="Asset Data"
                    variant="outlined"
                    fullWidth
                    value={assetData}
                    onChange={(e) => setAssetData(e.target.value)}
                    className="mt-4"
                />
                <Button variant="contained" color="primary" className="mt-5" onClick={handleSubmit}>
                    Submit
                </Button>
                {status && <Typography variant="body2" color="textSecondary" className="mt-4">{status}</Typography>}
            </Card>

            <Card className="p-5 shadow-lg mt-10">
                <Typography variant="h6">Mint Your NFT</Typography>
                <Button variant="contained" color="primary" className="mt-5" onClick={handleMintNFT}>
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

export default CreatorDashboard;
