import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { animated, useSpring } from 'react-spring'
import Curves from './Curves'
import Bezier from './Bezier'

function App() {
  const [easing, setEasing] = useState('easeInOut');

  const easings = {
    easeIn: t => t * t,
    easeOut: t => t * (2 - t),
    linear: t => t
  };

  const springProps = useSpring({
    config: { duration: 2000, easing: easings[easing] },
    from: { transform: 'translateX(0px' },
    to: { transform: 'translateX(200px)' },
    reset: true,
  })


  return (
    <div>
      <select onChange={(e) => setEasing(e.target.value)}>
        <option value='easeInOut'>Ease In Out</option>
        <option value='easeIn'>Ease In</option>
        <option value='easeOut'>Ease Out</option>
        <option value='linear'>Linear</option>
      </select>
      <div className='animation'>
        <animated.div style={springProps} className="ball" />

      </div>

      <Curves />
      <Bezier />
    </div>
  )
}

export default App
