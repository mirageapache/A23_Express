const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// view engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// routes
app.get('/', (req, res) => {
  res.send('index page here')
})






// app listener
app.listen(port, () => {
  console.log(`Server is ready, http://localhost:${port}`)
})