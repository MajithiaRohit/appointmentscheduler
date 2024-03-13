const express = require('express');
const mongoose  = require('mongoose');
const userDatas = require('./dataShcema');
const app = express();

const ConnectionString = "mongodb+srv://rohit2001:Rohit%402001@atlascluster.wj8f2xg.mongodb.net/userDatabase";
app.use(express.json());

mongoose.connect(ConnectionString).then(()=>{
    console.log("Connected to MongoDB");


    app.get('/',async(req, res)=>{

        userDatas.find()
        .then((data)=>{
            res.json(data);
        })
    });

    app.get('/oneUser/:AppointmentID',async(req, res)=>{

        userDatas.find({AppointmentID : req.params.AppointmentID})
        .then((data)=>{
            res.json(data);
        })
    });

    app.post('/addUser',(req, res)=>{

        const formData ={
            AppointmentID :req.body.AppointmentID, 
            ClientName : req.body.ClientName, 
            Date : req.body.Date, 
            Time : req.body.Time, 
            Location : req.body.Location
        };

        res.send(formData);
        userDatas.insertMany(formData);

    });

    app.delete('/deleteUser/:AppointmentID',async(req, res)=>{
            await userDatas.deleteOne({AppointmentID : req.params.AppointmentID});
            res.send("User deleted successfully.");
    })

    app.put('/updateUser/:AppointmentID',async(req,res)=>{
        await userDatas.updateOne({AppointmentID: req.params.AppointmentID},{$set:{
            ClientName : req.body.ClientName, 
            Date : req.body.Date, 
            Time : req.body.Time, 
            Location : req.body.Location
        }
        });
        res.send("update successfully.... thank you");

    })



    
})
app.listen(5000,()=>{
    console.log("Connected to Server");
})