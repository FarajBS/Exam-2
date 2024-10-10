import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <div id="error-page" className="w-screen h-screen bg-red-300 flex flex-col justify-center items-center">
            <h1 className="text-red-600 text-6xl text-center mb-5 font-bold">Sorry</h1>

            <p className="text-red-600 text-5xl text-center mb-5 font-medium">An Unexpected Error Has Occurred.</p>
            
            <p className="text-red-600 text-5xl text-center font-medium">
                <i>{error.statusText || error.message} This Page</i>
            </p>
        </div>
    </>
  );
}