const { mintNFT } = require('../config/blockchain');  // Blockchain minting logic

// Mint NFT when content is approved
const mintApprovedNFT = async (contentId) => {
    const content = await Content.findById(contentId);
    if (content.status !== 'approved') {
        throw new Error('Content is not approved');
    }

    // Mint NFT
    const tx = await mintNFT(content.creatorId);  // Mint NFT for the creator's address
    content.nftTokenId = tx.hash;  // Store the token ID from the transaction
    await content.save();
    return tx;
};

module.exports = { mintApprovedNFT };
