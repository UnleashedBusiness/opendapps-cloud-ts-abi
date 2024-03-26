export const SingleOwnerEntityAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"available","type":"uint256"}],"name":"InsufficientBalance","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"available","type":"uint256"}],"name":"InsufficientTransferValue","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"InterfaceNotSupportedError","type":"error"},{"inputs":[{"internalType":"address","name":"expected","type":"address"},{"internalType":"address","name":"actual","type":"address"}],"name":"OnlyOwnerPermitted","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"inputs":[{"internalType":"address","name":"walletOrContract","type":"address"}],"name":"canAccessFromDeployer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"bytes32","name":"descriptionHash","type":"bytes32"}],"name":"executeMethodCalls","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"__name","type":"string"},{"internalType":"address","name":"ownershipNftCollection","type":"address"},{"internalType":"uint256","name":"_ownershipTokenId","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"memberOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadataUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownershipCollection","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownershipTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requireProposal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
export type SingleOwnerEntityAbiFunctional = {"_": {"argumentSignature":{},"returnSignature":{},"stateMutability":"none","name":"none"},"canAccessFromDeployer": {"name":"canAccessFromDeployer", "stateMutability": "view", "argumentSignature": {"walletOrContract": string,}, "returnSignature": {"0": boolean,}},"executeMethodCalls": {"name":"executeMethodCalls", "stateMutability": "payable", "argumentSignature": {"targets": any,"values": string,"calldatas": Uint8Array | string,"descriptionHash": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"initialize": {"name":"initialize", "stateMutability": "nonpayable", "argumentSignature": {"__name": string,"ownershipNftCollection": string,"_ownershipTokenId": string,}, "returnSignature": {}},"isOwner": {"name":"isOwner", "stateMutability": "view", "argumentSignature": {"wallet": string,}, "returnSignature": {"0": boolean,}},"memberOf": {"name":"memberOf", "stateMutability": "view", "argumentSignature": {"wallet": string,}, "returnSignature": {"0": boolean,}},"metadataUrl": {"name":"metadataUrl", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"name": {"name":"name", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"onERC1155BatchReceived": {"name":"onERC1155BatchReceived", "stateMutability": "nonpayable", "argumentSignature": {"0": string,"1": string,"2": string,"3": string,"4": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"onERC1155Received": {"name":"onERC1155Received", "stateMutability": "nonpayable", "argumentSignature": {"0": string,"1": string,"2": string,"3": string,"4": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"onERC721Received": {"name":"onERC721Received", "stateMutability": "nonpayable", "argumentSignature": {"0": string,"1": string,"2": string,"3": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"owner": {"name":"owner", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"ownershipCollection": {"name":"ownershipCollection", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"ownershipTokenId": {"name":"ownershipTokenId", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"requireProposal": {"name":"requireProposal", "stateMutability": "pure", "argumentSignature": {}, "returnSignature": {"0": boolean,}},"supportsInterface": {"name":"supportsInterface", "stateMutability": "view", "argumentSignature": {"interfaceId": Uint8Array | string,}, "returnSignature": {"0": boolean,}}}