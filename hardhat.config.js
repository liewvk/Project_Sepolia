require("@nomicfoundation/hardhat-toolbox");


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "OdsaSzUHAUDxaR4eSQWMSRCK1XrUIG3q";


// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "84df74d70ce37d733f39d70895e92bc4e0d467c2201f77547fae7f2c1f95dd49";


module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: "UK1AZDMMKJXNHXTB53KHJUQB71E4BTIRV8",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

