

function Pagination() {

    return (
      <div className="flex float-right items-center justify-between py-4 w-1/4 mr-9">
      <button 
        className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
      >
        Prev
      </button>
    
      <div className="flex items-center justify-center text-gray-500">
        <span>Page 1 of 10</span>
      </div>
    
      <button 
        className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
      >
        Next
      </button>
    </div>
    );
}

export default Pagination;
