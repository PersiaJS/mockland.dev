import Layout from "@/components/Layout/Layout";
import SignupForm from "../../components/SignupForm/SignupForm";
import Meta from "@/components/Meta/Meta";

const Register = () => {
  return (
    <Layout>
      <Meta title="Mockland | Register" description={"Register to Mockland"} />
      <SignupForm />
    </Layout>
  );
};

export default Register;
