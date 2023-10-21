export const DecentralizedEntityDeployerAbi = [{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"OperationNotPermittedForWalletError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"ProvidedAddressNotCompatibleWithRequiredInterfaces","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"uint8","name":"typeId","type":"uint8"},{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"address","name":"treasury","type":"address"}],"name":"DecentralizedEntityDeployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GROUP_DECENTRALIZED_ENTITY","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GROUP_REWARDS_TREASURY","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractDeployer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"entityName","type":"string"},{"internalType":"uint256","name":"votingBlocksLength","type":"uint256"},{"internalType":"string","name":"metadataUrl","type":"string"}],"name":"deployMultiSignEntity","outputs":[{"components":[{"internalType":"address","name":"entity","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"internalType":"struct DecentralizedEntityDeployerInterface.EntityDeployment","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"entityName","type":"string"},{"internalType":"uint256","name":"votingBlocksLength","type":"uint256"},{"internalType":"string","name":"metadataUrl","type":"string"}],"name":"deployMultiSignSharesEntity","outputs":[{"components":[{"internalType":"address","name":"entity","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"internalType":"struct DecentralizedEntityDeployerInterface.EntityDeployment","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"entityName","type":"string"},{"internalType":"string","name":"metadataUrl","type":"string"}],"name":"deploySingleOwnerEntity","outputs":[{"components":[{"internalType":"address","name":"entity","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"internalType":"struct DecentralizedEntityDeployerInterface.EntityDeployment","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractDeployer","type":"address"},{"internalType":"address","name":"singleOwnerLibrary","type":"address"},{"internalType":"address","name":"multiSignLibrary","type":"address"},{"internalType":"address","name":"multiSignSharesLibrary","type":"address"},{"internalType":"address","name":"rewardsTreasuryLibrary","type":"address"},{"internalType":"address","name":"_singleOwnerNFTOwnershipContract","type":"address"},{"internalType":"address","name":"_sharesEntityNftOwnershipContract","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_libraryAddress","type":"address"}],"name":"setRewardsTreasuryLibraryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesEntityNftOwnershipContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"singleOwnerNFTOwnershipContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"treasury","type":"address"}],"name":"upgradeTreasury","outputs":[],"stateMutability":"payable","type":"function"}]
export type DecentralizedEntityDeployerAbiFunctional = {"DEFAULT_ADMIN_ROLE":{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"GROUP_DECENTRALIZED_ENTITY":{"inputs":[],"name":"GROUP_DECENTRALIZED_ENTITY","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"GROUP_REWARDS_TREASURY":{"inputs":[],"name":"GROUP_REWARDS_TREASURY","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"LOCAL_MANAGER_ROLE":{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"contractDeployer":{"inputs":[],"name":"contractDeployer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},"deployMultiSignEntity":{"inputs":[{"internalType":"string","name":"entityName","type":"string"},{"internalType":"uint256","name":"votingBlocksLength","type":"uint256"},{"internalType":"string","name":"metadataUrl","type":"string"}],"name":"deployMultiSignEntity","outputs":[{"components":[{"internalType":"address","name":"entity","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"internalType":"struct DecentralizedEntityDeployerInterface.EntityDeployment","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},"deployMultiSignSharesEntity":{"inputs":[{"internalType":"string","name":"entityName","type":"string"},{"internalType":"uint256","name":"votingBlocksLength","type":"uint256"},{"internalType":"string","name":"metadataUrl","type":"string"}],"name":"deployMultiSignSharesEntity","outputs":[{"components":[{"internalType":"address","name":"entity","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"internalType":"struct DecentralizedEntityDeployerInterface.EntityDeployment","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},"deploySingleOwnerEntity":{"inputs":[{"internalType":"string","name":"entityName","type":"string"},{"internalType":"string","name":"metadataUrl","type":"string"}],"name":"deploySingleOwnerEntity","outputs":[{"components":[{"internalType":"address","name":"entity","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"internalType":"struct DecentralizedEntityDeployerInterface.EntityDeployment","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},"getRoleAdmin":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"grantRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"hasRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},"initialize":{"inputs":[{"internalType":"address","name":"_contractDeployer","type":"address"},{"internalType":"address","name":"singleOwnerLibrary","type":"address"},{"internalType":"address","name":"multiSignLibrary","type":"address"},{"internalType":"address","name":"multiSignSharesLibrary","type":"address"},{"internalType":"address","name":"rewardsTreasuryLibrary","type":"address"},{"internalType":"address","name":"_singleOwnerNFTOwnershipContract","type":"address"},{"internalType":"address","name":"_sharesEntityNftOwnershipContract","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},"renounceRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"revokeRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"setRewardsTreasuryLibraryAddress":{"inputs":[{"internalType":"address","name":"_libraryAddress","type":"address"}],"name":"setRewardsTreasuryLibraryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},"sharesEntityNftOwnershipContract":{"inputs":[],"name":"sharesEntityNftOwnershipContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},"singleOwnerNFTOwnershipContract":{"inputs":[],"name":"singleOwnerNFTOwnershipContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},"supportsInterface":{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},"upgradeTreasury":{"inputs":[{"internalType":"address","name":"treasury","type":"address"}],"name":"upgradeTreasury","outputs":[],"stateMutability":"payable","type":"function"}}