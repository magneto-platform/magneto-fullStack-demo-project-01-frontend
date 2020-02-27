import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {tileData}  from './data';

export default class Products extends Component {

    constructor(props) {
      super(props);
      this.state = {
        products : [],
        currentPage : 1,
        productsPerPage : 4,
        numOfPages : 0,
      }
    }

    getProducts =  (pageNumber) => {
      //const url = 'http://localhost/test/react-products.php?page='+pageNumber;
      const url = 'https://reqres.in/api/users?page='+pageNumber+'&per_page='+this.state.productsPerPage
      axios.get(url)
        .then(res => {
          this.setState({
            //products : res.data.data,
            numOfPages : res.data.total_pages
          });
          const apiProducts = res.data.data;
          let tempProducts  = [];
          const startIndex  = (this.state.currentPage - 1) * this.state.productsPerPage ;
          for (var i = 0; i < apiProducts.length; i++) {
            tempProducts.push(tileData[(startIndex + i)]);
          }
          this.setState({products: tempProducts });
      });
    };

    componentDidMount() {
      this.getProducts(this.state.currentPage)
    }

    handlePageChange(event , pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({currentPage: pageNumber});
      this.getProducts(pageNumber);
    }

    render() { 
      return (
        <div>
          <GridList cellHeight={200} cols={4} >
            <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
              <ListSubheader component="div">Listing Products</ListSubheader>
            </GridListTile>
            {this.state.products.map(product => (
              <GridListTile key={product.id}>
                <img src={product.img} alt={product.title} />
                <GridListTileBar
                  title={product.title}
                  // subtitle={<span>by: {product.author}</span>}
                  subtitle={<span>{product.price}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${product.title}`} >
                      {product.is_favorite ? (
                      <FavoriteIcon style={{color:'white'}} />
                      ) : (
                      <FavoriteBorderIcon style={{color:'white'}} />
                      )}
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          <div>
            <Typography>Page: {this.state.currentPage}</Typography>
            <Pagination count={this.state.numOfPages} 
              page={this.state.currentPage} 
              onChange={this.handlePageChange.bind(this)} 
            />
          </div>
        </div>
      )
    }
}