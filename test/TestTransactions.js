const MattCoin = artifacts.require('MattCoin');

contract('MattCoin', async () => {
    it("Should put 10 MattCoin in the first account", async () => {

        let instance = await MattCoin.deployed();
        let minter = await instance.minter();

        let previousBalance = await instance.get(minter);
        let minted = await instance.mint(minter, 10);
        let currentBalance = await instance.get(minter);
        assert.equal(previousBalance.valueOf(), 0);
        assert.equal(currentBalance.valueOf(), 10);

        minted = await instance.mint(minter, 10);
        currentBalance = await instance.get(minter);
        assert.equal(currentBalance.valueOf(), 20);
    });
});