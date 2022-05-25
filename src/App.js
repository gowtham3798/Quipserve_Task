import './App.css';
import { Switch,Route,useHistory } from 'react-router-dom';
import Header from './container/Header'
import ProductDetails from './container/ProductDetail';
import { EditPosts } from './container/ProductEdit';
import Pagination from './container/Pagination';
import AddPosts from './container/AddProduct';
import ProductComponent from './container/ProductComponent';

function App() {
  const history = useHistory()
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
         <Header />
      <button type="submit" class="btn btn-primary" onClick={() => {history.push('/addposts')}}>Add Post</button>
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

