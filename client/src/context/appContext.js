import React, { useReducer, useContext, useEffect} from "react";
import reducer from "./reducers";
import axios from "axios"
import {
        CLEAR_ALERT, 
        DISPLAY_ALERT, 
        REGISTER_USER_BEGIN, 
        REGISTER_USER_SUCCESS, 
        REGISTER_USER_ERROR,
        LOGIN_USER_BEGIN, 
        LOGIN_USER_SUCCESS, 
        LOGIN_USER_ERROR,
        TOGGLE_SIDEBAR,
        LOG_OUT,
        UPDATE_USER_BEGIN, 
        UPDATE_USER_SUCCESS, 
        UPDATE_USER_ERROR,
        HANDLE_CHANGE,
        CLEAR_VALUES,
        CREATE_JOB_BEGIN,
        CREATE_JOB_SUCCESS,
        CREATE_JOB_ERROR,
        GET_JOBS_BEGIN,
        GET_JOBS_SUCCESS,
        SET_EDIT_JOB,
        DELETE_JOB_BEGIN,
        EDIT_JOB_BEGIN,
        EDIT_JOB_SUCCESS,
        EDIT_JOB_ERROR,
        SHOW_STATS_BEGIN,
        SHOW_STATS_SUCCESS,
        CLEAR_FILTERS,
        CHNAGE_PAGE,
        DELETE_JOB_ERROR,
        SHOW_ARTICLES_BEGIN,
        SHOW_ARTICLES_SUCCESS,
        CREATE_ARTICLE_BEGIN,
        CREATE_ARTICLE_SUCCESS,
        CREATE_ARTICLE_ERROR,
        DELETE_POST_BEGIN,
        DELETE_POST_ERROR,
        GET_ARTICLES_BEGIN,
        GET_ARTICLES_SUCCESS,
        SHOW_ALL_ARTICLES_BEGIN,
        SHOW_ALL_ARTICLES_SUCCESS,
        SET_EDIT_ARTICLE,
        EDIT_ARTICLE_BEGIN,
        EDIT_ARTICLE_ERROR,
        EDIT_ARTICLE_SUCCESS,
        GET_ARTICLE_BEGIN,
        GET_ARTICLE_SUCCESS,
        GET_ARTICLE_ERROR,
        GET_COMMENTS_BEGIN,
        GET_COMMENTS_SUCCESS,
        GET_COMMENTS_ERROR,
        CREATE_COMMENTS_BEGIN,
        CREATE_COMMENTS_SUCCESS,
        CREATE_COMMENTS_ERROR,
        DELETE_COMMENT_BEGIN,
        DELETE_COMMENT_ERROR,
        GET_LIKES_BEGIN,
        GET_LIKES_SUCCESS,
        GET_LIKES_ERROR,
        SHOW_ARTICLES_COMMENTS_BEGIN,
        SHOW_ARTICLES_COMMENTS_SUCCESS,


        } from "./actions";

const user = localStorage.getItem('user')
const token = localStorage.getItem('token')
const userLocation = localStorage.getItem('location')
const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || '',
    showSideBar: true,
    isEditing: false,
    editJobId: '',
    position: '',
    company: '',
    jobLocation: userLocation || 'N/A',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['pending', 'interview', 'declined'],
    status: 'pending',
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
    articles:[],
    articleTitle: '',
    articleImg: '',
    articleDesc: '',
    all_articles: [],
    isEditingArticle: false,
    editArticleId: '',
    articleCreatedAt: '',
    articleCreatedByUserName: '',
    articleId: '',
    totalArticles: '0',
    comment: '',
    commentList: [],
    all_comments: {},
    articleLoading: true,
    commentLoading: true,
    likeLoading: true

  };

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const tokenData = JSON.parse(atob(token.split('.')[1]));
                
                const expirationTime = tokenData.exp * 1000;
                if (expirationTime <= Date.now()) {
                    // JWT has expired, remove it from local storage
                    removeUserStorage();
                    toggleLogOut()
                }
            } catch (error) {
                console.error('Error parsing or checking JWT:', error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const axiosAuthFetch = axios.create({
        baseURL: '/api/v1',
    })
    // request
    axiosAuthFetch.interceptors.request.use(
        (config) => {
            config.headers['Authorization'] = `Bearer ${state.token}`
            return config
        },
        (error) => {
            return Promise.reject(error)
        } 
    )
    // response
    axiosAuthFetch.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error.response.status === 401) {
                toggleLogOut()
            }
            return Promise.reject(error)
        } 
    )
    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT})
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000)
    }

    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN })
        try {
            const response = await axios.post('/api/v1/auth/register', currentUser)
            const {user, token, location} = response.data
            dispatch({ 
                        type: REGISTER_USER_SUCCESS,
                        payload: { user, token, location }
                    })
            addUserStorage({user, token, location})
        } catch (error) {
            //console.log(error.response)
            dispatch({ 
                        type: REGISTER_USER_ERROR,
                        payload: {msg: error.response.data.msg}
                    })
        }
        clearAlert()
    }
    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN })
        try {
            const {data} = await axios.post('/api/v1/auth/login', currentUser)
            const {user, token, location} = data
            dispatch({ 
                        type: LOGIN_USER_SUCCESS,
                        payload: { user, token, location }
                    })
            addUserStorage({user, token, location})
        } catch (error) {
            console.log(error.response)
            dispatch({ 
                        type: LOGIN_USER_ERROR,
                        payload: {msg: error.response.data.msg}
                    })
        }
        clearAlert()
    }
    const addUserStorage = ({user, token, location}) => {
        localStorage.setItem('user', JSON.stringify(user))
        //console.log(JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)
    }
    const removeUserStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('location')
    }
    const toggleSideBar = () => {
        dispatch({ type: TOGGLE_SIDEBAR })
    }
    const toggleLogOut = () => {
        dispatch({ type: LOG_OUT })
        removeUserStorage()
    }
    const updateUser = async (currentUser) => {
        dispatch({type: UPDATE_USER_BEGIN})
        try {
            const {data} = await axiosAuthFetch.patch(
                '/auth/updateUser', 
                currentUser, 
               )
            const {user, location, token} = data
            dispatch({
                type: UPDATE_USER_SUCCESS, 
                payload: {user, location, token}
            })
            addUserStorage({user, location, token})
            
        } catch (error) {
            //console.log(error.response);
            if (error.response.status !== 401) {
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: {msg: error.response.data.msg}
                })
            }
            
        }
        // clearAlert()  // no need clear Alert for better user experience
    }
    const handleChange = ({name, value}) => {
        dispatch({
                    type: HANDLE_CHANGE,
                    payload: {name, value}
                })
    }
    const clearValues = () => {
        dispatch({type: CLEAR_VALUES})
    }
    const createJob = async () => {
        dispatch({type: CREATE_JOB_BEGIN})
        try {
            const {position, company, jobLocation, jobType, status} = state
            await axiosAuthFetch.post('/jobs', {
                position, 
                company, 
                jobLocation, 
                jobType, 
                status
            })
            dispatch({type: CREATE_JOB_SUCCESS})
            dispatch({type: CLEAR_VALUES})
        } catch (error) {
            if (error.response.status === 401) {
                return
            }
            dispatch({
                type: CREATE_JOB_ERROR, 
                payload: {msg: error.response.data.msg}
            })
        }
        clearAlert()
    }
    const getJobs = async () => {
        const {page, search, searchStatus, searchType, sort} = state 
        let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`
        if (search) {
            url = url + `&search=${search}`
        }
        dispatch({type: GET_JOBS_BEGIN})
        try {
            const {data} = await axiosAuthFetch.get(url)
            const {jobs, totalJobs, numOfPages} = data
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: {
                    jobs,
                    totalJobs,
                    numOfPages
                }
            })

        } catch (error) {
            toggleLogOut()
        }
        clearAlert()
    }
    const getArticles = async () => {
        //const {page, sort} = state 
        let url = `/articles`
        dispatch({type: GET_ARTICLES_BEGIN})
        try {
            const {data} = await axiosAuthFetch.get(url)
            const articles = data
            dispatch({
                type: GET_ARTICLES_SUCCESS,
                payload: {
                    articles
                }
            })
        } catch (error) {
            toggleLogOut()
        }
        clearAlert()
    }
    const createComment = async (postId, comment) => {
        const { comments} = state
        let url = `/comments/${postId}/createComment`
        dispatch({type:CREATE_COMMENTS_BEGIN})
        try {
            const {data} = await axiosAuthFetch.post(url, comment)
            const newList = [...comments, data.createdComment]
            dispatch({
                type: CREATE_COMMENTS_SUCCESS,
                payload: {
                    comment: data.createdComment,
                    comments: newList
                }
            })
        } catch(error) {
            if (error.response.status === 401) {
                return
            }
            dispatch({
                type: CREATE_COMMENTS_ERROR, 
                payload: {msg: error.response.data.msg}
            })
        }
    }
    const deleteComment = async (post_id, comment_id) => {
        dispatch({type: DELETE_COMMENT_BEGIN})
        try {
            await axiosAuthFetch.delete(`/comments/${post_id}/replies/${comment_id}/`)
            getAllComments(post_id)
            } catch (error) {
            // console.log(error.response)
            if (error.response.status === 401) return
            dispatch({
                type: DELETE_COMMENT_ERROR,
                payload: {msg: error.response.data.msg}
            })
            //toggleLogOut()
        }
        clearAlert()
    }
    const getLikes = async (query) => {
        let url = `/api/v1/like/getLikes`
        const {articleId} = state
        dispatch({type: GET_LIKES_BEGIN})
        try {
            const {data} = await axios.post(url, {articleId})
            console.log(data)
            // console.log(data);
            dispatch({
                type: GET_LIKES_SUCCESS,
                payload: {
                    likes: data.result
                }
            })
        } catch (error) {
            if (error.response.status === 401) return
            dispatch({
                    type: GET_LIKES_ERROR, 
                    payload: {msg: error.response.data.msg}
                    })
        }
    }

    const getAllComments = async (articleId) => {
        let url = `/comments/${articleId}/comments`
        dispatch({type: GET_COMMENTS_BEGIN})
        try {
            const {data} = await axiosAuthFetch.get(url)
            dispatch({
                type: GET_COMMENTS_SUCCESS,
                payload: {
                    comments: data.comments
                }
            })
            return data.comments
        } catch (error) {
            if (error.response.status === 401) return
            dispatch({
                    type: GET_COMMENTS_ERROR, 
                    payload: {msg: error.response.data.msg}
                    })
        }

    }
    const getArticle = async (id) => {
        let url = `/articles/${id}`
        dispatch({type: GET_ARTICLE_BEGIN})
        try {
            const {data} = await axiosAuthFetch.get(url)
            const {_id, articleDesc, articleImg, articleTitle, createdAt, createdByUserName} = data
            dispatch({
                type: GET_ARTICLE_SUCCESS,
                payload: {
                    articleId: _id, 
                    articleDesc,
                    articleImg,
                    articleTitle,
                    articleCreatedAt: createdAt,
                    articleCreatedByUserName: createdByUserName
                }
            })
            getAllComments(_id)
        } catch (error) {
            if (error.response.status === 401) return
            dispatch({
                    type: GET_ARTICLE_ERROR, 
                    payload: {msg: error.response.data.msg}
                    })
        }
        clearAlert()
    }
    const setEditJob = (id) => {
        dispatch({type: SET_EDIT_JOB, payload: {id}})
    }
    const editJob = async () => {
        dispatch({type: EDIT_JOB_BEGIN})
        try {
            const {position, company, jobLocation, jobType, status} = state
            await axiosAuthFetch.patch(`/jobs/${state.editJobId}`, {
                company,
                position,
                jobLocation,
                jobType,
                status,
            })
            dispatch({type: EDIT_JOB_SUCCESS})
            dispatch({type: CLEAR_VALUES})
        } catch (error) {
            if (error.response.status === 401) return
            dispatch({
                    type: EDIT_JOB_ERROR, 
                    payload: {msg: error.response.data.msg
                    }})
        }
        clearAlert()
    }
    const deleteJob = async (jobId) => {
        dispatch({type: DELETE_JOB_BEGIN})
        try {
            await axiosAuthFetch.delete(`/jobs/${jobId}`)
            getJobs()
            } catch (error) {
            // console.log(error.response)
            if (error.response.status === 401) return
            dispatch({
                type: DELETE_JOB_ERROR,
                payload: {msg: error.response.data.msg}
            })
            //toggleLogOut()
        }
        clearAlert()
    }
   const showStats = async () => {
    dispatch({type: SHOW_STATS_BEGIN})
    try {
        const {data} = await axiosAuthFetch.get('/jobs/stats')
        // console.log(data.defaultStats)
        dispatch({
            type: SHOW_STATS_SUCCESS,
            payload: {
                stats: data.defaultStats,
                monthlyApplications: data.monthlyApplications
            }

        })
    } catch (error) {
        //console.log(error.response)
        toggleLogOut()
    }
    clearAlert()
   }
   const clearFilters = () => {
    dispatch({type: CLEAR_FILTERS})
   }
   const changePage = (page) => {
    dispatch({type: CHNAGE_PAGE, payload: {page}})
   }
   const showArticles = async () => {
    clearValues()
    dispatch({type:SHOW_ARTICLES_BEGIN})
    try {
        const {data} = await axiosAuthFetch.get('/articles')
        dispatch({
            type: SHOW_ARTICLES_SUCCESS,
            payload:{
                articles: data
            }
        })
        
    } catch (error) {
        console.log(error)
    }
   }
   const showAllArticles = async () => {
    const {page} = state
    let url = `/api/v1/articles/all-articles?page=` + page

    dispatch({type: CLEAR_VALUES})
    dispatch({type:SHOW_ALL_ARTICLES_BEGIN})
    try {
        const {data} = await axios.get(url)
        dispatch({
            type: SHOW_ALL_ARTICLES_SUCCESS,
            payload:{
                articles: data.articles,
                numOfPages: data.numOfPages,
                totalArticles: data.totalArticles 
            }
        })
        showCommentsInCommunity(data.articles)
    } catch (error) {
        console.log(error)
    }
   }
   const showCommentsInCommunity = async (articles) => {
    dispatch({type: CLEAR_VALUES})
    dispatch({type:SHOW_ARTICLES_COMMENTS_BEGIN})
    try {
        for (const article of articles) {
            const comments = await getAllComments(article._id)
            article["comments"] = comments
        }
        dispatch({
            type: SHOW_ARTICLES_COMMENTS_SUCCESS
        })
    } catch (e) {
        console.log(e)
    }
   }
//    const totalComments = async (articles) => {
//     dispatch({type: CLEAR_VALUES})
//     dispatch({type:SHOW_ARTICLES_COMMENTS_BEGIN})
//     try {
//         for (const article of articles) {
//             const comments = await getAllComments(article._id)
//             article["comments"] = comments
//         }
//         dispatch({
//             type: SHOW_ARTICLES_COMMENTS_SUCCESS
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }
   const clearPreviousEditor = () => {
    setTimeout(() => {
        dispatch({type: CLEAR_VALUES})
    }, 1000)    
}
   const setAddPost = () => {
    dispatch({type: CLEAR_VALUES})
   }
   const addPost = async () => {
        dispatch({type: CREATE_ARTICLE_BEGIN})
        try {
            const {articleDesc, articleImg, articleTitle} = state
            const formData = new FormData()

            formData.append("articleImg", articleImg)
            formData.append("articleDesc", articleDesc)
            formData.append("articleTitle", articleTitle)
            await axiosAuthFetch.post('articles',
                                formData, 
                                {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                                })
        
            dispatch({type: CREATE_ARTICLE_SUCCESS})
            clearPreviousEditor()
   
        } catch (error) {
            if (error.response.status === 401) {
                return
            }
            dispatch({
                type: CREATE_ARTICLE_ERROR, 
                payload: {msg: error.response.data.msg}
            })
        }
        clearAlert()
    }
    const deletePost = async (articleId) => {
        dispatch({type: DELETE_POST_BEGIN})
        try {
            await axiosAuthFetch.delete(`/articles/${articleId}`)
            getArticles()
            } catch (error) {
            // console.log(error.response)
            if (error.response.status === 401) return
            dispatch({
                type: DELETE_POST_ERROR,
                payload: {msg: error.response.data.msg}
            })
            //toggleLogOut()
        }
        clearAlert()
    }
    const setEditArticle = (id) => {
        // articleDesc = articleDesc.replace(/<p><br><\/p>/g, '');
        dispatch({type: SET_EDIT_ARTICLE, payload: {id}})
    }
    const editArticle = async () => {
        dispatch({type: EDIT_ARTICLE_BEGIN})
        try {
            const {articleDesc, articleImg, articleTitle} = state
            const formData = new FormData()
            formData.append("articleImg", articleImg)
            formData.append("articleDesc", articleDesc)
            formData.append("articleTitle", articleTitle)
            await axiosAuthFetch.patch(`/articles/${state.editArticleId}`,
                                formData, 
                                {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                                })
            // await axiosAuthFetch.patch(`/articles/${state.editArticleId}`, {
            //   articleDesc,
            //   articleTitle,
            //   articleImg
            // })
            dispatch({type: EDIT_ARTICLE_SUCCESS})
            dispatch({type: CLEAR_VALUES})
        } catch (error) {
            if (error.response.status === 401) return
            dispatch({
                    type: EDIT_ARTICLE_ERROR, 
                    payload: {msg: error.response.data.msg
                    }})
        }
        clearAlert()
    }
    
    return (
        <AppContext.Provider value={
                                    { ...state, 
                                        displayAlert, 
                                        registerUser, 
                                        loginUser,
                                        toggleSideBar,
                                        toggleLogOut,
                                        updateUser,
                                        handleChange,
                                        clearValues,
                                        createJob,
                                        getJobs,
                                        setEditJob,
                                        deleteJob,
                                        editJob,
                                        showStats,
                                        clearFilters,
                                        changePage,
                                        showArticles,
                                        setAddPost,
                                        addPost,
                                        deletePost,
                                        getArticles,
                                        showAllArticles,
                                        setEditArticle,
                                        editArticle,
                                        getArticle,
                                        createComment,
                                        getAllComments,
                                        deleteComment,
                                        getLikes,
                                        axiosAuthFetch,
                                        showCommentsInCommunity
                                        

                                    }}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}
export {
    initialState, 
    useAppContext, 
    AppProvider,
}