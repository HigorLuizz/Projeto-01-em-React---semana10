import './App.css';
import Home from './pages/Home';
import { TipProvider } from './contexts/TipsContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <TipProvider>
        <Home/>
      </TipProvider>
    </ThemeProvider>
  );
}

export default App;
