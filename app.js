const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// view engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//static files
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})


app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})


// app listener
app.listen(port, () => {
  console.log(`Server is ready, http://localhost:${port}`)
})