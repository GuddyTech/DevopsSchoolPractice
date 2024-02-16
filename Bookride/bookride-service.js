// bookride-service.js
const { Kafka } = require('kafkajs');
const express = require('express');
const app = express();
app.use(express.json());

const kafka = new Kafka({
  clientId: 'bookride-service',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

app.post('/bookride', async (req, res) => {
  const { userId, rideDetails } = req.body;
  await producer.connect();
  await producer.send({
    topic: 'bookride-topic',
    messages: [{ value: JSON.stringify({ userId, rideDetails }) }],
  });
  await producer.disconnect();
  res.status(200).send('Ride booked successfully');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Bookride service running on port ${PORT}`);
});

