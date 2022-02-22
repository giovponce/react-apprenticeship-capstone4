import { 
    StyledMobileNav, StyledLi, 
    StyledInputForHamburguer, StyledUlForHamburguer, 
    StyledSpanForHamburguer, StyledHamburguerContainer, 
    StyledLinkForHamburguer, StyledFlexContainer,
    StyledLogoImg, StyledLogoBrand, HamburguerDiv } from "../../utils/StyledComponents/Styled";

import Search from "./Search";
import { MdOutlineShoppingCart } from "react-icons/md";


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
                        
                        <StyledLogoImg data-testid="logo" onClick={()=>{ window.location.href ='/'}} src={require("../../assets/images/logo-white.png")} alt="logo"/>
                        <StyledLogoBrand onClick={()=>{ window.location.href ='/'}} src={require("../../assets/images/brand.png")} alt="logo"/>
                        
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