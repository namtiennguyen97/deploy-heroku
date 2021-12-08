const express = require('express')
const app = express()
// const host = 'https://fleetingwords.herokuapp.com/';
let port = 443
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})