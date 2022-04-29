import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <ReactNavbar
        burgerColor="#000000"
        burgerColorHover="#2a7aad"
         logo={logo}
        logoWidth="25vmax"
        logoHoverSize="10px"
        logoHoverColor="#2a7aad"
        link1Text= "Home"
        link2Text= "Products"
        link3Text= "machine"
        link4Text= "Contact"
        link1Url= "/"
        link2Url= "/products"
        link3Url= "/Machine"
        link4Url= "/contact"
        link1ColorHover="#2a7aad"
        navColor1="white"
        nav1justifyContent="flex-end"
        nav2justifyContent="flex-end"
        nav3justifyContent="flex-start"
        nav4justifyContent= "flex-start"
        profileIconUrl="/login"
        link1Margin= "0.5vmax"
        link1Size="1.3vmax"
        link1Color= "rgba(35, 35, 35,0.8)"
        profileIconColor= "rgba(35, 35, 35,0.8)"
        searchIconColor="rgba(35, 35, 35,0.8)"
        profileIconColorHover="#2a7aad"
        searchIconColorHover= "#2a7aad"
        searchIconMargin="15px"
        cartIcon={false}
      
        />
    );
}

export default Header


