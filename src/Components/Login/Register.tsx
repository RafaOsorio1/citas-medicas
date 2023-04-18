import React, { useState } from "react";
import { SubmitHandler, useForm} from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
type inputs = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  const onSubmit: SubmitHandler<Record<string, string>> = async (data) => {
    const email = data.email;
    const password = data.password;
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error: any) {
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 Caractéres");
      }
      else if (error.code === "auth/invalid-email"){
        setError("Correo electronico invalido");
      }
      console.log(error.code);
    }
  };

  return (
    <div className="h-screen min-h-screen max-h-screen bg-gray-200 flex justify-center items-center p-4">
      <div className="bg-white w-full p-4 rounded shadow-2xl text-gray-700 sm:w-96">
        <h3 className="text-center pb-2 text-3xl">Registrate</h3>
        <div className="pb-5">
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="py-6">
            <label htmlFor="">Nombre</label>
            <input
              className="my-2 block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
              type="text"
              {...register("name", {required: true})}
              placeholder="Hortencio"
            />
            <label htmlFor="">Apellidos</label>
            <input
              className="my-2 block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
              type="text"
              placeholder="Romingato Pelazco"
            />

            <label htmlFor="">Email</label>
            <input
              className="my-2 block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
              type="email"
              {...register("email", { required: true })}
              placeholder="example@example.com"
            />
            <label htmlFor="">Password</label>
            <input
              placeholder="Password"
              className=" my-2 block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
              type="password"
              {...register("password", { required: true })}
            />
            <input
              type="submit"
              className="bg-blue-500 p-2 w-full text-white rounded mt-12"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
