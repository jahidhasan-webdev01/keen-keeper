const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">404</h1>
            <p className="font-medium text-gray-500">(Invalide ID): Friend data is not found in the database!</p>
        </div>
    );
};

export default NotFound;