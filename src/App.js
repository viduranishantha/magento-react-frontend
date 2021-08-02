import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ApolloLink, InMemoryCache, ApolloProvider, ApolloClient } from '@apollo/client';

// Page & Layout Imports
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import SiteHeader from "./components/SiteHeader";
import CategoryDetails from './pages/CategoryDetails';


// apollo client
const client = new ApolloClient({
  uri: 'http://localhost/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <div className="header-container">
              <SiteHeader></SiteHeader>
          </div>
              
      
          <div className="main-content">
              <h2> magneto React store front</h2>
              <Switch>
                <Route exact path= "/">
                  <Homepage/>
                </Route>
                <Route exact path= "/category">
                  <Category/>
                </Route>
                <Route path= "/category/:id">
                  <CategoryDetails/>
                </Route>
                <Route path= "/product/:id">
                  <ProductDetails/>
                </Route>
              </Switch>

          </div>
        </div>
    </ApolloProvider>
    </Router>
  );
}

export default App;
