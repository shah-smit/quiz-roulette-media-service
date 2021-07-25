const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/avatar/:imagename', function (req, res) {
    res.sendFile(__dirname + `/image/avatar/${req.params.imagename}.gif`);
});

app.get('/avatarvid/:imagename', function (req, res) {
    res.sendFile(__dirname + `/image/video/${req.params.imagename}.mp4`);
});
app.get('/avatarpng/:imagename', function (req, res) {
    res.sendFile(__dirname + `/image/png/${req.params.imagename}.png`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})