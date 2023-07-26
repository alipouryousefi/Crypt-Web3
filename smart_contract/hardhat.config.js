// https://eth-sepolia.g.alchemy.com/v2/ryMv0qtXsqOFlXn4PD-ohxki2pwTDgxK

require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ryMv0qtXsqOFlXn4PD-ohxki2pwTDgxK",
      accounts: ["825584cf4694835d43c4318cbbfcfdb00865bc819cf7c63fefe650f0d50a4f2f"]
    }
  }
};
