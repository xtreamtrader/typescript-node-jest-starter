import { Router } from 'express'
import { Dog } from '../models/dog'
export const apiControllers = Router()

apiControllers.get('/dog', (req, res) => {
  Dog.find({})
  .then((docs) => res.send(docs))
  .catch((err) => res.status(500).send(err))
})
