//HTTP MODULE — SETUP A WEB SERVER
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('This About Page')
    }

    else res.end(`
    <h1>Page Not Found</h1>
    <a href="/">back home</a>
    `)
})

server.listen(5000)
console.log("Server running...");