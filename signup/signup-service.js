// signup-service.js
const { Kafka } = require('kafkajs');
const express = require('express');

const kafka = new Kafka({
  clientId: 'signup-service',
  brokers: ['kafka:9092'] // Replace with your Kafka broker addresses
});

const producer = kafka.producer();
const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    await producer.connect();
    await producer.send({
      topic: 'signup-topic',
      messages: [{ value: JSON.stringify({ username, password }) }],
    });
    await producer.disconnect();
    res.status(200).send('Signup successful');
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).send('Signup failed');
  }
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Signup service running on port ${PORT}`);
});
