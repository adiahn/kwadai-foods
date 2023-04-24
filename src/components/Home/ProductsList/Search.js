import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchIcon className={classes.icon} />
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
      />
    </div>
  );
}
