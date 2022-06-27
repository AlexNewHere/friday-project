import React from 'react';
import {NavBar} from 'p1-Main/c1-ui';
import {Routes, Route} from 'react-router-dom';
import {LINK} from 'p1-Main/c2-bll';
import s from './App.module.css'
import {
    AuthPage,
    LoginPage,
    NewPasswordPage, NotFoundPage,
    ProfilePage,
    RecoveryPage,
    TestPage
} from 'p2-pages';

function App() {
    return (
        <div className={s.App}>
            <NavBar/>
            <div>
                <Routes>
                    <Route path={LINK.TEST} element={<TestPage/>}/>
                    <Route path={LINK.LOGIN} element={<LoginPage/>}/>
                    <Route path={LINK.AUTH} element={<AuthPage/>}/>
                    <Route path={LINK.PROFILE} element={<ProfilePage/>}/>
                    <Route path={LINK.RECOVER} element={<RecoveryPage/>}/>
                    <Route path={LINK.PASSWORD} element={<NewPasswordPage/>}/>
                    <Route path={LINK.FOUND404} element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
