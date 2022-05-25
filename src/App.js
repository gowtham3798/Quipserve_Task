import './App.css';
import { Switch,Route } from 'react-router-dom';
import Header from './container/Header'
import ProductDetails from './container/ProductDetail';
import { EditPosts } from './container/ProductEdit';
import Pagination from './container/Pagination';
import AddPosts from './container/AddProduct';
import ProductComponent from './container/ProductComponent';

function App() {
 
  return (
    <div className="App">
         <Header />
      <Switch>
      <Route exact path="/">
        <ProductComponent />
      <Pagination />
      </Route>
      <Route exact path="/addposts">
        <AddPosts />
      </Route>
      <Route exact path="/posts/:id">
        <ProductDetails />
      </Route>
      <Route exact path="/edit/:id">
        <EditPosts />
      </Route>
      <Route exact path="*">
        404 Not Found
      </Route>
      </Switch> 
    </div>
  );
}

export default App;

