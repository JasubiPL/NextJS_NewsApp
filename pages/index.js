import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  return (
    <PageLayout title='Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>No hay Noticias</p>}
        {articles.length > 0 && articles.map((article, index) =>(
          <div key={index}>
            <Image
              alt={`Image for the article ${article.title}`} 
              src={article.urlToImage ? article.urlToImage : ''}
              width={450}
              height={300}
              layout='responsive'
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

/*
getStaticProps()
  -N Request -> se ejecuta 1 vez en build time(o para refrescar la pagina)
*/
//  export async function getStaticProps() {
//    const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-02-22&sortBy=publishedAt&apiKey=eb900029ae884c249c4ebc04ce465e17')
//    const { articles } = await response.json()
//    return{
//      props:{
//        articles
//      }
//    }
//  }

/*
getServerSideProps()
  - N request -> se ejcuta N Veces
  - Para datos que necesitas que sean muy libe
  - Si tiene demaciados datos dinamicos
*/

 export async function getServerSideProps() {
   const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=eb900029ae884c249c4ebc04ce465e17')
   const { articles } = await response.json()
   return{
     props:{
       articles
     }
   }
 }