import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student.jsx'

function App() {
  return (
    // Wrap everything in a single Fragment or Div
    <>
      <div>
        <h1>Welcome to My App</h1>
        <p>This is a simple React application built with Vite.</p>
        <div> CSE 28</div>
        <br />
        <img src="https://media.tenor.com/YrgQLRVGrs4AAAAi/blue-ca.gif" alt="Icon" /> 
        <br />
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>  
        <br />
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* These are now inside the parent fragment */}
      <Student name="John Doe" course="Btech" marks="85" />
      <Student name="Jane Smith" course="Btech" marks="90" />
      <Student name="Alice Johnson" course="Btech" marks="92" />
    </>
  )
}

export default App