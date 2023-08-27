import { RiInstagramLine, RiFacebookCircleLine, RiTwitterLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ForumFooter'
const ForumFooter = () => {
  return (
    <Wrapper>
    <div className="footer-container container d-grid">
            
            <div className="company-data">
                <Link to="./index.html">
                    <h2 className="logo">NewsFlash</h2>
                </Link>
                <p className="company-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad magni expedita.</p>
                
                <ul className="list social-media">
                    <li className="list-item">
                        <Link to="#" className="list-link"><RiInstagramLine /></Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link"><RiFacebookCircleLine /></Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link"><RiTwitterLine /></Link>
                    </li>
                </ul>
                <span className="copyright-notice">&copy;2021 NewsFlash. All rights reserved.</span>
            </div>
            <div>
                <h6 className="title footer-title">Categories</h6>
                
                <ul className="footer-list list">
                    <li className="list-item">
                        <Link to="#" className="list-link">Travel</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Food</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Technology</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Health</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Nature</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Fitness</Link>
                    </li>
                </ul>

            </div>

            <div>
                <h6 className="title footer-title">Useful links</h6>
                
                <ul className="footer-list list">
                    <li className="list-item">
                        <Link to="#" className="list-link">Home</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Elements</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Tags</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Authors</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Membership</Link>
                    </li>
                </ul>

            </div>

            <div>
                <h6 className="title footer-title">Company</h6>
                
                <ul className="footer-list list">
                    <li className="list-item">
                        <Link to="#" className="list-link">Contact us</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">F.A.Q</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Careers</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Authors</Link>
                    </li>
                    <li className="list-item">
                        <Link to="#" className="list-link">Memberships</Link>
                    </li>
                </ul>

            </div>
    </div>
    </Wrapper>
  )
}

export default ForumFooter