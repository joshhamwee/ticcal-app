import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router";

import Input from "@/components/input";

const Auth = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login')
    }, [])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            router.push('/');

        } catch (error) {
            console.log(error)
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
        } catch (error) {
            console.log(error)
        }
    }, [email, name, password, login]);



    return (
        <div className="relative bg-greybg">
            <nav className="px-10 py-5 ">
                <img src="/images/logo.png" alt="logo" className="h-14" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-greybg bg-opacity-30 px-16 py-16 self-centre mt-2 lg:bg-opacity-40 lg:bg-lightblue lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-orange text-4xl mb-8 font-semibold">
                        {variant == 'login' ? 'Sign In' : 'Register'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant == 'register' && (
                            <Input
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id="username"
                                value={name}
                            />)}
                        <Input
                            label="Email"
                            onChange={(ev: any) => setEmail(ev.target.value)}
                            id="email"
                            value={email}
                            type="email"
                        />
                        <Input
                            label="Password"
                            onChange={(ev: any) => setPassword(ev.target.value)}
                            id="password"
                            value={password}
                            type="password"
                        />
                    </div>
                    <button onClick={variant == 'login' ? login : register} className="bg-light-orange border-2 py-3 text-white rounded-md w-full mt-10 hover:bg-orange transition">
                        {variant == 'login' ? 'Login' : 'Register'}
                    </button>
                    <p className="text-neutral-500 mt-12">
                        {variant == 'login' ? 'First time using Ticcal?' : 'Already have an account?'}
                        <span className="text-light-orange ml-1 hover:underline cursor-pointer" onClick={toggleVariant} >
                            {variant == 'login' ? 'Create an Account' : 'Login'}
                        </span>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Auth;