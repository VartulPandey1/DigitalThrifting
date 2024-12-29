import styled from "styled-components"

const Content=styled.div`
    display: flex;
    background-color: #096b6b;
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    
`
const Text=styled.span`
color: white;
font-size: 15px;
@media only screen and (max-width:340px){
  font-size: 10px;
}
`

const TopOffer = () => {
  return (
    <Content>
        <Text>
                Super Deal! Free Shiping on order above Rs. 500
        </Text>
    </Content>    
  )
}

export default TopOffer