import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white" style={{backgroundImage:'url(https://images.freecreatives.com/wp-content/uploads/2016/05/Gradient-Background-For-Free.jpg)'}}>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="object-cover w-full h-full mix-blend-multiply"
                            src="https://static.javatpoint.com/blog/images/mern-stack.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Network-Intrusion-Detection-Using-Deep-Learning
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Cyber Security: Development of Network Intrusion Detection System (NIDS), with Machine Learning and Deep Learning, Recurrent Neural Network models, MERN web I/O System.
                        </p>
                        <p className="mt-4 text-gray-600">
                        The user enters the hacking parameters in the front end which is designed by using ReactJS. The model predicts the type of attack and gives information about the type of attack to the user. MongoDB is used for storing the data and NodeJS is served as back end framework.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}