const express = require("express");
const app = express()
const PORT = 3000;

let data = ["james"]

// Middleware
app.use(express.json())

// HTTP VERBS and ROUTES

// Website endpoints (are for sending back html and typically come when a user enters a url in a browser)
// homepage endpoint
app.get("/", (req, res) => {
    res.send(`
        <body style="background:pink;
        color: blue;">
        <h1>DATA</h1>
        <p>
        ${JSON.stringify
            (data)}
        <a href="/dashboard">Dashboard</a>
        </P>
        </body>
        `)
})

// dashboard enpoint
app.get("/dashboard", (req, res) => {
    res.send(`
        <body>
            <h1>dashboard</h1>
            <a href="/">Home</a>
        </body>
        
        `)
})

// API endpoints
app.get("/api/data", (req, res) => {
    res.status(599).send(data)
    console.log("this one is for data")
})

app.post("/api/data", (req, res) => {
    // someone wants to create a user when they click a sign up button 
    // the user clicks the sign up button after entering their credentials and their browser is 
    // wired to send our a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete("/api/data", (req, res) => {
    data.pop()
    console.log("We deleted the element of the end of the end")
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))