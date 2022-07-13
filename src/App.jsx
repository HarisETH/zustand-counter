import './App.css'
import create from 'zustand'
import shallow from 'zustand/shallow'

const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}))



const Controls = () => {
  const { count, increaseCount, resetCount } = useStore(
    (state) => ({ count: state.count, increaseCount: state.increaseCount, resetCount: state.resetCount }),
    shallow
  )
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-bold text-6xl font-mono text-center'>{count}</p>
      <div className="flex gap-4 mt-8 ">
        <button className='btn px-4 py-2 font-medium drop-shadow-lg shadow-blue-400 shadow-md bg-blue-600 rounded-md text-white' onClick={increaseCount}>One Up</button>
        <button className='btn px-4 py-2 font-medium drop-shadow-lg shadow-red-300 shadow-md bg-red-500 rounded-md text-white' onClick={resetCount}>Reset</button>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className="App flex justify-center items-center">
      <div className="bg-white px-12 py-8 rounded-md antialiased">
        <Controls />
      </div>
    </div>
  )
}

export default App
