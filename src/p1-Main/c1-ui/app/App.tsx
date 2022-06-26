import React from 'react';
import {NavBar} from 'p1-Main/c1-ui';
import {Routes, Route} from 'react-router-dom';
import {LINK} from 'p1-Main/c2-bll';
import s from './App.module.css'
import {
    AuthPages,
    LoginPages,
    NewPassPages, NotFoundPages,
    ProfilePages,
    RecoveryPages,
    TestPages
} from 'p2-pages';

function App() {
    return (
        <div className={s.App}>
            <NavBar/>
            <div>
                <Routes>
                    <Route path={LINK.TEST} element={<TestPages/>}/>
                    <Route path={LINK.LOGIN} element={<LoginPages/>}/>
                    <Route path={LINK.AUTH} element={<AuthPages/>}/>
                    <Route path={LINK.PROFILE} element={<ProfilePages/>}/>
                    <Route path={LINK.RECOVER} element={<RecoveryPages/>}/>
                    <Route path={LINK.PASSWORD} element={<NewPassPages/>}/>
                    <Route path={LINK.FOUND404} element={<NotFoundPages/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
