const {network} = require ("hardhat")
const { INITIAL_ANSWER } = require("../helper-hardhat-config")
const {developmentChains,
    DECIMALS,
    INITIAL_ANSWERS,

} = ("../helper-hardhat-config.js")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts ()
    const chainId = network.chainId
    if (chainId == 31337) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        })
        log("Mocks deployed!")
        log("---------------------------")
    }
}

module.exports.tags = ["all", "mocks"]