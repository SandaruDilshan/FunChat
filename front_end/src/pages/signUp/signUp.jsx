import React from "react";

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full p-6 w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-white'>Sign Up
                <span className='text-blue-600'> To FunChat</span>
                </h1>
                <form action="">
                <div>
                    <label htmlFor="Full name" className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter Full name' className='w-full input input-bordered h-10' />
                </div>
                
                <div>
                    <label htmlFor="Username" className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label htmlFor="Password" className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                </div>
                    
                <div>
                    <label htmlFor="Confirm Password" className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="text" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
                </div>

                <div className="flex">
                    <div className="form-control">
                        <label htmlFor="male" className={'label gap-2 cursor-pointer'}>
                            <span className="label-text border-slate-900">Male</span>
                            <input type="checkbox" className="checkbox "/>
                        </label>
                    </div>

                    <div className="form-control">
                        <label htmlFor="female" className={'label gap-2 cursor-pointer'}>
                            <span className="label-text border-slate-900">Female</span>
                            <input type="checkbox" className="checkbox "/>
                        </label>
                    </div>
                </div>
                    
                <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Alredy have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
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


