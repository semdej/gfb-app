import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Container } from "@mantine/core";
import { BookingForm } from "src/app/components/BookingForm";
import Header from "../components/Header";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!session) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container>
        <BookingForm user={user} />
      </Container>
    </>
  );
}
