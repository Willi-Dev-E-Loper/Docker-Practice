import express   from "express"
import mongoose from "mongoose"

const animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://guille:1234@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('Listando... espere por favor')
  const animales = await animal.find()
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('Creando...')
  await animal.create({
    tipo:'Nasita',
    estado: 'Feliz'
  })
  return res.send('OK')
})

app.listen(3000, () => console.log('listening...'))
