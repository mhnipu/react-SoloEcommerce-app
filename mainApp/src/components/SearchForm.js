import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Update search term in state and trigger search on each keystroke
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    navigate(`/search?query=${e.target.value}`);
  };

  // Handle form submission on pressing Enter or clicking Submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      {/* Input field for search term */}
      <input
        onChange={handleSearchInput}
        type="text"
        className="input"
        placeholder="Search for product..."
        value={searchTerm}
      />

      {/* Button to submit the search form */}
      <button type="submit" className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <SearchOutlinedIcon fontSize="large" className="Hover" />
      </button>
    </form>
  );
};

export default SearchForm;
