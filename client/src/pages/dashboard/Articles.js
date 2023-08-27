
import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
// import { Link } from "react-router-dom"
// import he from 'he'
// import Wrapper from '../../assets/wrappers/PostForm'
import { ForumArticleContainer } from "../../components"
const Articles = () => {
   const {showArticles} = useAppContext()
   useEffect(() => {
    showArticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   
  return (
    <>
    <ForumArticleContainer />
    </>
  )
}

export default Articles