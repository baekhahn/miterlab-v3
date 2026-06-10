import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CollectionDetail from './pages/CollectionDetail'

// Legacy /collection/:slug -> canonical /project/:slug
function LegacyProjectRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/project/${slug}`} replace />
}
import Archive from './pages/Archive'
import About from './pages/About'
import About2 from './pages/About2'
import JournalList from './pages/JournalList'
import JournalDetail from './pages/JournalDetail'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Archive />} />
          <Route path="/project/:slug" element={<CollectionDetail />} />
          <Route path="/archive" element={<Navigate to="/project" replace />} />
          <Route path="/collection" element={<Navigate to="/project" replace />} />
          <Route path="/collection/:slug" element={<LegacyProjectRedirect />} />
          <Route path="/about" element={<About />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/profile" element={<Navigate to="/about" replace />} />
          <Route path="/journal" element={<JournalList />} />
          <Route path="/journal/:slug" element={<JournalDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
