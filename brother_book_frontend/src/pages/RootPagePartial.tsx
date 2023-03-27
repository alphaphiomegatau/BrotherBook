import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const RootPagePartial: React.FC = () => {

    return <>
        <Header/>
        <Outlet/>
    </>
};
