const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assetData: { type: String, required: true },  // Path to asset file or asset description
    status: { type: String, enum: ['submitted', 'approved', 'rejected'], default: 'submitted' },
    nftTokenId: { type: String, default: null },  // Token ID if minted
});

const Content = mongoose.model('Content', contentSchema);
module.exports = Content;
