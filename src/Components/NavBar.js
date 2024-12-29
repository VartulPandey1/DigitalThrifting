import { Badge, Input } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { toggleMode } from "../utils/ToggleSlice";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";

const Content = styled.div`
  background-color: ${(props) => (props.isDarkTheme ? "#202124" : "#f5f7f7")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  @media only screen and (max-width: 1024px) {
    padding: 1%;
  }
  @media only screen and (max-width: 768px) {
    padding: 3%;
  }
`;
const Search = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 1;
`;
const AppName = styled.div`
  display: flex;
  justify-content: center;
  flex: 4;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Edu NSW ACT Foundation", cursive;
  @media only screen and (max-width: 768px) {
    flex: 3;
  }
  @media only screen and (max-width: 480px) {
    flex: 2;
  }
`;
const Cart = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileCart = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    margin-left: 75px;
    color: ${(props) => (props.isDarkTheme ? "#f5f7f7" : "#202124")};
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    margin-left: 10%;
    color: ${(props) => (props.isDarkTheme ? "#f5f7f7" : "#202124")};
    cursor: pointer;
  }
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  background-color: white;
  border: 0.1px solid grey;
  @media only screen and (max-width: 768px) {
    margin-left: 2px;
    width: 22vw;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 2px;
    width: 22vw;
  }
`;
const Span = styled.span`
  color: ${(props) => (props.isDarkTheme ? "#f5f7f7" : "#202124")};
  font-size: 1.1rem;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const INPUT = styled.input`
  border: none;
  outline: none;
  padding-left: 6px;
  @media only screen and (max-width: 768px) {
    padding-left: 1px;
    /* margin-right: 2px; */
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    padding-left: 1px;
    /* margin-right: 2px; */
    width: 90%;
  }
`;
const Menuitem = styled.div`
  color: ${(props) => (props.isDarkTheme ? "#f5f7f7" : "#202124")};
  margin-left: 25px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 10px;
  }
`;
const MobileMenu = styled.div`
  /* @media only screen and (max-width: 768px) { */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-color: lightgray;
  height: 20vh;
  width: 100%;
  top: 98%;
  left: 0;
  z-index: 400;
`;
const MobileMenuitem = styled.div`
  background-color: ${(props) => (props.isDarkTheme ? "#202124" : "#f5f7f7")};
  padding: 10px;
  color: ${(props) => (props.isDarkTheme ? "#f5f7f7" : "#202124")};
  display: flex;
  align-items: flex-start;
`;

const NavBar = () => {
  const dispach = useDispatch();
  const isDarkTheme = useSelector((store) => store.toggle.isDark);
  const totalItem = useSelector((store) => store.totalPrice.totalItem);
  const totalLikedItem = useSelector((store) => store.totalPrice.likedItems);
  const [menuVisible, setMenuVisible] = useState(false);
  const [completeName,setCompleteName]=useState(false)
  const [appName, setAppName] = useState("");
  let appNames = "Thrifting";
  let index = 1;
  useEffect(() => {
    const interval = setInterval(() => {
      setAppName(appNames.slice(0, index))
      index == appNames.length ? index = 1 : index++
    }, 500);
   
    return () => clearInterval(interval);
  }, []);

  function ThemeButtonClicked() {
    dispach(toggleMode());
  }
  return (
    <Content isDarkTheme={isDarkTheme}>
      <Search>
        <Span isDarkTheme={isDarkTheme}>EN</Span>
        <SearchBox>
          <INPUT placeholder="Search" />
          <SearchIcon style={{ cursor: "pointer" }} />
        </SearchBox>
      </Search>

      <AppName>
        <Link
          to="/"
          onMouseOver={()=>setCompleteName(true)}
          onMouseLeave={()=>setCompleteName(false)}
          style={{
            textDecoration: "none",
            color: isDarkTheme ? "#f5f7f7" : "#202124",
          }}
        >
          Digital_{completeName?"Thrifting":appName}
        </Link>
      </AppName>
      <Cart>
        <Menuitem isDarkTheme={isDarkTheme}>Register</Menuitem>
        <Menuitem isDarkTheme={isDarkTheme}>Signin</Menuitem>
        <Menuitem isDarkTheme={isDarkTheme}>
          <Badge badgeContent={totalLikedItem} color="primary">
            <Link
              to={"/liked"}
              style={{
                textDecoration: "none",
                color: isDarkTheme ? "#f5f7f7" : "#202124",
              }}
            >
              {" "}
              <FavoriteBorderIcon />
            </Link>
          </Badge>
        </Menuitem>
        <Menuitem isDarkTheme={isDarkTheme}>
          <Badge badgeContent={totalItem} color="primary">
            <Link
              to={"/cart"}
              style={{
                textDecoration: "none",
                color: isDarkTheme ? "#f5f7f7" : "#202124",
              }}
            >
              {" "}
              <ShoppingCartOutlinedIcon />
            </Link>
          </Badge>
        </Menuitem>
        <Menuitem
          isDarkTheme={isDarkTheme}
          onClick={() => {
            ThemeButtonClicked();
          }}
        >
          {isDarkTheme ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </Menuitem>
      </Cart>
      <MobileCart
        isDarkTheme={isDarkTheme}
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <MenuOutlinedIcon />
      </MobileCart>
      {menuVisible && (
        <MobileMenu>
          <MobileMenuitem isDarkTheme={isDarkTheme}>Register</MobileMenuitem>
          <MobileMenuitem isDarkTheme={isDarkTheme}>Signin</MobileMenuitem>
          <MobileMenuitem isDarkTheme={isDarkTheme}>
            <Badge badgeContent={totalItem} color="primary">
              <Link
                to={"/cart"}
                style={{
                  textDecoration: "none",
                  color: isDarkTheme ? "#f5f7f7" : "#202124",
                }}
              >
                {" "}
                <FavoriteBorderIcon />
                Cart
              </Link>
            </Badge>
          </MobileMenuitem>

          <MobileMenuitem
            isDarkTheme={isDarkTheme}
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          >
            <Badge badgeContent={totalItem} color="primary">
              <Link
                to={"/cart"}
                style={{
                  textDecoration: "none",
                  color: isDarkTheme ? "#f5f7f7" : "#202124",
                }}
              >
                {" "}
                <ShoppingCartOutlinedIcon />
                Cart
              </Link>
            </Badge>
          </MobileMenuitem>

          <MobileMenuitem
            isDarkTheme={isDarkTheme}
            onClick={() => {
              ThemeButtonClicked();
              setMenuVisible(!menuVisible);
            }}
          >
            {isDarkTheme ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}{" "}
            Theme
          </MobileMenuitem>
        </MobileMenu>
      )}
    </Content>
  );
};

export default NavBar;
