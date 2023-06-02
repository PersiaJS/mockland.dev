import Layout from "@/components/Layout/Layout";
import Meta from "@/components/Meta/Meta";
import VerifyForm from "@/components/VerifyForm/VerifyForm";

const verify = () => {
  return (
    <Layout>
      <Meta
        title="Mockland | Verify"
        description={"Verify your email address"}
      />
      <VerifyForm />
    </Layout>
  );
};

export default verify;
