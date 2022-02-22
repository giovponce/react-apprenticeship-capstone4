import { 
    StyledMobileNav, StyledLi, 
    StyledInputForHamburguer, StyledUlForHamburguer, 
    StyledSpanForHamburguer, StyledHamburguerContainer, 
    StyledLinkForHamburguer, StyledFlexContainer,
    StyledLogoImg, StyledLogoBrand, HamburguerDiv } from "../../utils/StyledComponents/Styled";

import Search from "./Search";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";


const iconStyle = {
    fontSize: "2em",
    color: "#f5f0ec",
    marginLeft: "1em",
    cursor: "pointer"
}

const Header = ({getSearchResult}) => {

    return (
        <>
        <StyledMobileNav>
            <StyledHamburguerContainer>
            <StyledFlexContainer>
                    <HamburguerDiv>
                        <StyledInputForHamburguer type="checkbox"/>
                        <StyledSpanForHamburguer/>
                        <StyledSpanForHamburguer/>
                        <StyledSpanForHamburguer/>

                        <StyledUlForHamburguer>
                            <StyledLi>
                                <StyledLinkForHamburguer to="/">
                                    Home
                                </StyledLinkForHamburguer>
                            </StyledLi>
                            <StyledLi>
                                <StyledLinkForHamburguer to="/cart">
                                    Cart
                                </StyledLinkForHamburguer>
                            </StyledLi>
                            <StyledLi>
                                <StyledLinkForHamburguer to="/all">
                                    View All
                                </StyledLinkForHamburguer>
                            </StyledLi>
                        </StyledUlForHamburguer>
                        
                        </HamburguerDiv>
                        
                        <Link to="/">
                            <StyledLogoImg data-testid="logo" src={require("../../assets/images/logo-white.png")} alt="logo"/>
                        </Link>
                        <Link to="/">
                            <StyledLogoBrand src={require("../../assets/images/brand.png")} alt="logo"/>
                        </Link>
                        
                    <StyledFlexContainer>
                        <Search getSearchResult={getSearchResult}/>
                        <StyledLinkForHamburguer to="/cart">
                            <MdOutlineShoppingCart style={iconStyle}/>
                        </StyledLinkForHamburguer>
                    </StyledFlexContainer>
                    </StyledFlexContainer>
            </StyledHamburguerContainer>
        </StyledMobileNav>
        </>
        
    )
}

export default Header;