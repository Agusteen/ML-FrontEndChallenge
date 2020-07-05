const express = require('express');
const app = express();
const cors = require('cors');

// *** Port ***
const PORT = process.env.PORT || 3000;

app.use(cors());

// *** Routes ***
app.use('/api/items', require('./routes/items.js'));

// *** Start server ***
app.listen(PORT, () => {
    console.log(`[*] Server started on port ${PORT}`);    
});