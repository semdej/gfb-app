"use client";

import { Input, Button, Container, Title, Center } from "@mantine/core";
import { IconFileDescription } from "@tabler/icons-react";
import { supabase } from "src/app/utils/supabase-client";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import "@mantine/dates/styles.css";

export function BookingForm({ user }) {
  const [value, setValue] = useState([]);

  async function handleSubmit(event, value) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const { data, error } = await supabase.from("bookings").insert({
      user: user.id,
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
          <Title mt={30} mb={50}>
            Voeg een nieuwe boeking toe
          </Title>
        </Center>
        <form onSubmit={(event) => handleSubmit(event, value)}>
          <Center mb={80}>
            <DatePicker
              required
              type="multiple"
              value={value}
              onChange={setValue}
            />{" "}
          </Center>
          <Input
            required
            icon={<IconFileDescription size="1rem" />}
            placeholder="Notities"
            name="notes"
            mt={15}
            mb={30}
          />{" "}
          <Center>
            <Button type="submit">Toevoegen</Button>
          </Center>
        </form>
      </Container>
    </>
  );
}
