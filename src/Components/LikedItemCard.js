import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { productDetail } from "../utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import { removeLikedItem } from "../utils/CartSlice";
import { totalLikedItem } from "../utils/TotalCostSlice";

const Component = styled.div`
  background-color: ${(props) => (props.isDark ? "#202124" : "white")};
  position: relative;
  display: flex;
  border-bottom: 4px solid purple;
  margin: 1% 4%;
  width: 80%;
  height: 40vh;
`;
const ImageDiv = styled.div`
  width: 50%;
  height: 90%;
  @media only screen and (max-width: 1024px) {
    height: 80%;
  }
`;
const CartDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  @media only screen and (max-width: 1024px) {
    margin-left: 12vw;
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 16vw;
    width: 100%;
  }
`;
const Span = styled.span`
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
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
const RemoveButton = styled.div`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  margin-right: 1vw;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 10;
  margin-right: 8vw;

  @media only screen and (max-width: 1024px) {
    margin-right: 3vw;
  }
`;
const Image = styled.img`
  height: 100%;
  margin-left: 2vw;
`;

const LikedItemCard = ({ data, index }) => {
  const isDark = useSelector((store) => store.toggle.isDark);
  const dispach = useDispatch();

  function RemoveButtonClicked() {
    dispach(removeLikedItem(index));
    dispach(totalLikedItem(-1))
  }
  return (
    <Component key={index} isDark={isDark}>
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

      <RemoveButton
        isDark={isDark}
        onClick={() => {
          RemoveButtonClicked();
        }}
      >
        <CloseIcon />
      </RemoveButton>
    </Component>
  );
};

export default LikedItemCard;
