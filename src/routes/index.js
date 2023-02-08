

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Detail from '../pages/Detail';
import About from '../pages/About';
import Contact from '../pages/Contact';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/following', component: Following },
    { path: '/detail/:slug', component: Detail },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };