import { NFTokenCreateOffer } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"
import { autofill } from "xrpl/dist/npm/sugar"

const client = getXrplClient()

/**
 * Create an NFT Offer.
 * Important:
 * - For a SELL offer, define "Flags: NFTokenCreateOfferFlags.tfSellNFToken" and the Owner field must not be defined.
 * - For a BUY offer, "Flags" must be undefined and the Owner field must be set.
 *
 * @returns A TxResponse<NFTokenCreateOffer>.
 */

export const createOffer = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<NFTokenCreateOffer>) => {
  console.log("******* LET'S CREATE AN NFT OFFER *******")
  console.log()

  // Step1 create transaction
  const transaction: NFTokenCreateOffer = {
    Account: wallet.address,
    TransactionType: "NFTokenCreateOffer",
    ...txn
  }

  // Step2 sign and submit
  const result = await client.submitAndWait(transaction, {
    autofill: true,
    wallet
  })

  console.log(result)

  return result
}
