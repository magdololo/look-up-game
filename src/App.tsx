import {Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./features/LandingPage";
import Game from "./features/game/Game";

function App(){
    return(
        <>
            <Suspense fallback="...is loading">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/game" element={<Game/>}/>
                </Routes>
            </Suspense>
        </>
    )
}
export default App;