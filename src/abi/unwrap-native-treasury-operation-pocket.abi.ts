export const UnwrapNativeTreasuryOperationAbi = [{"inputs":[{"internalType":"bool","name":"isTemplate","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InsufficientTransactionValue","type":"error"},{"inputs":[],"name":"OperationOnlySupportsNativeTokenOutputs","type":"error"},{"inputs":[],"name":"OutputIsNotEqualToInputAmount","type":"error"},{"inputs":[],"name":"UnexpectedInputTokensLength","type":"error"},{"inputs":[],"name":"UnsupportedNativeTokenTransfer","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"inputs":[{"internalType":"address[]","name":"inputTokens","type":"address[]"},{"internalType":"uint256[]","name":"inputAmounts","type":"uint256[]"},{"internalType":"address[]","name":"outputTokens","type":"address[]"},{"internalType":"uint256[]","name":"expectedOutputs","type":"uint256[]"}],"name":"execute","outputs":[{"internalType":"uint256[]","name":"actualOutputs","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
export type UnwrapNativeTreasuryOperationAbiFunctional = {"_": {"argumentSignature":{},"returnSignature":{},"stateMutability":"none","name":"none"},"execute": {"name":"execute", "stateMutability": "payable", "argumentSignature": {"inputTokens": string[],"inputAmounts": (string | number)[],"outputTokens": string[],"expectedOutputs": (string | number)[],}, "returnSignature": {"actualOutputs": (string | number)[],}},"initialize": {"name":"initialize", "stateMutability": "nonpayable", "argumentSignature": {}, "returnSignature": {}},"supportsInterface": {"name":"supportsInterface", "stateMutability": "view", "argumentSignature": {"interfaceId": (Uint8Array | string),}, "returnSignature": {"0": boolean,}}}