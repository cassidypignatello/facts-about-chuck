import React from 'react'
import './App.css'
import Header from './components/Header'

const App = () => (
  <div className="max-w-7xl mx-auto h-screen pt-20 flex justify-center bg-gray-200">
    <div className="text-center">
      <Header title={'Facts About Chuck'} />
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>
    </div>
  </div>
)

export default App
