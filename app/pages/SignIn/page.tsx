'use client';

import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/app/services/firebaseConnection";
import { AuthContext } from "@/app/contexts/authContext";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";

const schema = z.object({
    email: z.string().email("Please enter a valid email address.").nonempty("Please fill in all required details"),
    password: z.string().nonempty("Please fill in all required details"),
})

type FormData = z.infer<typeof schema>;

const Login = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    useEffect(() => {
        async function handleLogout() {
            await signOut(auth);
        }

        handleLogout();
    }, []);

    function onSubmit(data: FormData) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                window.location.assign('http://localhost:3000');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleSignUp() {
        router.push('../pages/SignUp')
    }
    return (
        <div className="flexCenter min-h-screen w-full ">
            <div className="max-w-[311px] w-full flexCenter flex-col gap-6">

                <Image
                    src="https://app.bomahut.com/static/BOMAHUT-purple.svg"
                    alt="Bomahut"
                    width={0}
                    height={0}
                    className="w-[19rem] h-auto"
                />
                <div className="flexCenter gap-1 text-md text-white ">
                    <button className="bg-[#4E45FC] border  border-[#666e76] px-5 py-2  rounded-md">
                        Landlord / Manager
                    </button>
                    <button className="bg-[#868E96]  border-[#666e76] px-4 py-2 rounded-md ">
                        Tenant
                    </button>
                </div>
                <form
                    className="w-full space-y-4 text-sm"
                    onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        variant="input_gray"
                        error={errors.email?.message}
                        register={register}
                    />
                    <Input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        variant="input_gray"
                        error={errors.password?.message}
                        register={register}
                    />
                    <button
                        type="submit"
                        className="bg-[#000082] w-full rounded-md text-white h-10 text-center"
                    >
                        Sign In
                    </button>
                    <div className="flex justify-between text-sm text-black-50">
                        <a href="/forgot-password">
                            Forgot Password?
                        </a>
                        <button onClick={handleSignUp}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login