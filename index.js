const express = require('express')

const index = express()
const port = 4600

index.get('/', (req,res) => res.send('Hello, Express !'))

index.listen(port, () => console.log('Notre application Node est demarrée sur : http://localhost:${port}'))