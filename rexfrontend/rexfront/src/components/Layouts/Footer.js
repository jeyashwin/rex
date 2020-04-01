import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle">   
            <div className="container">
                
                {/* Footer Botter */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Real Estate-X - All Rights Reserved
                    </p>    
                </div>
            </div>
        </div>
        </FooterContainer>   
    );
}
export default Footer; 

const FooterContainer= styled.footer`
.footer-middle{
    background: var(--subBlue);
    padding-top: 1rem; {/* 1 rem = 16px */}
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 1rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover{
    color: var(--mainLightGrey);
}
`;