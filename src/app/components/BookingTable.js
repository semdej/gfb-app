"use client";
import { Table } from "@mantine/core";

function formatDate(date) {
  return new Date(date).toLocaleString("nl-NL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}

export function BookingTable({ bookings }) {
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
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </>
  );
}
