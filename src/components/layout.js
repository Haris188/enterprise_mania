import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <div style={{display:'flex', 'justifyContent': 'space-between', alignItems: 'center'}}>
        <Link className="header-link-home" to="/" style={{fontStyle: 'italic'}}>
          {title}
        </Link>

        <Link to="/contact">Contact</Link>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},
        {` `}
        <a href="https://enterprisemania.com/">enterprisemania.com</a>
      </footer>
    </div>
  )
}

export default Layout
