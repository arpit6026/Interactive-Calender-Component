import Calendar from './components/Calendar'

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col xl:flex-row gap-8 justify-center items-start">
        <Calendar />
      </div>
    </div>
  )
}

export default App
