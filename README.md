# Espresso HotShot Rollup Monitor - Build & Brew Hackathon

## Overview
This project is a Rollup confirmation tracker designed for the Espresso Build & Brew Hackathon.  
It simulates fetching transaction confirmation status from the Espresso HotShot Decaf endpoint.

## Features
- Node.js application running inside Docker
- Reads the transaction hash from `.env`
- Outputs simulated confirmation status
- Designed for the Caffeinate & Code - Core Rollup Challenge

## Project Configuration
Create a `.env` file with the following content:
HOTSHOT_QUERY_URL=https://hotshot-query.decaf.espressosys.com/
TX_HASH=0x32aabdc343b926601efd19ffadf5ea3203ac71fc8be7616c13c9ca234bc8f396

## How to Run
1. Clone the repository
2. Run Docker Compose:
docker-compose up --build

## Example Output
Checking Espresso HotShot for transaction: 0x32aabdc343b926601efd19ffadf5ea3203ac71fc8be7616c13c9ca234bc8f396
✅ Transaction 0x32aabdc343b926601efd19ffadf5ea3203ac71fc8be7616c13c9ca234bc8f396 is CONFIRMED by Espresso HotShot

## Submission Details
- VPS Server IP: 5.75.184.242
- Chain ID / Namespace: 421617 (simulated)
- Transaction Hash: 0x32aabdc343b926601efd19ffadf5ea3203ac71fc8be7616c13c9ca234bc8f396
- GitHub Repo: https://github.com/Pricstas/Espresso-HotShot-Monitor
- Connected RPC: https://hotshot-query.decaf.espressosys.com/

## Note
This project simulates confirmation reading for demonstration purposes and hackathon submission.
