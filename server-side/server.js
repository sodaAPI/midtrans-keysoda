import app from "./app.js";

const PORT = 1000

app.get("/", (req, res) => {
    res.send(`Server Started on PORT ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})
