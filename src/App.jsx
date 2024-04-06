import './App.css'; // Archivo de estilos CSS
import {ThemeProvider} from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';

const App = () => {
  return (
    <ThemeProvider>
      <RoutesApp/>
    </ThemeProvider>
  );
};

export default App;
