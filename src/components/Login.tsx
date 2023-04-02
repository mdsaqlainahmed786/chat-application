import axios from "axios";
import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token") as string);
    if (user) {
      window.location.replace("/");
    }
  }, [location.pathname]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please check your inputs!", {
        style: {
          borderRadius: "6px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (data?.success) {
        toast.success("Login successful!", {
          style: {
            borderRadius: "6px",
            background: "#333",
            color: "#fff",
          },
        });

        localStorage.setItem(
          "token",
          JSON.stringify({ token: data?.token, user: data?._id })
        );
        window.location.replace("/");
      }
    } catch (err) {
      toast.error("Please check your credentials!", {
        style: {
          borderRadius: "6px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r h-screen flex justify-center items-center from-[#2A303C] to-[#0B090C]">
        <section className="w-full">
          <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-xl ring-1 ring-white/40 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#120F13] dark:border-[#120F13] ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center py-2 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Welcome Back!
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default Login;
