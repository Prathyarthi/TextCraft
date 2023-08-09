import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar heading="TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter your text here :) "/>
      </div>
    </>
  );
}

export default App;
