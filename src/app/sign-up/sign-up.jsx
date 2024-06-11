import { SignUp } from '@clerk/nextjs';

const SignupPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full p-4">
                <SignUp />
            </div>
        </div>
    );
};

export default SignupPage;
