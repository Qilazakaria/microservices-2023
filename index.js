const express = require('express');
const { Client } = require('pg');

const app = express();
const port_number = process.env.PORT || 5000;

const client = new Client({
  connectionString: 'postgres://pasbivpbrzrvtt:3ca4c3f0167b8137b7bf38383ee29075f8df3b5c7e87a6cfc1859391d7ff89bd@ec2-34-194-73-236.compute-1.amazonaws.com:5432/dh6jb4b8j0cp6',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/', (req, res) => {
  client.connect();

  client.query('SELECT * FROM staff', (err, result) => {
    if (err) throw err;
    res.send(result.rows);
    client.end();
  });
});

app.listen(port_number, () => {
  console.log('Example app listening on port 4000!');
});

//Run app, then load http://localhost:4000 in a browser to see the output.