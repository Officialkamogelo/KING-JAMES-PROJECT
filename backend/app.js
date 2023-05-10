import express, { json } from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

const options = {
  method: 'GET',
};

const url = `https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/`;

const getData = async () => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

app.get('/api', async (req, res) => {
  let data = await getData();
  console.log(data);
  if (!data) {
    return res.status(404).json({ message: 'Data not found' });
  }

  return res.status(200).json({ data });
});

app.listen(5000, (req, res) => {
  console.log('server is running in port 5000');
});
