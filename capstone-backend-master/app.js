const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./index');
const PORT = 3001;

const connectionString =
  "mongodb+srv://tusharraghav0101:tusharraghav0101@cluster0.6pqikyw.mongodb.net/?retryWrites=true&w=majority";



const app = express();

const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};

app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.use('/', routes);
mongoose
  .connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> app.listen(PORT, ()=> console.log(`server is running at PORT: ${PORT}`)))
  .catch((err) => console.log(err.message)); 

