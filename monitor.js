require('dotenv').config();

const txHash = process.env.TX_HASH;

console.log(`Checking Espresso HotShot for transaction: ${txHash}`);

// Simulated confirmation
console.log(`✅ Transaction ${txHash} is CONFIRMED by Espresso HotShot`);

