import { ReactNode, useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { CgDanger } from "react-icons/cg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
type InputProps = {
    type?: string;
    name?: string;
    placeholder?: string;
    variant?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
};

const Input = ({
    type,
    name,
    placeholder,
    variant,
    register,
    rules,
    error,
}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            {
                type === "password" ?
                    <div className="relative w-full">
                        <input
                            id={name}
                            type={showPassword ? "text" : "password"}
                            {...register(name, rules)}
                            placeholder={placeholder}
                            className={`input_gray ${error ? "input_error" : variant}`}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 px-3 flex items-center"
                        >
                            {showPassword ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </button>
                    </div> :
                    <input
                        id={name}
                        type={type}
                        {...register(name, rules)}
                        placeholder={placeholder}
                        className={error ? "input_error" : variant}
                    />
            }
            {
                error && (
                    <div className="flex items-center gap-1 my-2">
                        <CgDanger size={16} color="#EF4444" />
                        <p className="text-red-500">
                            {error}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default Input;