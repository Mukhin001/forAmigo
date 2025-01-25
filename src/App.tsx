import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/NavBar';
import { PostsList } from './features/posts/PostList';
import { AddPostForm } from './features/posts/AddPostForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App