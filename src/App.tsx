import './App.css'
import { BrotherCardList } from './components/BrotherCardList'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { getBrothers } from './lib/models'

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <BrotherCardList brothers={getBrothers()} />
    </div>
  )
}

export default App
