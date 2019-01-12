// CREATE  KEYSPACE [IF NOT EXISTS] test 

// CREATE KEYSPACE IF NOT EXISTS test WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy', 'datacenter1' : 3 };

// //CREATE  KEYSPACE [IF NOT EXISTS] restaurants 
//    // WITH REPLICATION = { 
//    //    'class' : 'SimpleStrategy', 'replication_factor' : N } 
//    //   | 'class' : 'NetworkTopologyStrategy', 
//    //     'dc1_name' : N [, ...] 
//    // }
//    // [AND DURABLE_WRITES =  true|false] ;


//    //look up data center usage

CREATE KEYSPACE sample_keyspace
WITH REPLICATION = {
'class' : 'SimpleStrategy',
'replication_factor' : 3
}


// COPY table_name [( column_list )]
// FROM 'file_name'[, 'file2_name', ...] | STDIN
// [WITH option = 'value' [AND ...]]

// COPY restaurants (id) FROM 'sample_data.csv' WITH DELIMITER='|' AND HEADER=FALSE;

// //column families

// CREATE TABLE restaurants (id UUID PRIMARY KEY);

// INSERT INTO [keyspace_name.]table_name JSON '{"column_name": value [,…]}' [DEFAULT UNSET];

// //test query syntax


// INSERT INTO test.restaurants (id, name, restaurant_photos) '{"id":0,"name":"Lehner, Schuppe and Walker","restaurant_photos":[{},{}]}';

// create table jsonvalues (id text primary key, name text, restaurant_photos list>);

// CREATE type test.photo ( map <text, text> );

// CREATE TABLE test.clients ( id int  PRIMARY KEY, name text, sales list> );


// CREATE TABLE test.fourth (
//     id int  PRIMARY KEY,
//     name text,
//     phototags  list <frozen<map<text, text>>>
// );

// set <map<text, text>>
// INSERT INTO clients JSON '{"id":0,"name":"Lehner, Schuppe and Walker","phototags":[{"photo_type":"exterior","date":"2018-12-25T12:42:32.939Z","username":"Asia","photoURL":"https://s3-us-west-1.amazonaws.com/sdc-restaurantproject-assets/images/beverage-business-chairs-903376"}]}';

// INSERT INTO secondexp (id, name, phototags) VALUES (0, 'Saratoga', [{phototype:"exterior","date":"2018-12-25T12:42:32.939Z","username":"Asia","photoURL":"https://s3-us-west-1.amazonaws.com/sdc-restaurantproject-assets/images/beverage-business-chairs-903376"}]);
 INSERT INTO thirdexp (id, name, phototags) VALUES (4, 'Katog', [{'phototype':'exterior'}, {}]);

// CREATE TYPE clients.photos ( photo_type text, date timestamp, username text, photoURL text);
// CREATE TABLE clients.client_photos ( id UUID PRIMARY KEY, lastname text, firstname text, races list<FROZEN <race>> );