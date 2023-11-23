export const DynamicTokenomicsAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"AddressAlreadyAtTaxablePathListError","type":"error"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"AddressAlreadyAtTransactionSizeRestrictionListError","type":"error"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"AddressAlreadyAtWalletSizeRestrictionListError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressAlreadyInAutoReleaseListError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressAlreadyInBurnListError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressAlreadyInRouterListError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressNotInAutoReleaseListError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressNotInBurnListError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressNotInRouterListError","type":"error"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"AddressNotInTaxablePathListError","type":"error"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"AddressNotInTransactionSizeRestrictionListError","type":"error"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"AddressNotInWalletSizeRestrictionListError","type":"error"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"AmountExceedAllowedMaximumForTransferError","type":"error"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"AmountExceedAllowedMaximumForWalletError","type":"error"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ConfigurationNotFoundForIndexError","type":"error"},{"inputs":[{"internalType":"address","name":"payee","type":"address"}],"name":"ControllerPayeeAddressModificationNotPermittedError","type":"error"},{"inputs":[],"name":"EmptyPayeeAddressError","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"actual","type":"uint256"}],"name":"InsufficientBalanceError","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"InterfaceNotSupportedError","type":"error"},{"inputs":[],"name":"InvalidSharesValueError","type":"error"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"pair0","type":"address"},{"internalType":"address","name":"pair1","type":"address"}],"name":"LiquidityPairNotFoundError","type":"error"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"MaxTransactionSizeInvalidValueError","type":"error"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"MaxWalletSizeInvalidValueError","type":"error"},{"inputs":[],"name":"NoDefaultRouterFoundError","type":"error"},{"inputs":[],"name":"OperationNotPermittedError","type":"error"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"PathAlreadyTaxableError","type":"error"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"PathNotTaxableError","type":"error"},{"inputs":[{"internalType":"address","name":"payee","type":"address"}],"name":"PayeeAddressAlreadyExistsError","type":"error"},{"inputs":[{"internalType":"address","name":"payee","type":"address"}],"name":"PayeeAddressDoesNotExistsError","type":"error"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"TokenomicsConfigurationNotFound","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPLOYER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"shares_","type":"uint256"},{"internalType":"uint256","name":"nativeFlipShares","type":"uint256"}],"name":"addPayee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"addTaxForPath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"weth","type":"address"}],"name":"addToRouterAddressList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"weth","type":"address"}],"name":"addToRoutersList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addToTaxablePathWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addToTransactionRestrictionWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addToWalletSizeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addWalletToAutoReleaseAddressList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addWalletToBurnAddressList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"taxAmount","type":"uint256"}],"name":"applyTokenomics","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"availableNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"availableTaxableConfigurations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"availableTokenomicsConfigurations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"shares_","type":"uint256"},{"internalType":"uint256","name":"nativeFlipShares","type":"uint256"}],"name":"changePayeeShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"createTaxableConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defaultRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"externalCallsThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAutoReleaseList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBurnAddressList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getController","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pathFrom","type":"address"},{"internalType":"address","name":"pathTo","type":"address"}],"name":"getPayees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getPayees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRouterAddressList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransactionRestrictionWhitelist","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWalletSizeRestrictionWhitelist","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"erc20Token","type":"address"},{"internalType":"address","name":"controller","type":"address"},{"internalType":"uint256","name":"controllerPercent","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"isInTaxablePathWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"transferAmount","type":"uint256"}],"name":"isTransactionValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterDeployable","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransactionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletHoldingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pathFrom","type":"address"},{"internalType":"address","name":"pathTo","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"payeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"payeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"pendingPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"pendingPaymentNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"releaseNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromAutoReleaseAddressList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromBurnAddressList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"removeFromRouterAddressList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromTaxablePathWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromTransactionRestrictionWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromWalletSizeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"removePayee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"removeTaxFromPath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setDefaultRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxTransactionAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxWalletHoldAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"preferredOutputNative","type":"uint256"}],"name":"swapPending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"totalPendingPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"totalPendingPaymentNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"totalTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"totalTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"withdrawTokenRewardForReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"}],"name":"withdrawTokenRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
export type DynamicTokenomicsAbiFunctional = {"DEFAULT_ADMIN_ROLE":{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"bytes32"}},"DEPLOYER_ROLE":{"inputs":[],"name":"DEPLOYER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"bytes32"}},"addPayee":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"shares_","type":"uint256"},{"internalType":"uint256","name":"nativeFlipShares","type":"uint256"}],"name":"addPayee","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"i":"uint256","account":"address","shares_":"uint256","nativeFlipShares":"uint256"},"returnSignature":{}},"addTaxForPath":{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"addTaxForPath","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"from":"address","to":"address","i":"uint256"},"returnSignature":{}},"addToRouterAddressList":{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"weth","type":"address"}],"name":"addToRouterAddressList","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address","weth":"address"},"returnSignature":{}},"addToRoutersList":{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"weth","type":"address"}],"name":"addToRoutersList","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"router":"address","weth":"address"},"returnSignature":{}},"addToTaxablePathWhitelist":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addToTaxablePathWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"addToTransactionRestrictionWhitelist":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addToTransactionRestrictionWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"addToWalletSizeWhitelist":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addToWalletSizeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"addWalletToAutoReleaseAddressList":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addWalletToAutoReleaseAddressList","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"addWalletToBurnAddressList":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addWalletToBurnAddressList","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"applyTokenomics":{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"taxAmount","type":"uint256"}],"name":"applyTokenomics","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"from":"address","to":"address","taxAmount":"uint256"},"returnSignature":{}},"available":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"i":"uint256"},"returnSignature":{"0":"uint256"}},"availableNative":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"availableNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"i":"uint256"},"returnSignature":{"0":"uint256"}},"availableTaxableConfigurations":{"inputs":[],"name":"availableTaxableConfigurations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"availableTokenomicsConfigurations":{"inputs":[],"name":"availableTokenomicsConfigurations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"changePayeeShare":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"shares_","type":"uint256"},{"internalType":"uint256","name":"nativeFlipShares","type":"uint256"}],"name":"changePayeeShare","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"i":"uint256","account":"address","shares_":"uint256","nativeFlipShares":"uint256"},"returnSignature":{}},"createTaxableConfig":{"inputs":[],"name":"createTaxableConfig","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{},"returnSignature":{}},"defaultRouter":{"inputs":[],"name":"defaultRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"externalCallsThreshold":{"inputs":[],"name":"externalCallsThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"getAutoReleaseList":{"inputs":[],"name":"getAutoReleaseList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address[]"}},"getBurnAddressList":{"inputs":[],"name":"getBurnAddressList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address[]"}},"getController":{"inputs":[],"name":"getController","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"getPayees":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getPayees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","argumentSignature":{"i":"uint256"},"returnSignature":{"0":"address[]"}},"getPendingRewards":{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"rewardToken":"address","receiver":"address"},"returnSignature":{"0":"uint256"}},"getRewardTokens":{"inputs":[],"name":"getRewardTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address[]"}},"getRoleAdmin":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","argumentSignature":{"role":"bytes32"},"returnSignature":{"0":"bytes32"}},"getRouterAddressList":{"inputs":[],"name":"getRouterAddressList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address[]"}},"getTransactionRestrictionWhitelist":{"inputs":[],"name":"getTransactionRestrictionWhitelist","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address[]"}},"getWalletSizeRestrictionWhitelist":{"inputs":[],"name":"getWalletSizeRestrictionWhitelist","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address[]"}},"grantRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"role":"bytes32","account":"address"},"returnSignature":{}},"hasRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{"role":"bytes32","account":"address"},"returnSignature":{"0":"bool"}},"initialize":{"inputs":[{"internalType":"address","name":"erc20Token","type":"address"},{"internalType":"address","name":"controller","type":"address"},{"internalType":"uint256","name":"controllerPercent","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"erc20Token":"address","controller":"address","controllerPercent":"uint256"},"returnSignature":{}},"isInTaxablePathWhitelist":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"isInTaxablePathWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{"0":"bool"}},"isTransactionValid":{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"transferAmount","type":"uint256"}],"name":"isTransactionValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{"from":"address","to":"address","transferAmount":"uint256"},"returnSignature":{"0":"bool"}},"masterDeployable":{"inputs":[],"name":"masterDeployable","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"maxTransactionAmount":{"inputs":[],"name":"maxTransactionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"maxWalletHoldingAmount":{"inputs":[],"name":"maxWalletHoldingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"uint256"}},"payeePercent":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"payeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"i":"uint256","account":"address"},"returnSignature":{"0":"uint256"}},"pendingPayment":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"pendingPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"i":"uint256","account":"address"},"returnSignature":{"0":"uint256"}},"pendingPaymentNative":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"pendingPaymentNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"i":"uint256","account":"address"},"returnSignature":{"0":"uint256"}},"release":{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"account":"address"},"returnSignature":{}},"releaseNative":{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"releaseNative","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"account":"address"},"returnSignature":{}},"removeFromAutoReleaseAddressList":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromAutoReleaseAddressList","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"removeFromBurnAddressList":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromBurnAddressList","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"removeFromRouterAddressList":{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"removeFromRouterAddressList","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"router":"address"},"returnSignature":{}},"removeFromTaxablePathWhitelist":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromTaxablePathWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"removeFromTransactionRestrictionWhitelist":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromTransactionRestrictionWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"removeFromWalletSizeWhitelist":{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeFromWalletSizeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"wallet":"address"},"returnSignature":{}},"removePayee":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"removePayee","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"i":"uint256","account":"address"},"returnSignature":{}},"removeTaxFromPath":{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"removeTaxFromPath","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"from":"address","to":"address"},"returnSignature":{}},"renounceRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"role":"bytes32","account":"address"},"returnSignature":{}},"revokeRole":{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"role":"bytes32","account":"address"},"returnSignature":{}},"setDefaultRouter":{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setDefaultRouter","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"router":"address"},"returnSignature":{}},"setMaxTransactionAmount":{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxTransactionAmount","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"amount":"uint256"},"returnSignature":{}},"setMaxWalletHoldAmount":{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxWalletHoldAmount","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"amount":"uint256"},"returnSignature":{}},"supportsInterface":{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","argumentSignature":{"interfaceId":"bytes4"},"returnSignature":{"0":"bool"}},"swapPending":{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"preferredOutputNative","type":"uint256"}],"name":"swapPending","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"i":"uint256","preferredOutputNative":"uint256"},"returnSignature":{}},"token":{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","argumentSignature":{},"returnSignature":{"0":"address"}},"totalPendingPayment":{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"totalPendingPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"account":"address"},"returnSignature":{"0":"uint256"}},"totalPendingPaymentNative":{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"totalPendingPaymentNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"account":"address"},"returnSignature":{"0":"uint256"}},"totalTax":{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"totalTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","argumentSignature":{"from":"address","to":"address"},"returnSignature":{"0":"uint256"}},"withdrawTokenRewardForReceiver":{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"receiver","type":"address"}],"name":"withdrawTokenRewardForReceiver","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"rewardToken":"address","receiver":"address"},"returnSignature":{}},"withdrawTokenRewards":{"inputs":[{"internalType":"address","name":"rewardToken","type":"address"}],"name":"withdrawTokenRewards","outputs":[],"stateMutability":"nonpayable","type":"function","argumentSignature":{"rewardToken":"address"},"returnSignature":{}}}