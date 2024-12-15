const express = require("express");
const user = require("./router/user");
const student = require("./router/student");

const auth = require('./middleware/auth');




const app = express();
app.use(express.json());

app.use("/api/user",user);
app.use("/api/student",auth,student);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));