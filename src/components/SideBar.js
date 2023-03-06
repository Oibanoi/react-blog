import { getTags } from '../graphql/queries';
import { useState, useEffect } from 'react';

import { Trans, useTranslation } from 'react-i18next';
function Sidebar() {
    const [Tags, setTags] = useState([]);
    const { t } = useTranslation()
    useEffect(() => {
        getTags().then((newTags) => setTags(newTags));
        console.log(Tags);
    },[]);

    return (
        <aside className="bg-gray-800 w-64 p-4 h-full">
            <nav className="text-white">
                <h3 className="font-bold mb-4">{t('content.nav')}</h3>
                <ul className="list-reset">
                    {Tags.map((tag) => (
                        <li className="mb-2" key={tag.slug}>
                            <a className="text-white hover:text-gray-400" href={`/tag/${tag.slug}`}>
                                {tag.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
