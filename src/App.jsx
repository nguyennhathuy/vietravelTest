import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import NewsList from "./components/NewsList"
import Pagination from "./components/Pagination"
import NavBar from "./components/NavBar"

function App() {
  const [news, setNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1dc16ec5b23648aa968caf240b21f3b7"
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
      const json = await data.json()
      return json
    }

    fetchData()
      .then(data => {
        setNews(data.articles)
      })
      .catch(console.error)
  }, [])
  const handleChangePage = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="container">
      <NavBar />
      <NewsList news={news} currentPage={currentPage} />
      <Pagination currentPage={currentPage} news={news} handleChangePage={(page) => handleChangePage(page)} />
    </div>
  )
}

export default App
