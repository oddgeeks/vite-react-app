import './App.css'
import { lazy, Suspense } from 'react';
const NavigateButton = lazy(() => import('vite_remix_cloudflare_app/NavigateButton') as any);
import { RemixBrowser } from '@remix-run/react';
function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <NavigateButton to={'/test'} label={"test"} />
      </Suspense>
    </div>
  )
}

export default App
