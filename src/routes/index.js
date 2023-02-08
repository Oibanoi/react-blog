

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Detail from '../pages/Detail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PostsByTag from '../pages/PostsByTag';
import PostsBySearch from '../pages/PostsBySearch';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/following', component: Following },
    { path: '/detail/:slug', component: Detail },
    { path: '/tag/:slug', component: PostsByTag },
    { path: '/search/:slug', component: PostsBySearch },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };