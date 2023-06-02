import ForgotPasswordForm from "@/components/ForgotPasswordForm/ForgotPasswordForm";
import Layout from "@/components/Layout/Layout";
import Meta from "@/components/Meta/Meta";
const ForgotPassword = () => {
  return (
    <Layout>
      <Meta
        title="Mockland | Forgot Password"
        description={"Forgot your password?"}
      />
      <ForgotPasswordForm />
    </Layout>
  );
};

export default ForgotPassword;
