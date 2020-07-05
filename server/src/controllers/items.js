const axios = require('axios');
const config = require('../properties');

exports.getItemsByFilter = async (req, res) => {
    await axios.get(`${config.url_ML_api}search?q=${req.query.q}`)
        .then(response => {
            var responseData = response.data;

            var categories = getCategories(responseData);
            var items = responseData.results.map(item => formatItemResult(item));

            var itemListModel = {
                author: config.author,
                categories,
                items
            };

            res.json(itemListModel);
        })
        .catch(error => {
            console.log(error);
            res.status(500);
        });
};

exports.getItemById = async (req, res) => {
    await axios.get(`${config.url_ML_api_items}${req.params.id}`)
        .then(async response => {
            var responseData = response.data;

            var itemDetail = formatItemResult(responseData);
            itemDetail.sold_quantity = responseData.sold_quantity;
            itemDetail.description = await getItemDescription(responseData.id);            

            var itemDetailModel = {
                author: config.author,
                item: itemDetail
            };

            res.json(itemDetailModel);
        })
        .catch(error => {
            console.log(error);
            res.status(500);
        });
};

// **** Private functions ****

const getCategories = responseData => responseData.filters
        .find(filter => filter.id == "category")
        .values
        .map(category => category.name);

const formatItemResult = (item) =>  itemsFormatted = {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: null
        },
        picture: item.pictures ? item.pictures[0].url : item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
    };

const getItemDescription = async (itemId) => await axios.get(`${config.url_ML_api_items}${itemId}/description`)
    .then(response => response.data.plain_text)
    .catch(error => {
        console.log(error);
        res.status(500);
    });
