
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Register, Landing, Error, ProtectRoute, AllArticles} from './pages'
import { Test,  Profile,  SharedLayout,  Articles, AddPost, ForumArticles} from "./pages/dashboard";
import { ForumGetArticle } from './pages/dashboard'
import CryptoPrice from './price.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
   
        <Route path="/web3/" 
              element={
              <ProtectRoute> {/* If user not log in, only show landing page */}
              <SharedLayout />
              </ProtectRoute>
            }
            >
          {/* <Route path='landing' element={<Landing />}></Route> */}
          {/* <Route index element={<Stats />}></Route> */}
          {/* <Route path='all-jobs' element={<Alljobs />}></Route>
          <Route path='add-job' element={<Addjob />}></Route> */}
          <Route index element={<AllArticles />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='profile/articles' element={<Articles/>}></Route>
          <Route path='articles/test' element={<Test />}></Route>
          <Route path='profile/articles/new' element={<AddPost/>}></Route>
         
        </Route>
        <Route path='/web3/community/all-articles/:id' element={<ForumGetArticle />}></Route>
        <Route path='/web3/community/all-articles' element={<AllArticles/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/price" element={<CryptoPrice />}></Route>
        <Route path='all-discussions' element={<ForumArticles/>}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
