import './App.css'
import { Navbar } from './components';
import { Home } from './pages';
import { LayoutContainer } from './styled-components/layout.styled.component';
import store from './redux/store';
import Provider from 'react-redux/es/components/Provider';

function App() {

  return (
  <Provider store = {store}>
   
   <Navbar />
   <LayoutContainer>
      <Home />
   </LayoutContainer>
   
   </Provider>
  );
}

export default App
