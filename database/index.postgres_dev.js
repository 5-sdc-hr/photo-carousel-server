
const pgp = require('pg-promise')();


//const config = require('./config.js');

var conString = "postgres://lindentree:margarita@ec2-52-87-161-49.compute-1.amazonaws.com:5432/sdc";
var db = pgp(conString);
// let db = pgp(config);

//get all photos route 

//var altQuery = `SELECT phototags FROM restaurants WHERE ID = ${restaurantID}`
const getRestaurantInfo = (restaurantID, callback) => {
  //let id = restaurantID.toString()
  //console.log("query", restaurantID)
  db.query(`SELECT * FROM restaurants WHERE ID = ${restaurantID}`)
   .then((results) => callback(null, results))
   .catch(err => callback(err));
}

//update restaurant photos route 
//need to pull old info and compare against new input
//add new restaurant(s) route

//-------------------------------------------------------------------
//database curation and maintenance
//remove restaurant(s) route, should not be done carelessly
const deleteRestaurant = (restaurantID, callback) => {
  db.query("DELETE FROM restaurants WHERE ID = 1000")
    .then(() => callback(null))
    .catch(err => callback(err));
};

module.exports = {
  getRestaurantInfo,
  deleteRestaurant,
};