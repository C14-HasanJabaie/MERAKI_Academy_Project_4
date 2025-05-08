const express = require("express");
const cors = require("cors");
// const { registerUser, loginUser, authenticateToken } = require('./middleware/auth');;
// require("./middleware/db");
// const bcrypt = require('./bcryptjs');
const serviceRouter = require('./routes/serviceRouter'); 
require("dotenv").config();
const db =require("./middleware/db")
const userRouter = require("./routes/userRouter");
const roleRouter = require('./routes/roleRouter')
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


// mongoose.connect(process.env.DATABASE).then(() => {
//   console.log("DB Ready To  Use");
// })
// .catch((err) => {
//   console.log(err);
// });

app.use("/users", userRouter);
app.use('/services', serviceRouter); 
app.use("/role" , roleRouter)
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

/////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
