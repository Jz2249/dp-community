import styled from 'styled-components'

const Wrapper = styled.section`
.form-profile {
    width: 25%;
    /* color: red; */
}
.form-row .form-input {
    background-color: darkgray;
}
.nav-links {
    margin-left:80px;
}
.sidebar-container {
    /* margin-left:px; */
}
@media screen and (max-width: 700px) {
    .nav-links{
        /* margin-top: 1022px; */
        /* margin: 0 auto; */
        padding: 10 4.5rem;
        width: 100%;
    }
    .form-profile {
        width: 100%;
    }
}
`
export default Wrapper