import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { ISearchProps } from "../interfaces/ISearchInterface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: '75%'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
        padding: 10,
    }
  })
);

const Search: React.FC<ISearchProps> = ({searchQuery, setSearchQuery}) => {
  const classes = useStyles();

  const updateSearchState = (e: any) => {
    setSearchQuery(e.target.value);
  }

  return (
    <Paper className={classes.root}>
      <InputBase className={classes.input} onChange={updateSearchState} value={searchQuery} />
      <IconButton className={classes.iconButton} area-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
