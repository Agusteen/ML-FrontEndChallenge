const express = require('express');
const app = express();

// *** Port ***
const PORT = process.env.PORT || 3000;

// *** Routes ***
app.use('/api/items', require('./routes/items.js'));

// *** Start server ***
app.listen(PORT, () => {
    console.log(`[*] Server started on port ${PORT}`);    
});