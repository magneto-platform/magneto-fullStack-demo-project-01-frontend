import React, { Component } from 'react'  
import HomeSlider from "../../components/home.slider";
import PopularShops from "../../components/popular-shops";
import PopularProducts from "../../components/popular-products";

export class Home extends Component {  
  render() {  
    return (  
     <div>  
        <h1>Home</h1> 
        <HomeSlider />
        <PopularShops />
        <PopularProducts />
     </div>  
    )  
  }  
}  
  
export default Home  