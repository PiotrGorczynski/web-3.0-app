
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/QxLnFa2jPPjKwzWkLkCBfUoEYZbYxc-y',
      accounts: ['d95959dcd39ba304dfd0dca92cc7509dbd7183fce9d1e10e5e6101f2e02e33a2'],
    },
  },
};