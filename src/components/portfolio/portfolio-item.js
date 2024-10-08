import React, { Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default class PortfolioItem extends Component {
    //componente funcional o de presentacion, para renderizar contenido osea como voy a presentar el contenido
    //No se puede usar constructores dentro de estos componentes
    //Data that we'll need:
        // -background image: 
        // -log: logo_url
        // -description: description
        // -id: id
        constructor(props){
            super(props);

            this.state = {
                portfolioItemClass: ""
            };
        }

        handleMouseEnter(){
          this.setState({portfolioItemClass: "image-blur"})
        }

        handleMouseLeave(){
          this.setState({portfolioItemClass:""})
        }
        render(){
        const { id, description, thumb_image_url, logo_url} = this.props.item;
    return (
      <Link to={`/portfolio/${id}`}> 
        <div className="portfolio-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}>
            <div
              className={"portfolio-img-background " + this.state.portfolioItemClass}
              style={{
                backgroundImage: "url(" + thumb_image_url+")"
              }}
            />
            <div className="img-text-wrapper">
               <div className="logo-wrapper">
               <img src={logo_url}/>
               </div>
               <div className="subtitle">{description}</div>
            </div>
            
            
            {/* <Link to = {`/portfolio/${id}`}>Link</Link> */}
        </div>
        </Link>
    )
}
}