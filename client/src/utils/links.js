import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
    { id: 1, text: 'Info', path: '', icon: <MdQueryStats />},
    // { id: 2, text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats />},
    { id: 2, text: 'add post', path: 'articles/new', icon: <FaWpforms />},
    { id: 3, text: 'My Posts', path: 'articles', icon: <ImProfile />},
    { id: 4, text: 'stats', path: 'stats', icon: <IoBarChartSharp />},
]

export default links