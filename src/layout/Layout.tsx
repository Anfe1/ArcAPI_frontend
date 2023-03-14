import React, { FC } from 'react'
import Header from '../components/header/Header'
import SearchBar from "../components/Map/SearchBar"

const Layout: FC = () => {
    return (
        <div className="App">
      <header className="mb-10">
        <Header />
      </header>
      <div className="container mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 border-2 border-rose-600 ">
          <div className="border">
            <div>Test</div>
          </div>
          <div className="">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Layout;