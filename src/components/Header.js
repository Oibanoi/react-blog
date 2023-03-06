import { getPages } from '../graphql/queries';
import { useState, useEffect } from 'react';
import Search from './SearchBar';
import i18n from '../translation/i18n';

import { Trans, useTranslation } from 'react-i18next';
import { Translation } from 'react-i18next';

function Header() {
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    const [pages, setPages] = useState([]);
    const { t } = useTranslation()
    useEffect(() => {
        getPages().then((newPages) => setPages(newPages));
    }, []);
    return (
        <header className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">{t('content.blog')}</h1>

                <div className="w-1/3 text-center">
                    <Search />
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
                <div className="flex items-center space-x-4">
                    <select onChange={changeLanguage} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <option value="vi" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Tiếng Việt
                        </option>
                        <option value="en" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            English
                        </option>
                    </select>
                </div>
            </div>
        </header>
    );
}

export default Header;
