// todo: prepare and export the client
import PinataClient from "@pinata/sdk"
import "dotenv/config"
import { Client } from "xrpl"

// https://xrpl.org/public-servers.html
const networks = {
  RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233",
  XRPL_LABS_TESTNET: "wss://testnet.xrpl-labs.com",
  RIPPLE_AMM_DEVNET: "wss://amm.devnet.rippletest.net:51233/",
  QUICKNODE: "wss://multi-proud-dream.xrp-testnet.quiknode.pro/c78077e563add07a94899869f4831459978a39c4/",
}

let xrplClient: Client

/**
 * Get the XRPL Client to interact with the XRPL Ledger
 * @returns A {@link Client}
 */
export const getXrplClient = () => {
  // todo: write the code to create and return the XRPL client
  if (!xrplClient) {
    xrplClient = new Client(networks.QUICKNODE)
  }

  return xrplClient
}

let pinataClient: PinataClient

/**
 * Get the Pinata Client
 * @returns A {@link PinataClient}
 */
export const getPinataClient = () => {
  // todo: write the code to create and return the Pinata client
}
