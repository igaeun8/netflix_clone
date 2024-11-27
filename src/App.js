import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import PopularPage from "./pages/PopularPage";
import WishlistPage from "./pages/WishlistPage";
import SearchPage from "./pages/SearchPage";
import { AuthProvider } from "./context/AuthContext"; // AuthProvider 추가
import { ToastProvider } from "./components/toast/ToastContainer"; // ToastProvider 추가
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [apiKey, setApiKey] = useState(null);

  return (
    <AuthProvider> {/* AuthProvider로 앱 전체 감싸기 */}
      <ToastProvider> {/* ToastProvider로 앱 전체 감싸기 */}
        <Router>
          <div className="app">
            <Routes>
              {!apiKey ? (
                <Route path="/" element={<AuthPage setApiKey={setApiKey} />} />
              ) : (
                <>
                  <Route path="/" element={<Home apiKey={apiKey} />} />
                  <Route path="/popular" element={<PopularPage apiKey={apiKey} />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/search" element={<SearchPage apiKey={apiKey} />} />
                </>
              )}
            </Routes>
          </div>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
