const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, ()=> console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "donbartojunior@gmail.com",
        pass: "0sxMmt@K04TS"
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contactform", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const datetime = req.body.datetime.value;
    const mail = {
        from: name,
        to: "donbartojunior@gmail.com",
        subject: "Contact Form Submission - Virtual Assistance",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Requested Meeting: ${datetime}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});