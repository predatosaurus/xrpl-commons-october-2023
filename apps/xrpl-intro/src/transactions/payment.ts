import { Payment } from "xrpl"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"
import { getXrplClient } from "../client"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

const client = getXrplClient()

export const sendPayment = async (props: SendPaymentProps) => {
  // todo: create the code to send a payment
  if(props.isMultisign) {
    console.log("multi sign")
  } else {
    const {txn, showLogs = true, wallet} = props

    // Step1 create payment object
    const transaction: Payment = {
      Account: wallet.address,
      TransactionType: "Payment",
      ...txn
    }

    const response = await client.submitAndWait(transaction, {
      autofill: true,
      wallet: wallet // with javascript you can just write wallet
    })

    console.log(response)
  }
}
