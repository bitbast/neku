require('dotenv').config()

const db = require('./src/lib/db')
const server = require('./src/server')

const { PORT = 3030 } = process.env

db.connect()
  .then(() => {
    console.log('DB connected')
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(error => {
    console.error('DB ERROR', error)
  })
