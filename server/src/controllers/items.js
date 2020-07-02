const axios = require('axios');
const config = require('../properties');

exports.getItemsByFilter = async (req, res) => {
    await axios.get(`${config.url_ML_api}search?q=${req.query.q}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.status(500);
        });

};