import { AccountSet } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

/**
 * Define properties of an account.
 */
export const accountSet = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<AccountSet>) => {
  console.log("******* LET'S CREATE AN ACCOUNT SET *******")
  console.log()

  // Step1 transaction
  const transaction: AccountSet = {
    Account: wallet.address,
    TransactionType: "AccountSet",
    ...txn
  }

  // step2 sign and submit
  const response = await client.submitAndWait(transaction, {
    autofill: true,
    wallet
  })

  console.log(response)

  return response
}
