import styled from "styled-components";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { useEffect, useState } from "react";
import { CarosuelInfo } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  height: 80vh;
  min-width: 98vw;
  display: flex;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
  @media only screen and (max-width: 480px) {
    height: 40vh;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  height: 100%;
  min-width: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  margin-top: 1vh;
`;

const CarouselElement = styled.div`
  height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
  @media only screen and (max-width: 480px) {
    height: 40vh;
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 20px;
  margin: 10px;
  opacity: 0.5;
  border-radius: 100%;
  background-color: white;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: ${(props) => (props.direction === "left" ? 0 : null)};
  right: ${(props) => (props.direction === "right" ? 0 : null)};
  cursor: pointer;
  z-index: 200;
  @media only screen and (max-width: 1024px) {
    padding: 12px;
    top: 40%;
  }
  @media only screen and (max-width: 768px) {
    padding: 8px;
    top: 40%;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
    top: 40%;
  }
`;

const CarouselPoint = styled.div`
  display: flex;
  /* background-color: blue; */
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  z-index: 200;
  @media only screen and (max-width: 1024px) {
    left: 45%;
  }
  @media only screen and (max-width: 768px) {
    left: 40%;
  }
`;

const Point = styled.div`
  cursor: pointer;
  margin-left: 10px;
  color: white;
`;

const Image = styled.img`
  background-size: contain;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarosuelText = styled.span`
  position: absolute;
  cursor: default;
  font-size: 7rem;
  font-weight: 800;
  color: white;
  width: 5vw;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  line-height: 16vh;
  @media only screen and (max-width: 1024px) {
    /* margin-top: 8vh; */
    font-size: 6rem;
    line-height: 16vh;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 8vh;
    font-size: 2.5rem;
    line-height: 7vh;
  }
  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    line-height: 6vh;
  }
`;

const CarosuelDetail = styled.span`
  cursor: default;
  position: absolute;
  left: ${(props) => props.left};
  font-size: 2rem;
  top: ${(props) => props.top};
  width: 35vw;
  letter-spacing: 3px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
    width: 34vw;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
    width: 30vw;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.5rem;
    width: 30vw;
  }
`;
const CorosuelButton = styled.button`
  color: #e6e8eb;
  border: 0.25px solid #e6e8eb;
  cursor: pointer;
  position: absolute;
  min-width: 8vw;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  padding: 10px;
  background-color: transparent;
  @media only screen and (max-width: 1024px) {
    padding: 5px;
    width: 10vw;
  }
  @media only screen and (max-width: 768px) {
    padding: 1px;
    width: 15vw;
  }
  @media only screen and (max-width: 480px) {
    padding: 1px;
    width: 25vw;
  }
`;

const Carousel = () => {
  const max = 3;
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const index = setInterval(() => {
      if (slideIndex == max) setSlideIndex(0);
      else setSlideIndex(slideIndex + 1);
    }, 4000);

    return () => clearInterval(index);
  }, [slideIndex]);

  function PointClicked(index) {
    setSlideIndex(index);
  }

  function ArrowButtonClicked(direction) {
    if (direction == "left" && slideIndex == 0) setSlideIndex(max);
    if (direction == "left" && slideIndex != 0) setSlideIndex(slideIndex - 1);
    if (direction == "right" && slideIndex == 3) setSlideIndex(0);
    if (direction == "right" && slideIndex != 3) setSlideIndex(slideIndex + 1);
  }
  return (
    <Wrapper slideIndex={slideIndex}>
      <Arrow
        onClick={() => {
          ArrowButtonClicked("left");
        }}
        slideIndex={slideIndex}
        direction="left"
      >
        <WestOutlinedIcon />
      </Arrow>
      <Arrow
        onClick={() => {
          ArrowButtonClicked("right");
        }}
        slideIndex={slideIndex}
        direction="right"
      >
        <EastOutlinedIcon />
      </Arrow>
      <CarouselPoint slideIndex={slideIndex}>
        <Point>
          <FiberManualRecordOutlinedIcon
            onClick={() => {
              PointClicked(0);
            }}
            sx={slideIndex == 0 ? { fontSize: 15 } : { fontSize: 12 }}
          />
        </Point>
        <Point>
          <FiberManualRecordOutlinedIcon
            onClick={() => {
              PointClicked(1);
            }}
            sx={slideIndex == 1 ? { fontSize: 15 } : { fontSize: 12 }}
          />
        </Point>
        <Point>
          <FiberManualRecordOutlinedIcon
            onClick={() => {
              PointClicked(2);
            }}
            sx={slideIndex == 2 ? { fontSize: 15 } : { fontSize: 12 }}
          />
        </Point>
        <Point>
          <FiberManualRecordOutlinedIcon
            onClick={() => {
              PointClicked(3);
            }}
            sx={slideIndex == 3 ? { fontSize: 15 } : { fontSize: 12 }}
          />
        </Point>
      </CarouselPoint>

      <CarouselContainer slideIndex={slideIndex}>
        {CarosuelInfo.map((data, index) => {
          return (
            <div key={index}>
              <CarouselElement>
                <Image src={data.img} alt="this is the img of a model" />
              </CarouselElement>
              <CarosuelText left={data.textLeft} top={data.textTop}>
                {data.text}
              </CarosuelText>
              <CarosuelDetail left={data.detailLeft} top={data.detailTop}>
                {data.detail}
              </CarosuelDetail>
              <Link
                to={`/product/${data.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <CorosuelButton left={data.buttonLeft} top={data.buttonTop}>
                  {data.buttonText}
                </CorosuelButton>
              </Link>
            </div>
          );
        })}
      </CarouselContainer>
    </Wrapper>
  );
};

export default Carousel;
