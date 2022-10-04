const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const model = require("./models");

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.post('/create', async (req, res)=>{
    let reqs = await model.User.create({
        'name': req.body.nameUser,
        'userName': req.body.userName,
        'email': req.body.emailUser,
        'password': req.body.passwordUser,
        'createdAt': new Date(),
        'updatedAt': new Date(),
        
    });
    
    if(reqs){
        res.send(JSON.stringify('The user has been created'));
    }
});

let port = process.env.PORT || 3000;

app.listen(port, (req, ques) => {
  console.log("Server online");
});
