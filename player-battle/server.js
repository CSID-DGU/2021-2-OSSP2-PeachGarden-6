const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/hi', (req, res) => {
    res.send('kiki')
})

app.listen(port, () => {
    console.log('listen test http://localhost:${port}')
})