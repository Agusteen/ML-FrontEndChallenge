const express = require('express');
const app = express();

// *** Port ***
app.set('port', 3000);

// *** Routes ***
app.use(require('./routes/items.js'));

// *** Start server ***
app.listen(app.get('port'), () => {
    console.log(`[*] Server started on port ${app.get('port')}`);    
});