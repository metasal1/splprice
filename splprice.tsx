const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

app.get('/price/:tokenId', async (req, res) => {
    try {
        const { tokenId } = req.params;
        const response = await axios.get(`https://api.jup.ag/price/v2?ids=${tokenId}`);
        const price = response.data.data[tokenId].price;
        res.send(price);
    } catch (error) {
        res.status(500).send('Error fetching price');
    }
});

app.get('/', async (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
