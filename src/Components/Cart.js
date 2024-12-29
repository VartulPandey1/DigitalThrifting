import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartCard from "./CartCard";

const Component = styled.div`
  background-color: ${(props) => (props.isDark ? "#202124" : "white")};
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
const Card = styled.div`
  @media only screen and (max-width: 1024px) {
    margin-top: 2vh;
    margin-right: 4vw;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 25vh;
    margin-right: 4vw;
  }
`;
const Summary = styled.span`
  background-color: ${(props) => (props.isDark ? "#414a3a" : "#f0daea")};
  padding: 1rem;
  position: absolute;
  width: 25vw;
  height: 45vh;
  margin-left: 5vw;
  right: 1vw;
  border-radius: 50px;
  @media only screen and (max-width: 1024px) {
    height: 45vh;
    right: 0.1;
  }
  @media only screen and (max-width: 768px) {
    border-radius: 20px;
    width: 90%;
    height: 20vh;
    margin-top: 1vh;
  }
`;
const Label = styled.div`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const SummaryElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SummaryHeading = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 5vh;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
    margin-top: 4vh;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2vh;
  }
`;
const SummaryData = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 1.4rem;
  margin-top: 5vh;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    margin-top: 4 vh;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: 2vh;
  }
`;
const EmptyCart = styled.div`
  background-color: ${(props) => (props.isDark ? "#202124" : "white")};
  height: 80vh;
  width: 100%;
  background-image: url("https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
  @media only screen and (max-width: 480px) {
    height: 60vh;
  }
`;
const EmptyCartSpan = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  font-size: 2rem;
  font-weight: 600;
  margin-top: 12vh;
  margin-left: 10vw;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const totalItem = useSelector((store) => store.totalPrice.totalItem);
  const totalLikedItem = useSelector((store) => store.totalPrice.likedItems);
  const totalCost = useSelector((store) => store.totalPrice.totalPrice);
  const isDark = useSelector((store) => store.toggle.isDark);
  if (cartItem.length == 0)
    return (
      <>
        <EmptyCart isDark={isDark}>
          <EmptyCartSpan isDark={isDark}>
            Your cart is empty
            <Link
              to="/"
              style={{
                fontSize: "small",
                marginLeft: "20px",
                color: isDark ? "red" : "blue",
              }}
            >
              (Continue Shopping)
            </Link>
          </EmptyCartSpan>
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
        <Link to="/liked" style={{ fontSize: ".8rem", color: isDark ? "red" : "blue" }}>
          Your Wishlist({totalLikedItem})
        </Link>
        <Button>_CHECKOUT NOW ({totalItem})</Button>
      </Container>

      <OrderItem>
        <Card>
          {cartItem.map((data, index) => {
            return <CartCard key={index} data={data} index={index} />;
          })}
        </Card>

        <Summary isDark={isDark}>
          <Label isDark={isDark}>Summary</Label>
          <SummaryElement>
            <SummaryData isDark={isDark}>Subtotal</SummaryData>
            <SummaryData isDark={isDark}>₹{totalCost}</SummaryData>
          </SummaryElement>
          <SummaryElement>
            <SummaryData isDark={isDark}>Estimated Shipping</SummaryData>
            <SummaryData isDark={isDark}>₹150</SummaryData>
          </SummaryElement>
          <SummaryElement>
            <SummaryData isDark={isDark}>Shipping Discount</SummaryData>
            <SummaryData isDark={isDark}>-₹150</SummaryData>
          </SummaryElement>
          <SummaryElement>
            <SummaryHeading isDark={isDark}>Total</SummaryHeading>
            <SummaryData isDark={isDark}>₹{totalCost}</SummaryData>
          </SummaryElement>
        </Summary>
      </OrderItem>
    </Component>
  );
};

export default Cart;
