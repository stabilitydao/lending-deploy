# Stability Lending Markets

## Sonic

### Stream market (xUSD)

```
┌───────────────────────────────────────┬──────────────────────────────────────────────┐
│                (index)                │                   address                    │
├───────────────────────────────────────┼──────────────────────────────────────────────┤
│     PoolAddressesProviderRegistry     │ '0xb5Af26bEfa290F224743c9AAB5bf4859ACabDA19' │
│              SupplyLogic              │ '0x811F0c3Ca26b88fE350b3C37Af52C2E60f29BE06' │
│              BorrowLogic              │ '0x85EA7B7829F6e891B7c9850BDA73fcAF4ea423B4' │
│           LiquidationLogic            │ '0x556A2d6097A9f88a343DD71f12FC8565aBB61d55' │
│              EModeLogic               │ '0x43b828d1Eb9C8cd5e8c6a34Ee51BA97E88273fF7' │
│              BridgeLogic              │ '0x88df0bA9fEB76Dc23e85D4469B3DBcF0E3108137' │
│           ConfiguratorLogic           │ '0xC6c20DD1B41506312d4867fddb9a052876Ad3F12' │
│            FlashLoanLogic             │ '0xAF5e22EC2fBC805Aa36E7e027c1238EBF387EF45' │
│               PoolLogic               │ '0xc139666302679b890B05B02eD573dB3654107Db2' │
│   PoolAddressesProvider-Sonic_xUSD    │ '0xCc31959682Ad726A9bcde9bbD41c89f36c03E743' │
│      PoolDataProvider-Sonic_xUSD      │ '0x08Dd992108ef0a82E8aDC633bcB3A20092e17E0B' │
│          Pool-Implementation          │ '0x77b7f2600b819c186C5735AC496BB4cf9bbAA997' │
│    PoolConfigurator-Implementation    │ '0xc3F17Bc92aed0a1914070B1f92785bfea7c4c2F4' │
│          ReservesSetupHelper          │ '0x006D758313845305c3A8bE1eBD99874c90C3B062' │
│         ACLManager-Sonic_xUSD         │ '0xCEFd817eE776d8210AF5e128b3BAF3aa2CaB08CB' │
│         AaveOracle-Sonic_xUSD         │ '0xaeD4fc5fa11812233200cE3b82aaf334cC944Ec3' │
│         Pool-Proxy-Sonic_xUSD         │ '0x1f672BD230D0FC2Ee9A75D2037a92CC1225A4Ad8' │
│   PoolConfigurator-Proxy-Sonic_xUSD   │ '0xF5C81E07363cdD10171cAc8537727FE8aAdCA9a3' │
│            EmissionManager            │ '0x287Be5c33cE5a08068447796F71659586580dCC5' │
│      IncentivesV2-Implementation      │ '0xbF346F5bF78DAeDe8A7bFE356d31561b84a443c1' │
│            IncentivesProxy            │ '0x25902648F53fa98b31F4b476F67246799BF4D4f5' │
│           AToken-Sonic_xUSD           │ '0x3824Bc80021B6eB08ca08BD15234829A1eF62805' │
│   DelegationAwareAToken-Sonic_xUSD    │ '0xB36E7FA9761e215B94e1c2e71919Ba7eF54C0A71' │
│      StableDebtToken-Sonic_xUSD       │ '0xB38D4859C31111fc926300a1a3Baff8deD53A3d6' │
│     VariableDebtToken-Sonic_xUSD      │ '0xd27a3302c206a26fDbFBBbD344ED0454B9177D2E' │
│ ReserveStrategy-rateStrategyStableOne │ '0xB31ed26351259786E13cf265b2CD60495974cBBc' │
│ ReserveStrategy-rateStrategyStableTwo │ '0x61106d8135c9310317480952B74FB5C8CA2D7dD2' │
│        xUSD-AToken-Sonic_xUSD         │ '0xD56cA83ad45976b3590B53AdE167DE27b89683D8' │
│   xUSD-VariableDebtToken-Sonic_xUSD   │ '0xdb0e21733316005d96e0e1647c352b32340Ee5Ee' │
│    xUSD-StableDebtToken-Sonic_xUSD    │ '0x482077279156aBB7Af14feC3389F22D5F1cF40e0' │
│       USDC.e-AToken-Sonic_xUSD        │ '0x7A41DF9418509725AB5637f1984F3e6d6E6C899b' │
│  USDC.e-VariableDebtToken-Sonic_xUSD  │ '0x47b9993135cB21D477cd197063d88d1B075ea277' │
│   USDC.e-StableDebtToken-Sonic_xUSD   │ '0x24dF2c2794969A8746Cd2667767561A979f5e999' │
│         WrappedTokenGatewayV3         │ '0xBEB0822A79FAbF01Cac932BC924e1734147Ee797' │
│         WalletBalanceProvider         │ '0x009eFeb54f27D24C051A08D3bd2957C095F483Cc' │
│       UiIncentiveDataProviderV3       │ '0xfB6f63095df680bED9177F4E36Fd02a3a06A73A4' │
│         UiPoolDataProviderV3          │ '0x8ea28227554a921f55a3b517a5DF15038300d3B0' │
└───────────────────────────────────────┴──────────────────────────────────────────────┘
```

### StableJack market (YT-scUSD)

```
┌──────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                  │                   address                    │
├──────────────────────────────────────────┼──────────────────────────────────────────────┤
│      PoolAddressesProviderRegistry       │ '0x8A8418Fc39928b7CdC1fd218995549F6675a7d61' │
│               SupplyLogic                │ '0xf641145f09D15E39A103D3eD04ff36E34aC7b387' │
│               BorrowLogic                │ '0xB9D4e7f1427945f2BA967C576eb3dc37aA2f1A95' │
│             LiquidationLogic             │ '0x168CDE1848e05eE7cDb094568A38D1ec0F49b510' │
│                EModeLogic                │ '0xCBBb46618575Ad5874b691585d807B9FfC40f032' │
│               BridgeLogic                │ '0xcd88FF8803929a7aef83B847cF23D656F468A5bB' │
│            ConfiguratorLogic             │ '0x7333eA391D39D1c16AE3DA2D3F68Ac1d1Df52c8f' │
│              FlashLoanLogic              │ '0xFfC45C0cb573f15eC291155ABEC654fd216Da367' │
│                PoolLogic                 │ '0xbBa5A26F765c9e16a7F0fB18710821C44edA27a4' │
│   PoolAddressesProvider-Sonic_YTscUSD    │ '0x3E3aAB589Ba86fB8f40CEB69332bb44E9B1411D4' │
│      PoolDataProvider-Sonic_YTscUSD      │ '0x14DF199Dc8406D1C2F87499743F3e88d17976628' │
│           Pool-Implementation            │ '0x56081eb97DeAc008D999120Cfc9062E9890989c7' │
│     PoolConfigurator-Implementation      │ '0x2b488908447F622e5D5d658bac384d2371D6701F' │
│           ReservesSetupHelper            │ '0x08e7a80D1e7478F2a35fb584ad490bd6f20eDF4C' │
│         ACLManager-Sonic_YTscUSD         │ '0x85D790f7C73f5B2A49EdCb65CCA9a8A9B10586f8' │
│         AaveOracle-Sonic_YTscUSD         │ '0x29aBac11A37B5fCBA9D0AAa34447f8937F1B6F20' │
│         Pool-Proxy-Sonic_YTscUSD         │ '0x4895151C8eB560c0DE6Bd29A3916610DdfCEB094' │
│   PoolConfigurator-Proxy-Sonic_YTscUSD   │ '0x76C64A0367Ea9693D67CaD81FAc3B7F6dc446c11' │
│             EmissionManager              │ '0x6178938d47BeF54BaEB8b568405eA0b8F69592B1' │
│       IncentivesV2-Implementation        │ '0x8Fdf884611DE54501D46aD8F22fa9a0a0d7f153f' │
│             IncentivesProxy              │ '0x98Ccc023B2deef247307B87A23d5b95B86c12AFA' │
│           AToken-Sonic_YTscUSD           │ '0xBB6A8B4D47eFa27D15d4F2d6739a63634f43C401' │
│   DelegationAwareAToken-Sonic_YTscUSD    │ '0x630165EBdaBaAF0Fc545c95690C479897C907c5D' │
│      StableDebtToken-Sonic_YTscUSD       │ '0x1D5a2Ae1820EaCF6dc2bc8F6B75BD190695d7F33' │
│     VariableDebtToken-Sonic_YTscUSD      │ '0xeB92B33d8c7645046F0A4b65331A61AE26e7D38e' │
│  ReserveStrategy-rateStrategyStableOne   │ '0x140A023bC15A6F06A8E8ee52a229f1fded6EEDb4' │
│  ReserveStrategy-rateStrategyStableTwo   │ '0x0778671fbd150cC806B725b68cA7D1C57c088364' │
│      YT-scUSD-AToken-Sonic_YTscUSD       │ '0xCBe6d5C0b82b41Fe4565196070151cCe176FbA7c' │
│ YT-scUSD-VariableDebtToken-Sonic_YTscUSD │ '0x519Cb01877399978Bf5D750c3CFF66d77044D848' │
│  YT-scUSD-StableDebtToken-Sonic_YTscUSD  │ '0x7Ee009D4e47CFa94AEf393591A16AeefB98Bc151' │
│       USDC.e-AToken-Sonic_YTscUSD        │ '0xD267A646213e859323D8765Cbb3d00befED7036b' │
│  USDC.e-VariableDebtToken-Sonic_YTscUSD  │ '0xff284350472D5a4761324460Ed7B9Bc0396D242B' │
│   USDC.e-StableDebtToken-Sonic_YTscUSD   │ '0x2Ea2d5719D35AB748ca775D72b1b0D5Fa43e1acA' │
│        scUSD-AToken-Sonic_YTscUSD        │ '0x2b16Ed7D7F1FBD0C75CEB5A315dEEbaf4831AfE8' │
│  scUSD-VariableDebtToken-Sonic_YTscUSD   │ '0x8E2178eF0b472d15FaAcA46D708bEC52B4776937' │
│   scUSD-StableDebtToken-Sonic_YTscUSD    │ '0x536816C73ba5eD0A708A7A1e546d45b4740311da' │
│          WrappedTokenGatewayV3           │ '0x1528CF6A8Cf43399114F92802de0ef0D13577418' │
│          WalletBalanceProvider           │ '0x71281A078f8C158015f2cda7d8b5283B6890FA0c' │
│        UiIncentiveDataProviderV3         │ '0xD8491E15341f1548Aa01AaD1BB39924f0214Dc77' │
│           UiPoolDataProviderV3           │ '0x2da71d5Ad07C94A1f40b71D1c34141b5a22a4417' │
└──────────────────────────────────────────┴──────────────────────────────────────────────┘
```

### Brunch market (sbUSD)

```
┌───────────────────────────────────────┬──────────────────────────────────────────────┐
│                (index)                │                   address                    │
├───────────────────────────────────────┼──────────────────────────────────────────────┤
│        ACLManager-Sonic_sbUSD         │ '0xf890B1C2BDcD024Aa78cBcE0f993573efD060abB' │
│          AToken-Sonic_sbUSD           │ '0x44dB3500a90D5484454faDfB5Abf9eBbE3E0e874' │
│        AaveOracle-Sonic_sbUSD         │ '0x425a69e36c9d5B2F9058f5FD0785BBD4aEb4F1CE' │
│              BorrowLogic              │ '0x3d7cefa953efee1A58D239666197504E34369310' │
│              BridgeLogic              │ '0x200417d45a42D3Fe0A785A5EF72F254CD67294b2' │
│           ConfiguratorLogic           │ '0xA87BfA9F9B9CE04ef0F1D3c30791617a7991951A' │
│   DelegationAwareAToken-Sonic_sbUSD   │ '0x9893fBf0850A4de62D56E3a07869E0527353F34e' │
│              EModeLogic               │ '0xf2D39F509AbA3612DB722DAE3CB57988dBAECcCa' │
│            EmissionManager            │ '0x33f00dF1D71C1DA662B57d9b6D8b39AACC5b1C9f' │
│            FlashLoanLogic             │ '0xda134Bbd5218aE682516BCccA879824bc7f1D0CD' │
│            IncentivesProxy            │ '0x1635bcaa0AE3F6fB50ef0CFB56827b94Cd6925EF' │
│      IncentivesV2-Implementation      │ '0x832F9a25588Ac7bCBDe97f2970A71Dc96E5e746a' │
│           LiquidationLogic            │ '0x1132546d384Fda1285091F207e9A3Ca7173E3636' │
│          Pool-Implementation          │ '0x933F7Bb9A12894ac04377De5C8c5Ae7FA00ADc10' │
│        Pool-Proxy-Sonic_sbUSD         │ '0x680F8A574b0273f26A314cA61466c0A4f1E2d95e' │
│   PoolAddressesProvider-Sonic_sbUSD   │ '0xC0512947845cCe3a32e58Efc3B4526Dd1D11F6af' │
│     PoolAddressesProviderRegistry     │ '0x831Ac8a37562A5e5761F7a4932d573EF8F141a39' │
│    PoolConfigurator-Implementation    │ '0x1f3a8c7b19d8C2148BFe62A967f77F182972D7D2' │
│  PoolConfigurator-Proxy-Sonic_sbUSD   │ '0x60625AA9c3984075A9bb73FbBbc6aA7F277c2652' │
│     PoolDataProvider-Sonic_sbUSD      │ '0x7c0F1fdB80Ff25d9E5AdfA86b5Dad8c4EF93Ef90' │
│               PoolLogic               │ '0xa24367b996A2A840FCe48C9dDC7E5754EADBE328' │
│ ReserveStrategy-rateStrategyStableOne │ '0xDfF93f1920D45d81fa91fe5F1d9b36e1C132549A' │
│ ReserveStrategy-rateStrategyStableTwo │ '0xAeF5558B7F93B0f61457bd967fc038B2987F83a4' │
│          ReservesSetupHelper          │ '0xc74702c327e6C3dAcb6B38b0b1eF46259E84b7E3' │
│      StableDebtToken-Sonic_sbUSD      │ '0xD0F01b518704e06Cef0D0fa462616F74f9BFf0ff' │
│              SupplyLogic              │ '0x23a63c6866bd20DaC16F419B9965e3Fdd6bEea70' │
│        USDC-AToken-Sonic_sbUSD        │ '0xdDfBF8e25Be0e36351dE8C2a811A0319Ec42E0fD' │
│   USDC-StableDebtToken-Sonic_sbUSD    │ '0x39cCfd764B2bf3D7e8536C2a39012070821f6E67' │
│  USDC-VariableDebtToken-Sonic_sbUSD   │ '0xbF2B25c159e9892d92CD3CB98bFc898E7Da0DDD2' │
│       UiIncentiveDataProviderV3       │ '0x0c8994036b6b9228F4b486120789d95F48A73d5D' │
│         UiPoolDataProviderV3          │ '0x991dE4D59eBD7961dD568374792CF74092D11b0a' │
│     VariableDebtToken-Sonic_sbUSD     │ '0xe814A586f5De28A258A4dd8E8FB9434EFDa9d0C0' │
│         WalletBalanceProvider         │ '0xfB4a09cf579A1dd8e32d07c0eee37043eF3Ff271' │
│         WrappedTokenGatewayV3         │ '0x7B41ed35bB96c193202eb8F79B8f8a8B05d45234' │
│       sbUSD-AToken-Sonic_sbUSD        │ '0xe8CB8EE92B91C5c4ccc282Ff7c88Ec3C71fa1c8a' │
│   sbUSD-StableDebtToken-Sonic_sbUSD   │ '0xd12A594c163d5194a8cdBd94A28711E09F1B6549' │
│  sbUSD-VariableDebtToken-Sonic_sbUSD  │ '0x86e9523Be523d8e170B9B2b812D8C7186cB51399' │
└───────────────────────────────────────┴──────────────────────────────────────────────┘
```

## How to

```shell
npm i
npm run compile
cp .env.example .env
vim .env
HARDHAT_NETWORK=sonic npx hardhat deploy
# Verify automatic
npx hardhat --network sonic etherscan-verify --api-url https://api.sonicscan.org/
# Verify contracts with undetectable libs
# setup libraries files
npx hardhat --network sonic verify <FlashLoanLogic_contact-addr> --libraries libraries_for_FlashLoanLogic.js
npx hardhat --network sonic verify <Pool-Implementation_contact-addr> --libraries libraries_for_poolimpl.js "<arg>"
npx hardhat --network sonic verify <PoolConfigurator-Implementation_contact-addr> --libraries libraries_for_PoolConfigurator-implementation.js
# Verify aToken proxy contacts
npx hardhat --network sonic verify <contact-addr> "<PoolConfigurator-Proxy>"
```
