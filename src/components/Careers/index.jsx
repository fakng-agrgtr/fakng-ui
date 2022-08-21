import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.primary.light,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: '0',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.white,
  width: '100%',
  padding: theme.spacing(0.5, 1),
  paddingRight: `calc(1em + ${theme.spacing(4)})`,
}));

export default function Careers() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for vacancies..."
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
}
