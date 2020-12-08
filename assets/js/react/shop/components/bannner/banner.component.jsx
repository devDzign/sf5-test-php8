import React from 'react';
import styled from 'styled-components'


const BannerStyle = styled.div`
    height: calc(100vh - 74.78px);
    background-size: cover;
    background: url(${props => props.url}) no-repeat fixed center;
`

const Banner = (props) => {

    return (
        <>
            <BannerStyle className="d-flex align-items-center pl-3 pl-lg-5" url={props.urlBcg}>
                <div>
                    <h1 className="text-capitalize text-slanted mb-0">minimalist</h1>
                    <h1 className="text-uppercase font-weight-bold">interior style</h1>
                    <a href={props.path} className="btn btn-yellow"> view Collection</a>
                </div>
            </BannerStyle>
        </>
    );
};

export default Banner;
