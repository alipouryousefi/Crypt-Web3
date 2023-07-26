// https://eth-sepolia.g.alchemy.com/v2/ryMv0qtXsqOFlXn4PD-ohxki2pwTDgxK

require("@nomicfoundation/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ryMv0qtXsqOFlXn4PD-ohxki2pwTDgxK"
    }
  }
};
