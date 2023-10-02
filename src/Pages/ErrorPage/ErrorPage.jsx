import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center">
           <h2 className="text-[300px] font-extrabold">404</h2>
            <h3 className="text-4xl font-bold">Not Found</h3>
            <Link to="/" className="text-blue-500 hover:underline ">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;