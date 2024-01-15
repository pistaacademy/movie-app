import React from 'react';
import { Route, Routes } from "react-router-dom"
import NotFound from '../components/user/NotFound';
import Dashboard from '../components/admin/Dashboard';
import Movies from '../components/admin/Movies';
import Actors from '../components/admin/Actors';

export default function AdminNavigator() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}