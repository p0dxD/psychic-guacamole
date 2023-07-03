import './App.css';
import { Grid } from '@mui/material';
import Profile from './components/profile/Profile';
import { useRef, useEffect, useState } from 'react';

function App() {

  const canvasElement = useRef(null);
  const [backgroundPosition, setBackgroundPosition] = useState();

  useEffect(() => {
    // Code here will run after *every* render
    console.log("loading the paradox");
    // Add event listener
    document.addEventListener("mousemove", parallax);
    // Magic happens here
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.004}% ${50 - (_mouseY - _h) * 0.001}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.002}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.006}% ${50 - (_mouseY - _h) * 0.006}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      setBackgroundPosition(x)
    }

  }, [canvasElement]);

  return (
    <div className="App" ref={canvasElement} style={{
      backgroundSize: `40px 40px`,
      backgroundImage: ` linear-gradient(0.60turn, #f8fcfb, #c9fdd7, #79d1c3, #6892d5)`,
      backgroundPosition: backgroundPosition
    }
    }>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <Profile />
        </Grid>

      </Grid>

    </div>
  );
}

export default App;
