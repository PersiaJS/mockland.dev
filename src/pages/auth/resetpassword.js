import Layout from "@/components/Layout/Layout";
import Meta from "@/components/Meta/Meta";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";

const resetpassword = () => {
  return (
    <Layout>
      <Meta
        title="Mockland | Reset Password"
        description={"Reset your password"}
      />
      <ResetPasswordForm />
    </Layout>
  );
};

export default resetpassword;
