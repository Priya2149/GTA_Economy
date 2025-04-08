const express = require('express');
const router = express.Router();
const { sellNFT } = require('../services/marketplaceService');

// Sell NFT
router.post('/sell/:contentId', async (req, res) => {
    const { contentId } = req.params;
    try {
        const transaction = await sellNFT(contentId); // Sell the NFT
        res.status(200).json({ message: 'NFT listed for sale', transaction });
    } catch (error) {
        res.status(500).json({ message: 'Error listing NFT for sale', error });
    }
});

module.exports = router;
