// noinspection ES6PreferShortImport
import {
  eContractid,
  eSonicNetwork,
  IAaveConfiguration,
  IReserveParams
} from "../../helpers/types";
import {
  rateStrategyStableOne,
} from "../aave/rateStrategies";
import {StabilitySonicMarket} from "../sonic-sbusd";

export const strategyacUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "9000",
  liquidationThreshold: "9500",
  liquidationBonus: "10200",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "2000000",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyacscUSD: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "9000",
  liquidationThreshold: "9500",
  liquidationBonus: "10200",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "2000000",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyacwS: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "9000",
  liquidationThreshold: "9500",
  liquidationBonus: "10200",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "2000000",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "8000",
  liquidationThreshold: "8500",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategywS: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "8000",
  liquidationThreshold: "8500",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const SonicCredixMarket: IAaveConfiguration = {
  ...StabilitySonicMarket,
  MarketId: "Sonic Stability Credix market",
  ProviderId: 105,
  ReservesConfig: {
    ['acUSDC']: strategyacUSDC,
    ['acscUSD']: strategyacscUSD,
    ['acwS']: strategyacwS,
    ['USDC']: strategyUSDC,
    ['scUSD']: strategyUSDC,
    ['wS']: strategywS,
  },
  ReserveAssets: {
    [eSonicNetwork.main]: {
      ['acUSDC']: "0xEc26D07B5c0a99D3690375A2CC229E5B943e7726",
      ['acscUSD']: "0xa175EE511de429275d26Ac5420fAbeb60C67C372",
      ['acwS']: "0x95cAF53667D912F3491173fd4712450dFcf4c89f",
      ['USDC']: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
      ['scUSD']: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
      ['wS']: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
    },
  },
  ChainlinkAggregator: {
    [eSonicNetwork.main]: {
      // https://data.chain.link/feeds/sonic/sonic/usdc-usd
      ['acUSDC']: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
      // https://data.chain.link/feeds/sonic/sonic/scusd-usd
      ['acscUSD']: "0xACE5e348a341a740004304c2c228Af1A4581920F",
      // https://data.chain.link/feeds/sonic/sonic/s-usd
      ['acwS']: "0xc76dFb89fF298145b417d221B2c747d84952e01d",
      // https://data.chain.link/feeds/sonic/sonic/usdc-usd
      ['USDC']: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
      // https://data.chain.link/feeds/sonic/sonic/scusd-usd
      ['scUSD']: "0xACE5e348a341a740004304c2c228Af1A4581920F",
      // https://data.chain.link/feeds/sonic/sonic/s-usd
      ['wS']: "0xc76dFb89fF298145b417d221B2c747d84952e01d",
    },
  },
}
