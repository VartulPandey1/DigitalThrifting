import styled from "styled-components";
import { productDetail, productLists } from "../utils/constants";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { addPrice, totalItem } from "../utils/TotalCostSlice";
// import { addItem, addLikedItem } from "../utils/CartSlice";
import SingleProductListCard from "./SingleProductListCard";

const Container = styled.div`
  background-color: ${(props) => (props.isDark ? "#202124" : "#f5f7f7")};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Select = styled.select`
  margin-left: 1vw;
  width: 4vw;
`;
const Option = styled.option`
  display: flex;
  justify-content: center;
`;
const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Filter = styled.div`
  display: flex;
  margin-left: 1.2vw;
`;
const SingleProductList = () => {
  const param = useParams();
  const [size, setSize] = useState("");
  const isDark = useSelector((store) => store.toggle.isDark);

  return (
    <Container isDark={isDark}>
      <Filter>
        Size:
        <Select
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          <Option>Select</Option>
          <Option value="S">S</Option>
          <Option value="M">M</Option>
          <Option value="L">L</Option>
          <Option value="XL">XL</Option>
          <Option value="XXL">XXL</Option>
        </Select>
      </Filter>
      <DataContainer>
        {productLists[param.id].map((data) => {
          return <SingleProductListCard data={data} size={size} />;
        })}
      </DataContainer>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDark ? "dark" : "light"}
      />
    </Container>
  );
};

export default SingleProductList;
