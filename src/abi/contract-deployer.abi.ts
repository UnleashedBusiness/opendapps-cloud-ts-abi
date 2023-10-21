export const ContractDeployerAbi = [{"inputs":[],"name":"CompensationCalculationFailed","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"ContractNotUpgradeable","type":"error"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"}],"name":"DeployerGroupAlreadyRegistered","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"}],"name":"DeployerGroupNotPermittedForSender","type":"error"},{"inputs":[],"name":"EmptyAddressError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"ProvidedAddressNotCompatibleWithRequiredInterfaces","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4[]","name":"interfaceId","type":"bytes4[]"}],"name":"ProviderTemplateIsNotCompatibleWithInterfaces","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"provided","type":"uint256"}],"name":"TaxProvidedLowerThanExpected","type":"error"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"templateId","type":"uint8"}],"name":"TemplateAlreadyExist","type":"error"},{"inputs":[],"name":"TemplateCannotBeEmptyAddress","type":"error"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"templateId","type":"uint8"}],"name":"TemplateDoesNotExistInGroup","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"group","type":"bytes32"},{"indexed":true,"internalType":"uint8","name":"template","type":"uint8"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"}],"name":"ContractDeployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"code","type":"bytes32"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"ammount","type":"uint256"}],"name":"RefCodeUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"}],"name":"currentTemplate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"}],"name":"deployTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"deployer","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"}],"name":"deployTaxForAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"deployer","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"bytes","name":"initializeData","type":"bytes"},{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"deployTemplate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"deployer","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"bytes","name":"initializeData","type":"bytes"},{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"deployTemplateWithProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"freePassCollection","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsTreasury","type":"address"},{"internalType":"address","name":"_referralsEngine","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"isUpgradeable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralsEngine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"bytes4[]","name":"expectedInterfaceId","type":"bytes4[]"},{"internalType":"address","name":"libraryAddress","type":"address"},{"internalType":"uint256","name":"deploymentTax","type":"uint256"}],"name":"registerTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"deployerAddress","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"}],"name":"registerTemplateGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_freePassCollection","type":"address"}],"name":"setFreePassCollection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referralsEngine","type":"address"}],"name":"setReferralsEngine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsTreasury","type":"address"}],"name":"setRewardsTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"address","name":"_contract","type":"address"}],"name":"upgradeContractWithProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"uint256","name":"deploymentTax","type":"uint256"}],"name":"upgradeDeployTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"address","name":"libraryAddress","type":"address"}],"name":"upgradeTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"}]
export type ContractDeployerAbiFunctional = {"DEFAULT_ADMIN_ROLE":{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"LOCAL_MANAGER_ROLE":{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"currentTemplate":{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"}],"name":"currentTemplate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},"deployTax":{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"}],"name":"deployTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},"deployTaxForAddress":{"inputs":[{"internalType":"address","name":"deployer","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"}],"name":"deployTaxForAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},"deployTemplate":{"inputs":[{"internalType":"address","name":"deployer","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"bytes","name":"initializeData","type":"bytes"},{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"deployTemplate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},"deployTemplateWithProxy":{"inputs":[{"internalType":"address","name":"deployer","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"bytes","name":"initializeData","type":"bytes"},{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"deployTemplateWithProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},"freePassCollection":{"inputs":[],"name":"freePassCollection","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},"getRoleAdmin":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"grantRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"hasRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},"initialize":{"inputs":[{"internalType":"address","name":"_rewardsTreasury","type":"address"},{"internalType":"address","name":"_referralsEngine","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},"isUpgradeable":{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"isUpgradeable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},"pause":{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},"paused":{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},"referralsEngine":{"inputs":[],"name":"referralsEngine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},"registerTemplate":{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"bytes4[]","name":"expectedInterfaceId","type":"bytes4[]"},{"internalType":"address","name":"libraryAddress","type":"address"},{"internalType":"uint256","name":"deploymentTax","type":"uint256"}],"name":"registerTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"},"registerTemplateGroup":{"inputs":[{"internalType":"address","name":"deployerAddress","type":"address"},{"internalType":"bytes32","name":"groupHash","type":"bytes32"}],"name":"registerTemplateGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},"renounceRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"revokeRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"rewardsTreasury":{"inputs":[],"name":"rewardsTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},"setFreePassCollection":{"inputs":[{"internalType":"address","name":"_freePassCollection","type":"address"}],"name":"setFreePassCollection","outputs":[],"stateMutability":"nonpayable","type":"function"},"setReferralsEngine":{"inputs":[{"internalType":"address","name":"_referralsEngine","type":"address"}],"name":"setReferralsEngine","outputs":[],"stateMutability":"nonpayable","type":"function"},"setRewardsTreasury":{"inputs":[{"internalType":"address","name":"_rewardsTreasury","type":"address"}],"name":"setRewardsTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},"supportsInterface":{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},"unpause":{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},"upgradeContractWithProxy":{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"address","name":"_contract","type":"address"}],"name":"upgradeContractWithProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},"upgradeDeployTax":{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"uint256","name":"deploymentTax","type":"uint256"}],"name":"upgradeDeployTax","outputs":[],"stateMutability":"nonpayable","type":"function"},"upgradeTemplate":{"inputs":[{"internalType":"bytes32","name":"groupHash","type":"bytes32"},{"internalType":"uint8","name":"typeNumber","type":"uint8"},{"internalType":"address","name":"libraryAddress","type":"address"}],"name":"upgradeTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"}}