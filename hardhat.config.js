require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/7013361a04c0431aa48897f6f5ba8255",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    mumbai: {
      url: "https://goerli.infura.io/v3/7013361a04c0431aa48897f6f5ba8255",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    private_v1: {
      url: "https://goerli.infura.io/v3/7013361a04c0431aa48897f6f5ba8255",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    private_v2: {
      url: "https://goerli.infura.io/v3/7013361a04c0431aa48897f6f5ba8255",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    optimism: {
      url: "https://goerli.infura.io/v3/7013361a04c0431aa48897f6f5ba8255",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: "CZ81EG9F7AA6K7XR9JI1U9S3EV45NCKJB9",
  },
};
