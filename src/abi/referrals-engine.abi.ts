export const ReferralsEngineAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EmptyAddressError","type":"error"},{"inputs":[],"name":"EmptyRefCodeError","type":"error"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"InvalidCompensationPercent","type":"error"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"RefCodeAlreadyExistError","type":"error"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"sender","type":"address"}],"name":"RefCodeOperationNotPermitted","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"receiver","type":"address"}],"name":"assignRefCodeToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"customSize","type":"uint256"}],"name":"assignRefCodeToAddressWithCustomSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"assignRefCodeToSelf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateCompensationSize","outputs":[{"internalType":"uint256","name":"compensationValue","type":"uint256"},{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"disableRefCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"getCompensationPercent","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_defaultPercent","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
export type ReferralsEngineAbiFunctional = {"DEFAULT_ADMIN_ROLE":{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"LOCAL_MANAGER_ROLE":{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"assignRefCodeToAddress":{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"receiver","type":"address"}],"name":"assignRefCodeToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},"assignRefCodeToAddressWithCustomSize":{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"customSize","type":"uint256"}],"name":"assignRefCodeToAddressWithCustomSize","outputs":[],"stateMutability":"nonpayable","type":"function"},"assignRefCodeToSelf":{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"assignRefCodeToSelf","outputs":[],"stateMutability":"nonpayable","type":"function"},"calculateCompensationSize":{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateCompensationSize","outputs":[{"internalType":"uint256","name":"compensationValue","type":"uint256"},{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},"defaultPercent":{"inputs":[],"name":"defaultPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},"disableRefCode":{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"disableRefCode","outputs":[],"stateMutability":"nonpayable","type":"function"},"getCompensationPercent":{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"getCompensationPercent","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"stateMutability":"view","type":"function"},"getRoleAdmin":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},"grantRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"hasRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},"initialize":{"inputs":[{"internalType":"uint256","name":"_defaultPercent","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},"renounceRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"revokeRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},"supportsInterface":{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}}