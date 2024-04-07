import { useState, useEffect } from 'react'
import './App.css'
import Plot from 'react-plotly.js'
import choroplethJSON from '../../maps/choropleth.json';
import spaceJSON from '../../maps/Chinatown Park.json'
import hourlyJSON from '../../hourly_plots/Boston Common.json';

import '@mantine/core/styles.css';
import Cards from "./components/Cards"
import Intro from "./components/Intro"
import Title from "./components/Title"
import Spaces from "./components/Spaces"
import Tutorial from "./components/Tutorial"

import Definition from "./components/Definition"
import Comparison from "./components/Comparison"
import Poll from "./components/Poll"
import PollResults from "./components/PollResults"



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




import { MantineProvider, rem } from '@mantine/core';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
  window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};


function App() {
  const [count, setCount] = useState(0)
  const { height, width } = useWindowDimensions();



  return <MantineProvider
  theme={{
    fontSizes: {
      xs: rem(10 / 1080 * height),
      sm: rem(11 / 1080 * height),
      md: rem(20 / 1080 * height),
      lg: rem(24 / 1080 * height),
      xl: rem(28 / 1080 * height),
    },
  }}
>{

<div>
<Router>
<Routes>

  <Route path="/intro" element={<Intro height={height} width={width}/>}>
  </Route>
  <Route path="/" element={<Title height={height} width={width} />}>
  </Route>
  <Route path="/spaces" element={<Spaces height={height} width={width} />}>
  </Route>
  <Route path="/tutorial" element={<Tutorial height={height} width={width} />}>
  </Route>
</Routes>
</Router>

</div>


    // <>
    //   <Title height={height} width={width} />
    //   <Intro />
    //   <Definition />
    //   <Comparison />
    //   <Poll></Poll>
    //   <PollResults></PollResults>
    //   <Cards />
    //   <br></br>
    //   <Plot data={choroplethJSON.data} layout={choroplethJSON.layout} />
    //   <Plot data={spaceJSON.data} layout={spaceJSON.layout} />
    //   <Plot data={hourlyJSON.data} layout={hourlyJSON.layout} />
    // </>

  }

  </MantineProvider>;
}



export default App
