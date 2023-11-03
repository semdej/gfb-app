import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { BookingTable } from "src/app/components/BookingTable";
import Header from "../components/Header";
import { Container } from "@mantine/core";

export default async function Index() {
  let bookings = [];

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: fetchedBookings } = await supabase.from("bookings").select();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    notFound();
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (fetchedBookings) {
    bookings = fetchedBookings.map((booking) => ({
      id: booking.id,
      user: booking.user,
      date: booking.date,
      notes: booking.notes,
    }));
  }

  return (
    <>
      <Header />
      <Container>
        <BookingTable user={user} bookings={bookings} />
      </Container>
    </>
  );
}
