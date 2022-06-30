require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note script unknown give nation forget treat'; 
let testAccounts = [
"0x0af36ae62965ef49f279b1aa6d8bd2e49edd50310811bbfeb883299c456f841a",
"0x8f2786ae28d4191f6f918f6c465c574c6f40ccf676c59442edaf22681515e1bb",
"0xd2393f7a850a40b076ccce62c5fe0c598604ac822cb05334500e6d08c3943e59",
"0x9d5aa54d7708a11c25bb2296641edafd6baa6b4e2a1e83cb95407ee6f3bcbee0",
"0xd50a64130cfd8ef9deb4dc3b1207da76f5dd3129dc44940bbdb8d4492ad5e3f5",
"0x5feb7a7730c71e31fc12fbfef5836ef7bc6d54645a7b5f7b1f8041f73363d68c",
"0xed2197df5a9f9d9fda10e3da54b5279a4026ea942eef7681c152149959bb3fee",
"0x1a0c2469a6254d7a565416a95b01f324ab57d3fd0fab1631d02e3bb9fa8792b5",
"0x1ef35095a60314994ebd468ab4393104daddd8efae1b2e251fdae02c65ae26f3",
"0x32130f2c022f6bdd50aa896d6b31b150c55a7b059684679eb18aead5186f556e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

