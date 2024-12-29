import { Link } from "react-router-dom";
import styled from "styled-components";
import { itemList } from "../utils/constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  @media only screen and (max-width:768px) {
    align-items: center;
  }
  @media only screen and (max-width:480px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Card = styled.div`
  position: relative;
  width: 24%;
  height: 60%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:1024px) {
    width: 24%;
    padding: 5px;
  }
  @media only screen and (max-width:768px) {
    width: 48%;
  }
  @media only screen and (max-width:480px) {
    width: 90%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  cursor: default;
  border-radius: 20px;
  &:hover {
    transform: scale(1.005);
  }
  @media only screen and (max-width:768px) {
    height: 50vh;
  }
`;
const ImageData = styled.span`
  position: absolute;
  font-size: 35px;
  cursor: default;
  font-weight: 600;
  z-index: 200;
  color: white;
  margin-bottom: 8vh;
  @media only screen and (max-width:1024px)and (min-width:768px ) {
    font-size: 30px;
  }
`;
const ImageButton = styled.button`
  position: absolute;
  color: black;
  padding: 10px 0px;
  z-index: 200;
  margin-top: 8vh;
  cursor: pointer;
`;
const ItemList = () => {
  return (
    <Container>
      {itemList.map((data) => {
        return (
          <Card key={data.id}>
            <Image src={data.image} />
            <ImageData>{data.name}</ImageData>
            <ImageButton>
              <Link to={`/product/${data.id}`} style={{textDecoration:"none",color:"black",padding:"10px"}}>
                SHOP NOW</Link>
            </ImageButton>
          </Card>
        );
      })}
    </Container>
  );
};

export default ItemList;
