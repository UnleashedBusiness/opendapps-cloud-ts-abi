export const ReferralsEngineAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EmptyAddressError","type":"error"},{"inputs":[],"name":"EmptyRefCodeError","type":"error"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"InvalidCompensationPercent","type":"error"},{"inputs":[{"internalType":"uint256","name":"receiverSize","type":"uint256"},{"internalType":"uint256","name":"percentsSize","type":"uint256"}],"name":"InvalidExtendedCodeReceiverAndPercentsInput","type":"error"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"RefCodeAlreadyExistError","type":"error"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"sender","type":"address"}],"name":"RefCodeOperationNotPermitted","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address[]","name":"receiver","type":"address[]"},{"internalType":"uint256[]","name":"customSizes","type":"uint256[]"}],"name":"assignExtendedRefCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"receiver","type":"address"}],"name":"assignRefCodeToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"customSize","type":"uint256"}],"name":"assignRefCodeToAddressWithCustomSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"assignRefCodeToSelf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateCompensationSize","outputs":[{"internalType":"uint256","name":"compensationValue","type":"uint256"},{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"disableRefCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"disableRefCodeExtended","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"getCompensationPercent","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"name":"getTaxationReceivers","outputs":[{"internalType":"uint256[]","name":"percents","type":"uint256[]"},{"internalType":"address[]","name":"receiversArray","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_defaultPercent","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"setDefaultReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
export type ReferralsEngineAbiFunctional = {"_": {"argumentSignature":{},"returnSignature":{},"stateMutability":"none","name":"none"},"DEFAULT_ADMIN_ROLE": {"name":"DEFAULT_ADMIN_ROLE", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (Uint8Array | string),}},"LOCAL_MANAGER_ROLE": {"name":"LOCAL_MANAGER_ROLE", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (Uint8Array | string),}},"assignExtendedRefCode": {"name":"assignExtendedRefCode", "stateMutability": "nonpayable", "argumentSignature": {"refCode": (Uint8Array | string),"receiver": string[],"customSizes": (string | number)[],}, "returnSignature": {}},"assignRefCodeToAddress": {"name":"assignRefCodeToAddress", "stateMutability": "nonpayable", "argumentSignature": {"refCode": (Uint8Array | string),"receiver": string,}, "returnSignature": {}},"assignRefCodeToAddressWithCustomSize": {"name":"assignRefCodeToAddressWithCustomSize", "stateMutability": "nonpayable", "argumentSignature": {"refCode": (Uint8Array | string),"receiver": string,"customSize": (string | number),}, "returnSignature": {}},"assignRefCodeToSelf": {"name":"assignRefCodeToSelf", "stateMutability": "nonpayable", "argumentSignature": {"refCode": (Uint8Array | string),}, "returnSignature": {}},"calculateCompensationSize": {"name":"calculateCompensationSize", "stateMutability": "view", "argumentSignature": {"refCode": (Uint8Array | string),"amount": (string | number),}, "returnSignature": {"compensationValue": (string | number),"remaining": (string | number),}},"defaultPercent": {"name":"defaultPercent", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"defaultReceiver": {"name":"defaultReceiver", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"disableRefCode": {"name":"disableRefCode", "stateMutability": "nonpayable", "argumentSignature": {"refCode": (Uint8Array | string),}, "returnSignature": {}},"disableRefCodeExtended": {"name":"disableRefCodeExtended", "stateMutability": "nonpayable", "argumentSignature": {"refCode": (Uint8Array | string),}, "returnSignature": {}},"getCompensationPercent": {"name":"getCompensationPercent", "stateMutability": "view", "argumentSignature": {"refCode": (Uint8Array | string),}, "returnSignature": {"percent": (string | number),"receiver": string,}},"getRoleAdmin": {"name":"getRoleAdmin", "stateMutability": "view", "argumentSignature": {"role": (Uint8Array | string),}, "returnSignature": {"0": (Uint8Array | string),}},"getTaxationReceivers": {"name":"getTaxationReceivers", "stateMutability": "view", "argumentSignature": {"refCode": (Uint8Array | string),}, "returnSignature": {"percents": (string | number)[],"receiversArray": string[],}},"grantRole": {"name":"grantRole", "stateMutability": "nonpayable", "argumentSignature": {"role": (Uint8Array | string),"account": string,}, "returnSignature": {}},"hasRole": {"name":"hasRole", "stateMutability": "view", "argumentSignature": {"role": (Uint8Array | string),"account": string,}, "returnSignature": {"0": boolean,}},"initialize": {"name":"initialize", "stateMutability": "nonpayable", "argumentSignature": {"_defaultPercent": (string | number),}, "returnSignature": {}},"renounceRole": {"name":"renounceRole", "stateMutability": "nonpayable", "argumentSignature": {"role": (Uint8Array | string),"account": string,}, "returnSignature": {}},"revokeRole": {"name":"revokeRole", "stateMutability": "nonpayable", "argumentSignature": {"role": (Uint8Array | string),"account": string,}, "returnSignature": {}},"setDefaultReceiver": {"name":"setDefaultReceiver", "stateMutability": "nonpayable", "argumentSignature": {"target": string,}, "returnSignature": {}},"supportsInterface": {"name":"supportsInterface", "stateMutability": "view", "argumentSignature": {"interfaceId": (Uint8Array | string),}, "returnSignature": {"0": boolean,}}}