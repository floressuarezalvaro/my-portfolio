import './App.css';
import ResponsiveAppBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <main>
        <h1>My Portfolio</h1>
        <div className="card">
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
