require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/3HCxLMkEHXMmbc324nxe8GV7Z92puIjU',
      accounts: ['2dd3c09f56df1e5f5f2aff7fdfa38f89d17a0537ffcb94ec074569bb9037d939'],
    },
  },
};