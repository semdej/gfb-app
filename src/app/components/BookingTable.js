"use client";
import { Table, Button } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import { MdDeleteOutline } from "react-icons/md";

function formatDate(date) {
  return new Date(date).toLocaleString("nl-NL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export function BookingTable({ bookings, user }) {
  const onDeleteBooking = async (bookingId) => {
    try {
      const response = await supabase
        .from("bookings")
        .delete()
        .eq("id", bookingId);
      if (response.error) {
        console.error("Error deleting booking:", response.error.message);
      } else {
        console.log("Booking deleted successfully.");
        location.reload();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <>
      <Table.ScrollContainer minWidth={500} type="native">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>BookingID</Table.Th>
              <Table.Th>UserID</Table.Th>
              <Table.Th>Datum</Table.Th>
              <Table.Th>Notities</Table.Th>
              <Table.Th>Acties</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {bookings.map((booking) => (
              <Table.Tr key={booking.id}>
                <Table.Td>{booking.id}</Table.Td>
                <Table.Td>{booking.user}</Table.Td>
                <Table.Td>
                  {booking.date.map((dateItem, index) => (
                    <div key={index}>{formatDate(dateItem)}</div>
                  ))}
                </Table.Td>
                <Table.Td>{booking.notes}</Table.Td>
                <Table.Td>
                  {user.id === booking.user && (
                    <Button
                      onClick={() => onDeleteBooking(booking.id)}
                      color="red"
                      size="xs"
                    >
                      <MdDeleteOutline size={18} />
                    </Button>
                  )}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </>
  );
}
