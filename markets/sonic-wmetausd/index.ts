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

export const strategywmetaUSD: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "9700",
  liquidationThreshold: "9850",
  liquidationBonus: "10150",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2500",
  supplyCap: "10000000",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "0",
  liquidationThreshold: "0",
  liquidationBonus: "0",
  liquidationProtocolFee: "0",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const SonicwmetaUSDMarket: IAaveConfiguration = {
  ...StabilitySonicMarket,
  MarketId: "Sonic Stability USD isolated market gen2",
  ProviderId: 122,
  ReservesConfig: {
    ['wmetaUSD']: strategywmetaUSD,
    ['USDC']: strategyUSDC,
  },
  ReserveAssets: {
    [eSonicNetwork.main]: {
      ['wmetaUSD']: "0xAaAaaAAac311D0572Bffb4772fe985A750E88805",
      ['USDC']: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
    },
  },
  ChainlinkAggregator: {
    [eSonicNetwork.main]: {
      ['wmetaUSD']: "0x440A6bf579069Fa4e7C3C9fe634B34D2C78C584c",
      ['USDC']: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
    },
  },
}
