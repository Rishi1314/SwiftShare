import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hey There')
})

app.listen(4000, () => {
    console.log(`Server running on port 4000`);
    
})