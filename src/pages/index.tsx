import Link from 'next/link'
import { getAllPosts } from './api/posts'

import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { PreviewPost } from '../components/previewPost'

import { AiFillInstagram } from 'react-icons/ai'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
    description: string
    name: string
    category: string
    date: string
  }>
}

export default function Home(props: HomeProps) {
  return (
    <div>
    <Header 
      title="Desenvolvimento Web"
    />

    <div className={styles.container}>
      
      <div className={styles.articles}>
      {props.posts.map((post, idx) => (
              <PreviewPost 
              key={idx}
              slug={post.slug}
              image={`http://localhost:3000/api/thumbnail.png?title=${post.title}&thumbnail_bg=%23121214`}
              description={post.description}
              avatar="https://avatars.githubusercontent.com/u/18490089?s=460&u=9fd4dd2e3b11aa1c585914a5360c0da0af00dfb7&v=4"
              name={post.name}
              category={post.category}
            />
        ))}
      </div>

        <div className={styles.assets}>
          <div className={styles.instagram}>
            <h1>Me siga no instagram:</h1>
            <hr className={styles.hr}/>
            <div className={styles.instaFollow}>
            <AiFillInstagram size={27} className={styles.icon}/>
            <p>@jonatadevjs</p>
            <a href="https://www.instagram.com/jonatadevjs/">Seguir</a>
            </div>
          </div>
          <div>
            <span>Metatags</span>

          </div>
        </div>
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
    }
  }
}