'use client'
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import NumberPicker from '../components/NumberPicker';


const Dashboard = () => {
    const { push } = useRouter();
    const { user } = useUser();

   
    if (!user || !user.email) {
        push('/');
        return null; 
    }

    return (
        <div className="container mx-auto p-8 bg-gray-900 text-white">
            <div className="bg-yellow-400 p-6 rounded-lg shadow-md mb-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <p className="text-lg font-semibold">Remember to screenshot the number!</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md md:w-1/2">
                    <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
                    <p className="mb-2">
                        <span className="font-semibold">Name:</span> {user.fullName}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Email:</span> {user.email}
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md md:w-1/2">
                    <h2 className="text-lg font-semibold mb-4">Number Picker</h2>
                    <NumberPicker />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
