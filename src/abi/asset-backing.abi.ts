export const AssetBackingAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"until","type":"uint256"}],"name":"BackingLockedError","type":"error"},{"inputs":[],"name":"BackingNotFromNativeTokens","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"provided","type":"uint256"}],"name":"InsufficientAmountProvidedError","type":"error"},{"inputs":[{"internalType":"uint256","name":"requested","type":"uint256"},{"internalType":"uint256","name":"available","type":"uint256"}],"name":"InsufficientLiquidityError","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"result","type":"uint256"}],"name":"InsufficientOutputAmountError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"InterfaceNotSupportedError","type":"error"},{"inputs":[{"internalType":"string","name":"message","type":"string"}],"name":"InvalidParameterValue","type":"error"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"LiquidityImpactTooHigh","type":"error"},{"inputs":[{"internalType":"address","name":"provider","type":"address"}],"name":"RewardsProviderAlreadyAddedError","type":"error"},{"inputs":[{"internalType":"address","name":"provider","type":"address"}],"name":"RewardsProviderNotAddedError","type":"error"},{"inputs":[],"name":"SwapModeNotEnabled","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEPLOYER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCAL_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_BURN_BUYER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"container","type":"address"}],"name":"addBurnContainer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"backedToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"backedTokenCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"backingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"backingCanBePulled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"backingToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnContainersArray","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"provider","type":"address"}],"name":"disableRewardProvider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"provider","type":"address"}],"name":"enableRewardProvider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enabledSwapMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"minAmountOut","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"flipBurn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"flipFloorPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"floorPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_backingToken","type":"address"},{"internalType":"address","name":"_backedToken","type":"address"},{"internalType":"address","name":"_swapPriceModel","type":"address"},{"internalType":"uint256","name":"_rewardsPullThreshold","type":"uint256"},{"internalType":"uint256","name":"_rewardsPullCooldown","type":"uint256"},{"internalType":"bool","name":"enableSwapMode","type":"bool"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastRewardsPull","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"durationInBlocks","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockedUntil","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterDeployable","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingBackingFromProviders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"container","type":"address"}],"name":"removeBurnContainer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPullCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsPullThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"scaling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"setFlipMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsPullCooldown","type":"uint256"}],"name":"setRewardsPullCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsPullThreshold","type":"uint256"}],"name":"setRewardsPullThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minAmountOut","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"smartBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"smartBurnedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapPriceModel","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
export type AssetBackingAbiFunctional = {"_": {"argumentSignature":{},"returnSignature":{},"stateMutability":"none","name":"none"},"DEPLOYER_ROLE": {"name":"DEPLOYER_ROLE", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (Uint8Array | string),}},"LOCAL_MANAGER_ROLE": {"name":"LOCAL_MANAGER_ROLE", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (Uint8Array | string),}},"SMART_BURN_BUYER": {"name":"SMART_BURN_BUYER", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (Uint8Array | string),}},"addBurnContainer": {"name":"addBurnContainer", "stateMutability": "nonpayable", "argumentSignature": {"container": string,}, "returnSignature": {}},"backedToken": {"name":"backedToken", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"backedTokenCirculatingSupply": {"name":"backedTokenCirculatingSupply", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"backingAmount": {"name":"backingAmount", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"backingCanBePulled": {"name":"backingCanBePulled", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": boolean,}},"backingToken": {"name":"backingToken", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"burnContainersArray": {"name":"burnContainersArray", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string[],}},"disableRewardProvider": {"name":"disableRewardProvider", "stateMutability": "nonpayable", "argumentSignature": {"provider": string,}, "returnSignature": {}},"enableRewardProvider": {"name":"enableRewardProvider", "stateMutability": "nonpayable", "argumentSignature": {"provider": string,}, "returnSignature": {}},"enabledSwapMode": {"name":"enabledSwapMode", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": boolean,}},"flipBurn": {"name":"flipBurn", "stateMutability": "payable", "argumentSignature": {"minAmountOut": (string | number),"amountIn": (string | number),}, "returnSignature": {}},"flipFloorPrice": {"name":"flipFloorPrice", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"floorPrice": {"name":"floorPrice", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"initialize": {"name":"initialize", "stateMutability": "nonpayable", "argumentSignature": {"_backingToken": string,"_backedToken": string,"_swapPriceModel": string,"_rewardsPullThreshold": (string | number),"_rewardsPullCooldown": (string | number),"enableSwapMode": boolean,}, "returnSignature": {}},"lastRewardsPull": {"name":"lastRewardsPull", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"lock": {"name":"lock", "stateMutability": "nonpayable", "argumentSignature": {"durationInBlocks": (string | number),}, "returnSignature": {}},"lockedUntil": {"name":"lockedUntil", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"masterDeployable": {"name":"masterDeployable", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"owner": {"name":"owner", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"paused": {"name":"paused", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": boolean,}},"pendingBackingFromProviders": {"name":"pendingBackingFromProviders", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"removeBurnContainer": {"name":"removeBurnContainer", "stateMutability": "nonpayable", "argumentSignature": {"container": string,}, "returnSignature": {}},"renounceOwnership": {"name":"renounceOwnership", "stateMutability": "nonpayable", "argumentSignature": {}, "returnSignature": {}},"rewardsPullCooldown": {"name":"rewardsPullCooldown", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"rewardsPullThreshold": {"name":"rewardsPullThreshold", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"scaling": {"name":"scaling", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"setFlipMultiplier": {"name":"setFlipMultiplier", "stateMutability": "nonpayable", "argumentSignature": {"multiplier": (string | number),}, "returnSignature": {}},"setRewardsPullCooldown": {"name":"setRewardsPullCooldown", "stateMutability": "nonpayable", "argumentSignature": {"_rewardsPullCooldown": (string | number),}, "returnSignature": {}},"setRewardsPullThreshold": {"name":"setRewardsPullThreshold", "stateMutability": "nonpayable", "argumentSignature": {"_rewardsPullThreshold": (string | number),}, "returnSignature": {}},"smartBurn": {"name":"smartBurn", "stateMutability": "nonpayable", "argumentSignature": {"minAmountOut": (string | number),"amount": (string | number),}, "returnSignature": {}},"smartBurnedAmount": {"name":"smartBurnedAmount", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"supportsInterface": {"name":"supportsInterface", "stateMutability": "view", "argumentSignature": {"interfaceId": (Uint8Array | string),}, "returnSignature": {"0": boolean,}},"swapPriceModel": {"name":"swapPriceModel", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"togglePause": {"name":"togglePause", "stateMutability": "nonpayable", "argumentSignature": {}, "returnSignature": {}},"transferOwnership": {"name":"transferOwnership", "stateMutability": "nonpayable", "argumentSignature": {"newOwner": string,}, "returnSignature": {}},"withdraw": {"name":"withdraw", "stateMutability": "nonpayable", "argumentSignature": {}, "returnSignature": {}},"withdrawBurn": {"name":"withdrawBurn", "stateMutability": "nonpayable", "argumentSignature": {}, "returnSignature": {}}}