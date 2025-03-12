import axios from 'axios'

// API to get all news
const getNews = async (req, res) => {

    try {

        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)

        res.json({ success: true, data })
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to get news by category
const getNewsByCategory = async (req, res) => {

    try {

        const { category } = req.query

        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)

        res.json({ success: true, data })
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { getNews, getNewsByCategory }