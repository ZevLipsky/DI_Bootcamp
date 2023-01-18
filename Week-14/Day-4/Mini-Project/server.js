const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { application } = require('express');
const axios = require('axios');
const ejs = require('ejs');

let Parser = require('rss-parser');
let parser = new Parser();
(async () => {

    let feed = await parser.parseURL('your-rss-feed');
    console.log(feed.title);
  
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
  
  })();

const app = express();
app.use(cors());