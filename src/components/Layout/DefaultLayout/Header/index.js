function Header() {
    return (
<header class="bg-white sticky top-0 z-50">
  <div class="container mx-auto px-4 sm:w-2/3 lg:w-1/2 xl:w-1/3 flex items-center justify-between py-6">
    <a href="#">
      <img src="https://dummyimage.com/40x40" alt="TikTok logo"/>
    </a>
    <div class="flex items-center">
      <input type="text" class="px-3 py-2 rounded-full bg-gray-200" placeholder="Search"/>
      <button class="px-3 py-2 rounded-full bg-red-500 text-white">+</button>
    </div>
  </div>
</header>
    );
}

export default Header;