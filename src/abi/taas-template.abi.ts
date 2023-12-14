export const TokenAsAServiceAbi = [{"inputs":[{"internalType":"bool","name":"isTemplate","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"uint256","name":"actual","type":"uint256"}],"name":"InitialSupplyPercentInvalidError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"InterfaceNotSupportedError","type":"error"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"TransactionInvalidError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"AUTOVALID_TRANSACTION_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUTOVALID_WALLET_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TAX_TOKENOMICS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"walletOrContract","type":"address"}],"name":"canAccessFromDeployer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"inflation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"address","name":"dynamicTokenomics","type":"address"},{"internalType":"address","name":"inflationTokenomics","type":"address"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"},{"internalType":"uint256","name":"initialSupplyPercent","type":"uint256"},{"internalType":"address","name":"ownershipNftCollection","type":"address"},{"internalType":"uint256","name":"_ownershipTokenId","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwnedByNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadataUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownershipCollection","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownershipTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenomics","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
export type TokenAsAServiceAbiFunctional = {"AUTOVALID_TRANSACTION_SIZE_PERCENT":{"inputs":[],"name":"AUTOVALID_TRANSACTION_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"AUTOVALID_WALLET_SIZE_PERCENT":{"inputs":[],"name":"AUTOVALID_WALLET_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"MAX_TAX_TOKENOMICS":{"inputs":[],"name":"MAX_TAX_TOKENOMICS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"allowance":{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"owner":"address","spender":"address"},"returnSignature":{"0":"uint256"}},"approve":{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","argumentSignature":{"spender":"address","amount":"uint256"},"returnSignature":{"0":"bool"}},"balanceOf":{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"account":"address"},"returnSignature":{"0":"uint256"}},"burn":{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"amount":"uint256"},"returnSignature":{}},"canAccessFromDeployer":{"inputs":[{"internalType":"address","name":"walletOrContract","type":"address"}],"name":"canAccessFromDeployer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{"walletOrContract":"address"},"returnSignature":{"0":"bool"}},"decimals":{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint8"}},"decreaseAllowance":{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","argumentSignature":{"spender":"address","subtractedValue":"uint256"},"returnSignature":{"0":"bool"}},"increaseAllowance":{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","argumentSignature":{"spender":"address","addedValue":"uint256"},"returnSignature":{"0":"bool"}},"inflation":{"inputs":[],"name":"inflation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"initialSupply":{"inputs":[],"name":"initialSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"initialize":{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"address","name":"dynamicTokenomics","type":"address"},{"internalType":"address","name":"inflationTokenomics","type":"address"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"},{"internalType":"uint256","name":"initialSupplyPercent","type":"uint256"},{"internalType":"address","name":"ownershipNftCollection","type":"address"},{"internalType":"uint256","name":"_ownershipTokenId","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"name_":"string","symbol_":"string","dynamicTokenomics":"address","inflationTokenomics":"address","_maxSupply":"uint256","initialSupplyPercent":"uint256","ownershipNftCollection":"address","_ownershipTokenId":"uint256"},"returnSignature":{}},"isOwnedByNFT":{"inputs":[],"name":"isOwnedByNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"bool"}},"maxSupply":{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"metadataUrl":{"inputs":[],"name":"metadataUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"string"}},"name":{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"string"}},"owner":{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"ownershipCollection":{"inputs":[],"name":"ownershipCollection","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"ownershipTokenId":{"inputs":[],"name":"ownershipTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"renounceOwnership":{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{},"returnSignature":{}},"supportsInterface":{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{"interfaceId":"bytes4"},"returnSignature":{"0":"bool"}},"symbol":{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"string"}},"tokenomics":{"inputs":[],"name":"tokenomics","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"totalSupply":{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"transfer":{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","argumentSignature":{"to":"address","amount":"uint256"},"returnSignature":{"0":"bool"}},"transferFrom":{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","argumentSignature":{"from":"address","to":"address","amount":"uint256"},"returnSignature":{"0":"bool"}},"transferOwnership":{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"newOwner":"address"},"returnSignature":{}}}