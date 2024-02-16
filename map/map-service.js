// map-service.js
const { Kafka } = require('kafkajs');
const express = require('express');
const app = express();
app.use(express.json());

const kafka = new Kafka({
  clientId: 'map-service',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

app.post('/map/update', async (req, res) => {
  const { locationData } = req.body;
  await producer.connect();
  await producer.send({
    topic: 'map-topic',
    messages: [{ value: JSON.stringify({ locationData }) }],
  });
  await producer.disconnect();
  res.status(200).send('Map updated successfully');
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Map service running on port ${PORT}`);
});
