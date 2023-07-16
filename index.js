const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, "./client/dist")))
app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "./client/dist/index.html"),
        function (err) {
            res.status(500).send(err)
        }
    )
})

app.listen(PORT, () => {
    try {
        console.log(`server running on port ${PORT}`)
    } catch (e) {
        console.log(e.message)
    }
})