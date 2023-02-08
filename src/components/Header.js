import { getPages } from '../graphql/queries';
import { useState, useEffect } from 'react';
import Search from './SearchBar';
function Header() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        getPages().then((newPages) => setPages(newPages));
    }, []);
    return (
        <header className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">My Blog</h1>

                <div className="w-1/3 text-center">
                    <Search/>
                </div>

                <div className="w-1/3 text-right">
                    <nav>
                        {pages.map((page) => (
                            <a
                                key={page.slug}
                                className="px-4 py-2 text-base font-medium hover:bg-gray-800 rounded"
                                href={`/${page.slug}`}
                            >
                                {page.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
