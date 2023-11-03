import AuthForm from "./auth-form";
import HeaderHome from "./components/HeaderHome";

export default async function Home() {
  return (
    <>
      <HeaderHome />
      <div className="row">
        <div className="col-6">
          <h1 className="header">Login</h1>
        </div>
        <div className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
