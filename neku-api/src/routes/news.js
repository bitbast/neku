const express = require('express')

const articles = require('../usecases/news')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allArticles = await articles.getAll()

    response.json({
      success: true,
      message: 'All Articles',
      data: {
        articles: allArticles
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const {
      title,
      bodytext,
      picture,
      author,
      source,
      date
    } = request.body

    if (!title) throw new Error('Title is equired')
    if (!bodytext) throw new Error('Bodytext is required')
    if (!picture) throw new Error('Picture is required')
    if (!author) throw new Error('Author is required')
    if (!source) throw new Error('Source is required')
    if (!date) throw new Error('Date is required')

    const newArticle = await articles.create({ title, bodytext, picture, author, source, date })
    response.json({
      success: true,
      message: 'Article created',
      data: {
        article: newArticle
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deltedArticle = await articles.deleteById(id)
    response.json({
      sucess: true,
      message: 'Article deleted',
      data: {
        article: deltedArticle
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataArticle = request.body
    const articleUpdated = await articles.updateById(id, newDataArticle)
    response.json({
      succes: true,
      message: 'Article updated',
      data: {
        article: articleUpdated
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

module.exports = router
