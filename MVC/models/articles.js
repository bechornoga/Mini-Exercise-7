const articles = [
    {
        id: 1,
        title: 'My cake',
        author: 'John Doe',
        published: 'February 11, 2024',
        content: 'Lorem ipsum'
    },
    {
        id: 2,
        title: 'Not my cake',
        author: 'Not John Doe',
        published: 'Not February 11, 2024',
        content: 'Not Lorem ipsum'
    }
]

const getArticles = () => {
    return articles
}

const getArticle = (id) => {
    return articles.filter((article) => article.id == id)[0]
}

const createArticle = (title, author, published, content) => {
    const article = {
        id: articles.length + 1,
        title: title,
        author: author,
        published: published,
        content: content
    }

    articles.push(article)

    return article
}

const updateArticle = (id, newData) => {
    const article = getArticle(id)

    if (!article) {
        return null
    }

    if (newData.title) {
        article.title = newData.title
    }

    if (newData.author) {
        article.author = newData.author
    }

    if (newData.published) {
        article.published = newData.published
    }

    if (newData.content) {
        article.content = newData.content
    }

    return article
}

const deleteArticle = (id) => {
    const index = articles.findIndex((article) => article.id == id)

    if (index === -1) {
        return null
    }

    const deletedArticle = articles.splice(index, 1)[0]
    return deletedArticle
}

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}