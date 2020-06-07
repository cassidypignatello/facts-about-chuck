import React, { Fragment } from 'react'

const Header = ({ title }) => (
  <Fragment>
    <header>
      <h1 className="font-header text-4xl text-red-700 font-semibold leading-tight">
        {title}
      </h1>
    </header>
  </Fragment>
)

export default Header

