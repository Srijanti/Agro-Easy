import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitFeedback } from '../../api/equipments';
import './Feedback.css';

const initial_values = {
    name: '',
    phone_number: '',
    description: ''
};

const Feedback = () => {
    const [feedback, setFeedback] = useState(initial_values);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await submitFeedback(feedback);
        console.log(data);

        if (data.success && data.success === true) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                navigate('/dashboard');
            }, 4000);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-6">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Feedback form
                        </h2>
                    </div>

                    <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">
                        {success && <h1 className="text-md flex justify-center mt-6 text-darkgreen font-semibold">Thanks for your feedback</h1>}
                    </div>

                    <div className="mt-6">
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfGaE3OhpN7ptwY7M-axcqv_dyZyKrBukzNmeW6JchcNsACog/viewform?embedded=true" 
                            width="640" 
                            height="954" 
                            frameBorder="0" 
                            marginHeight="0" 
                            marginWidth="0">
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
