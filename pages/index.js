import PageLayout from '@/components/PageLayout'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() =>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-02-21&sortBy=publishedAt&apiKey=eb900029ae884c249c4ebc04ce465e17')
    .then(res => res.json())
    .then(response =>{
      const {articles} = response
      setArticles(articles)
    })
  },[])

  return (
    <PageLayout title='Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>Loading...</p>}
        {articles.length > 0 && articles.map((article, index) =>(
          <div key={index}>
            <img 
              alt={`Image for the article ${article.title}`} 
              src={article.urlToImage} 
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
