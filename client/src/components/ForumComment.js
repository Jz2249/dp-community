import { useState } from 'react'
import { Avatar, Button, Input } from 'antd';
import { Comment } from '@ant-design/compatible'
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ForumSingleComment'
import ForumLikeDislike from './ForumLikeDislike';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;
function ForumSingleComment(props) {
    const {createComment, user, deleteComment} = useAppContext()
    const [commentVal, setCommentVal] = useState('')
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleInput = (e) => {
        setCommentVal(e.currentTarget.value)
    }
    const openReply = () => {
        setOpen(!open)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!user) {
            navigate('/register');
            return 
        }
        const articleId = props.postId
        const commentObj = {
            respondTo: props.comment._id,
            respondToUserName: props.comment.createdByUserName,
            comment: commentVal,
            username: user?.name,
        }
        createComment(articleId, commentObj)
        setCommentVal("")
        setOpen(!open)
    }
    const handleDelete = () => {
        deleteComment(props.postId, props.comment._id)
    }
    const actions = [
        <>
        <ForumLikeDislike commentId={props.comment?._id} user={user}/>
        {props.comment.createdBy !== user?._id && 
            <span  onClick={openReply} key="comment-basic-reply-to">Reply to </span>
        }
        {props.comment.createdBy === user?._id &&
            <span key="comment-basic-delete" onClick={handleDelete}>
            Delete
             </span>
        }
      </>
    ]

    return (
      <Wrapper>
        <div className="single-comment">

            <div className="single-comment-content">
                {/* {console.log(props.comment)} */}
                <Comment
                    actions={actions}
                    author= 
                        {<span style={{ fontWeight: 'bold' }}>{props.comment.createdByUserName}</span>}
                       
                    
                    avatar={
                        <Avatar
                            src
                            alt
                        />
                    }
                    datetime={<span>{(new Date(props.comment.createdAt)).toLocaleString()}</span>}
                    content={
                        <p className="single-comment-text">
                            {/* {console.log(props.comment.content)} */}
                        {props.comment.content}
                        </p>
                    }
                />
            </div>
            
         

            {open && (
                 <form className="comment-form" style={{ display: 'flex' }} onSubmit={onsubmit}>
                    <TextArea
                        className="comment-textarea"
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={handleInput}
                        value= {commentVal}
                        placeholder="write some comments"
                    />
                    <br />
                    <Button className="comment-button" style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
                </form>
            )}
        </div>
    </Wrapper>
    )
    
}

export default ForumSingleComment