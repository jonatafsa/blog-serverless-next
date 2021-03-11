import styles from '../styles/components/Header.module.css'
import { useRouter } from 'next/router'

import { IoIosArrowBack } from 'react-icons/io'
import { IoIosSearch } from 'react-icons/io'

interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = (props) => {
    const routes = useRouter()

    function returnPage() {
        routes.back()
    }

    return (
        <div className={styles.container}>
            <IoIosArrowBack
                className={styles.icons}
                size={32}
                onClick={returnPage}
            />
            <h1>{props.title}</h1>

            <p>Conteudo para desenvolvedores Web que desejam ser mestres</p>

            <div className={styles.search}>
                <IoIosSearch
                className={styles.searchButton}
                    size={32}
                />
                <input type="text" placeholder="Digite o que você procura.. Ex: Hooks React" />
                <button>Buscar</button>
            </div>
        </div>
    )
}