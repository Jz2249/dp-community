import styled from 'styled-components'

const Wrapper = styled.aside`

/************ Custom Font ************/
@font-face {
	font-family: Centra;
  
	/* src: url('./assets/font/CentraNo2-Bold.ttf'); */
	font-weight: 700;
}
@font-face {
	font-family: Centra;
	/* src: url('./assets/font/CentraNo2-Medium.ttf'); */
	font-weight: 500;
}
@font-face {
	font-family: Centra;
	/* src: url('./assets/font/CentraNo2-Book.ttf'); */
	font-weight: 400;
}

/************ Default Css ************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.align-items-center{
  width:auto;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
}

.default {
  font-weight: 400;
  overflow-x: hidden;
  position: relative;
  /* background-color: #121212 !important; */
  color: darkgrey !important;
  font-family: 'Centra', sans-serif !important;
  

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
}


h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  line-height: normal;
}

p, a, li, button, ul {
  margin: 0;
  padding: 0;
  line-height: normal;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

img {
  /* width: 100%; */
  height: auto;
}

button {
  border: 0;
  background-color: transparent;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

@media (min-width:1700px) {
	main .container {
		max-width: 100%;
		padding: 0 150px;
	}
}
.Banner-container {
  /* max-width: 500%; */
  padding: 0 100px;
  margin-top: 80px;
}
p.success {
	color: green;
}

p.danger {
	color: red;
}
/************ Navbar Css ************/
nav.navbar {
  padding: 18px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  transition:  0.32s ease-in-out;
}
nav.navbar.scrolled {
  padding: 0px 0;
  background-color: #121212;
}
nav.navbar a.navbar-brand {
    width: 9%;
}
nav.navbar .navbar-nav .nav-link.navbar-link {
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: 0.75;
}
nav.navbar .navbar-nav a.nav-link.navbar-link:hover,
nav.navbar .navbar-nav a.nav-link.navbar-link.active {
    opacity: 1;
}
span.navbar-text {
    display: flex;
    align-items: center;
}
.social-icon {
    display: inline-block;
    margin-left: 14px;
}
.social-icon a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
}
.social-icon a::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    transform: scale(0);
	transition: 0.3s ease-in-out;
}
.social-icon a:hover::before {
    transform: scale(1);
}
.social-icon a img {
	width: 40%;
	z-index: 1;
	transition: 0.3s ease-in-out;
}
.social-icon a:hover img {
	filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
}
.navbar-text button {
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 18px;
	position: relative;
	background-color: transparent;
	transition: 0.3s ease-in-out;
}
.navbar-text button span {
  z-index: 1;
}
.navbar-text button::before {
  content: "";
  width: 0%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.navbar-text button:hover {
  color: #121212;
}
.navbar-text button:hover::before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
}
nav.navbar .navbar-toggler:active,
nav.navbar .navbar-toggler:focus {
	outline: none;
    box-shadow: none;
}
nav.navbar .navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  border-bottom: 2px solid #fff;
  transition: all 300ms linear;
  top: -2px;
}
nav.navbar .navbar-toggler-icon:focus {
	border-bottom: 2px solid #fff;
}
nav.navbar .navbar-toggler-icon:after,
nav.navbar .navbar-toggler-icon:before {
	width: 24px;
	position: absolute;
	height: 2px;
	background-color: #fff;
	top: 0;
	left: 0;
	content: '';
	z-index: 2;
	transition: all 300ms linear;
}
nav.navbar .navbar-toggler-icon:after {
	top: 8px;
}
nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
	transform: rotate(45deg);
	background-color: #fff;
	height: 2px;
}
nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
	transform: translateY(8px) rotate(-45deg);
	background-color: #fff;
	height: 2px;
}
nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
	border-color: transparent;
}

/************ Banner Css ************/
.banner {
  margin-top: 0;
  padding: 40px 0 100px 0;
  background-image: url('./assets/img/banner-bg.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 1000px;
  margin-bottom: 70px;
}
/* .web3entry {
  margin-bottom:50px;
} */
.banner .tagline {
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 60px;
  display: inline-block;
}
.banner h1 {
  font-size: 65px;
  font-weight: 500;
  letter-spacing: 0.8px;
  line-height: 1;
  /* max-width: 40%; */
  margin-bottom: 20px;
  color: white;
  display: block;
}

.banner button {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 60px;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
}
.banner button svg {
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
}
.banner button:hover svg {
  margin-left: 25px;
}
.banner img {
  width:auto;
  animation: updown 3s linear infinite;
  margin-top: 30px;
  margin-left: 30px;
}

@keyframes updown {
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
}
.txt-rotate > .wrap {
  border-right: 0.08em solid #666;
}
/************ Skills Css ************/
.skill {
  margin-top: 60px;
  padding: 0 0 50px 0;
  position: relative;
}
.skill-bx {
  /* background: #151515; */
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
}
.skill h2 {
	font-size: 45px;
	font-weight: 700;
}
.skill p {
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
}
.skill-slider {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.skill-slider .item img {
  width: 50%;
  margin: 0 auto 15px auto;
}
.skill-slider .item svg {
  width: 50%;
  margin: 0 auto 15px auto;
}
.background-image-left {
  top: 28%;
  position: absolute;
  bottom: 0;
  width: 40%;
  z-index: -4;
}
/* button::before {
  color: red;
} */

/************ Projects Css ************/
.project {
  padding: 80px 0;
  position: relative;
  background-color: black;
}
.project h2 {
	font-size: 45px;
	font-weight: 700;
  text-align: center;
}
.project p {
  color: #B8B8B8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 30px auto;
  text-align: center;
  width: 56%;
}
.project .nav.nav-pills {
  width: 72%;
  margin: 0 auto;
  border-radius: 50px;
  background-color: rgb(255 255 255 / 10%);
  overflow: hidden;
}
.project .nav.nav-pills .nav-item {
  width: 33.33333%;
}
.project .nav.nav-pills .nav-link {
  background-color: transparent;
  border-radius: 0;
  padding: 17px 0;
  color: #fff;
  width: 100%;
  font-size: 17px;
  letter-spacing: 0.8px;
  font-weight: 500;
  position: relative;
  transition: 0.3s ease-in-out;
  text-align: center;
  z-index: 0;
}
.project .nav.nav-pills .nav-link::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
}
.project .nav.nav-pills .nav-link.active::before {
    width: 100% !important;
}
.project .nav.nav-pills .nav-link.active {
    border: 1px solid rgba(255, 255, 255, 1);
}
.nav-link#projects-tabs-tab-first {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 55px 0px 0px 55px;
}
.nav-link#projects-tabs-tab-second {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.nav-link#projects-tabs-tab-third {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0 55px 55px 0;
}
.proj-imgbx {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 24px;
}
.proj-imgbx::before {
  content: "";
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  opacity: 0.85;
  position: absolute;
  width: 100%;
  height: 0;
  transition: 0.4s ease-in-out;
}
.proj-imgbx:hover::before {
  height: 100%;
}
.proj-txtx {
  position: absolute;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  opacity: 0;
  width: 100%;
}
.proj-imgbx:hover .proj-txtx {
  top: 50%;
  opacity: 1;
}
.proj-txtx h4 {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.1em;
}
.proj-txtx span {
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.8px;
}
.background-image-right {
  top: 20%;
  position: absolute;
  bottom: 0;
  width: 35%;
  right: 0;
  z-index: -4;
}

/************ Projects Css ************/
.contact {
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  padding: 60px 0 200px 0;
}
.contact img {
  width: 92%;
}
.contact h2 {
	font-size: 45px;
	font-weight: 700;
  margin-bottom: 30px;
}
.contact form input, .contact form textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
}
.contact form input:focus, .contact form textarea:focus {
  background: rgba(255, 255, 255, 1);
  color: #121212;
}
.contact form input::placeholder, .contact form textarea::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.contact form input:focus::placeholder, .contact form textarea:focus::placeholder {
  color: #121212;
  opacity: 0.8;
}
.contact form button {
  font-weight: 700;
  color: #000;
  background-color: #fff;
  padding: 14px 48px;
  font-size: 18px;
  margin-top: 25px;
  border-radius: 0;
  position: relative;
  transition: 0.3s ease-in-out;
}
.contact form button span {
  z-index: 1;
  position: relative;
}
.contact form button:hover {
  color: #fff;
}
.contact form button::before {
  content: "";
  background: #121212;
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: 0.3s ease-in-out;
}
.contact form button:hover::before {
  width: 100%;
}

/************ Footer Css ************/
.footer {
  padding: 0 0 50px 0;
  /* background-image: url(./assets/img/footer-bg.png); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.newsletter-bx {
  background: #FFFFFF;
  border-radius: 55px;
  color: #121212;
  padding: 85px 125px;
  margin-bottom: 80px;
  margin-top: -122px;
}
.newsletter-bx h3 {
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2em;
}
.new-email-bx {
  background: #fff;
  padding: 5px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
}
.new-email-bx::before {
  content: "";
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}
.new-email-bx::after {
  content: "";
  background: #fff;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.new-email-bx input {
  width: 100%;
  color: #121212;
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0 15px;
}
.new-email-bx button {
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  padding: 20px 65px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 18px;
}
.footer img {
  width: 26%;
}
.footer p {
  font-weight: 400;
  font-size: 14px;
  color: #B8B8B8;
  letter-spacing: 0.5px;
  margin-top: 20px;
}


`
export default Wrapper