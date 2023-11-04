import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchFeed from './SearchFeed';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchCategory, setSearchCategory] = useState('')
  const handleSubmit = (e)=> {
    e.preventDefault();
    if (searchCategory){
      navigate(`/search/${searchCategory}`);
      setSearchCategory('');
    }

  }
  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }

}}
    
    >
  <input
  placeholder = "Search..." 
  className="search-bar"
  value= {searchCategory}
  onChange={(e) => setSearchCategory(e.target.value)}
  type="text" 
  />
  <IconButton type="submit" sx={{ 
    p:'10px', color:'red'}}>
    <Search/>
  </IconButton>
    </Paper>
  )
}

export default SearchBar