const express = require("express")
const cors = require("cors")
const User = require("./models/User")
const authRoute = require("./routes/authRouter")
const userRouter = require("./routes/userRouter")
const jobRouter = require("./routes/jobRouter")
const applicationRouter = require("./routes/applicationRouter")

const app = express()

app.use(cors())
app.use(express.json())

//USING CREATED APIs
app.use("/api/auth", authRoute)
app.use("/api/users", userRouter)
app.use("/api/jobs", jobRouter)
app.use("/api/applications", applicationRouter)


//API creations here

app.get("/", (req, res) => {
    res.send("Express app is set.")
});

app.get("/test-user", async (req, res) => {
    const user = await User.create(
        {
            name : "testuser1",
            password : "test1",
            email : "test@gmail.com"
        }
    )
    res.json(user);
})


module.exports = app;

