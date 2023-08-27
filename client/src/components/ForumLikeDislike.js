import { Fragment, useEffect, useState } from "react"
import { Tooltip } from "antd"
import { LikeOutlined, DislikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { useAppContext } from "../context/appContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ForumLikeDislike = (props) => {
  const {axiosAuthFetch} = useAppContext()
  const [Likes, setLikes] = useState(0)
  const [Dislikes, setDislikes] = useState(0)
  const [LikeAction, setLikeAction] = useState(null)
  const [DislikeAction, setDislikeAction] = useState(null)
  const { user} = useAppContext()
  const navigate = useNavigate()
  let queryObject = {}
  if (props.articleId) {
    queryObject = {
        articleId: props.articleId,
        userName: props.user?.name,
        userId: props.user?._id
    }
  } else {
      queryObject = {
          commentId: props.commentId, 
          userName: props.user?.name,
          userId: props.user?._id
      }
  }
    useEffect(() => {
        
        axios.post('/api/v1/like/getLikes', queryObject)
        .then(response => {
            // console.log('getLikes',response.data)
            if (response.data.success) {
                //How many likes does this video or comment have 
                setLikes(response.data.data.length)
                //if I already click this like button or not 
                // eslint-disable-next-line
                response.data.data.map(like => {
                    if (like.userId === props.user?._id) {
                        setLikeAction('liked')
                    }
                })
            } else {
                // console.log('fail to get likes')
            }
        })
    axios.post('/api/v1/like/getDislikes', queryObject)
            .then(response => {
                // console.log('getDislike',response.data)
                if (response.data.success) {
                    //How many likes does this video or comment have 
                    setDislikes(response.data.data.length)
                    //if I already click this like button or not 
                    // eslint-disable-next-line
                    response.data.data.map(dislike => {
                        // console.log(dislike)
                    //   console.log(dislike.userId, props.userId)
                        if (dislike.userId === props.user?._id) {
                            setDislikeAction('disliked')
                        }
                    })
                } else {
                    // console.log('Failed to get dislikes')
                }
            })
// eslint-disable-next-line
  }, [queryObject])
  const onLike = () => {
    if (!user) {
        navigate('/register');
        return 
    }
    if (LikeAction === null) {
    
      axiosAuthFetch.post('/like/addLike', queryObject)
          .then(response => {
              if (response.data.success) {
                  setLikes(Likes + 1)
                  setLikeAction('liked')
                  //If dislike button is already clicked
                  if (DislikeAction !== null) {
                      setDislikeAction(null)
                      setDislikes(Dislikes - 1)
                  }

              } else {
                  console.log('Failed to increase the like')
              }
          })
  } else {

      axiosAuthFetch.post('/like/removeLike', queryObject)
          .then(response => {
              if (response.data.success) {

                  setLikes(Likes - 1)
                  setLikeAction(null)
              } else {
                  console.log('Failed to decrease the like')
              }
          })
    }
  }
  const onDisLike = () => {
    if (!user) {
        navigate('/register');
        return 
    }
    if (DislikeAction !== null) {

        axiosAuthFetch.post('/like/removeDisLike', queryObject)
            .then(response => {
                if (response.data.success) {

                    setDislikes(Dislikes - 1)
                    setDislikeAction(null)

                } else {
                    console.log('Failed to decrease dislike')
                }
            })

    } else {

        axiosAuthFetch.post('/like/addDisLike', queryObject)
            .then(response => {
                if (response.data.success) {

                    setDislikes(Dislikes + 1)
                    setDislikeAction('disliked')

                    //If dislike button is already clicked
                    if(LikeAction !== null ) {
                        setLikeAction(null)
                        setLikes(Likes - 1)
                    }
                } else {
                    console.log('Failed to increase dislike')
                }
            })
      }
  }
  return (
    <Fragment>
      <span>
      <span key="comment-basic-like">
          <Tooltip title="Like">
            {LikeAction === 'liked' && 
                <LikeFilled
                onClick={onLike}/>
            }
            {LikeAction !== 'liked' && 
                <LikeOutlined
                onClick={onLike}/>
            }
          </Tooltip>
          
      <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Likes}</span>
      </span>&nbsp;&nbsp;
      <span key="comment-basic-dislike">
          <Tooltip title="Dislike">
            {DislikeAction === 'disliked' &&
            <DislikeFilled
            onClick={onDisLike}
            />}
            {DislikeAction !== 'disliked' &&
            <DislikeOutlined
            theme={DislikeAction === 'disliked' ? 'filled' : 'outlined'}
            onClick={onDisLike}
            />
            }
            
              
          </Tooltip>
          <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Dislikes}</span>
      </span>
      </span>
    </Fragment>
  )
}

export default ForumLikeDislike