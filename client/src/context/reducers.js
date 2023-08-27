import { CLEAR_ALERT, 
        DISPLAY_ALERT, 
        REGISTER_USER_BEGIN, 
        REGISTER_USER_ERROR, 
        REGISTER_USER_SUCCESS,
        LOGIN_USER_BEGIN,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_ERROR, 
        TOGGLE_SIDEBAR,
        UPDATE_USER_BEGIN, 
        UPDATE_USER_SUCCESS, 
        UPDATE_USER_ERROR,
        LOG_OUT,
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
        GET_ARTICLES_BEGIN,
        GET_ARTICLES_SUCCESS,
        DELETE_POST_BEGIN,
        DELETE_POST_ERROR,
        SHOW_ALL_ARTICLES_BEGIN,
        SHOW_ALL_ARTICLES_SUCCESS,
        SET_EDIT_ARTICLE,
        EDIT_ARTICLE_BEGIN,
        EDIT_ARTICLE_SUCCESS,
        EDIT_ARTICLE_ERROR,
        GET_ARTICLE_BEGIN,
        GET_ARTICLE_SUCCESS,
        GET_ARTICLE_ERROR,
        GET_COMMENTS_BEGIN,
        GET_COMMENTS_ERROR,
        GET_COMMENTS_SUCCESS,
        CREATE_COMMENTS_BEGIN,
        CREATE_COMMENTS_SUCCESS,
        CREATE_COMMENTS_ERROR,
        DELETE_COMMENT_BEGIN,
        DELETE_COMMENT_ERROR,
        GET_LIKES_BEGIN,
        GET_LIKES_SUCCESS,
        SHOW_ARTICLES_COMMENTS_BEGIN,
        SHOW_ARTICLES_COMMENTS_SUCCESS


    } from "./actions";
import { initialState } from "./appContext";


const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {
                ...state, 
                showAlert: true, 
                alertType: 'danger', 
                alertText: 'Please provide all values'}
    }
    if (action.type === CLEAR_ALERT) {
        return {
                ...state, 
                showAlert: false, 
                alertType: '', 
                alertText: ''}
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return {
                ...state,
                isLoading: true
        }
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                userLoaction: action.payload.location,
                jobLocation: action.payload.jobLocation,
                showAlert: true,
                alertType: 'success',
                alertText: 'User created, redirecting...',
        }
    }
    if (action.type === REGISTER_USER_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                
        }
    }
    if (action.type === LOGIN_USER_BEGIN) {
        return {
                ...state,
                isLoading: true
        }
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                userLoaction: action.payload.location,
                jobLocation: action.payload.jobLocation,
                showAlert: true,
                alertType: 'success',
                alertText: 'Login successfully! redirecting...',
        }
    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                
        }
    }
    if (action.type === UPDATE_USER_BEGIN) {
        return {
                ...state,
                isLoading: true
        }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                userLoaction: action.payload.location,
                jobLocation: action.payload.jobLocation,
                showAlert: true,
                alertType: 'success',
                alertText: 'User Profile Updated',
        }
    }
    if (action.type === UPDATE_USER_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                
        }
    }
    if (action.type === TOGGLE_SIDEBAR) {
        return {
                ...state,
                showSideBar: !state.showSideBar,
        }
    }
    if (action.type === LOG_OUT) {
        return {
            ...initialState,
            user: null,
            token: null,
            userLoaction: '',
            jobLocation: '', 
        }
    }
    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            page: 1,
            [action.payload.name]: action.payload.value
             
        }
    }
    if (action.type === CLEAR_VALUES) {
        const initialState = {
            isEditing: false,
            isEditingArticle: false,
            editJobId: '',
            position: '',
            company: '',
            jobLocation: state.userLocation || '',
            jobType: 'full-time',
            status: 'pending',
            articleTitle: "",
            articleImg: "",
            articleDesc: "",
            articleId: "",
            editArticleId: "",
            articleCreatedAt: "",
        }
        return {
            ...state,
            ...initialState
             
        }
    }
    if (action.type === CREATE_JOB_BEGIN) {
        return {
            ...state, 
            isLoading: true,

        }
    }
    if (action.type === CREATE_JOB_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'New Job Created',   
        }
    }
    if (action.type === CREATE_JOB_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                
        }
    }
    if (action.type === GET_JOBS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,
        }
    }
    if (action.type === GET_JOBS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            jobs: action.payload.jobs,
            totalJobs: action.payload.totalJobs,
            numOfPages: action.payload.numOfPages,
        }
    }
    if (action.type === GET_ARTICLES_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,
        }
    }
    if (action.type === GET_ARTICLES_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            articles: action.payload.articles
        }
    }
    if (action.type === GET_ARTICLE_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,
        }
    }
    if (action.type === GET_ARTICLE_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            articleId: action.payload.articleId,
            articleDesc: action.payload.articleDesc,
            articleImg: action.payload.articleImg,
            articleTitle: action.payload.articleTitle,
            articleCreatedAt: action.payload.articleCreatedAt,
            articleCreatedByUserName: action.payload.articleCreatedByUserName

        }
    }
    if (action.type === GET_ARTICLE_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,     
        }
    }

    if (action.type === GET_COMMENTS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,

        }
    }
    if (action.type === GET_COMMENTS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            comments: action.payload.comments

        }
    }
    

    if (action.type === GET_LIKES_BEGIN) {
        return {
            ...state,
            likeLoading: true,
            showAlert: false,

        }
    }
    if (action.type === GET_LIKES_SUCCESS) {
        return {
            ...state,
            likeLoading: false,
            likes: action.payload.likes

        }
    }




    if (action.type === CREATE_COMMENTS_BEGIN) {
        return {
            ...state, 
            isLoading: true,
        }
    }

    
    if (action.type === CREATE_COMMENTS_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                commentObj: action.payload.comment,
                comments: action.payload.comments,
                alertType: 'success',
                alertText: 'New Comment Created',   
        }
    }
    if (action.type === CREATE_COMMENTS_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                
        }
    }
    if (action.type === GET_COMMENTS_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,     
        }
    }
    if (action.type === SET_EDIT_JOB) {
        const job = state.jobs.find((job) => job._id === action.payload.id) // review this later
        const {_id, position, company, jobLocation, jobType, status} = job
        return {
            ...state, 
            isEditing: true,
            editJobId: _id,
            position, 
            company, 
            jobLocation, 
            jobType, 
            status

        }
    }
    if (action.type === SET_EDIT_ARTICLE) {
        const article = state.articles.find(article => article._id === action.payload.id) // review this later
        const { _id, articleTitle, articleDesc, articleImg } = article
        return {
            ...state, 
            isEditingArticle: true,
            editArticleId: _id,
            articleTitle: articleTitle,
            articleDesc: articleDesc,
            articleImg: articleImg
        }
    }
    if (action.type === DELETE_JOB_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === DELETE_JOB_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,     
        }
    }

    if (action.type === DELETE_COMMENT_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === DELETE_COMMENT_ERROR) {
        return {
                ...state,
                isLoading: false,
                alertText: action.payload.msg,     
        }
    }
    if (action.type === DELETE_POST_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === DELETE_POST_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,     
        }
    }
    if (action.type === EDIT_JOB_BEGIN) {
        return {
                ...state,
                isLoading: true
        }
    }
    if (action.type === EDIT_JOB_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'Job Updated!',
        }
    }
    if (action.type === EDIT_JOB_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,     
        }
    }
    if (action.type === EDIT_ARTICLE_BEGIN) {
        return {
                ...state,
                isLoading: true
        }
    }
    if (action.type === EDIT_ARTICLE_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'Article Updated!',
        }
    }
    if (action.type === EDIT_ARTICLE_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,     
        }
    }
    if (action.type === SHOW_STATS_BEGIN) {
        return {
                ...state,
                isLoading: true,
                showAlert: false
        }
    }
    if (action.type === SHOW_STATS_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                stats: action.payload.stats,
                monthlyApplications: action.payload.monthlyApplications
        }
    }
    if (action.type === CLEAR_FILTERS) {
        return {
            ...state,
            search: '',
            searchStatus: 'all',
            searchType: 'all',
            sort: 'latest',
        }
    }
    if (action.type === CHNAGE_PAGE) {
        return {
            ...state,
            page: action.payload.page
        }
    }
    if (action.type === SHOW_ARTICLES_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }
    if (action.type === SHOW_ARTICLES_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            articles: action.payload.articles
        }
    }
    if (action.type === SHOW_ALL_ARTICLES_BEGIN) {
        return {
            ...state,
            articleLoading: true,
            showAlert: false
        }
    }
    if (action.type === SHOW_ALL_ARTICLES_SUCCESS) {
        return {
            ...state,
            articleLoading: false,
            all_articles: action.payload.articles,
            numOfPages: action.payload.numOfPages,
            totalArticles: action.payload.totalArticles 
        }
    }

    if (action.type === SHOW_ARTICLES_COMMENTS_BEGIN) {
        return {
            ...state,
            commentLoading: true,
            showAlert: false
        }
    }
    if (action.type === SHOW_ARTICLES_COMMENTS_SUCCESS) {
        return {
            ...state,
            commentLoading: false,
        }
    }
    if (action.type === CREATE_ARTICLE_BEGIN) {
        return {
            ...state, 
            isLoading: true,

        }
    }
    if (action.type === CREATE_ARTICLE_SUCCESS) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'New Article Created',   
        }
    }
    if (action.type === CREATE_ARTICLE_ERROR) {
        return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                
        }
    }
    throw new Error(`no such action: ${action.type}`)
}

export default reducer