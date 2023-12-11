import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    // Trigger search on each keystroke
    navigate(`/search?query=${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      <input
        onChange={handleSearchInput}
        type="text"
        className="input"
        placeholder="Search for product..."
        value={searchTerm}
      />
      <button type="submit" className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <SearchOutlinedIcon fontSize="large" className="Hover" />
      </button>
    </form>
  );
};

export default SearchForm;
