const { ethers } = require('ethers');
const contractAddress = process.env.CONTRACT_ADDRESS;  // Ethereum contract address
const abi = [
    // Replace this comment with the actual ABI JSON of your deployed contract
    {
        "constant": true,
        "inputs": [],
        "name": "exampleFunction",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];  // ABI of the deployed contract

// Setup Ethereum connection using Infura or other RPC providers
const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Function to mint NFTs
const mintNFT = async (userAddress) => {
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.mint(userAddress);
    await tx.wait();
    return tx;
};

module.exports = { mintNFT };
