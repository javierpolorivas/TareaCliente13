import CardContainer from './components/CardContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Prueba del Componente CardContainer</h1>
      <CardContainer>
        <div style={{ background: '#efefef', padding: '20px' }}>Card 1</div>
        <div style={{ background: '#dcdcdc', padding: '20px' }}>Card 2</div>
        <div style={{ background: '#bcbcbc', padding: '20px' }}>Card 3</div>
      </CardContainer>
    </div>
  );
};

export default App;
