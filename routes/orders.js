const express = require("express");
const router = express.Router();

const buy = async (req, res) => {
  const { TYPE, QTY, PRODUCT, STAG, SYMBOL } = req.body;
  console.log("TYPE:", TYPE, " QTY:", QTY, " PRODUCT: ", PRODUCT, " STAG:", STAG, " SYMBOL:", SYMBOL)
    try {
      return res.status(200).json({
        success: true,
        body: req.body,
      });

    } catch (error) {
      console.error("Unable to place order:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
}

router.post("/buy", buy);

module.exports = router;
