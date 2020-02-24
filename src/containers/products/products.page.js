import React, { Component, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {tileData}  from './data';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 980,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const paginStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Products (){
  const classes = useStyles();
  const pagingClasses = paginStyles();
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [prodcuts, setProdcuts] = useState(tileData.slice(0,productsPerPage));
  const numOfPages = Math.ceil(tileData.length / productsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
    const indexLastProduct   = value * productsPerPage ;
    const indexFirsttProduct = indexLastProduct - productsPerPage;
    const currentProducts    = tileData.slice(indexFirsttProduct, indexLastProduct);
    setProdcuts(currentProducts);
  };

  return (
    <div className={classes.root}>
    <GridList cellHeight={200} cols={4} className={classes.gridList}>
      <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
        <ListSubheader component="div">Listing Products</ListSubheader>
      </GridListTile>
      {prodcuts.map(prodcut => (
        <GridListTile key={prodcut.img}>
          <img src={prodcut.img} alt={prodcut.title} />
          <GridListTileBar
            title={prodcut.title}
            // subtitle={<span>by: {prodcut.author}</span>}
            subtitle={<span>{prodcut.price}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${prodcut.title}`} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
    <div className={pagingClasses.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={numOfPages} page={page} onChange={handleChange} />
    </div>
  </div>
  );
}