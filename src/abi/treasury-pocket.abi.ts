export const TreasuryPocketAbi = [{"inputs":[{"internalType":"bool","name":"isTemplate","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"actual","type":"uint256"}],"name":"InsufficientBalanceOfContract","type":"error"},{"inputs":[{"internalType":"address","name":"operation","type":"address"}],"name":"InvalidOperation","type":"error"},{"inputs":[],"name":"OnlyDeployerOrOwnerPermitted","type":"error"},{"inputs":[],"name":"OnlyOwnerPermitted","type":"error"},{"inputs":[{"internalType":"address","name":"operation","type":"address"}],"name":"OperationDidNotMatchExpectedResults","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"ProvidedAddressNotCompatibleWithRequiredInterfaces","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deployer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operationAddress","type":"address"},{"internalType":"address[]","name":"inputTokens","type":"address[]"},{"internalType":"uint256[]","name":"inputAmounts","type":"uint256[]"},{"internalType":"address[]","name":"outputTokens","type":"address[]"},{"internalType":"uint256[]","name":"expectedOutputs","type":"uint256[]"}],"name":"executeOperation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasuryDeployer","type":"address"},{"internalType":"address","name":"treasuryOwner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
export type TreasuryPocketAbiFunctional = {"available":{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"token":"address"},"returnSignature":{"0":"uint256"}},"deployer":{"inputs":[],"name":"deployer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"executeOperation":{"inputs":[{"internalType":"address","name":"operationAddress","type":"address"},{"internalType":"address[]","name":"inputTokens","type":"address[]"},{"internalType":"uint256[]","name":"inputAmounts","type":"uint256[]"},{"internalType":"address[]","name":"outputTokens","type":"address[]"},{"internalType":"uint256[]","name":"expectedOutputs","type":"uint256[]"}],"name":"executeOperation","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"operationAddress":"address","inputTokens":"address[]","inputAmounts":"uint256[]","outputTokens":"address[]","expectedOutputs":"uint256[]"},"returnSignature":{}},"initialize":{"inputs":[{"internalType":"address","name":"treasuryDeployer","type":"address"},{"internalType":"address","name":"treasuryOwner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"treasuryDeployer":"address","treasuryOwner":"address"},"returnSignature":{}},"owner":{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"supportsInterface":{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{"interfaceId":"bytes4"},"returnSignature":{"0":"bool"}},"withdraw":{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"token":"address","amount":"uint256"},"returnSignature":{}}}