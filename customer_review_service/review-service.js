// review-service.js
const { Kafka } = require('kafkajs');
const express = require('express');
const app = express();
app.use(express.json());

const kafka = new Kafka({
  clientId: 'review-service',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

app.post('/review/submit', async (req, res) => {
  const { userId, reviewDetails } = req.body;
  await producer.connect();
  await producer.send({
    topic: 'review-topic',
    messages: [{ value: JSON.stringify({ userId, reviewDetails }) }],
  });
  await producer.disconnect();
  res.status(200).send('Review submitted successfully');
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Review service running on port ${PORT}`);
});
