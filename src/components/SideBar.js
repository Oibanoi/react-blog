import { getTags } from '../graphql/queries';
import { useState, useEffect } from 'react';

function Sidebar() {
    const [Tags, setTags] = useState([]);

    useEffect(() => {
        getTags().then((newTags) => setTags(newTags));
    }, []);

    return (
        <aside className="bg-gray-800 w-64 p-4 h-full">
            <nav className="text-white">
                <h3 className="font-bold mb-4">Navigation</h3>
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
