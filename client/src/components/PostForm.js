const PostForum = ({type, name, value, handleChange, labelText}) => {
    return (
      
      <div className="post-row">
              <label htmlFor={name} className="html-row">{labelText || name}</label>
              <input 
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className='form-input'
                />
      </div>
    )
  }

  export default PostForum