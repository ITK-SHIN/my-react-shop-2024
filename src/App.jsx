import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
        </AuthContextProvider>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
