import Layout from "@/components/Layout/Layout";
import LoginForm from "@/components/LoginForm/LoginForm";
import Meta from "@/components/Meta/Meta";
const Login = () => {
  return (
    <Layout>
      <Meta title="Mockland | Login" description={"Login to Mockland"} />
      <LoginForm />
    </Layout>
  );
};

export default Login;
