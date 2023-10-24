import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { BookingTable } from "src/app/components/BookingTable";

export default async function Index() {
  let bookings = [];

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: fetchedBookings } = await supabase.from("bookings").select();

  if (fetchedBookings) {
    bookings = fetchedBookings.map((booking) => ({
      id: booking.id,
      user: booking.user,
      date: booking.date,
      notes: booking.notes,
    }));
  }

  return <BookingTable bookings={bookings} />;
}
