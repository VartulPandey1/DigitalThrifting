import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LikedItemCard from "./LikedItemCard";

const Component = styled.div`
  background-color: ${(props) => (props.isDark ? "#202124" : "")};
  display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin: 2px;
  }
`;
const Button = styled.button`
  padding: 0.5rem;
  color: white;
  background-color: green;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    padding: 4px;
    width: 20vw;
    height: 4vh;
    font-size: 8px;
  }
`;

const OrderItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  position: relative;
`;

const EmptyCart = styled.div`
  background-color: ${(props) => (props.isDark ? "#202124" : "white")};
  height: 50vh;
  width: 100vw;
  background-image: url("https://cdn-icons-png.flaticon.com/512/4379/4379925.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
  @media only screen and (max-width: 480px) {
    height: 60vh;
  }
`;
const EmptyCartSpan = styled.span`
  counter-reset: "#f5f7f7";
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 2.8rem;
  font-weight: 700;
  /* padding-left: 52vh; */
  /* margin-left: ?10vw; */
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LikedItem = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const isDark = useSelector((store) => store.toggle.isDark);
  const likedItem = useSelector((store) => store.cart.likedItems);
  const totalItem = useSelector((store) => store.totalPrice.totalItem);
  const totalLikedItem = useSelector((store) => store.totalPrice.likedItems);

 
  if (likedItem.length == 0)
    return (
      <>
        <EmptyCart isDark={isDark}>
          <EmptyCartSpan isDark={isDark}>
            There is no liked element
          </EmptyCartSpan>
          <Link
            to="/"
            style={{
              // fontSize: "",
              marginLeft: "1%",
              color: isDark ? "red" : "blue",
            }}
          >
            (Make Your Wishlist)
          </Link>
        </EmptyCart>
      </>
    );

  return (
    <Component isDark={isDark}>
      <Heading>
        <Span style={{ color: isDark ? "#f5f7f7" : "#202124" }}>Your Bag</Span>
      </Heading>
      <Container>
        <Link to="/">
          <Button>CONTINUE SHOPPING</Button>
        </Link>
        <Link style={{ fontSize: ".8rem", color: isDark ? "red" : "blue" }}>
          Your Wishlist({totalLikedItem})
        </Link>
        <Link to="/cart"><Button style={{color:"white"}}>__MOVE TO CART ({totalItem})__</Button></Link>
      </Container>

      <Wrapper>
        {likedItem.map((data, index) => {
          return <LikedItemCard data={data} index={index} key={index} />;
        })}
      </Wrapper>
      <OrderItem></OrderItem>
    </Component>
  );
};

export default LikedItem;
