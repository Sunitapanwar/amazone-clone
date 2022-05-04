const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51KlWNfSHkPcVBw7L13tLWeW5PQs0NEkkr8xsbHWeUuSVSQRDp70SVYUZ1vcFCi1w79kANZgepyX2CC2ui1Mf35SO00ZtvOmSNM");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello");
});

app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;

  console.log('Payment request recieved boom>>>',total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
// app.listen(5001);
//http://localhost:5001/clone-eead5/us-central1/api