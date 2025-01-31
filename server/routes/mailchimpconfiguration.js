const express = require("express");
const request = require("request")
const router = express.Router();
const Mailchimp = require('mailchimp-api-v3')
const fetch = require('node-fetch');








router.post('/subscribe', (req, res) => {


    const { subsribermail,js } = req.body;
    console.log("req successfully hit",subsribermail)

    // Make sure fields are filled
    if (!subsribermail) {
      res.send("Please enter email address")
      console.log("Please enter email address")
      return;
    }
  
    // Construct req data
    const data = {
      members: [
        {
          email_address: subsribermail,
          status: 'subscribed',
        }
      ]
    };
  
    const postData = JSON.stringify(data);
  
    fetch('https://us7.api.mailchimp.com/3.0/lists/1f93fa4041', {
      method: 'POST',
      headers: {
        Authorization: 'auth 7d36ae2521cc68bcf63c5788bada4fe7-us7'
      },
      body: postData
    })
      .then(res.statusCode === 200 ?
        res.send('successfully subscribed') :
        res.send('fail'))
      .catch(err => console.log(err,"subcription failed"))
})





module.exports = router;
