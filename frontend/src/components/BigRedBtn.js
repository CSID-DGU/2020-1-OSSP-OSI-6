import React from 'react';
import styled from 'styled-components';

const BRBtn = styled.div`
  z-index:2;
  width: 200px;
  height: 180px;
  line-height: 200px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  background: #f74d4d;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f74d4d), color-stop(100%, #f86569));
  background-image: -moz-gradient(linear, left top, left bottom, color-stop(0%, #f74d4d), color-stop(100%, #f86569));
  box-shadow: 0 15px #e24f4f;
  &:active {
    box-shadow: 0 0 #e24f4f;
    -webkit-transform: translate(0px, 15px);
    -moz-transform: translate(0px, 15px);
    -ms-transform: translate(0px, 15px);
    -o-transform: translate(0px, 15px);
    -webkit-transition: 0.1s all ease-out;
    -moz-transition: 0.1s all ease-out;
    -ms-transition: 0.1s all ease-out;
    -o-transition: 0.1s all ease-out;
    transition: 0.1s all ease-out;
  }
`;


const BigRedBtn = ({onClick}) => {
    return (
        <BRBtn onClick={()=>onClick()}/>
    );
}

export default BigRedBtn;