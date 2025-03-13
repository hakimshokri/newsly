import { createContext, useEffect, useState } from "react";
import axios, { all } from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [news, setNews] = useState({
        allNews: [],
        business: [],
        general: [],
        health: [],
        science: [],
        sports: [],
        technology: []
    })

    const [category, setCategory] = useState("")

    const getNews = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/news/news-list')

            if (data.success) {
                setNews(prev => {
                    return {
                        ...prev,
                        allNews: data.data.data
                    }
                })
            }
            else {
                toast.error(data.message)
            }

        }
        catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }

    const getNewsByCategory = async (category) => {

        try {

            const { data } = await axios.get(backendUrl + '/api/news/news-list-category', { params: { category } })

            if (data.success) {
                setNews(prev => {
                    return {
                        ...prev,
                        [category]: data.data.data
                    }
                })
            }
            else {
                toast.error(data.message)
            }

        }
        catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }

    useEffect(() => {
        getNews();

        const categories = ["business", "general", "health", "science", "sports", "technology"];
        Promise.all(categories.map(getNewsByCategory))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    const value = {
        backendUrl,
        news,
        getNews,
        category,  
        setCategory
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider