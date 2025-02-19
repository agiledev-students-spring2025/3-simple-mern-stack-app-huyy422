import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Messages from './Messages';
import MessageStandalone from './MessageStandalone';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />

            {/* Messages list route */}
            <Route path="/messages" element={<Messages />} />

            {/* Single message route */}
            <Route path="/messages/:messageId" element={<MessageStandalone />} />

            {/* About route */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
