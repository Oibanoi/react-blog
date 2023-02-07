

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Contact from '../pages/Contact';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };