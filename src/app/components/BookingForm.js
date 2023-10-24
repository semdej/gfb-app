"use client";

import { Input, Button, Container, Title, Center } from "@mantine/core";
import { IconCursorText, IconFileDescription } from "@tabler/icons-react";
import { supabase } from "src/app/utils/supabase-client";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import "@mantine/dates/styles.css";

export function BookingForm() {
  const [value, setValue] = useState([]);

  async function handleSubmit(event, value) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const { data, error } = await supabase.from("bookings").insert({
      user: formData.get("user"),
      date: value, // Pass the value from the DatePicker
      notes: formData.get("notes"),
    });
    location.reload();

    if (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Container>
        <Center>
          <Title mt={50} mb={50}>
            Voeg een nieuwe boeking toe
          </Title>
        </Center>
        <form onSubmit={(event) => handleSubmit(event, value)}>
          <Input
            required
            icon={<IconCursorText size="1rem" />}
            mt={15}
            mb={15}
            placeholder="User"
            name="user"
          />{" "}
          <DatePicker
            required
            type="multiple"
            value={value}
            onChange={setValue}
          />{" "}
          <Input
            required
            icon={<IconFileDescription size="1rem" />}
            placeholder="Notes"
            name="notes"
            mt={15}
            mb={15}
          />{" "}
          <Button type="submit">Toevoegen</Button>
        </form>
      </Container>
    </>
  );
}
