const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port_number = process.env.PORT || 5000;

app.get('/getvalue', (req, res) => {
  const client = new Client({
    connectionString: 'postgres://cyjarvvduwngrv:5741b3fdb3f8b805dd919e050a47b5292a5ce498da1a757e9f11dabaa7dfb5d4@ec2-52-71-69-66.compute-1.amazonaws.com:5432/d9l7lvmkdps1vc',
    ssl: {
      rejectUnauthorized: false
    }
  });
  client.connect();

  client.query('SELECT * FROM staff', (err, result) => {
    if (err) throw err;
    res.send(result.rows);
    // client.end();
  });
});

app.listen(port_number, () => {
  console.log('Example app listening on port 4000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.
