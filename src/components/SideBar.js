function Sidebar() {
    return (<aside className="bg-gray-800 w-64 p-4 h-full">
    <nav className="text-white">
      <h3 className="font-bold mb-4">Navigation</h3>
      <ul className="list-reset">
        <li className="mb-2">
          <a className="text-white hover:text-gray-400" href="/home">Home</a>
        </li>
        <li className="mb-2">
          <a className="text-white hover:text-gray-400" href="/about">About</a>
        </li>
        <li className="mb-2">
          <a className="text-white hover:text-gray-400" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </aside>);
}

export default Sidebar;