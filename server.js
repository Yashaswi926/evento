const express = require("express");
const app = express();

const cors = require("cors");
const path  = require("path")

app.use(express.json({limit: '3mb'}));
app.use(express.urlencoded({limit: '3mb'}));
app.use(cors())

require('./config/database.js')()

const auth = require('./routes/auth.js');

app.use('/api/v1/', auth);

const Event = require("./config/models/Event.js");
const User = require("./config/models/User.js");
const {base64decode} = require("nodejs-base64");

app.post("/api/v1/upload" , async(req, res) => {
    try{
        const {file, token , data} = req.body;
        let q = JSON.parse(base64decode(token))
        const event_data = new Event({
            author : data.author,
            userid : q.userid,
            file : file,
            email : q.useremail,
            date : data.date,
            event : data.event,
            location : data.location,
            maxprice : data.maxprice,
            minprice : data.minprice,
        })

        const response = await event_data.save()

        const result = await User.updateOne({_id : q.userid} , { $push : { createdEvent : response._id.toString()}})

        if(result){
            res.json({
                status : true,
                msg : "successfully created event"
            })
        }else{
            res.json({
                status : false,
                msg : "failed to create event"
            })
        }
    }catch(err){
        res.json({
            status : false,
            msg : err
        })
    }
})

app.get("/api/v1/getEvents" , async(req,res)=>{
    try{
        const data = await Event.find({})
        res.json(data)

    }catch(err){
        res.json({
            status : false,
            error : err
        })
    }
})

const port = process.env.PORT || 3500;

// app.use('/', express.static('build'));

// // Catch-all route for serving the 'index.html' file
// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.get("/", (req, res) => {
    app.use(express.static(path.join(__dirname,'build')))
    res.sendFile(path.join(__dirname,'build','index.html'))
})

const listener = app.listen(port, () => {
    console.log("http://127.0.0.1:" + port);
});