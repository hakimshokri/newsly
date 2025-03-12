import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const NewsCategory = () => {

    const { news } = useContext(AppContext)

    const { category } = useParams()

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if (news[category]) {
            setCategoryNews(news[category])
        }
    }, [news, category])

    return categoryNews && (
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="mb-12">
                <div class="">
                    <ul class="">
                        <li class="rounded-lg overflow-hidden">
                            <div class="relative h-[500px]">
                                <img src={categoryNews[0]?.urlToImage || assets.news_bg} class="w-full h-full object-cover" alt="Breaking Sports News" />
                                <div
                                    class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-white">
                                    <span
                                        class="bg-black px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Breaking
                                        News</span>
                                    <h1 class="text-4xl font-bold mb-4">{categoryNews[0]?.title || `Breaking ${category} news`}</h1>
                                    <p class="text-lg">{categoryNews[0]?.description || `Breaking ${category} news`}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {categoryNews.slice(1, 10).map((news, index) => (
                    <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                        {/* News Image */}
                        <img
                            src={news.urlToImage || assets.news_bg}
                            className="w-full h-64 object-cover"
                            alt={news.title}
                        />

                        {/* News Content */}
                        <div className="p-6">
                            {/* Category Badge */}
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                {category.toUpperCase()}
                            </span>

                            {/* News Title */}
                            <h2 className="text-xl font-bold mt-4 mb-2">{news.title}</h2>

                            {/* News Description */}
                            <p className="text-gray-600">{news.description}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <h3 class="text-lg font-bold mb-6">Latest News</h3>
                    <div class="space-y-6">
                        {categoryNews.slice(10, 12).map((news, index) => (
                            <article
                                key={index}
                                className="bg-white p-4 md:p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-4 md:gap-6"
                            >
                                {/* News Image */}
                                <img
                                    src={news.urlToImage || assets.news_bg}
                                    className="w-full md:w-32 h-48 md:h-32 rounded-lg object-cover"
                                    alt={news.title}
                                />

                                {/* News Content */}
                                <div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                        {category.toUpperCase()}
                                    </span>

                                    <h4 className="text-lg font-bold mt-2 mb-2">{news.title}</h4>

                                    <p className="text-gray-600 text-sm mb-2">{news.description}</p>

                                    <div className="flex items-center text-sm text-gray-500">
                                        <i className="far fa-clock mr-2"></i>
                                        <span>{new Date(news.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }).replace(",", "")}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-6">Trending News</h3>
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-blue-600 font-bold mr-4">1</span>
                                <span class="text-gray-800">{categoryNews[0]?.title || `Breaking ${category} news`}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-blue-600 font-bold mr-4">2</span>
                                <span class="text-gray-800">{categoryNews[1]?.title || `Breaking ${category} news`}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-blue-600 font-bold mr-4">3</span>
                                <span class="text-gray-800">{categoryNews[2]?.title || `Breaking ${category} news`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCategory