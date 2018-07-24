const mongoose = require("mongoose");
const db = require("../models")
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/realtourDB",{
        useMongoClient:true
    }
);

const listingSeed =[
    {
        ownerName: "Philip",
        street:"95 overlook",
        city:"Belleville",
        state:"NJ",
        price: 350000,
        zipcode:"07109",
        imgSrc:"/images/House1.jpg",
        date: new Date(Date.now())
    },
    {
        ownerName: "Nathan",
        street:"22 springfield ave",
        city:"Princeton",
        state:"NJ",
        price:450000,
        zipcode:"07109",
        imgSrc:"/images/House2.jpg",
        date: new Date(Date.now())
    },
    {
        ownerName: "Iman",
        street:"150 Field st",
        city:"Rochester",
        state:"NY",
        price:275000,
        zipcode:"07104",
        imgSrc:"/images/House3.jpg",
        date: new Date(Date.now())
    },
    {
        ownerName: "Max",
        street:"120 Joralemon St",
        city:"Jersey City",
        state:"NJ",
        price: 230000,
        zipcode:"07102",
        imgSrc:"/images/House4.jpg",
        date: new Date(Date.now())
    },
    {
        ownerName: "Marie",
        street:"46 Linden Ave",
        city:"New Brunswick",
        state:"NJ",
        price:540000,
        zipcode:"07110",
        imgSrc:"/images/House5.jpg",
        date: new Date(Date.now())
    },
    {
        ownerName: "Jennifer",
        street:"260 Border st",
        city:"Rochester",
        state:"NY",
        price:275000,
        zipcode:"07104",
        imgSrc:"/images/House6.jpg",
        date: new Date(Date.now())
    }
]

db.Realtour
.remove({})
.then(()=>db.Realtour.collection.insertMany(listingSeed))
.then(data => {
    console.log(data.insertedIds.length)
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
})