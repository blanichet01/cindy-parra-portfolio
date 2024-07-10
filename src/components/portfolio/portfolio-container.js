import React, {Component} from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
   //componente de clase tiene muchas mas funcionalidades que un componente funcional o de representacion
   // estados, ciclo de de vida, para obtener o poner datos dinamicamente
   constructor(){
    super();
    //Declarar estado, se hace en la funcion constructora porque se va a obtener automaticamente cada vez que se llame
    this.state = {
        pageTitle: "Welcome to my portfolio",
        isLoading: false,
        data: [
           
        ]
    };
   this.handleFilter = this.handleFilter.bind(this); 
   }

   handleFilter(filter){
     this.setState({
        data: this.state.data.filter(item =>{
            return item.category === filter;
        })
     })
   }

   getPortfolioItems(){
    axios.get('https://cindyblanichet.devcamp.space/portfolio/portfolio_items')
  .then(response =>  {
    // handle success
    this.setState({
        data: response.data.portfolio_items
    })
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  }

    portfolioItems(){
       
        return this.state.data.map(item =>{
            return <PortfolioItem 
            key={item.id} 
            item={item}/>;
        });
    }

    componentDidMount(){
        this.getPortfolioItems();
    }

   render(){
    if(this.state.isLoading){
        return <div>Loading...</div>
    }
        return(
         <div className="portfolio-items-wrapper">
            <button className="btn" onClick={() =>this.handleFilter('eCommerce')}>
              eCommerce
            </button>
            <button className="btn" onClick={() =>this.handleFilter('Scheduling')}>
              Scheduling
            </button>
            <button className="btn" onClick={() =>this.handleFilter('Enterprice')}>
              Enterprice
            </button>
           
            {this.portfolioItems()}
         </div>
            
        )
    }
}