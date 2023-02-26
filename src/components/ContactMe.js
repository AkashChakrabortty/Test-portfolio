import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <h1 className='text-center text-white text-[35px] font-semibold'>Contact</h1>
            <section className="max-w-4xl p-6 mx-auto bg-transparent rounded-md dark:bg-gray-800">

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>

                            <input id="username" type="text" placeholder='Name' className="block bg-transparent w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>

                            <input id="emailAddress" type="email" placeholder='Email' className="block bg-transparent w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div className='mt-5'>

                        <textarea placeholder="Tell me more about your needs....." className="block bg-transparent  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200  px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>

                    </div>

                    <div className="flex justify-center mt-6">
                    <button
                    className='bg-yellow-300 text-red-500 py-3 border-2 border-yellow-300 px-10 rounded-tl-[20px] rounded-br-[20px] mt-4 hover:bg-transparent hover:border-2 transition-[.5s] hover:border-yellow-300'
                    >Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ContactMe;