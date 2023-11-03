import AuthForm from "./auth-form";
import HeaderHome from "./components/HeaderHome";
import { Container } from "@mantine/core";

export default async function Home() {
  return (
    <>
      <HeaderHome />
      <Container>
        <div className="row">
          <div className="col-6">
            <h1 className="header">Login</h1>
          </div>

          <div className="col-6 auth-widget">
            <AuthForm />
          </div>
        </div>
      </Container>
    </>
  );
}
