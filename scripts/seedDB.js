require('dotenv').config()
const mongoose = require("mongoose");
const db = require("../models")
const newUser = require("../models/users")
mongoose.Promise = global.Promise;

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/realtourDB", {
//         useMongoClient: true
//     }
// );

mongoose.connect(
    "mongodb://admin:password1@ds153841.mlab.com:53841/realtour", {
        useMongoClient: true
    }
);


const userSeed = [
    {
        firstName: 'Philip',
        lastName: 'Smith',
        userName: 'psmith',
        email: 'psmith@gmail.com',
        password: 'password123',
        postedListings: [],
        appointments: [],
        savedListings: [],
        ub_date: Date.now(),
        _id: mongoose.Types.ObjectId(),
    },
    {
        firstName: 'Nathan',
        lastName: 'Ori',
        userName: 'Nori',
        email: 'natori@gmail.com',
        password: 'password456',
        postedListings: [],
        appointments: [],
        savedListings: [],
        ub_date: Date.now(),
        _id: mongoose.Types.ObjectId(),
    },
    {
        firstName: 'Iman',
        lastName: 'Eltyab',
        userName: 'imanworld',
        email: 'imanworld1@gmail.com',
        password: 'password123',
        postedListings: [],
        appointments: [],
        savedListings: [],
        ub_date: Date.now(),
        _id: mongoose.Types.ObjectId(),
    },
    {
        firstName: 'Max',
        lastName: 'Smith',
        userName: 'maximilium',
        email: 'maximilium2@gmail.com',
        password: 'password123',
        postedListings: [],
        appointments: [],
        savedListings: [],
        ub_date: Date.now(),
        _id: mongoose.Types.ObjectId(),
    },
    {
        firstName: 'Marie',
        lastName: 'Thomson',
        userName: 'mthomson',
        email: 'mthom@gmail.com',
        password: 'password123',
        postedListings: [],
        appointments: [],
        savedListings: [],
        ub_date: Date.now(),
        _id: mongoose.Types.ObjectId(),
    },
    {
        firstName: 'Jennifer',
        lastName: 'Weird',
        userName: 'jenny1',
        email: 'jenny1@gmail.com',
        password: 'password123',
        postedListings: [],
        appointments: [],
        savedListings: [],
        ub_date: Date.now(),
        _id: mongoose.Types.ObjectId(),
    },
]

var listingSeed = [
    {

        street: "95 overlook",
        city: "Belleville",
        state: "NJ",
        price: 350000,
        zipcode: "07109",
        img: ["/images/House1.jpg","/images/House11.jpg","/images/House12.jpg","/images/House13.jpg","/images/House14.jpg","/images/House15.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum bibendum feugiat. Curabitur vel venenatis magna, quis lobortis magna. Nunc sodales malesuada ante sit amet lobortis. Etiam non leo laoreet, sollicitudin tellus eget, eleifend purus. Mauris odio mauris, blandit at volutpat nec, eleifend ut neque. Sed accumsan nibh et tellus efficitur, interdum porta nibh placerat. Quisque vehicula tristique est, nec scelerisque lorem ultrices a. Vestibulum dapibus magna nec ipsum dictum iaculis. Proin ipsum purus, aliquet id leo sed, volutpat viverra ipsum.",
        date: new Date(Date.now()),
        hasAppointments: false
    },
    {

        street: "22 springfield ave",
        city: "Princeton",
        state: "NJ",
        price: 450000,
        zipcode: "07109",
        img: ["/images/House2.jpg","/images/House21.jpg","/images/House22.jpg","/images/House23.jpg","/images/House24.jpg","/images/House25.jpg"],
        description: "Suspendisse luctus, erat sed vestibulum tincidunt, lacus massa accumsan massa, vel accumsan tortor eros sit amet odio. Nullam semper aliquam mi, sed facilisis lectus sagittis quis. Maecenas hendrerit tempus posuere. Sed blandit, augue ut bibendum vehicula, ex mauris molestie dui, vitae suscipit justo nunc nec tortor. Fusce lobortis metus id metus efficitur consectetur. Curabitur eu condimentum dui. Nullam ac tincidunt felis. Pellentesque vel elit non libero mattis rutrum sit amet at massa.",
        date: new Date(Date.now()),
        hasAppointments: false
    },
    {

        street: "150 Field st",
        city: "Rochester",
        state: "NY",
        price: 275000,
        zipcode: "07104",
        img: ["/images/House3.jpg","/images/House31.jpg","/images/House32.jpg","/images/House33.jpg","/images/House34.jpg","/images/House35.jpg"],
        description: "Nunc laoreet quam nec enim pretium, consequat scelerisque velit semper. Vestibulum ipsum elit, semper ut euismod vitae, aliquam eu felis. Etiam imperdiet vel purus quis accumsan. Sed dignissim luctus auctor. Curabitur sagittis diam nec sapien pulvinar accumsan. Curabitur congue orci mi, eu ultricies odio bibendum a. Vestibulum sem lectus, pretium nec risus eu, mollis imperdiet diam. Mauris fringilla dui sit amet justo gravida consequat. Phasellus id turpis id felis ornare rhoncus nec in odio. Vestibulum tempus, metus at bibendum eleifend, quam lacus varius neque, non feugiat ante urna vitae massa. Vivamus eu ultricies dui, nec convallis nisi. Pellentesque eu condimentum justo. Vivamus posuere lacinia sagittis. Suspendisse potenti.",
        date: new Date(Date.now()),
        hasAppointments: false
    },
    {

        street: "120 Joralemon St",
        city: "Jersey City",
        state: "NJ",
        price: 230000,
        zipcode: "07102",
        img: ["/images/House4.jpg","/images/House41.jpg","/images/House42.jpg","/images/House43.jpg","/images/House44.jpg","/images/House45.jpg"],
        description: "Morbi faucibus libero facilisis erat elementum mattis. Ut ut commodo nunc. Donec diam lectus, rutrum quis rutrum ac, iaculis a nunc. Pellentesque ultricies, urna ac interdum ultrices, leo odio sodales enim, sit amet ultrices mauris purus sed quam. Nullam rutrum ligula in sem posuere, quis porttitor metus tincidunt. Curabitur scelerisque ut tortor efficitur tincidunt. Suspendisse tincidunt ipsum eu urna ornare fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum varius semper volutpat. Nunc gravida in arcu vitae pulvinar. Nam fermentum faucibus dignissim. Proin a nunc accumsan, dictum dolor in, faucibus dui",
        date: new Date(Date.now()),
        hasAppointments: false
    },
    {

        street: "46 Linden Ave",
        city: "New Brunswick",
        state: "NJ",
        price: 540000,
        zipcode: "07110",
        img:["/images/House5.jpg","/images/House51.jpg","/images/House52.jpg","/images/House53.jpg","/images/House54.jpg","/images/House55.jpg"],
        description: "Etiam fermentum mollis quam vitae fringilla. Praesent id lectus non metus accumsan ultricies. Sed a purus eu arcu faucibus tristique. Suspendisse ligula enim, sodales et est eget, lacinia vehicula lectus. Sed feugiat bibendum turpis, quis consequat arcu placerat eu. Suspendisse hendrerit convallis arcu, facilisis tempus felis hendrerit et. Duis magna metus, ullamcorper in ornare in, vestibulum vitae sapien. Morbi nec pellentesque purus, eu semper sem. Cras semper iaculis dictum. Fusce at convallis augue. Aenean posuere ligula nisi, eu tristique felis ornare a.",
        date: new Date(Date.now()),
        hasAppointments: false
    },
    {

        street: "260 Border st",
        city: "Rochester",
        state: "NY",
        price: 275000,
        zipcode: "07104",
        img: ["/images/House6.jpg","/images/House61.jpg","/images/House62.jpg","/images/House63.jpg","/images/House64.jpg","/images/House65.jpg"],
        description: "Morbi finibus mi ac laoreet cursus. Praesent mauris ex, consequat sed laoreet sed, dignissim sit amet lectus. Sed pharetra risus luctus pretium sollicitudin. Nam rutrum leo ut nulla suscipit, a vestibulum ipsum rhoncus. Integer nec sollicitudin quam. Sed vel risus turpis. Integer sem nisl, tristique et enim sit amet, rhoncus luctus nisi. Duis quis nisl sollicitudin, accumsan nibh id, vehicula sapien. In nisl dolor, placerat sit amet metus auctor, venenatis ultricies sapien.",
        date: new Date(Date.now()),
        hasAppointments: false
    }
]
//--------- SEED FOR USERS ------------//
// newUser
//     .remove({})
//     .then(() => 
//         // db.Realtour.collection.insertMany(listingSeed)
//         newUser.collection.insertMany(userSeed)  
//     )
//     .then(data => {
//         console.log(data)
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     })
db.newUser
    .find()
    .then(dbModel =>
        dbModel.forEach((user, i) => {
            let id = user._id;
            // console.log(id)
            listingSeed[i].owner=id;
            console.log(listingSeed);

            db.Realtour
                .remove({})
                .then(() =>
                    db.Realtour.collection.insertMany(listingSeed)
                )
                .then(data => {
                    console.log(data)
                    process.exit(0);
                })
                .catch(err => {
                    console.error(err);
                    process.exit(1);
                })

        })
    )
    .catch(err => console.log(err))
