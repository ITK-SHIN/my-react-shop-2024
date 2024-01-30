import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer';
import CarouselBox from './components/Carousel';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
