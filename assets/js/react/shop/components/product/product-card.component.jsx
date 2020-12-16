import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .featured--container {
    position: relative;
    overflow: hidden;
  }

  .featured--search-icon {
    background: var(--mainWhite);
    display: inline-block;
    padding: 0.2rem 0.4rem;
    position: absolute;
    right: 0;
    top: 50%;
    font-size: 1.2rem;
    transform: translateX(110%);
    transition: all 1s ease-in-out;
    cursor: pointer;
  }

  .featured--container:hover .featured--search-icon {
    transform: translateX(0%);
  }

  .featured--store-link {
    background: var(--mainYellow);
    color: var(--mainBlack);
    padding: 0.2rem 0.4rem;
    position: absolute;
    right: 0;
    top: 70%;
    transform: translateX(110%);
    transition: all 1s ease-in-out;
  }

  .featured--container:hover .featured--store-link {
    transform: translateX(0%);
  }

  .featured--store-link:hover {
    color: var(--mainBlack);
  }

  .old--price{
    text-decoration: line-through;
  }
  
  img {
    height: 300px;
  }
`

const ProductCard = React.memo((props) => {

    const {img, product} = {...props}
    return (
            <Wrapper className="col-10 col-md-6 col-lg-4 mx-auto text-center">
                <div className="featured--container p-5">
                    <img src={`/uploads/${img}`} alt=""/>
                    <span className="featured--search-icon"
                          data-toggle="model"
                          data-target="#productModal"
                    > <i className="fa fa-search"></i></span>
                    <a href="#" className="featured--store-link text-capitalize">add to cart</a>
                </div>
                <h6 className="text-capitalize text-center my-2">{product.name}</h6>
                <h6 className="text-center">
                    <span className="text-muted old--price mx-2">{product.price.unitPrice} €</span>
                    <span>{product.price.unitPrice} €</span>
                </h6>
            </Wrapper>
    );
});

export default ProductCard;
