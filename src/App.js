import Login from './components/Login';
import Product from './components/Product';
import Subscribe from './components/Subscribe';
import Checkboxes from './components/Checkboxes';

import './assets/styles/style.scss';

function App() {
  return (
    <div className="dashboard"> 
      <h1>Example Widgets</h1>
      <div className="dashbaord-item">
        <Login />
        <Product />
      </div>
      <div className="dashbaord-item">
        <Subscribe />
        <Checkboxes />
      </div>
    </div>
  );
}

export default App;
