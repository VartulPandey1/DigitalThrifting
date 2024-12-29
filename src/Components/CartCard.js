import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useEffect, useState } from "react";
import { productDetail } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPrice, totalItem } from "../utils/TotalCostSlice";
import { removeItem, updateNumberOfItem } from "../utils/CartSlice";
import CloseIcon from "@mui/icons-material/Close";

const Component = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
  height: 25vh;
  display: flex;
  padding-bottom: 4vh;
  margin: 8px;
  border-bottom: 3px solid ${(props) => (props.isDark ? "#414a3a" : "#f0daea")};
  @media only screen and (max-width: 1024px) {
    height: 28vh;
  }
  @media only screen and (max-width: 1024px) {
    margin: 2px;
    width: 100vw;
    padding: 2vh 0vh;
  }
`;
const ImageDiv = styled.div`
  width: 20%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    height: 80%;
  }
`;
const Image = styled.img`
  height: 100%;
  margin-left: 2vw;
`;
const CartDetail = styled.div`
  width: 60%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    margin-left: 12vw;
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 16vw;
    width: 100%;
  }
`;
const Span = styled.div`
  margin-bottom: 4vh;
  padding-left: 4vw;
  /* @media only screen and (max-width: 1024px) {
    margin-bottom: 3vh;
    padding-left: 4vw;
  } */
  @media only screen and (max-width: 1024px) {
    margin-bottom: 2vh;
    padding-left: 1vw;
  }
`;
const SpanHeader = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 1.3rem;
  font-weight: 600;
  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
const SpanDetail = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 1rem;
  margin-left: 1%;
  @media only screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;
const CartPrice = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
`;
const Elements = styled.div`
  margin-top: 2vh;
  margin-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    margin-top: 3vh;
    margin-bottom: 1vh;
    margin-right: 5vw;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 3vh;
    margin-bottom: 1vh;
  }
`;
const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const NumberOfElement = styled.div`
  padding: 2vh;
  border: 1px solid blue;
  margin-left: 1vw;
  margin-right: 1vw;
  font-size: 2rem;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
const Price = styled.span`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 2rem;
  margin-top: 3.5vh;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const RemoveButton = styled.div`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  margin-right: 1vw;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  @media only screen and (max-width: 1024px) {
    margin-right: 3vw;
  }
`;

const CartCard = ({ data, index }) => {
  const [numberOfItem, setNumberOfItem] = useState(1);
  const isDark = useSelector((store) => store.toggle.isDark);

  const dispach = useDispatch();

  useEffect(() => {
    setNumberOfItem(data.numberOfItem);
  }, []);

  function addItemToCart(price) {
    dispach(
      updateNumberOfItem({ index: index, numberofItems: numberOfItem + 1 })
    );
    setNumberOfItem(numberOfItem + 1);
    dispach(addPrice(price));
    dispach(totalItem(1));
  }

  function removeItemFromCart(price) {
    if (numberOfItem != 1)
      dispach(
        updateNumberOfItem({ index: index, numberofItems: numberOfItem - 1 })
      );
    setNumberOfItem(numberOfItem - 1);
    dispach(addPrice(-price));
    dispach(totalItem(-1));
  }
  function RemoveButtonClicked(index, price) {
    dispach(removeItem(index));
    dispach(addPrice(-numberOfItem * price));
    dispach(totalItem(-numberOfItem));
  }

  return (
    <Component isDark={isDark}>
      <ImageDiv>
        <Image src={productDetail[data?.id].images[data.color][0]}></Image>
      </ImageDiv>

      <CartDetail>
        <Span>
          <SpanHeader isDark={isDark}>Product:</SpanHeader>
          <SpanDetail isDark={isDark}>
            {productDetail[data?.id].name}
          </SpanDetail>
        </Span>
        <Span>
          <SpanHeader isDark={isDark}>ID:</SpanHeader>
          <SpanDetail isDark={isDark}>{data?.id}</SpanDetail>
        </Span>
        <Span>
          <SpanHeader isDark={isDark}>Color:</SpanHeader>
          <SpanDetail
            isDark={isDark}
            style={{
              backgroundColor: data.color,
              borderRadius: "100%",
              padding: "1px",
              color: data.color,
            }}
          >
            col
          </SpanDetail>
        </Span>
        <Span>
          <SpanHeader isDark={isDark}>Size:</SpanHeader>
          <SpanDetail isDark={isDark}>{data.size}</SpanDetail>
        </Span>
      </CartDetail>

      <CartPrice>
        <Elements>
          <Icon
            onClick={() =>
              numberOfItem != 1
                ? removeItemFromCart(productDetail[data?.id].sizes[data.size])
                : null
            }
          >
            <RemoveOutlinedIcon
              style={{
                color:
                  numberOfItem === 1 ? "gray" : isDark ? "#f5f7f7" : "#202124",
              }}
            />
          </Icon>
          <NumberOfElement style={{ color: isDark ? "#f5f7f7" : "#202124" }}>
            {numberOfItem}
          </NumberOfElement>
          <Icon
            onClick={() => {
              addItemToCart(productDetail[data?.id].sizes[data.size]);
            }}
          >
            <AddOutlinedIcon
              style={{ color: isDark ? "#f5f7f7" : "#202124" }}
            />
          </Icon>
        </Elements>
        <Elements>
          <Price isDark={isDark}>
            ₹{numberOfItem * productDetail[data?.id].sizes[data.size]}
          </Price>
        </Elements>

        <RemoveButton
          isDark={isDark}
          onClick={() => {
            RemoveButtonClicked(
              index,
              productDetail[data?.id].sizes[data.size]
            );
          }}
        >
          <CloseIcon />
        </RemoveButton>
      </CartPrice>
    </Component>
  );
};

export default CartCard;
