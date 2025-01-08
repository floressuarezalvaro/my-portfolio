import './App.css'

import ResponsiveAppBar from './components/Navbar'

function App() {

  return (
    <>
      <ResponsiveAppBar />
      <h1>My Portfolio</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
