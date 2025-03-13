import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { news, setArticle, article } = useContext(AppContext)
  const navigate = useNavigate()

  return news && (
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section class="mb-12">
        <div class="relative rounded-lg overflow-hidden">
          <img class="w-full h-[32rem] object-cover"
            src={news.allNews[0]?.media_url || news.allNews[0]?.media_thumbnail || assets.news_bg}
            alt="Breaking News" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
            <span class="inline-block bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-md mb-4">Breaking News</span>
            <h1 class="text-4xl font-bold text-white mb-4">{news.allNews[0]?.title || "Breaking News"}</h1>
            <p class="text-gray-200 text-lg mb-4"> {news.allNews[0]?.description ? news.allNews[0].description.length > 450 ? `${news.allNews[0].description.slice(0, 450)}...` : news.allNews[0].description : "Breaking News"}</p>
          </div>
        </div>
      </section>
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Trending News</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="contents" data-glide-el="track">
            <ul class="contents">
              <li class="hover:shadow-lg duration-500 ease-in-out transform hover:-translate-y-1">
                <div class="bg-white rounded-lg shadow-sm overflow-hidden"><img
                  class="w-full h-48 object-cover"
                  src={news.technology[0]?.media_url || news.technology[0]?.media_thumbnail || assets.news_bg}
                  alt="Tech News" />
                  <div class="p-4"><span class="text-blue-600 text-sm font-semibold">Technology</span>
                    <h3 class="text-lg font-semibold mt-2">{news.technology[0]?.title || "Tech News"}</h3>
                    <p class="text-gray-600 mt-2">{new Date(news.technology[0]?.pub_date).toLocaleDateString("en-GB")}</p>
                  </div>
                </div>
              </li>
              <li class="hover:shadow-lg duration-500 ease-in-out transform hover:-translate-y-1">
                <div class="bg-white rounded-lg shadow-sm overflow-hidden"><img
                  class="w-full h-48 object-cover"
                  src={news.business[1]?.media_url || news.business[1]?.media_thumbnail || assets.news_bg}
                  alt="Business News" />
                  <div class="p-4"><span class="text-blue-600 text-sm font-semibold">Business</span>
                    <h3 class="text-lg font-semibold mt-2">{news.business[1]?.title || "Business News"}</h3>
                    <p class="text-gray-600 mt-2">{new Date(news.business[1]?.pub_date).toLocaleDateString("en-GB")}</p>
                  </div>
                </div>
              </li>
              <li class="hover:shadow-lg duration-500 ease-in-out transform hover:-translate-y-1">
                <div class="bg-white rounded-lg shadow-sm overflow-hidden"><img
                  class="w-full h-48 object-cover"
                  src={news.science[0]?.media_url || news.science[0]?.media_thumbnail || assets.news_bg}
                  alt="Health News" />
                  <div class="p-4"><span class="text-blue-600 text-sm font-semibold">Science</span>
                    <h3 class="text-lg font-semibold mt-2">{news.science[0]?.title || "Science News"}</h3>
                    <p class="text-gray-600 mt-2">{new Date(news.science[0]?.pub_date).toLocaleDateString("en-GB")}</p>
                  </div>
                </div>
              </li>
              <li class="hover:shadow-lg duration-500 ease-in-out transform hover:-translate-y-1">
                <div class="bg-white rounded-lg shadow-sm overflow-hidden"><img
                  class="w-full h-48 object-cover"
                  src={news.sports[0]?.media_url || news.sports[0]?.media_thumbnail || assets.news_bg}
                  alt="Environment News" />
                  <div class="p-4"><span class="text-blue-600 text-sm font-semibold">Sports</span>
                    <h3 class="text-lg font-semibold mt-2">{news.sports[0]?.title || "Sports News"}</h3>
                    <p class="text-gray-600 mt-2">{new Date(news.sports[0]?.pub_date).toLocaleDateString("en-GB")}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <section>
            <h2 class="text-2xl font-bold mb-6">Latest News</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg duration-500 ease-in-out transform hover:-translate-y-1">
                <img class="w-full h-48 object-cover"
                  src={news.sports[1]?.urlToImage || assets.news_bg}
                  alt="Sports News" />
                <div class="p-4">
                  <span class="text-blue-600 text-sm font-semibold">Sports</span>
                  <h3 class="text-lg font-semibold mt-2">{news.sports[1]?.title || "Sports News"}</h3>
                  <p className="text-gray-600 mt-2">{news.sports[1]?.description ? (news.sports[1].description.length > 300 ? `${news.sports[1].description.slice(0, 300)}...` : news.sports[1].description) : "Sports News"}</p>
                  <p class="text-gray-500 text-sm mt-4">{new Date(news.sports[1]?.pub_date).toLocaleDateString("en-GB")}</p>
                </div>
              </article>
              <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg duration-500 ease-in-out transform hover:-translate-y-1">
                <img class="w-full h-48 object-cover"
                  src={news.sports[2]?.urlToImage || assets.news_bg}
                  alt="Entertainment News" />
                <div class="p-4">
                  <span class="text-blue-600 text-sm font-semibold">Entertainment</span>
                  <h3 class="text-lg font-semibold mt-2">{news.sports[2]?.title || "sports News"}</h3>
                  <p className="text-gray-600 mt-2">{news.sports[2]?.description ? (news.sports[2].description.length > 300 ? `${news.sports[2].description.slice(0, 300)}...` : news.sports[2].description) : "Sports News"}</p>
                  <p class="text-gray-500 text-sm mt-4">{new Date(news.sports[2]?.pub_date).toLocaleDateString("en-GB")}</p>
                </div>
              </article>
            </div>
          </section>
        </div>
        <aside class="lg:col-span-1">
          <div class="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Most Read</h3>
            <ul class="space-y-4">
              <li class="flex items-center">
                <span class="text-blue-600 font-bold mr-4">1</span>
                <p class="text-gray-800">{news.allNews[1]?.title || "Breaking News"}</p>
              </li>
              <li class="flex items-center">
                <span class="text-blue-600 font-bold mr-4">2</span>
                <p class="text-gray-800">{news.allNews[2]?.title || "Breaking News"}</p>
              </li>
              <li class="flex items-center">
                <span class="text-blue-600 font-bold mr-4">3</span>
                <p class="text-gray-800">{news.allNews[3]?.title || "Breaking News"}</p>
              </li>
            </ul>
          </div>
        </aside>
      </div >
    </div >
  )
}

export default Home