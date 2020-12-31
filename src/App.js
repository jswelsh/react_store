import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import { NaviBar } from './NaviBar'
import { Products } from './Products'
import { ProductDetails } from './ProductDetails'
import { Cart } from './Cart'
import { Default } from './Default'


function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
      <NaviBar />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/product_details' component={ProductDetails} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;