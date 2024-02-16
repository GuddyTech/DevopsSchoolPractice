// payment-service.js
const { Kafka } = require('kafkajs');
const express = require('express');
const app = express();
app.use(express.json());

const kafka = new Kafka({
  clientId: 'payment-service',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

app.post('/payment/process', async (req, res) => {
  const { userId, paymentDetails } = req.body;
  await producer.connect();
  await producer.send({
    topic: 'payment-topic',
    messages: [{ value: JSON.stringify({ userId, paymentDetails }) }],
  });
  await producer.disconnect();
  res.status(200).send('Payment processed successfully');
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
