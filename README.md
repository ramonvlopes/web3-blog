This is a Decentralized Blog Platformm, based on Smart Contract and created with:

 - NextJS
 - Ethers
 - Hardhat
 - NodeJS v18

## Getting Started

First, install the dependences:

```bash
npm install
```

Now, you need to start the Node Hardhat server to create the Wallet enviroment.

```bash
npx hardhat node
```

#### You don't close the server while the app in execution.

After the step, needs to realize the Smart Contract deployment.

```bash
npx hardhat run --network localhost scripts/deploy.ts
```

And...

Now, the last step is start the Blog App.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Greetings

Thanks for taking on the app.