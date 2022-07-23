import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Leonam Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in atque similique nihil reiciendis voluptates numquam, minima officia mollitia, molestias accusantium omnis possimus fugiat voluptas debitis velit perferendis sed quod."
          />
        </main>
      </div>
    </div>

  )
}
