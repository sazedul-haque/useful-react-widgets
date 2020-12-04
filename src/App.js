import Login from './components/Login';
import Product from './components/Product';

import './assets/styles/style.scss';

function App() {
  return (
    <div className="dashboard"> 
      <h1>Example Widgets</h1>
      <Login />
      <Product />
    </div>
  );
}

export default App;
