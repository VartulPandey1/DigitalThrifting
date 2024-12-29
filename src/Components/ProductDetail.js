import { useEffect, useState } from "react";
import styled from "styled-components";
import { productDetail } from "../utils/constants";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { addPrice, totalItem } from "../utils/TotalCostSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Components = styled.div`
  background-color: ${(props) => (props.isDark ? "#202124" : "white")};
  display: flex;
  height: 90vh;
  @media only screen and (max-width: 1024px) {
    position: relative;
    min-height: 80vh;
  }
  @media only screen and (max-width: 768px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 480px) {
    min-height: 130vh;
  }
  @media only screen and (max-width: 305px) {
    min-height: 140vh;
  }
`;
const Images = styled.div`
  display: flex;
  overflow: auto;
  margin: 20px;
  height: 85vh;
  max-width: 35vw;
  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 1%;
    height: 52%;
    min-width: 75%;
    left: 20%;
  }
  @media only screen and (max-width: 480px) {
    position: absolute;
    top: 1vh;
    height: 50vh;
    width: 100%;
    left: 20vw;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  margin: 20px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 55%;
    margin: 2%;
    width: 95%;
  }
  @media only screen and (max-width: 480px) {
    position: absolute;
    top: 55vh;
    margin: 10px;
    width: 95vw;
  }
`;
const Name = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 2rem;
  font-weight: 600;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const Company = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 1rem;
  color: gray;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const Description = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 1.2rem;
  margin-top: 4vh;
  @media only screen and (max-width: 1024px) {
    margin-top: 2vh;
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;
const Price = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 2rem;
  margin-top: 4vh;
  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const Select = styled.select`
  margin-left: 1vw;
  width: 3vw;
  @media only screen and (max-width: 1024px) {
    width: 10%;
    /* height: 10%; */
    margin-left: 1px;
  }
  @media only screen and (max-width: 768px) {
    width: 10%;
    height: 3%;
    margin-left: 1px;
  }
  @media only screen and (max-width: 480px) {
    width: 20%;
    margin-left: 1px;
  }
`;
const Option = styled.option`
  display: flex;
  justify-content: center;
`;
const Elements = styled.div`
  margin-top: 5vh;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    justify-content: space-around;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    justify-content: space-around;
  }
`;
const Colors = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18vw;
  @media only screen and (max-width: 1024px) {
    padding-right: 8%;
  }
  @media only screen and (max-width: 480px) {
    padding-right: 5vh;
  }
`;
const Color = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  border: none;
  margin-left: 1vw;
  height: 3vh;
  width: 1.5vw;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 4vw;
    height: 3vh;
    margin-left: 4vw;
  }
  @media only screen and (max-width: 480px) {
    width: 4vw;
    height: 2.5vh;
    margin-left: 4vw;
  }
`;
const NumberOfElement = styled.div`
  display: flex;
  padding: 2vh;
  border: 1px solid blue;
  margin-left: 1vw;
  margin-right: 1vw;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const Button = styled.button`
  font-weight: 700;
  background-color: green;
  color: white;
  margin-left: 14vw;
  cursor: pointer;
  border: 1px solid blue;
  padding: 0.5rem;
  @media only screen and (max-width: 1024px) {
    margin-left: 18vw;
  }
`;
const VerticalImage = styled.div`
  width: 8vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 1%;
    height: 72%;
    width: 15%;
  }
  @media only screen and (max-width: 480px) {
    position: absolute;
    top: 1vh;
    height: 52.5vh;
    width: 15vw;
  }
`;
const Vimages = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  height: 18.8vh;
  width: 8vw;
  border: 2px solid white;
  @media only screen and (max-width: 1024px) {
    height: 16%;
    width: 130%;
  }
  @media only screen and (max-width: 480px) {
    width: 15vw;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid blue;
  }
`;

const ProductDetail = () => {
  const param = useParams();
  const item = productDetail[param.id];
  const [itemColor, setItemColor] = useState(item.color[0]);
  const [mainImage, setMainImage] = useState("");
  const [numberOfItem, setNumberOfItem] = useState(1);
  const [size, setSize] = useState(item.sizeType == "number" ? "6" : "S");
  const isDark = useSelector((store) => store.toggle.isDark);

  const dispach = useDispatch();

  useEffect(() => {
    setMainImage(item.images[itemColor][0]);
  }, [itemColor]);

  function AddToCartClicked(item, price) {
    dispach(addPrice(numberOfItem * price));
    toast("Item Added");
    dispach(totalItem(numberOfItem));
    dispach(
      addItem({
        id: item,
        color: itemColor,
        size: size,
        price: price,
        numberOfItem: numberOfItem,
      })
    );
  }

  return (
    <Components isDark={isDark}>
      <VerticalImage>
        {item.images[itemColor]?.map((data, index) => {
          return (
            <Vimages key={index} onMouseOver={() => setMainImage(data)}>
              <Image src={data}></Image>
            </Vimages>
          );
        })}
      </VerticalImage>
      <Images>
        <Image src={mainImage == "" ? item.images[0] : mainImage}></Image>
      </Images>
      <Wrapper>
        <Company isDark={isDark}>{item.company}</Company>
        <Name isDark={isDark}>{item.name}</Name>
        <Description isDark={isDark}>{item.descrip}</Description>
        <Price isDark={isDark}>₹{item.sizes[size]}</Price>
        <Elements>
          <Colors>
            <span style={{ color: isDark ? "#f5f7f7" : "#202124" }}>
              Color:
            </span>
            {item.color.map((data, index) => {
              return (
                <Color
                  onClick={() => {
                    setItemColor(data);
                  }}
                  key={index}
                  color={data}
                >
                  {data == itemColor && (
                    <CheckIcon sx={{ fontSize: 15, color: "white" }} />
                  )}
                </Color>
              );
            })}
          </Colors>
          <span style={{ color: isDark ? "#f5f7f7" : "#202124" }}>Size:</span>
          {item.sizeType === "number" ? (
            <Select
              onChange={(e) => {
                setSize(e.target.value);
              }}
            >
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
            </Select>
          ) : (
            <Select
              onChange={(e) => {
                setSize(e.target.value);
              }}
            >
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
              <Option value="XXL">XXL</Option>
            </Select>
          )}
        </Elements>
        <Elements>
          <Items>
            <Icon
              onClick={() =>
                numberOfItem != 1 ? setNumberOfItem(numberOfItem - 1) : null
              }
            >
              <RemoveOutlinedIcon
                style={{
                  color:
                    numberOfItem === 1
                      ? "gray"
                      : isDark
                      ? "#f5f7f7"
                      : "#202124",
                }}
              />
            </Icon>
            <NumberOfElement style={{ color: isDark ? "#f5f7f7" : "#202124" }}>
              {numberOfItem}
            </NumberOfElement>
            <Icon
              onClick={() => {
                setNumberOfItem(numberOfItem + 1);
              }}
            >
              <AddOutlinedIcon
                style={{ color: isDark ? "#f5f7f7" : "#202124" }}
              />
            </Icon>
          </Items>
          <Button
            onClick={() => {
              AddToCartClicked(param.id, item.sizes[size]);
            }}
          >
            ADD TO CART
          </Button>
        </Elements>
      </Wrapper>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDark ? "dark" : "colored"}
      />
    </Components>
  );
};

export default ProductDetail;
