import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2%;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: auto;
`;

export const StyledContainer2 = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2%;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: auto;

`;

export const BlockedStyledContainer = styled.div`
    display: block;
    text-align: center;
    margin: 2%;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: auto;
`;

export const StyledLinkForHamburguer = styled(Link)`
    text-decoration: none;
`;

export const StyledUlForHamburguer = styled.ul`
    position: absolute;
    width: 20vw;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: #484848;
    list-style-type: none;   
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    z-index: 2;
    flex-flow: column;
    
    &li{
      padding: 10px 0;
      font-size: 22px;
    }
`;

export const StyledSpanForHamburguer = styled.span`
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #f5f0ec;
    border-radius: 3px;
    z-index: 3;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
`;

export const StyledInputForHamburguer = styled.input`
    display: block;
    width: 60px;
    height: 50px;
    position: absolute;
    top: -17px;
    left: -18px;
    cursor: pointer;
    opacity: 0;
    z-index: 3; 
    -webkit-touch-callout: none;
`;

export const StyledHamburguerContainer = styled.div`
    display: block;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1%;
    position: relative;
    background-color: #3B473F;
    ${StyledLinkForHamburguer} {
        text-decoration: none;
        color: #f5f0ec;
        font-family: sans-serif;
        font-size: 1.2rem;
        text-transform: capitalize;
        transition: all 0.3s ease-in-out;
        &:hover {
            color: #00bcd4;
        }
    }
    ${StyledLinkForHamburguer}:hover{
        color: #00bcd4;
    }
    ${StyledSpanForHamburguer}:first-child{
      transform-origin: 0% 0%;
    }
    ${StyledSpanForHamburguer}:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
    ${StyledInputForHamburguer}:checked ~ ${StyledSpanForHamburguer} {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
      z-index: 3;
    }
    ${StyledInputForHamburguer}:checked ~ ${StyledSpanForHamburguer}:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
      z-index: 3;
    }
    ${StyledInputForHamburguer}:checked ~ ${StyledSpanForHamburguer}:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
      z-index: 3;
    }
    ${StyledInputForHamburguer}:checked ~ ul {
        transform: none;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #f5f0ec;
    font-family: sans-serif;
    font-size: 1.2rem;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #00bcd4;
    }
`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    background-color: #333;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
`;


export const StyledLi = styled.li`
    text-decoration: none !important;
    color: #f5f0ec;
    text-align: center;
    padding: 2%;
`;

export const StyledMobileNav = styled.nav`
    display: block;
    
`;

export const StyledH1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    font-weight: bolder;
`;

export const StyledH3 = styled.h3`
    font-size: 1.5rem;
    text-align: center;
    font-weight: bolder;
    text-transform: capitalize;
`;

export const StyledH4 = styled.h4`
    font-size: 1rem;
    text-align: center;
    font-weight: bolder;
    text-transform: capitalize;
`;

export const StyledTitle = styled.p`
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
`;

export const StyledDescription = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-weight: normal;
`;

export const StyledFakeLinkForHamburguer = styled.p`
    cursor: pointer;
    display: contents;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
        color: #00bcd4;
    }
`;

export const SearchInput = styled.input`
    display: inline-flex;
    background-color: #f5f0ec;
    padding: 3px;
    padding-left: 3.5em;
    border: solid 1px #E4E4E4;
    border-radius: 6px;
    color: #202124;
    width: 30vw;
    height: 2em;
    font-size: 16px;
    line-height: 2em;
    &:focus {
        background-color: #fff;
        box-shadow: 5px 2px 18px #888888;
    }

    @media (max-width: 768px) {
        width: 35vh;
    }

    @media (max-width: 425px) {
        width: 25vh;
    }

    @media (max-width: 350px) {
        width: 15vh;
    }
`;

export const SearchFormStyled = styled.form`
    display: flex;
    align-items: center;
    font-size: 1.5em;
`;

export const StyledFlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledFlexCenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90vw;

    @media (max-width: 900px) {
        display: grid;
    }
`;

export const StyledLogoBrand = styled.img`
    height: 50px;
    cursor: pointer;

    @media (max-width: 730px) {
        display: none;
    }
`;

export const StyledLogoImg = styled.img`
    margin-left: 1rem;    
    height: 50px;
    transform: rotate(180deg);
    cursor: pointer;

    @media (max-width: 550px) {
        display: none;
    }
`;

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2%;
    padding: 1%;
    border-top: solid 1px #E4E4E4;
    font-size: 0.8rem;
`;

export const ImgForSlider = styled.img`
    position: relative;
    bottom: 10em;
`;

export const ImgForCategories = styled.img`
    height: 200px;
    cursor: pointer;
`;

export const ImgForProducts = styled.img`
    height: 12em;
    width: 12em;
    cursor: pointer;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    ${props => props.variant === 'medium' ? 'width: 70vw;' : ''}

`;

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0px 50px 0px;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    ${props => props.variant === 'medium' ? 'width: 70vw;' : ''}

    @media (min-width: 901px) {
        width: 90vw;
    }

`;

export const PaginationDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const PaginationUl = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const PaginationLi = styled.li`
    display: inline-block;
    padding: 0.5rem;
    margin: 0.5rem;
    border: solid 1px #E4E4E4;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    color: #202124;
    font-size: 1rem;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #3B473F;
        color: #fff;
    }
`;

export const StyledCard = styled.div`
    box-shadow: 0px 0px 5px #E4E4E4;
    border-radius: 10px;
    padding: 1rem;

    &:hover {
        box-shadow: 0px 0px 10px #888888;
    }
`;

export const HamburguerDiv = styled.div`
    position: relative;
    top: 1.5vh;
`;

export const Button = styled.button`
    background-color: #5D6F63;
    color: #f5f0ec;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        background-color: #9BABA0;
        color: #f5f0ec;
    }
`;

export const StyledLabel = styled.label`
  background: transparent;
`;

export const StyledMobileLabel = styled.label`
  background: transparent;
`;

export const StyledCheckbox = styled.input`
  
    &:checked + ${StyledLabel} {
        text-decoration: underline;
        background: lightgray;
    }
`;

export const StyledMobileCheckbox = styled.input`
  
    &:checked + ${StyledLabel} {
        text-decoration: underline;
        background: lightgray;
    }
`;

export const Chip = styled.div`
    display: inline-flex;
    flex-direction: row;
    background-color: #e5e5e5;
    border: none;
    cursor: default;
    height: 36px;
    outline: none;
    padding: 0;
    font-size: 14px;
    font-color: #333333;
    font-family:"Open Sans", sans-serif;
    white-space: nowrap;
    align-items: center;
    border-radius: 16px;
    vertical-align: middle;
    text-decoration: none;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #3B473F;
        color: #fff;
    }
`;

export const ChipContent = styled.div`
    cursor: inherit;
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
`;

export const ChipMobile = styled.div`
    display: inline-flex;
    flex-direction: row;
    background-color: #e5e5e5;
    border: none;
    cursor: default;
    height: 36px;
    outline: none;
    padding: 0;
    font-size: 14px;
    font-color: #333333;
    font-family:"Open Sans", sans-serif;
    white-space: nowrap;
    align-items: center;
    border-radius: 16px;
    vertical-align: middle;
    text-decoration: none;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #3B473F;
        color: #fff;
    }
`;

export const ChipMobileContent = styled.div`
    cursor: inherit;
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
`;

export const AllProductsContainer = styled.div`
    display: flex;
    width: 95vw;
`;

export const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const StyledFilterContainer = styled.div`
    width: 20vw;
    display: none;

    @media (min-width: 901px) {
        display: block;
        pointer-events: auto;
    }

    @media (max-width: 900px) {
        display: none;
        pointer-events: none;
    }
`;

export const StyledMobileFilterContainer = styled.div`
    display: none;

    @media (max-width: 900px) {
        display: block;
    }
`;

export const AddToCart = styled.p`
    cursor: pointer;
    color: #5D6F63;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: underline;
    margin-left: 1rem;
    margin-right: 1rem;
    &:hover {
        color: #3B473F;
    }
`;

