
import { RiMailSendLine } from 'react-icons/ri';
import Wrapper from '../assets/wrappers/ForumNewsLetter'
const ForumNewsletter = () => {
  return (
    <Wrapper>
    <div className="container">

        <h2 className="title section-title" data-name="Newsletter">Newsletter</h2>

        <div className="form-container-inner">
            <h6 className="title newsletter-title">Subscribe to NewsFlash</h6>
            <p className="newsletter-description">Lorem ipsum dolor sit amet consectetur adipisicing quaerat dignissimos.</p>

            <form action="" className="form">
                <input className="form-input" type="text" placeholder="Enter your email address" />
                <button className="btn form-btn" type="submit">
                    <RiMailSendLine />
                </button>
            </form>

        </div>

    </div>

    </Wrapper>
  )
}

export default ForumNewsletter