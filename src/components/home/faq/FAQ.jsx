import Lottie from 'lottie-react';

import FAQAni from './FAQ.json'

const FAQ = () => {
    return (
        <div className='w-full lg:w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center'>
            <div className="w-full lg:w-3/5 flex flex-col justify-center text-center lg:text-left">
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-3xl text-[#5F9FFF] uppercase py-4 font-serif font-semibold">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">Get Answers to Common Queries About Our Employee Management System</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="text-lg font-semibold px-4 py-6 focus:outline-none ">How do I register for an account on the Employee Management System?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">To register for an account, simply navigate to the registration page and fill out the required information, including your email, password, and role within the organization. Once registered, you'll receive a confirmation email to verify your account before gaining access to the system. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none ">How does the system handle salary payments and payroll processing?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The Employee Management System automates salary payments and payroll processing for employees based on predefined salary structures and attendance records. HR administrators can configure payroll settings, generate pay slips, and initiate salary transfers directly from the system, ensuring accurate and timely compensation for staff members.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none "> How secure is the employee data stored within the system?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We take data security seriously and employ industry-standard security measures to protect employee data. Our system utilizes encryption protocols to safeguard sensitive information during transmission and storage. Additionally, access to employee data is restricted through role-based access control, ensuring that only authorized personnel can view or modify confidential information. </p>
			</details>
		</div>
	</div>
</section>
            </div>
            <div className="w-full lg:w-2/5 flex flex-col justify-center ">
            <Lottie animationData={FAQAni} loop={true} />
            </div>
        </div>
    );
};

export default FAQ;