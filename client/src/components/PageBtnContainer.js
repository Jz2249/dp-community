import { useAppContext } from '../context/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();

  const getPagesToRender = () => {
    const visiblePageCount = 5; // Number of visible page buttons
    const pagesToShow = [];
    
    if (numOfPages <= visiblePageCount) {
      for (let i = 1; i <= numOfPages; i++) {
        pagesToShow.push(i);
      }
    } else {
      if (page <= visiblePageCount - 2) {
        // Display the first few pages
        for (let i = 1; i <= visiblePageCount - 1; i++) {
          pagesToShow.push(i);
        }
        if (numOfPages > visiblePageCount) {
          pagesToShow.push('...');
          pagesToShow.push(numOfPages);
        }
      } else if (page >= numOfPages - (visiblePageCount - 2)) {
        // Display the last few pages
        pagesToShow.push(1);
        pagesToShow.push('...');
        for (let i = numOfPages - (visiblePageCount - 2); i <= numOfPages; i++) {
          pagesToShow.push(i);
        }
      } else {
        // Display the current page and its neighbors
        pagesToShow.push(1);
        pagesToShow.push('...');
        for (let i = page - 1; i <= page + 1; i++) {
          pagesToShow.push(i);
        }
        pagesToShow.push('...');
        pagesToShow.push(numOfPages);
      }
    }
  
    return pagesToShow;
  };

  const nextPage = () => {
    const newPage = page === numOfPages ? 1 : page + 1;
    changePage(newPage);
  };

  const prevPage = () => {
    const newPage = page === 1 ? numOfPages : page - 1;
    changePage(newPage);
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {getPagesToRender().map((pageNumber) => (
          <button
            type="button"
            className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
