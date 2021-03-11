import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { Header } from "../components/header";

import styles from '../styles/Insert.module.css'

interface PreviewImage {
    name: string;
    url: string;
  }

export default function InsertPost() {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState<File[]>([])

    console.log(file)

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
          return;
        }
        const selectedFile = Array.from(event.target.files);
        setFile(selectedFile);    
      }

      function handleSubmit(e: FormEvent) {
          e.preventDefault()
          axios.post('/api/upload', file ).then(response => {
              console.log(response)
          })
      }

    return (
        <>
        <Header 
                title="Inserir nova Postagem"
            />

        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleSubmit}>
            
            <label htmlFor="title">Título</label>
            <input type="text" onChange={(e) => { setTitle(e.target.value) }}/>

            <label htmlFor="category">Categoria</label>
            <select name="" id="" defaultValue="out" onChange={(e) => { setCategory(e.target.value) }}>
                <option value="web">Programação Web</option>
                <option value="html">Html/CSS</option>
                <option value="front">Front-end</option>
                <option value="back">Back-end</option>
                <option value="node">Node JS</option>
            </select>

            <label htmlFor="description">Descrição</label>
            <textarea name="" id="" onChange={(e) => { setDescription(e.target.value) }}></textarea>

            <label htmlFor="description">Selecionar .MD</label>
            <input type="file" onChange={handleSelectImages}/>

            <button type="submit">Envia</button>

            </form>
        </div>
        </>
    )
}