// Sample revenue share logic between platform, creator, and Rockstar
const calculateRevenue = (salePrice) => {
    const creatorShare = 0.70 * salePrice;  // 70% for the creator
    const rockstarShare = 0.20 * salePrice; // 20% for Rockstar
    const platformShare = 0.10 * salePrice; // 10% for the platform
    return { creatorShare, rockstarShare, platformShare };
};

module.exports = { calculateRevenue };
