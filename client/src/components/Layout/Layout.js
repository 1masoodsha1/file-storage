import React from 'react';
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import Sidebar from "../UI/Navigation/Sidebar/Sidebar";

const Layout = (props) => {
  return (
    <>
      <header>
        <Toolbar />
        <Sidebar />
      </header>
      <main>
        {props.children}
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Layout;