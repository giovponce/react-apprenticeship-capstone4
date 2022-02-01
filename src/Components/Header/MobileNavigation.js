import { 
    StyledMobileNav, StyledLi, 
    StyledInputForHamburguer, StyledUlForHamburguer, 
    StyledSpanForHamburguer, StyledHamburguerContainer, 
    StyledLinkForHamburguer, StyledFlexContainer } from "../../utils/StyledComponents/Styled";

import Search from "./Search";

const MobileNavigation = ({getSearchResult}) => {
    return (
        <>
        <StyledMobileNav>
            <StyledHamburguerContainer>
            <StyledFlexContainer>
                    <div>
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
                        </StyledUlForHamburguer>
                        </div>
                    <div>
                        <Search getSearchResult={getSearchResult}/>
                    </div>
                    </StyledFlexContainer>
            </StyledHamburguerContainer>
        </StyledMobileNav>
        </>
        
    )
}

export default MobileNavigation;