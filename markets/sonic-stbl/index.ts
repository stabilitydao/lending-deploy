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

export const strategySTBL: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "4000",  // 40%
  liquidationThreshold: "6500", // 65%
  liquidationBonus: "10150",    // 1.5%
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
  supplyCap: "10000", // max supply of USDC is limited by 10k
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const SonicSTBLUSDMarket: IAaveConfiguration = {
  ...StabilitySonicMarket,
  MarketId: "Sonic STBL-USD isolated market", // name is updated
  ProviderId: 123, // new unique id
  ReservesConfig: {
    ['STBL']: strategySTBL,
    ['USDC']: strategyUSDC,
  },
  ReserveAssets: {
    [eSonicNetwork.main]: {
      ['STBL']: "0x78a76316F66224CBaCA6e70acB24D5ee5b2Bd2c7", // STBL
      ['USDC']: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
    },
  },
  ChainlinkAggregator: {
    [eSonicNetwork.main]: {
      ['STBL']: "0x3c45Fdad0519Bce8D011552F8B11dD5Fa651200C", // new price oracle
      ['USDC']: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
    },
  },
}
