import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CollectionList from './pages/CollectionList'
import CollectionDetail from './pages/CollectionDetail'
import Profile from './pages/Profile'
import JournalList from './pages/JournalList'
import JournalDetail from './pages/JournalDetail'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<CollectionList />} />
          <Route path="/collection/:slug" element={<CollectionDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journal" element={<JournalList />} />
          <Route path="/journal/:slug" element={<JournalDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
