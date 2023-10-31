import "dotenv/config"
import { getXrplClient } from "./client"
import { WALLET_1, WALLET_2 } from "./wallets"
import { acceptOffer, accountSet, createEscrow, createOffer, finishEscrow, mintNft, sendPayment } from "./transactions"
import { NFTokenCreateOfferFlags, PaymentFlags, convertStringToHex, isoTimeToRippleTime, xrpToDrops } from "xrpl"
import dayjs from "dayjs"
import { generateConditionAndFulfillment } from "./helpers"

// const pinataClient = getPinataClient()
const xrplClient = getXrplClient()

// const { PINATA_GATEWAY } = process.env

const main = async () => {
  await xrplClient.connect()

  // await sendPayment({
  //   txn: {
  //     Amount: xrpToDrops(10),
  //     Destination: WALLET_2.address
  //     // Destination: "rUcwW5rsjjB6CQJpeuUsSkE4jV5GReaSTV"
  //   },
  //   wallet: WALLET_1
  // })

  // await mintNft({
  //   txn: {
  //     URI: "https://media.giphy.com/media/k7BKQuHGVzqjbWfkEx/giphy.gif",
  //     NFTokenTaxon: 0
  //   },
  //   wallet: WALLET_1
  // })

  // await createOffer({
  //   txn: {
  //     Flags: NFTokenCreateOfferFlags.tfSellNFToken,
  //     NFTokenID: "000800007F4FE1F5EFB470A111A4C01BD29337DFD4D42CDA5B974D9F00000004",
  //     Amount: xrpToDrops(1500)
  //   },
  //   wallet: WALLET_1
  // })

  // await acceptOffer({
  //   txn: {
  //     NFTokenSellOffer: "38CFAFD4702F4D6BEBB97CBF811182673E0759A9035CA6671BC3740FB4C0D872",
  //   },
  //   wallet: WALLET_1
  // })

  // const finishAfter = dayjs().add(10, "minutes").toISOString()
  // const cancelAfter = dayjs().add(1, "hour").toISOString()

  // const {condition, fulfillment} = generateConditionAndFulfillment()

  // await createEscrow( {
  //   txn: {
  //     Destination: "rUcwW5rsjjB6CQJpeuUsSkE4jV5GReaSTV",
  //     // FinishAfter: isoTimeToRippleTime(finishAfter),
  //     Amount: xrpToDrops(200),
  //     Condition: condition,
  //     CancelAfter: isoTimeToRippleTime(cancelAfter)
  //   },
  //   wallet: WALLET_1
  // })

  // await finishEscrow( {
  //   txn: {
  //     OfferSequence: 42475085,
  //     Owner: "rUcwW5rsjjB6CQJpeuUsSkE4jV5GReaSTV",
  //     Condition: "A02580200C9A6E9F98F7F37F475487D4C266544AAD144E3502D13C93FA142EBE5C2C6765810120",
  //     Fulfillment: "A022802072DD7E6D7F83E6AF2671398F4596DDD587023681341A573AE64E4C9F6B872ED0"
  //   },
  //   wallet: WALLET_1
  // })

  // await accountSet( {
  //   txn: {
  //     Domain: convertStringToHex("https://nicolas.com")
  //   },
  //   wallet: WALLET_1
  // })

  // const response = await xrplClient.request({
  //   account: WALLET_1.address,
  //   command: "account_info"
  // })

  console.log(response)

  await xrplClient.disconnect()
}

 main()
