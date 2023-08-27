import { useAppContext } from "../../context/appContext"
import {  Alert, ForumHeader, PostForum, } from "../../components";
import { useState,} from "react";
// import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "../../components/EditorToolBar";
import Wrapper from "../../assets/wrappers/PostForm";


// const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png']
const AddPost = () => {
    // const navigate = useNavigate()
    // eslint-disable-next-line
    const [error, setError] = useState('')
    // eslint-disable-next-line
    const [imgsrc, setImg] = useState('')
    const { editArticle, isEditingArticle,  isLoading, showAlert, articleTitle, articleDesc, articleImg, clearValues, addPost, handleChange} = useAppContext()
    // const [value, setValue] = useState(articleDesc)

    const [file, setFIle] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const formData = new FormData()
        // if (file) {
        //   formData.append("articleImg", file)
        //   formData.append("articleDesc", articleDesc)
        //   formData.append("articleTitle", articleTitle)
        //   await axios.post('/api/v1/articles',
        //                     formData, 
        //                     {
        //                       headers: {
        //                         Authorization: `Bearer ${token}`,
        //                         'Content-Type': 'multipart/form-data'
        //                       }
        //                     })
        // }
       
        // const file = ''
        // if (e.target.files) {
        //   file = e.target.files[0];
        // }

        if (isEditingArticle) {
          if (file) {
            // delete
            // handleUpload(e)
          }
          editArticle()
          return
        }
        // if (file) {
        //   // handleUpload(e)
        // }
        addPost()
    }
   
    const handleQuillChange = (content, delta, src, editor) => {
      // if (isEditingArticle) {
      //   setValue(content.text)
      // }
      const value = editor.getHTML()
      if (value !== '<p><br></p>') {
        handleChange({ name: 'articleDesc', value: editor.getHTML()});
      }
      else {
        handleChange({ name: 'articleDesc', value: ""});
      }
    }
   
    const handlePostInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({name, value})
      }
    const handleUpload = async (e) => {
      const file = e.target.files[0]
      setFIle(file)
      const name = e.target.name
      const value = file
      handleChange({name, value})
    }
    // const handleUpload = async (e) => {
    //   const file = e.target.files[0];
    //   // console.log(file)
    //   if (!validFileTypes.find(type => type === file.type)) {
    //     setError('file must be jpg, jpeg or png')
    //     return
    //   }
    //   const form = new FormData()
    //   form.append('image', file)
    //   // send auth header to backend middleware
    //   const headers = {
    //     Authorization: `Bearer ${token}`,
    //   }
    //   // get secure url from server (s3)
    //   const {data} = await axios.get('/api/v1/aws-url/s3imgs', {
    //     headers
    //   })
    //   // post the image directly to s3 bucket
    //   // await axios.put(data.url, form,  {
    //   //   headers: {
    //   //     "Content-Type": file.mimetype
    //   //   },
    //   // })
    //   await fetch(data.url, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "multipart/form-data"
    //     },
    //     body:file
    //   })   
    //   const imgURL = data.url.split('?')[0]
    //   const name = e.target.name
    //   const value = imgURL
    //   handleChange({name, value})
    //   setImg(imgURL)
    // }
    // const handlePreview = (e) => {
    //   const file = e.target.files[0];
    //   if (!validFileTypes.find(type => type === file.type)) {
    //     setError('file must be jpg, jpeg or png')
    //     return
    //   }
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setImg(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };
    // useEffect(() => {
    //     if (showAlert) {
    //         setTimeout(() => navigate('/web3/profile/articles'), 3000)
    //     }
  
    // }, [articles, showAlert])

  return (
    <body>
      <ForumHeader />
      <section className="blog-post section-header-offset">
        <h3 className="title blog-post-title form">{isEditingArticle ? "edit post" : "add post"}</h3>
        {showAlert && <Alert />}

          <PostForum
            type="text" 
            labelText="Title"
            name="articleTitle" 
            value={articleTitle} 
            handleChange={handlePostInput} />

          {/* <PostForum
            labelText="Img"
            name="articleImg" 
            value={articleImg} 
            handleChange={handlePostInput} /> */}
        <Wrapper>
          <form className="post-form" >
          
              <EditorToolbar toolbarId={'t1'}/>
          
              <ReactQuill
                className="editor"
                theme="snow" 
                type="text" 
                labelText="Description"
                name="articleDesc" 
                value={articleDesc} 
                modules={modules('t1')}
                onChange={ handleQuillChange}
                formats={formats} 
                style={{ position: "relative" }}
                /> 
            
                <input id='imageInput' type='file'  name="articleImg" accept='image/*' onChange={handleUpload}/>
                {error && (
                  <p>
                    {error}
                  </p>
                )}
                <div>
                  <h5>Preview</h5>
                  {isEditingArticle && articleImg && (
                    <img src={articleImg} className='preview-article-img' alt="preview" />
                  )}
                  {!isEditingArticle && imgsrc && (
                    <img src={imgsrc} className='preview-article-img' alt="preview" />
                  )}
                  
                </div>
                {/* btn container */}
                <div className="btn-container">
                  <button type="submit" 
                  className='btn btn-block submit-btn' 
                  onClick={handleSubmit}
                  disabled={isLoading}>
                    submit
                  </button>
                  <button 
                    className='btn btn-block clear-btn' 
                    onClick={(e) => {
                      e.preventDefault()
                      clearValues()
                    }}>
                      clear
                    </button>
                </div>

          </form>
        </Wrapper>
      </section>
    </body>
  )
}

export default AddPost