import { 
    StyledMobileNav, StyledLi, 
    StyledInputForHamburguer, StyledUlForHamburguer, 
    StyledSpanForHamburguer, StyledHamburguerContainer, 
    StyledLinkForHamburguer, StyledFlexContainer,
    StyledLogoImg, StyledLogoBrand } from "../../utils/StyledComponents/Styled";

import Search from "./Search";
import { MdOutlineShoppingCart } from "react-icons/md";

const iconStyle = {
    fontSize: "2em",
    color: "#f5f0ec",
    marginLeft: "1em",
    cursor: "pointer"
}
const hamburguer = {
    position: "relative",
    top: "0.5em",
    display: "flex"
}

const MobileNavigation = ({getSearchResult}) => {
    return (
        <>
        <StyledMobileNav>
            <StyledHamburguerContainer>
            <StyledFlexContainer>
                    <div style={hamburguer}>
                        <div>
                            <StyledInputForHamburguer type="checkbox"/>
                            <StyledSpanForHamburguer/>
                            <StyledSpanForHamburguer/>
                            <StyledSpanForHamburguer/>
                        </div>
                        <StyledUlForHamburguer>
                            <StyledLi>
                                <StyledLinkForHamburguer to="/">Home</StyledLinkForHamburguer>
                            </StyledLi>
                            <StyledLi>
                                <StyledLinkForHamburguer to="/cart">Cart</StyledLinkForHamburguer>
                            </StyledLi>
                        </StyledUlForHamburguer>
                        
                        <StyledLogoImg src={require("../../assets/images/logo-white.png")} alt="logo"/>
                        <StyledLogoBrand src={require("../../assets/images/brand.png")} alt="logo"/>
                        
                    </div>
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

export default MobileNavigation;