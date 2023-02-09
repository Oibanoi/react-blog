function Error() {
    return (
      <div class="flex items-center h-screen justify-center text-gray-800">
      <div class="w-1/2">
        <img src="404.png" alt="404 error" class="mx-auto" />
        <p class="text-xl font-medium mt-4">Page not found</p>
        <a 
          href="/" 
          class="mt-4 text-blue-500 hover:text-blue-800 font-medium"
        >
          Back to Home
        </a>
      </div>
    </div>
        );
}

export default Error;