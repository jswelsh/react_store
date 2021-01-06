import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {ProductProvider} from './context'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import CssBaseline from '@material-ui/core/CssBaseline';

import { NaviBar } from './NaviBar'
import { Products } from './Products'
import { ProductDetails } from './ProductDetails/index'
import { Cart } from './Cart/index'
import { Default } from './Default'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius:36,
      },
      label:{
        padding:4

      } 
    }, 
  }, 
}) 
function App() {
  const payPalKey = process.env.REACT_APP_PAY_PAL_KEY
  console.log(process.env)
  return (
    <ProductProvider>
      <ThemeProvider theme={theme}>
      <PayPalScriptProvider options={{ "client-id": payPalKey }}>
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
      </PayPalScriptProvider>
      </ThemeProvider>
    </ProductProvider>
  );
}

export default App;