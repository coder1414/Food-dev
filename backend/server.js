// //crete a basic server



// import express from "express"

// import cors from "cors"
// import 'dotenv/config'
// import { connectDb } from "./config/db.js"
// import cartRouter from "./routes/cartRoutes.js"
// import foodRouter from "./routes/foodRoute.js"
// import orderRouter from "./routes/orderRoute.js"
// import userRouter from "./routes/userRoute.js"

// // app config

// const app=express()

// const port=4000


// // middleware

// app.use(express.json())// using this when request from fornt end to backend that will be parse using this json
// app.use(cors())// using this we can access the backend from any frontend

// // db connection
// connectDb();

// // api endpoints
// app.use("/api/food",foodRouter)
// app.use("/images",express.static('uploads'))
// app.use("/api/user",userRouter)
// app.use("/api/cart",cartRouter)
// app.use("/api/order",orderRouter)

// app.get("/", (req,res)=>{
//  res.send("API working")
// })// http method using this we can request the data from the server

// // run express server

// app.listen(port,()=>{
//     console.log(`Server Started on http://localhost:${port}`)
// })




//retryWrites=true&w=majority&appName=Cluster0



import express from "express";
import cors from "cors";
import 'dotenv/config'; // Load environment variables
import { connectDb } from "./config/db.js";
import cartRouter from "./routes/cartRoutes.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";

// Log environment variables
console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

// Create a basic server
const app = express();
const port = 4000;

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// DB connection
connectDb();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

// Run Express server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});





