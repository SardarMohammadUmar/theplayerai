import Layout from "./Layout.jsx";

import Home from "./Home";

import Fonctionnalites from "./Fonctionnalites";

import Tarifs from "./Tarifs";

import Contact from "./Contact";

import Demo from "./Demo";

import Waitlist from "./Waitlist";

import Blog from "./Blog";

import BlogPost from "./BlogPost";

import About from "./About";

import FeatureAI from "./FeatureAI";

import FeatureScreens from "./FeatureScreens";

import FeaturePlaylists from "./FeaturePlaylists";

import FeatureAgenda from "./FeatureAgenda";

import FeatureApps from "./FeatureApps";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Fonctionnalites: Fonctionnalites,
    
    Tarifs: Tarifs,
    
    Contact: Contact,
    
    Demo: Demo,
    
    Waitlist: Waitlist,
    
    Blog: Blog,
    
    BlogPost: BlogPost,
    
    About: About,
    
    FeatureAI: FeatureAI,
    
    FeatureScreens: FeatureScreens,
    
    FeaturePlaylists: FeaturePlaylists,
    
    FeatureAgenda: FeatureAgenda,
    
    FeatureApps: FeatureApps,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Fonctionnalites" element={<Fonctionnalites />} />
                
                <Route path="/Tarifs" element={<Tarifs />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Demo" element={<Demo />} />
                
                <Route path="/Waitlist" element={<Waitlist />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/BlogPost" element={<BlogPost />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/FeatureAI" element={<FeatureAI />} />
                
                <Route path="/FeatureScreens" element={<FeatureScreens />} />
                
                <Route path="/FeaturePlaylists" element={<FeaturePlaylists />} />
                
                <Route path="/FeatureAgenda" element={<FeatureAgenda />} />
                
                <Route path="/FeatureApps" element={<FeatureApps />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}