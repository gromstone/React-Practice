var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "La verne",
  "last_name": "Bill",
  "email": "lbill0@nature.com",
  "gender": "Female",
  "ip_address": "143.250.151.250"
}, {
  "id": 2,
  "first_name": "Pen",
  "last_name": "Klosges",
  "email": "pklosges1@drupal.org",
  "gender": "Male",
  "ip_address": "234.84.230.83"
}, {
  "id": 3,
  "first_name": "Selby",
  "last_name": "Blackstock",
  "email": "sblackstock2@weather.com",
  "gender": "Male",
  "ip_address": "28.129.1.36"
}, {
  "id": 4,
  "first_name": "Veronica",
  "last_name": "Sketh",
  "email": "vsketh3@webs.com",
  "gender": "Female",
  "ip_address": "21.105.31.30"
}, {
  "id": 5,
  "first_name": "Nichole",
  "last_name": "Hanniger",
  "email": "nhanniger4@constantcontact.com",
  "gender": "Male",
  "ip_address": "147.193.75.70"
}, {
  "id": 6,
  "first_name": "Caitrin",
  "last_name": "Oddie",
  "email": "coddie5@studiopress.com",
  "gender": "Female",
  "ip_address": "20.48.54.173"
}, {
  "id": 7,
  "first_name": "Leupold",
  "last_name": "Woodfield",
  "email": "lwoodfield6@nsw.gov.au",
  "gender": "Male",
  "ip_address": "104.93.156.234"
}, {
  "id": 8,
  "first_name": "Massimiliano",
  "last_name": "Behnecke",
  "email": "mbehnecke7@indiatimes.com",
  "gender": "Male",
  "ip_address": "138.209.24.170"
}, {
  "id": 9,
  "first_name": "Gideon",
  "last_name": "Bissell",
  "email": "gbissell8@discuz.net",
  "gender": "Male",
  "ip_address": "251.12.61.9"
}, {
  "id": 10,
  "first_name": "Harbert",
  "last_name": "Orred",
  "email": "horred9@istockphoto.com",
  "gender": "Male",
  "ip_address": "244.90.166.118"
}, {
  "id": 11,
  "first_name": "Bastian",
  "last_name": "Collocott",
  "email": "bcollocotta@samsung.com",
  "gender": "Male",
  "ip_address": "202.22.95.161"
}, {
  "id": 12,
  "first_name": "Cash",
  "last_name": "Duncan",
  "email": "cduncanb@freewebs.com",
  "gender": "Male",
  "ip_address": "138.53.115.211"
}];


var femaleCount = _.filter(people, {gender: 'Female'}).length;
var MaleCount = _.filter(people, {gender: 'Male'}).length;
console.log(femaleCount + ' female and ' + MaleCount + ' male');
