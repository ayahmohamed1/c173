import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --red:        #855B71;
    --red-dark:   #654254;
    --red-pale:   #d5bdc9;
    --pink-soft:  #f4eaf0;
    --paper:      #855B71;
    --bg:         #855B71;
    --card:       #ffffff;
    --text:       #3c2b33;
    --text-light: #684d5a;
    --cream:      #f6e9df;
    --font-hand:  'Caveat', cursive;
    --font-body:  'Nunito', sans-serif;
  }

  body {
    background: var(--paper);
    color: var(--text);
    font-family: var(--font-body);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .btn-return {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.6rem 1.6rem;
    border-radius: 100px;
    border: 2px solid var(--red);
    background: #ffffff;
    color: var(--red);
    cursor: pointer;
    box-shadow: 0 3px 12px rgba(133, 91, 113, 0.16);
    transition: all 0.25s ease;
  }
  .btn-return:hover {
    background: var(--red);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(133, 91, 113, 0.32);
  }

  .floral-frame {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .floral-frame__edge {
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(40px, 11vw, 82px);
    overflow: hidden;
  }
  .floral-frame__edge::before {
    content: '';
    position: absolute;
    inset: 0;
    background-repeat: repeat-y;
    background-size: clamp(160px, 34vw, 230px) auto;
    mix-blend-mode: multiply;
  }
  .floral-frame__edge--left { left: 0; }
  .floral-frame__edge--left::before {
    background-image: url('/images/flowers-left.png');
    background-position: left top;
  }
  .floral-frame__edge--right { right: 0; }
  .floral-frame__edge--right::before {
    background-image: url('/images/flowers-right.png');
    background-position: right top;
  }
  .app-stage {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 600px) {
    .app-stage {
      padding-inline: clamp(44px, 13vw, 56px);
    }
    .floral-frame__edge {
      width: clamp(36px, 11vw, 48px);
    }
    .floral-frame__edge::before {
      background-size: clamp(150px, 40vw, 190px) auto;
    }
  }
`

const style = document.createElement('style')
style.textContent = globalStyles
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
