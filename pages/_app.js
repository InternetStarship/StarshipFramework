import "../styles/globals.css";

import { useState, useEffect } from "react";
import { supabase } from "../components/supabase/supabaseClient";
import Auth from "../components/supabase/Login";
import Account from "./account";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <div>{!session ? <Auth /> : <Component {...pageProps} />}</div>;
}
