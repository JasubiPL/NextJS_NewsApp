import PageLayout from '@/components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  return (
    <PageLayout title='Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>No hay Noticias</p>}
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

//Hacemos el Fetchin de datos del lado del servidor para que se renderice mas rapido y para optimizacion del CEO
export async function getServerSideProps() {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-02-22&sortBy=publishedAt&apiKey=eb900029ae884c249c4ebc04ce465e17')
  const { articles } = await response.json()
  return{
    props:{
      articles
    }
  }
}