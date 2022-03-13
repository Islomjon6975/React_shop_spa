import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from "./pages/NotFount";
import {Route, Switch} from 'react-router-dom'
import Movie from "./components/Movie";

function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path="/movies/:id" component={Movie} />
          <Route path={'*'} component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
