import axios from 'axios'

// API to get all news
const getNews = async (req, res) => {

    try {

        const { data } = await axios.get('https://api.newsdatahub.com/v1/news?language=en', {
            headers: {
                'X-Api-Key': process.env.NEWS_API_KEY,
                'User-Agent': 'YourApp/1.0'
            }
        })

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

        const { data } = await axios.get(`https://api.newsdatahub.com/v1/news?topic=${category}&language=en`, {
            headers: {
                'X-Api-Key': process.env.NEWS_API_KEY,
                'User-Agent': 'YourApp/1.0'
            }
        })

        res.json({ success: true, data })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { getNews, getNewsByCategory }