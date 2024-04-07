import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Center, Overlay, AspectRatio, Image, Space, rem, Text, Grid, Skeleton } from '@mantine/core';
import { useHover } from 'usehooks-ts';

import Card from "./Card";

import ChinatownPark from '../../../maps/Chinatown Park.json'
// import ChinatownParkH from '..'

import ChinatownParkH from '../../../hourly_plots/Chinatown Park.json';


import CityHall from '../../../maps/City Hall Plaza.json';
import CityHallH from '../../../hourly_plots/Chinatown Park.json';

import BostonCommon from '../../../maps/Boston Common.json'
import BostonCommonH from '../../../hourly_plots/Chinatown Park.json';

import FranklinPark from '../../../maps/Franklin Park.json'
import FranklinParkH from '../../../hourly_plots/Chinatown Park.json';



// const HEIGHT = 180;


const Spaces = (props) => {

  const HEIGHT = props.height * 0.94;

  const ref1 = useRef(null)
  const hovered1 = useHover(ref1)

  const ref2 = useRef(null)
  const hovered2 = useHover(ref2)

  const ref3 = useRef(null)
  const hovered3 = useHover(ref3)

  const ref4 = useRef(null)
  const hovered4 = useHover(ref4)

  // const HEIGHT = 2000;
  const WIDTH = props.width;

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/intro`; 
    navigate(path);
  }
  
  return (

    
    
    <div>
    <Space h={HEIGHT / 5} />

    <Grid >

      <Grid.Col span={9}>

        
    <Grid grow gutter={HEIGHT / 20} align="center">

<Grid.Col span={1}>
  </Grid.Col>

  <Grid.Col span={2.5}  >


  <Card 
id={1} 
name={"Chinatown Park"} 
map={ChinatownPark}
hourly={ChinatownParkH}
height={HEIGHT}

>
</Card>

</Grid.Col>
<Grid.Col span={2.5}  >

<Card 
id={2} 
name={"City Hall Plaza"}
map={CityHall}
hourly={CityHallH}
height={HEIGHT}


></Card>


</Grid.Col>
<Grid.Col span={2.5}  >

<Card 
id={3} 
name={"Boston Common"}
map={BostonCommon}
hourly={BostonCommonH}
height={HEIGHT}

></Card>


</Grid.Col>
<Grid.Col span={2.5}  >

<Card id={4} 
name={"Franklin Park"}
map={FranklinPark}
hourly={FranklinParkH}
height={HEIGHT}

></Card>

</Grid.Col>


<Grid.Col span={1}  >
  </Grid.Col>

  <Grid.Col span={1}  >
  </Grid.Col>


  <Grid.Col span={2.5}  >


  <Card 
id={1} 
name={"Chinatown Park"} 
map={ChinatownPark}
hourly={ChinatownParkH}
height={HEIGHT}

>
</Card>

</Grid.Col>
<Grid.Col span={2.5}  >

<Card 
id={2} 
name={"City Hall Plaza"}
map={CityHall}
hourly={CityHallH}
height={HEIGHT}


></Card>


</Grid.Col>
<Grid.Col span={2.5}  >

<Card 
id={3} 
name={"Boston Common"}
map={BostonCommon}
hourly={BostonCommonH}
height={HEIGHT}

></Card>


</Grid.Col>
<Grid.Col span={2.5}  >

<Card id={4} 
name={"Franklin Park"}
map={FranklinPark}
hourly={FranklinParkH}
height={HEIGHT}

></Card>

</Grid.Col>


<Grid.Col span={1}  >
  </Grid.Col>


  


  </Grid>






<Image 
      mt={ HEIGHT / 15 }
      radius={HEIGHT / 50}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      fullWidth
      h={HEIGHT / 60}
    />


      </Grid.Col>

      

      <Grid.Col span={2.8}>

        <Text fz="lg">Instructions</Text>


        <Skeleton height={HEIGHT/2} visible={false}>


        <Text fz="md">

          {hovered1 ? "sample instructions for play" : ""}
          {hovered2 ? "sample instructions for environment" : ""}
          {hovered3 ? "sample instructions for art" : ""}
          {hovered4 ? "sample instructions for food\ndkvndkvndkvndkvndkn" : ""}



        </Text>


        </Skeleton>

        <Grid>

        <Grid.Col span={6}>


      <Button variant="light" color="orange" fz="xl" 
      onClick={routeChange}

      style={{  minHeight: HEIGHT / 8 }} fullWidth> &#60;  </Button>

        </Grid.Col>

        <Grid.Col span={6}>

      <Button variant="light" color="orange" fz="xl" 
      onClick={routeChange}

      style={{  minHeight: HEIGHT / 8 }} fullWidth> &#62; </Button>
        </Grid.Col>


      </Grid>


      </Grid.Col>

      

    </Grid>

    </div>
 
  );
};

export default Spaces;