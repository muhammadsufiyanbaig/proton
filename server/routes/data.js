const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'digimerse49@gmail.com',
        pass: 'digimerse123'
    }, tls: {
        rejectUnauthorized: false
    }
});


router.post('/X70formdata', (req, res) => {
    console.log(req.body)
    if (req.body) {
        res.send({ success: true, posts: req.body })
        var mailListProtonApolloMotors = ["sales@apollomotors.com.pk","info@proton.com.pk","apollo.motors@proton.com.pk"]
        var mailListProtonSouthMotors = ["south.motors@proton.com.pk","info@proton.com.pk"]
        var mailListProtonMomentumMotors = ["momentum.motors@proton.com.pk","info@proton.com.pk"]
        var mailListProtonIslamabadMotors = ["islamabad.motors@proton.com.pk","info@proton.com.pk"]

        
        if (req.body.dealership === "Proton Apollo Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonApolloMotors,
                subject: 'X70 Booking Form',
                html: ` </n>
                <h1 style='color:red'>X70 booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }
        else if (req.body.dealership === "Proton South Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonSouthMotors,
                subject: 'X70 Booking Form',
                html: ` </n>
                <h1 style='color:red'>X70 booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }
        else if (req.body.dealership === "Proton Momentum Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonMomentumMotors,
                subject: 'X70 Booking Form',
                html: ` </n>
                <h1 style='color:red'>X70 booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }
        else if (req.body.dealership === "Proton Islamabad Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonIslamabadMotors,
                subject: 'X70 Booking Form',
                html: ` </n>
                <h1 style='color:red'>X70 booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(" x70 email successfully send")
                res.send("email successfully send")
            }
        });
    }
    else {
        res.send("error")
    }
})


router.post('/Sagaformdata', (req, res) => {
    console.log(req.body)
    if (req.body) {
        res.send({ success: true, posts: req.body })
        var mailListProtonApolloMotors = ["sales@apollomotors.com.pk","info@proton.com.pk","apollo.motors@proton.com.pk"]
        var mailListProtonSouthMotors = ["south.motors@proton.com.pk","info@proton.com.pk"]
        var mailListProtonMomentumMotors = ["momentum.motors@proton.com.pk","info@proton.com.pk"]
        var mailListProtonIslamabadMotors = ["islamabad.motors@proton.com.pk","info@proton.com.pk"]

    

        
        if (req.body.dealership === "Proton Apollo Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonApolloMotors,
                subject: 'Saga Booking Form',
                html: ` </n>
                <h1 style='color:red'>Saga booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }
        else if (req.body.dealership === "Proton South Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonSouthMotors,
                subject: 'Saga Booking Form',
                html: ` </n>
                <h1 style='color:red'>Saga booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }
        else if (req.body.dealership === "Proton Momentum Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonMomentumMotors,
                subject: 'Saga Booking Form',
                html: ` </n>
                <h1 style='color:red'>Saga booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }
          else if (req.body.dealership === "Proton Islamabad Motors") {
            var mailOptions = {
                from: 'digimerse49@gmail.com',
                to: mailListProtonIslamabadMotors,
                subject: 'Saga Booking Form',
                html: ` </n>
                <h1 style='color:red'>Saga booking form data!!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.varient}</h3>
               <h3>Color : ${req.body.color} </h3>
                <h3>Dealership : ${req.body.dealership} </h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
            };
        }
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("saga email successfully send")
                res.send(" saga email successfully send")
            }
        });
    }
    else {
        res.send("error")
    }
})



router.post('/Contactformdata', (req, res) => {
    if (req.body) {
        res.send({ success: true, posts: req.body })
        var mailListProtonApolloMotors = ["sales@apollomotors.com.pk","info@proton.com.pk","apollo.motors@proton.com.pk"]

        var mailOptions = {
            from: 'digimerse49@gmail.com',
            to: mailListProtonApolloMotors,
            subject: 'Contact Form',
            html: ` </n>
                <h1 style='color:red'>Contact Form !!</h1>
                <h3>Name :${req.body.firstName} </h3>
               <h3>LastName : ${req.body.lastName}</h3>
                <h3>Contact : ${req.body.foneNum} </h3>
                 <h3>Email : ${req.body.email} </h3>
                 <h3>City : ${req.body.city}</h3>
                </n>
                <h3>Varient : ${req.body.query}</h3>
                  <h3>Comment : ${req.body.comment}    </h3>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("contact email successfully send")
            }
        });
    }
    else {
        res.send("error")
    }
})


module.exports = router;
