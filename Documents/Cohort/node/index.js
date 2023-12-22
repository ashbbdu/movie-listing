// const express = require("express");
// const bodyParser = require("body-parser");
// const zod = require("zod")
// const app = express();
// app.use(express.json());

// const scheme = zod.array(zod.number())
// const user = zod.object({
//     userName: zod.string(),
//     data : zod.array(zod.number())
//   })

// const PORT = 3000;

// app.get("/" , (req , res) => {

//    res.send(`<h1>Hello I am Live !</h1>`)

// })

// // app.post("/conversations" , (req , res) => {
// //     console.log(req.body , "body")
// //     console.log(req.query , "query")
// //     console.log(req.headers.authorization , "headerss")
// //     res.send({
// //         "name" : req.body.name,
// //         "age" : req.body.age
// //     })

// // })

// app.post("/health-checkup" , (req , res) => {
//     const kidneys = req.body.kidneys;
//     const users = req.body.users
//     console.log(users , "users")
//     const response =  scheme.safeParse(kidneys);
//     const userResponse = user.safeParse(users)
//     console.log(response , "resposne")
//     console.log(userResponse , "userResponse")
//     // res.send(userResponse)
//     // if(reponse)
//     // if(response.success &&) {
//     //     res.send("Valid Inputs")
//     // } else {
//     //     res.send("Invalid Inputs")
//     // }
// })

// app.post("/signup" , (req , res) => {
//     const inputs = req.body;

// })

// app.listen(PORT , () => {
//     console.log("App is running on Port " + PORT)
// })

// // // global catching
// app.use((err , res , req ,next) => {
//     res.send({
//         success : false,
//         message : "Something went wrong with the servers"
//     })
// })

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json())

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array

// const findArr = ALL_USERS.find(res => res.username === username);
// // console.log(findArr , "findarr")
// if(findArr?.username === username && findArr?.password === password) {
//   return true
// } else {
//   return false
// }

// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   // console.log(token , "token")
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     console.log(decoded , "decoded")
//     const username = decoded.username;
//     // return a list of users other than this username
//     const users = ALL_USERS.filter(res => res.username !== username)
//     res.send(users)
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://ashishsrivastava7007:ash%40Compunnel09@cluster0.5uxz92d.mongodb.net/newUserApp"
);

const User = mongoose.model("User", {
  name: String,
  password: String,
  email: String,
});


app.post("/signup" , async (req , res) => {
  const {name , email , password} = req.body;
  const existingUser = await User.findOne({email : email})
  if(existingUser) {
    return  res.status(200).json({
     msg : "User already exists"
    })
  }
  const createUser = new User({
    name,
    email,
    password
  });
  
  createUser.save()
  res.status(200).json({
    msg : "User Created Successfully"
  })

})

app.use((err , res , req ,next) => {
    res.send({
        success : false,
        message : "Something went wrong with the servers"
    })
})

app.listen(3000);


