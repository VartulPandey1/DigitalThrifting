import { useSelector } from "react-redux";
import styled from "styled-components";
import Carosuel from "./Carousel";
import ItemList from "./ItemList";

const Container=styled.div`
background-color: ${props=>props.isDark?"#202124":"white"};
`
const HomePage = () => {
  const isDark=useSelector(store=>store.toggle.isDark)
  return (
    <Container isDark={isDark}>
      <Carosuel />
      <ItemList />
    </Container>
  );
};

export default HomePage;
