import Head from "next/head";

import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-200 w-full h-screen flex items-center justify-center">
      <Head>
        <title>Login</title>
        <meta name="description" content="Sign into your account" />
      </Head>

      <div className="col-6 form-widget">
        <h1 className="text-3xl text-center font-bold mb-1">Login</h1>
        <p className="text-center text-slate-600 font-medium mb-4">
          Sign in to your account
        </p>
        <div className="bg-white p-6 rounded shadow-xl w-96">
          {loading ? (
            <h3 className="text-center py-6 text-lg font-medium">
              Sending magic link...
            </h3>
          ) : (
            <form onSubmit={handleLogin}>
              <input
                id="email"
                className="shadow appearance-none border rounded text-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="block mt-2 bg-blue-600 text-white font-bold text-xl py-2 px-3 w-full rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                aria-live="polite"
              >
                Send Magic Link
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
