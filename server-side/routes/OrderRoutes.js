import express, { request } from "express";
import midtransclient from "midtrans-client";

const router = express.Router();


router.post("/process-order", async (req, res) => {
  try {

    const snap = new midtransclient.Snap({
      isProduction: false,
      serverKey: "YOUR SERVER KEY",
      clientKey: "YOUR CLIENT KEY",
    });


    const parameter = {
      item_details: {
        name: req.body.name,
        price: req.body.price,
        quantity: 1,
      },
      transaction_details: {
        order_id: req.body.order_id,
        gross_amount: req.body.price * 1,
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      const dataOrder = {
        response: JSON.stringify(transaction),
      };

      const token = transaction.token;

      res
        .status(200)
        .json({ message: "Transaction Successfully", dataOrder, token: token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
