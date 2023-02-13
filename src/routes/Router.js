import React from 'react';
import {Routes, Route} from 'react-router'

function Router(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default Router;