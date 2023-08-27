import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useState, useMemo } from 'react';


const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')
  const {
    isLoading,
    //search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext()

  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({name: e.target.name, value: e.target.value})
  }
  // similar packages exist !
  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    clearFilters();
  };

  const optimizedDebounce = useMemo(
    () => debounce()
  // eslint-disable-next-line
  , []);
  return (
    <Wrapper>
      <form className="form">
        <h4>Search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow 
            type='text'
            labelText='Search'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
            />
          {/* search by status */}
           <FormRowSelect
            type='text'
            labelText='Status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
            />
          {/* search by jobType */}
          <FormRowSelect
            type='text'
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
            />
          {/* sort */}
          <FormRowSelect
            type='text'
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={['all', ...sortOptions]}
            />
          <button className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit}>
            clear
          </button>
        </div>
      </form>
    </Wrapper>
  )
}


export default SearchContainer