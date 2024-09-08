import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";

import PostList from "./components/PostList";
import { useState } from "react";
import { UserProvider } from "./store/postListStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <div className="app-container">
        <BrowserRouter>
          <Sidebar />
        
        
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/createpost" element={<CreatePost />} />
          </Routes>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
