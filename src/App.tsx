import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import AuthProvider from './contexts/AuthContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:slug" element={<PostPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/post/:slug/edit" element={<EditPost />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
