'use client';

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "@/app/services/firebaseConnection";
import { AuthContext } from "@/app/contexts/authContext";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import default styles

const schema = z.object({
    username: z.string().nonempty("Please fill in all required details"),
    email: z.string().email("Please enter a valid email address.").nonempty("Please fill in all required details"),
    password: z.string().min(8, "Password must be at least 8 characters").nonempty("Please fill in all required details"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters").nonempty("Please fill in all required details"),
    phoneNumber: z.string().nonempty("Please enter your phone number"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

const SignUp = () => {
    const { handleInfoUser } = useContext(AuthContext);

    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
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

    async function onSubmit(data: FormData) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (user) => {
                await updateProfile(user.user, {
                    displayName: data.username,
                });

                handleInfoUser({
                    name: data.username,
                    email: data.email,
                    uid: user.user.uid,
                });
                router.push('/pages/SignIn');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleLogin() {
        router.push('/pages/SignIn');
    }


    return (
        <div className="flexCenter min-h-screen w-full">
            <div className="max-w-[461px] w-full flexCenter flex-col gap-6">
                <Image
                    src="https://app.bomahut.com/static/BOMAHUT-purple.svg"
                    alt="Bomahut"
                    width={304}
                    height={48}
                    className="w-[19rem] h-auto"
                />
                <p className="font-bold text-2xl text-center">
                    Create Account
                </p>
                <form
                    className="w-full text-sm space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        type="text"
                        placeholder="Enter your Username"
                        name="username"
                        variant="input_gray"
                        error={errors.username?.message}
                        register={register}
                    />
                    <Input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        variant="input_gray"
                        error={errors.email?.message}
                        register={register}
                    />
                    <div className="w-full">
                        <PhoneInput
                            country={'us'}
                            value={register('phoneNumber').value || ''}
                            onChange={phone => setValue('phoneNumber', phone)}
                            inputClass="w-full"
                            containerClass="w-full"
                            dropdownClass="w-full"
                        />
                    </div>
                    <h3 className="font-normal text-[12px] text-[#8493A5] -mt-2">
                        The phone number should be in international format: country code then phone number.
                    </h3>
                    <Input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        variant="input_gray"
                        error={errors.password?.message}
                        register={register}
                    />
                    <h3 className="font-normal text-[12px] text-[#8493A5] -mt-2">
                        The password should be unique and be at least 8 characters.
                    </h3>
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        variant="input_gray"
                        error={errors.confirmPassword?.message}
                        register={register}
                    />
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="form-checkbox h-4 w-4 text-black-50"
                            required
                        />
                        <label
                            htmlFor="terms"
                            className="font-normal text-[12px] text-[#8493A5]"
                        >
                            I agree to the <a href="/terms" className="text-black-50">Terms and Conditions</a> and <a href="/privacy" className="text-black-50">Privacy Policy</a> of BOMAHUT
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#000082] w-full rounded-md text-white h-10 text-center border-[#868e96]"
                    >
                        Create Account
                    </button>
                    <div className="flex justify-between text-sm text-black-50">
                        <a href="/forgot-password" className="hover:underline">
                            Forgot Password?
                        </a>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="hover:underline"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
