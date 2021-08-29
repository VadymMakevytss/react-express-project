import './App.css';
import { Customers } from './components/customers/Customers';
import Container from '@material-ui/core/Container'

function App() {
  return (
    <Container maxWidth="md" className="container">
      <Customers />
    </Container>
  );
}

export default App;
