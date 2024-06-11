'use client'
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import NumberPicker from '../components/NumberPicker';


const Dashboard = () => {
    const { push } = useRouter();
    const { user } = useUser();

   
    if (!user) {
        push('/');
        return null; 
    }

    return (
        <div className="container mx-auto p-8 bg-gray-900 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">User Information</h2>
                    <p className="mb-2">
                        <span className="font-semibold">Name:</span> {user.fullName}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Email:</span> {user.email}
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Number Picker</h2>
                    <NumberPicker />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
