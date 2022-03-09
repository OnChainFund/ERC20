# 發行自己的 ERC20 token

## 步驟

### 1. 安裝環境
install git(版本管理工具): https://git-scm.com/

install node(是一个基於Chrome V8 引擎的JavaScript 運行環境): https://nodejs.org/en/download/

install yarn(套件管理工具): https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

### 2. 前置準備
創建package.json
```
yarn init
```
下載 hardhat
```
// js 的 solidity 編譯,部署,測試以太坊(EVM兼容鏈)應用的開發環境
yarn add --dev hardhat
// 合約標準庫的套件
yarn add --dev @openzeppelin/contracts 
// 把重要資料儲存在 .env 檔案中
yarn add --dev dotenv
// 認證合約
yarn add @nomiclabs/hardhat-etherscan --dev
```
開始hardhat專案
```
yarn hardhat
//選擇Create a basic sample project
```

### 3. 建構 ERC20 token
到openzeppelin(智能合約標準庫)去尋找ERC20 token
wizard: https://docs.openzeppelin.com/contracts/4.x/wizard

部署測試網需要：
alchemy api key: https://www.alchemy.com/
rinkeby private key: https://metamask.io/
etherscan api: https://etherscan.io/
rinkeby faucet(領取測試網代幣): https://faucets.chain.link/rinkeby

部署：
```
yarn hardhat run scripts/deploy.js --network rinkeby
```

### 4. 查看鏈上數據
etherscan: https://rinkeby.etherscan.io/

認證
```
yarn hardhat verify --network rinkeby <contract_address> 
```

範例：https://rinkeby.etherscan.io/address/0x83F363A16E1E89720a8240702DF0772d9aA39dB1#code

### 自由練習(加分)
發幣到不同區塊鏈上 ex.雪崩測試網
```
yarn hardhat run scripts/deploy.js --network fuji
yarn hardhat verify --network fuji <contract_address> 
```
網址：https://testnet.snowtrace.io/address/0x379efA9DBBBa99E401a754d7dFC86E5B6Ea2390C#code