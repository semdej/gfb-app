"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      redirectTo={"http://localhost:3000/auth/callback"}
      view="sign_in"
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "green",
              brandAccent: "darkgreen",
            },
          },
        },
      }}
      theme="light"
      showLinks={false}
      providers={[]}
    />
  );
}
