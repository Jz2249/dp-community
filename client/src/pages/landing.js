
import { ForumSidebar, ForumOlderPost, ForumNewsletter, ForumFooter, ForumHeader} from '../components';
// import { useAppContext } from '../context/appContext';
// import { useState } from 'react';
import { Banner } from '../temp/Banner';
import { Skills } from '../temp/Skills';
// import ForumScrollBar from '../components/ForumScrollBar';
const Landing = () => {
  return (
      <body className='body1'>
        <ForumHeader />
  
       
        <section className="featured-articles section section-header-offset">
          {/* <div className="featured-articles-container container "> add d-grid if need sidebar */}
            {/* <ForumArticles /> */}
            <div className='Banner-1'>
              <Banner />
            </div>
            {/* <section className="quick-read section">
              <ForumScrollBar />
            </section> */}
            <div className='Skills-1'>
              <Skills />
            </div>
            
            
            <ForumSidebar />
          {/* </div> */}
        </section>
      
        <section className="older-posts section">
          <ForumOlderPost />
        </section>
        <section className="newsletter section">
          <ForumNewsletter />
        </section>
        <footer className="footer section">
          <ForumFooter />
        </footer>
      </body>
    
   



   







    // <Wrapper>
    //   <nav>

    //     <Logo/>
    //   </nav>
    //   <div className="container page">
    //     <div className="info">
    //       <h1>
    //         job <span>tracking</span> app
    //       </h1>
    //       <p>
    //         This is the jobify website.Notice the use of  in the tags above.
    //         It will be replaced with the URL of the `public` folder during the build.
    //         Only files inside the `public` folder can be referenced from the HTML.

    //         Unlike "/favicon.ico" or "favicon.ico",  will
    //         work correctly both with client-side routing and a non-root public URL.
    //         Learn how to configure a non-root public URL by running `npm run bui
    //       </p>
    //       <Link to="/register" className='btn btn-hero'>
    //         Login/Register
    //       </Link>
    //     </div>
    //     <img src={main} alt='job hunt' className='img main-img'/>
    //   </div>
    // </Wrapper>
      
  )
}

export default Landing