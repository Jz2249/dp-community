import styled from 'styled-components'
const Wrapper = styled.main`
/* Import font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
/* Custom properties */
:root{
    --light-color: #fff;
    --light-color-alt: #afb6cd;
    --primary-background-color: #131417;
    --secondary-background-color: #252830;
    --hover-light-color: var(--light-color);
    --hover-dark-color: var(--primary-background-color);
    --gradient-color: linear-gradient(
        115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
    --transparent-light-color: rgba(255,255,255,.05);
    --transparent-dark-color: rgba(0,0,0,.75);
    --font-family: 'Poppins', sans-serif;
    --font-size-xsm: 1.2rem;
    --font-size-sm: 1.6rem;
    --font-size-md: 2.4rem;
    --font-size-lg: 3rem;
    --font-size-xl: 4rem;
    --gap: 2rem;
    --margin-sm: 2rem;
    --margin-md: 3rem;
    --item-min-height-sm: 20rem;
    --item-min-height-md: 30rem;
}
/* Base styles */

/* Theme color change */

/* Reusable classes */

/* Header */

/* Header JavaScript Styles */

/* Search */

/* Form JavaScript styles */

/* Featured articles */

/* Featured articles - Sidebar */

/* Quick read */

/* Quick read - Swiper */

/* Older posts */

/* Popular tags */

/* Newsletter */

/* Footer */

/* Scrollbar styles */

/* Blog post */

/* Media queries */
`
export default Wrapper