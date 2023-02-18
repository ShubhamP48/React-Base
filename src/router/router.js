import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from '../components/demo-compenent/demo';
//import using lazy
const Users = lazy(() => import('../components/demo-compenent/MainCrud'));


function AppRouter() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/base-crud" element={<Users />} />
                    {/* <Route exact path="/items/:id" component={ItemDetail} /> */}
                    {/* <Route component={NotFound} /> */}
                </Routes>
            </Suspense>

        </Router>
    );
}

export default AppRouter;
