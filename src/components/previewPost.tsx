import Link from 'next/link'
import styles from '../styles/components/PreviewPost.module.css'

interface PreviewPostProps {
  image: string
  description: string
  avatar: string
  name: string
  category: string
  slug: string
}

export const PreviewPost: React.FC<PreviewPostProps> = (props) => {
  const link = '/tes/sd'
  return (
    <div className={styles.container}>

      <div className={styles.description}>
        <div className={styles.descriptionImage}>
          <img src={props.image} alt="Typescript" />
          <div className={styles.tag}>HTML</div>
        </div>

        <div className={styles.descriptionContent}>
          <p>{props.description}</p>
          <a href={props.slug}> Ver matéria completa </a>
        </div>

      </div>
      <hr />
      <div className={styles.footer}>
        <img src={props.avatar} alt="Github Image" />
        <p>Postado por: {props.name}, em {props.category}</p>
        <p className={styles.footerComents}>0 Comentários</p>

      </div>
    </div>
  )
}