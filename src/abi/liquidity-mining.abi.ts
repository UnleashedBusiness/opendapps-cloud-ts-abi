export const LiquidityMiningAbi = [{"inputs":[{"internalType":"bool","name":"isTemplate","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EmptyAddressError","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"actual","type":"uint256"}],"name":"InsufficientAmountError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"InterfaceNotSupportedError","type":"error"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"pairedAsset","type":"address"}],"name":"PairNotFoundError","type":"error"},{"inputs":[],"name":"StakingAlreadyEnabledError","type":"error"},{"inputs":[],"name":"StakingNotEnabledError","type":"error"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"StakingPoolNotFoundError","type":"error"},{"inputs":[{"internalType":"uint256","name":"receiversCount","type":"uint256"},{"internalType":"uint256","name":"percentsCount","type":"uint256"}],"name":"TaxationReceiversAddressAndPercentsLengthDifference","type":"error"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"pairedAsset","type":"address"}],"name":"UnavailablePairError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"DEFAULT_STAKING_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_SCALING","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_MULTIPLIER_SCALING","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"pairedAsset","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"pairedAssetAmount","type":"uint256"},{"internalType":"uint256","name":"expectedLPTokens","type":"uint256"}],"name":"addLiquidity","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"pairedAsset","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"pairedAssetAmount","type":"uint256"},{"internalType":"uint256","name":"expectedLPTokens","type":"uint256"},{"internalType":"bool","name":"passThru","type":"bool"}],"name":"addLiquidityPassThru","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"allowedPairsForRouter","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"rewardToken","type":"address"}],"name":"availableRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"wallet","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"changePairPoolRewardsModifier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakingServiceDeployer","type":"address"},{"internalType":"address[]","name":"routers","type":"address[]"},{"internalType":"bytes32","name":"commonPoolRefCode","type":"bytes32"},{"internalType":"bytes32","name":"rewardPoolsRefCode","type":"bytes32"}],"name":"enableStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"_percentScaling","type":"uint256"},{"internalType":"address[]","name":"taxationReceivers","type":"address[]"},{"internalType":"uint256[]","name":"taxationReceiversPercent","type":"uint256[]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"pairedAsset","type":"address"},{"internalType":"uint256","name":"lpTokens","type":"uint256"},{"internalType":"uint256","name":"expectedTokenAmount","type":"uint256"},{"internalType":"uint256","name":"expectedPairedAssetAmount","type":"uint256"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"pairedAsset","type":"address"},{"internalType":"uint256","name":"lpTokens","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"stakingCommonAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingDeployerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"stakingForPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingProxyTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingRewardsMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"pairedAsset","type":"address"}],"name":"toggleV2PairWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"rewardToken","type":"address"}],"name":"withdrawLiquidityRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"withdrawTokenRewardForReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"}],"name":"withdrawTokenRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
export type LiquidityMiningAbiFunctional = {"_": {"argumentSignature":{},"returnSignature":{},"stateMutability":"none","name":"none"},"DEFAULT_STAKING_MULTIPLIER": {"name":"DEFAULT_STAKING_MULTIPLIER", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"PERCENT_SCALING": {"name":"PERCENT_SCALING", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"STAKING_MULTIPLIER_SCALING": {"name":"STAKING_MULTIPLIER_SCALING", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": (string | number),}},"addLiquidity": {"name":"addLiquidity", "stateMutability": "payable", "argumentSignature": {"router": string,"pairedAsset": string,"tokenAmount": (string | number),"pairedAssetAmount": (string | number),"expectedLPTokens": (string | number),}, "returnSignature": {}},"addLiquidityPassThru": {"name":"addLiquidityPassThru", "stateMutability": "payable", "argumentSignature": {"router": string,"pairedAsset": string,"tokenAmount": (string | number),"pairedAssetAmount": (string | number),"expectedLPTokens": (string | number),"passThru": boolean,}, "returnSignature": {}},"allowedPairsForRouter": {"name":"allowedPairsForRouter", "stateMutability": "view", "argumentSignature": {"router": string,}, "returnSignature": {"0": string[],}},"availableRewards": {"name":"availableRewards", "stateMutability": "view", "argumentSignature": {"pair": string,"wallet": string,"rewardToken": string,}, "returnSignature": {"0": (string | number),}},"balanceOf": {"name":"balanceOf", "stateMutability": "view", "argumentSignature": {"pair": string,"wallet": string,}, "returnSignature": {"0": (string | number),}},"changePairPoolRewardsModifier": {"name":"changePairPoolRewardsModifier", "stateMutability": "nonpayable", "argumentSignature": {"pair": string,"multiplier": (string | number),}, "returnSignature": {}},"enableStaking": {"name":"enableStaking", "stateMutability": "nonpayable", "argumentSignature": {"_stakingServiceDeployer": string,"routers": string[],"commonPoolRefCode": (Uint8Array | string),"rewardPoolsRefCode": (Uint8Array | string),}, "returnSignature": {}},"getPendingRewards": {"name":"getPendingRewards", "stateMutability": "view", "argumentSignature": {"rewardToken": string,"receiver": string,}, "returnSignature": {"0": (string | number),}},"getRewardTokens": {"name":"getRewardTokens", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string[],}},"initialize": {"name":"initialize", "stateMutability": "nonpayable", "argumentSignature": {"tokenAddress": string,"_percentScaling": (string | number),"taxationReceivers": string[],"taxationReceiversPercent": (string | number)[],}, "returnSignature": {}},"owner": {"name":"owner", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"removeLiquidity": {"name":"removeLiquidity", "stateMutability": "nonpayable", "argumentSignature": {"router": string,"pairedAsset": string,"lpTokens": (string | number),"expectedTokenAmount": (string | number),"expectedPairedAssetAmount": (string | number),}, "returnSignature": {}},"renounceOwnership": {"name":"renounceOwnership", "stateMutability": "nonpayable", "argumentSignature": {}, "returnSignature": {}},"stake": {"name":"stake", "stateMutability": "payable", "argumentSignature": {"router": string,"pairedAsset": string,"lpTokens": (string | number),}, "returnSignature": {}},"stakingCommonAddress": {"name":"stakingCommonAddress", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"stakingDeployerAddress": {"name":"stakingDeployerAddress", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"stakingForPair": {"name":"stakingForPair", "stateMutability": "view", "argumentSignature": {"pair": string,}, "returnSignature": {"0": string,}},"stakingProxyTokenAddress": {"name":"stakingProxyTokenAddress", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"stakingRewardsMultiplier": {"name":"stakingRewardsMultiplier", "stateMutability": "view", "argumentSignature": {"0": string,}, "returnSignature": {"0": (string | number),}},"supportsInterface": {"name":"supportsInterface", "stateMutability": "view", "argumentSignature": {"interfaceId": (Uint8Array | string),}, "returnSignature": {"0": boolean,}},"toggleV2PairWhitelist": {"name":"toggleV2PairWhitelist", "stateMutability": "nonpayable", "argumentSignature": {"router": string,"pairedAsset": string,}, "returnSignature": {}},"token": {"name":"token", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"transferOwnership": {"name":"transferOwnership", "stateMutability": "nonpayable", "argumentSignature": {"newOwner": string,}, "returnSignature": {}},"withdrawLiquidityRewards": {"name":"withdrawLiquidityRewards", "stateMutability": "nonpayable", "argumentSignature": {"pair": string,"rewardToken": string,}, "returnSignature": {}},"withdrawTokenRewardForReceiver": {"name":"withdrawTokenRewardForReceiver", "stateMutability": "nonpayable", "argumentSignature": {"rewardToken": string,"receiver": string,}, "returnSignature": {}},"withdrawTokenRewards": {"name":"withdrawTokenRewards", "stateMutability": "nonpayable", "argumentSignature": {"rewardToken": string,}, "returnSignature": {}}}