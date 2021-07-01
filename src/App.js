import AppRouter from './routers/AppRouter'
import useAudio from './hooks/useAudio'
import { useEffect } from 'react'

function App() {
  const { play, hasInteracted } = useAudio('/media/song2.mp3')

  useEffect(() => {
    play()
  }, [hasInteracted])

  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
