import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CollectionDetail from './pages/CollectionDetail'
import Archive from './pages/Archive'
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
          <Route path="/collection" element={<Navigate to="/archive" replace />} />
          <Route path="/collection/:slug" element={<CollectionDetail />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journal" element={<JournalList />} />
          <Route path="/journal/:slug" element={<JournalDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
