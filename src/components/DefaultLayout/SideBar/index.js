function Sidebar() {
    return (<aside class="bg-gray-800 w-64 p-4 h-full">
    <nav class="text-white">
      <h3 class="font-bold mb-4">Navigation</h3>
      <ul class="list-reset">
        <li class="mb-2">
          <a class="text-white hover:text-gray-400" href="#">Home</a>
        </li>
        <li class="mb-2">
          <a class="text-white hover:text-gray-400" href="#">About</a>
        </li>
        <li class="mb-2">
          <a class="text-white hover:text-gray-400" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </aside>);
}

export default Sidebar;