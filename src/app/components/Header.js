"use client";
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/bookings" className={classes.link}>
              Boekingen
            </a>
            <a href="/newbooking" className={classes.link}>
              Nieuwe Boeking
            </a>
            <a href="/account" className={classes.link}>
              Account
            </a>
          </Group>

          <Group visibleFrom="sm">
            <form action="/auth/signout" method="post">
              <Button type="submit" color="red">
                Uitloggen
              </Button>
            </form>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigatie"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/bookings" className={classes.link}>
            Boekingen
          </a>
          <a href="/newbooking" className={classes.link}>
            Nieuwe Boeking
          </a>
          <a href="/account" className={classes.link}>
            Account
          </a>
          <Group justify="center" grow pb="xl" px="md">
            <form action="/auth/signout" method="post">
              <Button type="submit" color="red">
                Uitloggen
              </Button>
            </form>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
