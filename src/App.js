// Import data
// Import components
import './App.css';
import Searchbar from './components/Searchbar';
import Gallery from './components/Gallery';
import Directory from './components/Directory';

import Sidebar from './components/Sidebar';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <h1>Craigslist</h1>
      <div className="App">
        <Searchbar/>
        <Directory/>
        <Gallery />
        <sidebar/>
        {/* Your content will go here! */}
        <Gallery/>
        <Sidebar/>
      </div>
    </div>
  );
}
export default App;