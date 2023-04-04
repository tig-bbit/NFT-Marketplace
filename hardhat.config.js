require("@nomicfoundation/hardhat-toolbox");

NEXT_PUBLIC_MUMBAI_RPC =
  "https://polygon-mumbai.g.alchemy.com/v2/60rvu9HIOq9MegI34H6WERZtuzMnMT-6";
const MUMBAI_PRIVATE_KEY =
  "94d1ec3c84afdd656637773ab3a8656793b79cfd5cec762fff12a27004b9cf1b";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_MUMBAI_RPC,
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`],
    },
  },
}
