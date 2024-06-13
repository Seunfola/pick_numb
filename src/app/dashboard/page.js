'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import NumberPicker from './_components/NumberPicker';

const Dashboard = () => {
    const router = useRouter();
    const { isLoaded, isSignedIn, user } = useUser();

    // Perform redirect if not signed in
    if (isLoaded && !isSignedIn) {
        router.push('/sign-in');
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold">Redirecting to sign-in...</p>
            </div>
        );
    }

    // Show loading state until user data is loaded
    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold">Loading...</p>
            </div>
        );
    }

    // Render dashboard content if signed in
    if (isSignedIn) {
        return (
            <div className="container w-full bg-gray-900 text-white">
                <div className="bg-yellow-500 p-2 w-full shadow-md mb-8 flex items-center justify-center">
                    <p className="text-lg font-semibold">Remember to screenshot your picked number!</p>
                </div>
                <div className="flex flex-col p-4 md:flex-row gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md md:w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
                        <p className="mb-2">
                            <span className="font-semibold">Name:</span> {user.fullName}
                        </p>
                       
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md md:w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Number Picker</h2>
                        <NumberPicker />
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default Dashboard;
