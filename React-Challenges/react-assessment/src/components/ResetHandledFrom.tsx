import { useForm } from "react-hook-form";

export default function ResetHandledForm(){
    //Task-: Reset the form after submission using react-hook-form
    const {register,handleSubmit,formState: {errors},reset} = useForm();

    return (
        <>
            <form onSubmit={handleSubmit((data)=> {
                console.log(data);
                reset();
            })} className="flex flex-col gap-2">
                <input type="name" placeholder="Name" {...register("name",
                    {
                        required: "Name is required"
                    }
                )}/>
                {errors.name && <span>{errors.name.message as string}</span>}
                
                <button type="submit" className="bg-blue-500 text-white ">Submit</button>
            </form>
        
        </>
    )
}