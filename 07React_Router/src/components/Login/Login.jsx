import React from 'react';

function Login() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative h-[800px] w-full overflow-hidden rounded-3xl flex justify-center">
          <div
            className="h-full w-full bg-[100%]"
            style={{
              backgroundImage: `url('https://images.freecreatives.com/wp-content/uploads/2016/05/Gradient-Background-For-Free.jpg')`,
            }}
          ></div>
          <div className="absolute bottom-0 flex h-3/4 w-[400px] flex-col rounded-t-3xl bg-white bg-opacity-20 shadow justify-center align-middle">
            <form className="mt-10 space-y-8 px-10 py-10 text-center">
              <div className="group relative">
                <input
                  type="text"
                  id="username"
                  required
                  className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
                />
                <label
                  htmlFor="username"
                  className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
                >
                  Username
                </label>
              </div>

              <div className="group relative">
                <input
                  type="text"
                  id="password"
                  required
                  className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
                />
                <label
                  htmlFor="password"
                  className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
                >
                  Password
                </label>
              </div>

              <button className="h-12 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800">
                Login
              </button>

              <a
                href="#"
                className="inline-flex !w-auto justify-center font-medium text-white"
              >
                Forgot password?
              </a>
            </form>

            <p className="gap-2 text-center text-white">
              Don't have an account?
              <a
                href="#"
                className="font-semibold text-blue-900 hover:text-blue-800"
              >
                Sign up
              </a>
            </p>

            {/* social media links */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
