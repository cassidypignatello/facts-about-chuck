import React from 'react'

const Instructions = ({ header, subheader }) => (
  <div className="text-gray-700 leading-normal">
    <p className="mt-6 text-base">
      {header}
    </p>
    <p className="mt-2 text-xs">
      {subheader} 
    </p>
  </div>
)

export default Instructions