import React from 'react'
import {useState} from 'react';
import Logo from "../Assets/Logo.svg";
import {BsCart2} from "react-icons/bs";
// import {HiOutlinebars3} from "react-icons/hi2";
import {
    Box,
    drawer,
    ListItems,
    ListItemButton,
    ListItemIcon, 
    ListItemText,
}from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false);
    const menuOptions=[
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon: <ShoppingCartRoundedIcon/>
        }
    ];
  return (
    <nav>
        <div classname="nav-logo-container">
            <img src={Logo} alt ="" />
        </div>
        <div classname="navbar-links-container">
            <a href ="">Home</a>
            <a href ="">About</a>
            <a href ="">Testimonials</a>
            <a href ="">Contacts</a>
            <a href="">
                <BsCart2 classname="navbar-cart-icon"/>
            </a>
            <button classname="primary-button">booking now</button>
        </div>
        {/* <div classname="navbar-menu-container">
            <HiOutlinebars3 onclick={()=> setOpenMenu(true)}/>
        </div> */}
    </nav>
  );
};

export default Navbar;
