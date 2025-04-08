const Content = require('../models/contentModel');

// Submit content
const submitContent = async (req, res) => {
    const { creatorId, assetData } = req.body;
    const newContent = new Content({ creatorId, assetData });
    await newContent.save();
    res.status(200).json({ message: 'Content submitted successfully' });
};

// Approve content
const approveContent = async (req, res) => {
    const { contentId } = req.params;
    const content = await Content.findById(contentId);
    if (content.status === 'approved') {
        return res.status(400).json({ message: 'Content already approved' });
    }
    content.status = 'approved';
    await content.save();
    res.status(200).json({ message: 'Content approved successfully' });
};

module.exports = { submitContent, approveContent };
