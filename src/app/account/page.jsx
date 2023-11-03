import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AccountForm from "./account-form";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import { Container } from "@mantine/core";

export default async function Account() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container>
        <AccountForm session={session} />
      </Container>
    </>
  );
}
