const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: '*',
}));


require("dotenv").config();

app.use(express.json());
app.use(cookieParser());

//app.use(express.static(__dirname + '/assets'));

const authRouter = require("./Routes/router.auth");

app.use(authRouter);

app.listen(5000, err => {
    if(err) console.log(err);
})