const articles = require('../models/articles')

const getArticles = (req, res) => {
    res.json(articles.getArticles())
}

const getArticle = (req, res) => {
    const id = req.params.id
    const article = articles.getArticle(id)

    if (!article) {
        return res.status(404).json({ error: 'Article not found' })
    }

    res.json(article)
}

const createArticle = (req, res) => {
    const article = articles.createArticle(
        req.body.title,
        req.body.author,
        req.body.published,
        req.body.content
    )

    res.status(201).json(article)
}

const updateArticle = (req, res) => {
    const id = req.params.id
    const article = articles.updateArticle(id, req.body)

    if (!article) {
        return res.status(404).json({ error: 'Article not found' })
    }

    res.json(article)
}

const deleteArticle = (req, res) => {
    const id = req.params.id
    const article = articles.deleteArticle(id)

    if (!article) {
        return res.status(404).json({ error: 'Article not found' })
    }

    res.json(article)
}

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}