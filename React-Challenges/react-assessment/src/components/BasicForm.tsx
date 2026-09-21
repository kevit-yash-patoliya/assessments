import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BasicForm(){
    
    const {register,handleSubmit,formState: {errors}} = useForm();

    return (
        <>
            <form onSubmit={handleSubmit((data)=>console.log(data))} className="flex flex-col gap-2">
                <input type="email" placeholder="Email" {...register("email",
                    {
                        required: "Email is required",
                        validate: (value) => {
                            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                            return emailRegex.test(value) || "Invalid email address";
                        }
                    }
                )}/>

                {errors.email && <span>{errors.email.message as string}</span>}
                <input type="password" placeholder="Password" {...register("password",
                    {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    }
                )}/>
                {errors.password && <span>{errors.password.message as string}</span>}
                
                <button type="submit" className="bg-blue-500 text-white ">Submit</button>
            </form>
        
        </>
    )
}