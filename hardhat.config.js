require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC =
  "https://polygon-mumbai.g.alchemy.com/v2/60rvu9HIOq9MegI34H6WERZtuzMnMT-6";
const NEXT_PUBLIC_PRIVATE_KEY =
  "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "matic",
  // networks: {
  //   hardhat: {},
  //   polygon_mumbai: {
  //     url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
  //     accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
  //   },
  // },
};
