import Head from 'next/head'
import { Header } from '../components/header'
import thumbnail from '../pages/api/thumbnail'

import styles from '../styles/Home.module.css'

interface PostLayoutProps {
  title: string
  description: string
  thumbnailUrl: string
  content: string
}

export default function PostLayout(props: PostLayoutProps) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>

        <meta name="description" content={props.description} />

        <meta property="og:site_name" content="Blog do Diego" />

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />

        <meta property="og:image" content={props.thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.thumbnailUrl} />
      </Head>

      <Header 
        title={props.title}
      />

      <div className={styles.container}>

      <article className={styles.article}>
        <img width="600" src={props.thumbnailUrl} alt={props.title}/>
        <div dangerouslySetInnerHTML={{__html:props.content}}/>
      </article>
      
      </div>

    </main>
  )
}