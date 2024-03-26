export const MultiSignSharesEntityAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"AlreadySignedError","type":"error"},{"inputs":[],"name":"EmptyProposal","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"available","type":"uint256"}],"name":"InsufficientBalance","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"available","type":"uint256"}],"name":"InsufficientTransferValue","type":"error"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"InterfaceNotSupportedError","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"actual","type":"uint256"}],"name":"InvalidProposalLength","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OnlyShareholdersPermittedError","type":"error"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"ProposalAlreadyExists","type":"error"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"ProposalNotSuccessful","type":"error"},{"inputs":[{"internalType":"uint256","name":"expected","type":"uint256"},{"internalType":"uint256","name":"actual","type":"uint256"}],"name":"ProposerVotesBelowProposalThreshold","type":"error"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"VotingNotActive","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"VotingPowerBelowVotingThreshold","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"address","name":"executor","type":"address"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"VoteCast","type":"event"},{"inputs":[],"name":"QUORUM_REQUIREMENT_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"bytes32","name":"descriptionHash","type":"bytes32"}],"name":"buildProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"walletOrContract","type":"address"}],"name":"canAccessFromDeployer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"canPropose","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"canVote","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"currentSharesSigned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"bytes32","name":"descriptionHash","type":"bytes32"}],"name":"executeMethodCalls","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"hasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_entityName","type":"string"},{"internalType":"uint256","name":"signatureCollectionBlocks","type":"uint256"},{"internalType":"address","name":"sharesOwnershipNFTCollection","type":"address"},{"internalType":"uint256","name":"_ownershipTokenId","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"makeProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"memberOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadataUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ownershipCollection","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownershipTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"proposalState","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"proposalVoteEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"proposalVoteStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"quorum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requireProposal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requiredSignatures","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"voteForProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
export type MultiSignSharesEntityAbiFunctional = {"_": {"argumentSignature":{},"returnSignature":{},"stateMutability":"none","name":"none"},"QUORUM_REQUIREMENT_PERCENT": {"name":"QUORUM_REQUIREMENT_PERCENT", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"buildProposalId": {"name":"buildProposalId", "stateMutability": "pure", "argumentSignature": {"targets": any,"values": string,"calldatas": Uint8Array | string,"descriptionHash": Uint8Array | string,}, "returnSignature": {"0": string,}},"canAccessFromDeployer": {"name":"canAccessFromDeployer", "stateMutability": "view", "argumentSignature": {"walletOrContract": string,}, "returnSignature": {"0": boolean,}},"canPropose": {"name":"canPropose", "stateMutability": "view", "argumentSignature": {"wallet": string,}, "returnSignature": {"0": boolean,}},"canVote": {"name":"canVote", "stateMutability": "view", "argumentSignature": {"wallet": string,}, "returnSignature": {"0": boolean,}},"currentSharesSigned": {"name":"currentSharesSigned", "stateMutability": "view", "argumentSignature": {"proposalId": string,}, "returnSignature": {"0": string,}},"executeMethodCalls": {"name":"executeMethodCalls", "stateMutability": "payable", "argumentSignature": {"targets": any,"values": string,"calldatas": Uint8Array | string,"descriptionHash": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"getVotes": {"name":"getVotes", "stateMutability": "view", "argumentSignature": {"account": string,"blockNumber": string,}, "returnSignature": {"0": string,}},"hasVoted": {"name":"hasVoted", "stateMutability": "view", "argumentSignature": {"proposalId": string,"account": string,}, "returnSignature": {"0": boolean,}},"initialize": {"name":"initialize", "stateMutability": "nonpayable", "argumentSignature": {"_entityName": string,"signatureCollectionBlocks": string,"sharesOwnershipNFTCollection": string,"_ownershipTokenId": string,}, "returnSignature": {}},"makeProposal": {"name":"makeProposal", "stateMutability": "nonpayable", "argumentSignature": {"targets": any,"values": string,"calldatas": Uint8Array | string,"description": string,}, "returnSignature": {}},"memberOf": {"name":"memberOf", "stateMutability": "view", "argumentSignature": {"wallet": string,}, "returnSignature": {"0": boolean,}},"metadataUrl": {"name":"metadataUrl", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"name": {"name":"name", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"onERC1155BatchReceived": {"name":"onERC1155BatchReceived", "stateMutability": "nonpayable", "argumentSignature": {"0": string,"1": string,"2": string,"3": string,"4": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"onERC1155Received": {"name":"onERC1155Received", "stateMutability": "nonpayable", "argumentSignature": {"0": string,"1": string,"2": string,"3": string,"4": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"onERC721Received": {"name":"onERC721Received", "stateMutability": "nonpayable", "argumentSignature": {"0": string,"1": string,"2": string,"3": Uint8Array | string,}, "returnSignature": {"0": Uint8Array | string,}},"ownershipCollection": {"name":"ownershipCollection", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"ownershipTokenId": {"name":"ownershipTokenId", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"proposalState": {"name":"proposalState", "stateMutability": "view", "argumentSignature": {"proposalId": string,}, "returnSignature": {"0": string,}},"proposalThreshold": {"name":"proposalThreshold", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"proposalVoteEndBlock": {"name":"proposalVoteEndBlock", "stateMutability": "view", "argumentSignature": {"proposalId": string,}, "returnSignature": {"0": string,}},"proposalVoteStartBlock": {"name":"proposalVoteStartBlock", "stateMutability": "view", "argumentSignature": {"proposalId": string,}, "returnSignature": {"0": string,}},"quorum": {"name":"quorum", "stateMutability": "view", "argumentSignature": {"0": string,}, "returnSignature": {"0": string,}},"requireProposal": {"name":"requireProposal", "stateMutability": "pure", "argumentSignature": {}, "returnSignature": {"0": boolean,}},"requiredSignatures": {"name":"requiredSignatures", "stateMutability": "view", "argumentSignature": {"0": string,}, "returnSignature": {"0": string,}},"supportsInterface": {"name":"supportsInterface", "stateMutability": "view", "argumentSignature": {"interfaceId": Uint8Array | string,}, "returnSignature": {"0": boolean,}},"voteForProposal": {"name":"voteForProposal", "stateMutability": "nonpayable", "argumentSignature": {"proposalId": string,}, "returnSignature": {}},"votingDelay": {"name":"votingDelay", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}},"votingPeriod": {"name":"votingPeriod", "stateMutability": "view", "argumentSignature": {}, "returnSignature": {"0": string,}}}