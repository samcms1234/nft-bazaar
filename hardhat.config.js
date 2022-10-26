require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const projectId = 

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.API_KEY}`,
      accounts: [
        `0x${process.env.PRIVATE_KEY}`,
      ],
    },
  },
};