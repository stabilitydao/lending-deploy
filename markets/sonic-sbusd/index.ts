// noinspection ES6PreferShortImport
import {
  eContractid,
  eSonicNetwork,
  IAaveConfiguration,
  IReserveParams
} from "../../helpers/types";
import AaveMarket from "../aave";
import {
  rateStrategyStableOne,
  rateStrategyStableTwo
} from "../aave/rateStrategies";

export const StabilitySonicMarket: IAaveConfiguration = {
  ...AaveMarket,
  ATokenNamePrefix: "Sonic",
  StableDebtTokenNamePrefix: "Sonic",
  VariableDebtTokenNamePrefix: "Sonic",
  WrappedNativeTokenSymbol: "wS",
  SymbolPrefix: "si",
  EModes: {},
  StkAaveProxy: {},
  ReserveFactorTreasuryAddress: {
    [eSonicNetwork.main]: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
  },
  RateStrategies: {
    rateStrategyStableOne,
    rateStrategyStableTwo,
  },
};

export const strategySbUSD: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "9000",
  liquidationThreshold: "9500",
  liquidationBonus: "10150",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "10000000",
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
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const SonicSbUSDMarket: IAaveConfiguration = {
  ...StabilitySonicMarket,
  MarketId: "Sonic Stability sbUSD isolated market gen2",
  ProviderId: 121,
  ReservesConfig: {
    ['Staked bUSD']: strategySbUSD,
    ['USDC.e']: strategyUSDC,
  },
  ReserveAssets: {
    [eSonicNetwork.main]: {
      ['Staked bUSD']: "0x451812019238785086CFAC408D8A64f06898f6f5",
      ['USDC']: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
    },
  },
  ChainlinkAggregator: {
    [eSonicNetwork.main]: {
      ['Staked bUSD']: "0xD58e2B148B59E81f51aD66E26df944df05247B14",
      ['USDC']: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
    },
  },
}
