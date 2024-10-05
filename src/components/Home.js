import styled from "styled-components"
import Section from "./Section"
export default function Home(){

    return(
        <Container>
    <Section
     title="Model s"
     description="Order Online for Touchless Delivery."
    backgroundImg='model-s.jpg'
    leftButton='custom-order'
    rightButton='Exisiting'
     />

<Section
title='Model 3'
description="Order Online for Touchless Delivery."
backgroundImg='model-3.jpg'
leftButton='custom-order'
rightButton='Exisiting'
     />
     <Section
     title='Model x'
     description="Order Online for Touchless Delivery."
     backgroundImg='model-x.jpg'
     leftButton='custom-order'
     rightButton='Exisiting'
     />
    <Section
        title='Model y'
        description="Order Online for Touchless Delivery."
        backgroundImg='model-y.jpg'
        leftButton='custom-order'
        rightButton='Exisiting'
    />
    <Section
     title='Solar Panel'
     description="Lowest Solar Panel in America."
     backgroundImg='solar-panel.jpg'
     leftButton='custom-order'
     rightButton='Exisiting '
    /> 
        <Section
     title='Solar Roof'
     description="Order Online for Touchless Delivery."
     backgroundImg='solar-roof.jpg'
     leftButton='custom-order'
     rightButton='Exisiting'
    /> 
           <Section
     title='Accessories'
    
     backgroundImg='accessories.jpg'
     leftButton='Shop Now'
    
    /> 
            </Container>
    )
}
const Container=styled.div`
height: 100vh;
`