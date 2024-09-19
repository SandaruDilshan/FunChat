
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckBox from './GenderCheckBox.jsx'
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    //Created useSignup hook
    const { loading, signUp } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full p-6 w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-white'>Sign Up
                <span className='text-blue-600'> To FunChat</span>
                </h1>

                <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="Fullname" className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                    </label>

                    <input type="text" placeholder='Enter Full name' className='w-full input input-bordered h-10'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />

                </div>
                
                <div>
                    <label htmlFor="Username" className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                    </label>

                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
                        value={inputs.userName}
                        onChange={(e) => setInputs({...inputs, userName: e.target.value})}    
                    />

                </div>

                <div>
                    <label htmlFor="Password" className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                    </label>

                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}    
                    />

                </div>
                    
                <div>
                    <label htmlFor="Confirm Password" className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                    </label>

                    <input type="password" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>
                {/* Send props inside to GenderCheckBox component */}
                <GenderCheckBox onCheckboxChange={ handleCheckboxChange} selectedGender={inputs.gender} /> 
                   
                <Link to="/signin" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Alredy have an account?
                </Link>


                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={loading}> 
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}        
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;



//STARTER CODE
// import React from "react";

// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='h-full p-6 w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
//                 <h1 className='text-3xl font-semibold text-center text-white'>Sign Up
//                 <span className='text-blue-600'> To FunChat</span>
//                 </h1>
//                 <form action="">
//                 <div>
//                     <label htmlFor="Full name" className='label p-2'>
//                     <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder='Enter Full name' className='w-full input input-bordered h-10' />
//                 </div>
                
//                 <div>
//                     <label htmlFor="Username" className='label p-2'>
//                     <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//                 </div>

//                 <div>
//                     <label htmlFor="Password" className='label p-2'>
//                     <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//                 </div>
                    
//                 <div>
//                     <label htmlFor="Confirm Password" className='label p-2'>
//                     <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input type="text" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
//                 </div>

//                 <div className="flex">
//                     <div className="form-control">
//                         <label htmlFor="male" className={'label gap-2 cursor-pointer'}>
//                             <span className="label-text border-slate-900">Male</span>
//                             <input type="checkbox" className="checkbox "/>
//                         </label>
//                     </div>

//                     <div className="form-control">
//                         <label htmlFor="female" className={'label gap-2 cursor-pointer'}>
//                             <span className="label-text border-slate-900">Female</span>
//                             <input type="checkbox" className="checkbox "/>
//                         </label>
//                     </div>
//                 </div>
                    
//                 <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Alredy have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//                 </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignUp;


