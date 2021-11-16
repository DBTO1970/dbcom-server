import logo from './assistant.png';
import './App.css';
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const serverApp = express();
// serverApp.use(cors());
// serverApp.use(express.json());
// serverApp.use("/", router);
// serverApp.listen(5000, ()=> console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "donbartojunior@gmail.com",
//         pass: "0sxMmt@K04TS"
//     },
// });

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Ready to Send");
//     }
// });

// router.post("/contactform", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;
//     const datetime = req.body.datetime.value;
//     const mail = {
//         from: name,
//         to: "donbartojunior@gmail.com",
//         subject: "Contact Form Submission - Virtual Assistance",
//         html: `<p>Name: ${name}</p>
//         <p>Email: ${email}</p>
//         <p>Message: ${message}</p>
//         <p>Requested Meeting: ${datetime}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//         if (error) {
//             res.json({ status: "ERROR" });
//         } else {
//             res.json({ status: "Message Sent" });
//         }
//     });
// });

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{paddingTop: '50px', marginTop: '25px'}} >
          This is a server for <a href="https://donbarto.com">donbarto.com</a>
        </p>
        <a
          className="App-link"
          href="https://donbarto.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Main Site
        </a>
      </header>
      
    </div>
  );
}

export default App;
