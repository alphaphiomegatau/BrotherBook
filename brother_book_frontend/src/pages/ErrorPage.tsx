import { useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
    // Type is unknown
    const error = useRouteError() as any;
    return <>
        <h1 className="font-thin text-9xl">Whoops an Error Occurred</h1>
        <hr className="h-px my-4 bg-gray-200 border-0" />
        <p>{error.statusText || error.message}</p>
    </>
}
