# 🪙 GTA_Economy – Creator-Economy NFT Platform (Exploratory Project)

**GTA_Economy** is a full-stack proof-of-concept for a creator-economy NFT marketplace.  
The goal is to enable content or mod creators to tokenize digital assets as NFTs, manage ownership, and share revenue transparently on-chain.

---

## Tech Stack

### Frontend
- **React (JavaScript, Create React App)**
- Context API for wallet and contract state (`EthereumContext.js`)
- Modular UI components (`Dashboard.js`, `MenuBar.js`)

### Backend
- **Node.js / Express**
- RESTful APIs with modular structure (`controllers`, `routes`, `models`)
- **PostgreSQL** for persistent storage

### Blockchain Layer
- **Ethers.js** for blockchain interaction and smart-contract integration
- Connected to external **Solidity contracts** for NFT minting and revenue-sharing (contract source not included in this repository)
- **MetaMask** wallet connectivity for user authentication and transaction signing
- Blockchain configuration handled in `backend/config/blockchain.js`

---

## Features Implemented

- Modular backend architecture with `controllers`, `services`, and `models`
- Smart contract interaction via `Ethers.js` (`mint`, `transferRevenue`, `ownerOf`)
- React Context provider for wallet connectivity and contract state
- API routes for content management and marketplace endpoints
- Dockerized development environment

---

## Planned / Future Work

- Deploy external Solidity contract to Ethereum testnet (Goerli/Sepolia)
- Add NFT metadata upload and minting UI
- Build creator dashboard for analytics and royalty tracking
- Implement unit and integration testing (Jest / Hardhat)
  
---

## Architecture Overview
```
GTA_Economy/
│
├── backend/
│   ├── config/
│   │   ├── blockchain.js
│   │   └── db.js
│   ├── controllers/
│   │   └── contentController.js
│   ├── models/
│   │   ├── contentModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── contentRoutes.js
│   │   └── marketplaceRoutes.js
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── marketplaceService.js
│   │   └── revenueSharing.js
│   └── server.js
│
└── frontend/
    ├── public/
    └── src/
        ├── components/
        │   ├── Dashboard.js
        │   └── MenuBar.js
        ├── contexts/
        │   └── EthereumContext.js
        ├── pages/
        ├── App.js
        ├── App.css
        ├── index.js
        └── setupTests.js
```
---

## Project Status

**Status:** In-progress, currently paused after implementing backend scaffolding and Ethereum smart-contract integration.  

This repository is shared publicly to demonstrate full-stack and blockchain engineering skills.

**Note:** This is an educational, exploratory prototype — not affiliated with or based on any commercial game IP.
