// import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ForumArticle';
import ForumArticleInfo from './ForumArticleInfo';

const ForumArticle = ({_id, articleDesc, createdAt, articleTitle}) => {
  const {setEditArticle, deletePost} = useAppContext()
//   let date = moment(createdAt)
//   date = date.format('MMM Do, YYYY')
  return (
    <body>
    <Wrapper>
      <header>
        <div className="main-icon">{articleTitle}</div>
        <div className="info">
        {/* <h5>{articleDesc}</h5> */}
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <ForumArticleInfo icon={<FaLocationArrow />} text='we' />
          <ForumArticleInfo icon={<FaCalendarAlt />} text={(new Date(createdAt)).toLocaleString()} />
          <ForumArticleInfo icon={<FaBriefcase />} text="test" />
          {/* <div className={`status ${status}`}> {status}</div> */}
        </div>

        <footer>
          <div className="actions">
            <Link 
              to="/web3/profile/articles/new" 
              className='btn edit-btn'
              onClick={() => setEditArticle(_id)}>
              edit
            </Link>
            <button 
              type='button' 
              className='btn delete-btn' 
              onClick={() => deletePost(_id)}>
              Delete
            </button>
            <Link 
              to={`/web3/community/all-articles/${_id}`}>
              View
            </Link>
          </div>
        </footer>
      </div>
      
    </Wrapper>
    </body>
  )
}

export default ForumArticle