import express from 'express'
import { getNews, getNewsByCategory } from '../controllers/newsController.js'

const newsRouter = express.Router()

newsRouter.get('/news-list', getNews)
newsRouter.get('/news-list-category', getNewsByCategory)

export default newsRouter