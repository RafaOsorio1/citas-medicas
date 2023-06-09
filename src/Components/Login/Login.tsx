import React from "react";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { loginWithEmailAndPassword } from "../../Interfaces/interfaces";
type inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const { loginWithEmailAndPassword } = useContext(AuthContext);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<inputs>();

  const onSubmit: SubmitHandler<Record<string, string>> = async (data) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };
    setError("");
    try {
      await loginWithEmailAndPassword(credentials);
      navigate("/home");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        setError("Este usuario no esta registrado");
      } else if (error.code === "auth/invalid-email") {
        setError("Ingresa un Correo valido");
      } else if (error.code === "auth/wrong-password") {
        setError("La contraseña no es correcta");
      }
      console.log(error.code);
    }
  };
  const handleClickRegister = () => {
    navigate("/register");
  };
  return (
    <>
      {error && <div>{error}</div>}
      <div className="h-screen min-h-screen max-h-screen bg-gray-200 flex justify-center items-center p-4">
        <div className="bg-white w-full p-4 rounded shadow-2xl text-gray-700 sm:w-96">
          <div className="flex justify-end">
          </div>

          <p className="text-center pb-2 text-3xl">Welcome</p>

          <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            <div className="pb-5 text-sm text-center">
              <p>
                You don´t have an account?{" "}
                <button onClick={handleClickRegister} className="text-blue-500">
                  Register now!
                </button>
              </p>
            </div>

            <div className="pb-5">
              <input
                id="email"
                {...register("email", { required: true })}
                type="text"
                className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                placeholder="Username or email"
              />
            </div>

            <div className="pb-5">
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                placeholder="Password"
              />
            </div>

            <div className="pb-5">
              <input type="checkbox" />
              <label>Remember password</label>
            </div>

            <button className="pb-5 text-right text-sm">
              <a href="#" className="text-blue-500">
                Forgot your password?
              </a>
            </button>
            <button
              type="submit"
              className="bg-blue-500 p-2 w-full text-white rounded"
            >
              Enviar
            </button>
          </form>
          <hr />
        </div>
      </div>
      <div className="fixed bottom-0 right-0">
        <button id="switchTheme">
          <i className="fab fa-codepen"></i>s
        </button>
      </div>
    </>
  );
};
