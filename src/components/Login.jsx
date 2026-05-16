import React,{useState} from 'react'
import Header from './Header'

function Login() {
    const[signIn,setSignIn]=useState(true);
    const handleSignInUp=()=>{
        setSignIn(!signIn);
    }

    return (
        <div>
            <Header />
            <div className='relative  '>
                <img className='h-screen object-cover w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_small.jpg" alt="background-Image" />
                <form action="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-3/12 mx-4 flex-col gap-4 bg-black/80 p-6 rounded-lg shadow-2xl  bg-opacity-50'>
                <h2 className='text-white text-2xl font-bold mb-4 text-center'>{signIn?'Sign In':'Sign Up'}</h2>

                    {
                        signIn?" ":<input className='w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500' type="text" placeholder='Enter your Name' />
                    }
                    <input className='w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500' type="text" placeholder='Enter your Email' />
                    <input className='w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500' type="password" placeholder='Enter your Password' />
                    <button className='w-full rounded-md bg-red-600 px-4 py-3 text-white transition hover:bg-red-700'>{signIn?'Sign In':'Sign Up'}</button>
                    <p
                    onClick={handleSignInUp}
                     className='text-white my-4 px-2'>Are you new? Sign up </p>
                </form>
            </div>
            

        </div>
    )
}

export default Login