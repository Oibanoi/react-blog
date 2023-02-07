function Contact() {
    return (
        <section class="bg-gray-900 py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-white mb-6">Contact Us</h2>
    <form class="mb-12">
      <div class="mb-6">
        <label class="block text-white mb-2" for="name">Name</label>
        <input class="bg-gray-800 px-4 py-2 text-white w-full border border-gray-800 rounded" type="text" id="name" name="name"/>
      </div>
      <div class="mb-6">
        <label class="block text-white mb-2" for="email">Email</label>
        <input class="bg-gray-800 px-4 py-2 text-white w-full border border-gray-800 rounded" type="email" id="email" name="email"/>
      </div>
      <div class="mb-6">
        <label class="block text-white mb-2" for="message">Message</label>
        <textarea class="bg-gray-800 px-4 py-2 text-white w-full border border-gray-800 rounded" id="message" name="message"></textarea>
      </div>
      <button class="bg-gray-800 px-4 py-2 text-white rounded hover:bg-gray-700">Submit</button>
    </form>
  </div>
</section>
    );
}

export default Contact;