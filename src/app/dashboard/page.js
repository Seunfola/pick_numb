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
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">User Information</h2>
                    <p>Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                  
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Number Picker</h2>
                    <NumberPicker />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Statistics</h2>
                    <p>Display statistics or charts here...</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
