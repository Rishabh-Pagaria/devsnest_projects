import Block from './components/Box';
import './index.css';

function App() {
  
  return (
    <div className="App">
      <div className="Chess">
        {
          [...Array(169)].map(function (item, i){
            return <Block key = {i}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
