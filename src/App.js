import React from 'react'
import './App.css'
import Header from './components/Header'
import Instructions from './components/Instructions'

const App = () => (
  <div className="max-w-7xl mx-auto h-screen pt-20 flex justify-center bg-gray-200">
    <div className="text-center">
      <Header title={'Facts About Chuck'} />
      <Instructions 
        header={'What type of Chuck fact would you like to learn?'} 
        subheader={'(Please choose a category and optionally search below)'} 
      />
    </div>
  </div>
)

export default App
