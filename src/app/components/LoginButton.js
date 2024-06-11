import { SignInButton } from '@clerk/nextjs';

const LoginButton = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <SignInButton mode="modal">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Log In
                </button>
            </SignInButton>
        </div>
    );
};

export default LoginButton;
