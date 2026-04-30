import './App.css'
import AdventureStyle from './components/AdventureStyle'
import ChooseDestination from './components/ChooseDestination'
import ExploreWorld from './components/ExploreWorld'
import Home from './components/home'
import TravellerSay from './components/say'
import TrendingDestination from './components/TrendingDestination'
import WhatsAppButton from './components/WhatsAppButton'
import globalImage from './assets/global.png'
import image01 from './assets/56a87116-9e51-414f-9e59-a9056595db4b.jpg'
import image02 from './assets/78023f59-c877-436a-a455-4b3c314f0d30.jpg'
import image03 from './assets/835a4b7a-2751-405d-8a84-c0ca1a6cdb75.jpg'
import image04 from './assets/8d79f0d9-62cf-4237-a351-07d7329955d7.jpg'
import image05 from './assets/b4052342-1379-48ae-87d9-83d6b67b7317.jpg'
import image06 from './assets/d8a40a5f-73da-41dd-9fbc-c7a5a7289c14.jpg'
import image07 from './assets/f193d9e9-82e7-436c-8add-61fe05249f0a.jpg'
import image08 from './assets/0a9fa572-3c0b-47f8-ad7b-a20b30a5a88f.jpg'

const destinationImages = [image01, image02, image03, image04, image05, image06, image07, image08]

function App() {
  return (
    <main className="site-shell">
      <Home images={destinationImages} />
      <ExploreWorld image={globalImage} />
      <TravellerSay />
      <TrendingDestination images={destinationImages} />
      <ChooseDestination images={destinationImages} />
      <AdventureStyle images={destinationImages} />
      <WhatsAppButton />
    </main>
  )
}

export default App
