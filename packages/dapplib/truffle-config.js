require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad hunt hero flock tackle'; 
let testAccounts = [
"0x76479a2a2788d7e50f43f2b8a1efbefed0828414b3b70f61d2f810706eff3b05",
"0xa81212f5fc255fd8662ad4f2eb046329b77bdc179c36d1492643830be9da0f2a",
"0x986211c545ee7ea933d350d465326bd37845c161cef837ec3d9c1c2526aa06da",
"0x3a45ea5b52bc96307d9a4ef64f3d99fc2d974b7596685a5f8e94c7b2417f5b36",
"0xa59ae49230984307c126f96bf76dd3e105e27063cf8855f9efd9a11484b94ecc",
"0x2d325bb8fa34f8fee0eecfd22954ef02d10d9f5c37f2e833bdca211cb1813f9e",
"0xb3825e53aa00d1d9b2c203496fa4508856add424138c9ea3b0d7f985b00cf930",
"0x2107347121a1e032e980a45bb733405f2276ac35aa702975170376d2c4da0567",
"0x6c64c795e37cc67bf821870bada0571c61f854e0be2c1dba67c840211745a0a2",
"0x670cabd8bc477d59be3fac02a321f71fe5de8c175bcb373ec697cf0b181cd8d0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

