import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem, addLikedItem } from "../utils/CartSlice";
import { productDetail } from "../utils/constants";
import { addPrice, totalItem, totalLikedItem } from "../utils/TotalCostSlice";

const ShirtCard = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 55vh;
  width: 23vw;
  margin: 10px;
  @media only screen and (max-width: 768px) {
    margin: 5px;
    width: 48vw;
  }
  @media only screen and (max-width: 480px) {
    width: 90vw;
  }
`;
const Image = styled.img`
  border-radius: 10%;
  box-shadow: 1px 1px 2px 2px;
  width: 100%;
  height: 100%;
`;
const Icons = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  display: flex;
  background-color: ${(props) => (props.isDark ? "#202124" : "#f5f7f7")};
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 10px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
const DarkenBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0;
  z-index: -100;
  &:hover {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
  }
`;
const SingleProductListCard = ({ data, size }) => {
  const dispach = useDispatch();
  const isDark = useSelector((store) => store.toggle.isDark);
  const [liked, setLiked] = useState(false);

  function AddToLikedClicked(item) {
    if(liked)
    toast("Already Liked")
    else{
    toast("Item Liked");
    setLiked(!liked);
    dispach(totalLikedItem(1))

    dispach(
      addLikedItem({
        id: item,
        color: productDetail[item].color[0],
        size: size ? size : "S",
        price: size
          ? productDetail[item].sizes[size]
          : productDetail[item].sizes["S"],
        numberOfItem: 1,
      })
    );}
  }
  function AddToCartClicked(item) {
    if (size == "") toast.warn("please select the size");
    else {
      dispach(addPrice(productDetail[item].sizes[size]));
      toast("Item Added");
      dispach(totalItem(1));
      dispach(
        addItem({
          id: item,
          color: productDetail[item].color[0],
          size: size,
          price: productDetail[item].sizes[size],
          numberOfItem: 1,
        })
      );
    }
  }
  return (
    <ShirtCard>
      <Image src={data?.img}></Image>
      <Icons>
        <Icon
          isDark={isDark}
          onClick={() => {
            AddToCartClicked(data.index);
          }}
        >
          <ShoppingCartOutlinedIcon
            style={{ color: isDark ? "#f5f7f7" : "#202124" }}
          />
        </Icon>
        <Icon isDark={isDark}>
          <Link
            style={{ color: isDark ? "#f5f7f7" : "#202124" }}
            to={`/detail/${data.index}`}
          >
            {" "}
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon
          isDark={isDark}
          onClick={() => {
            AddToLikedClicked(data.index);
          }}
        >
          {liked ? (
            <FavoriteOutlinedIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlinedIcon
              style={{ color: isDark ? "#f5f7f7" : "#202124" }}
            />
          )}
        </Icon>
      </Icons>
      <DarkenBackground></DarkenBackground>
    </ShirtCard>
  );
};

export default SingleProductListCard;
