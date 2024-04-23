import { useRouter } from "next/router";
import { useEffect } from "react";

const BabyNameIndexPage = () => {
  const router = useRouter();

  // Redirect to the specified destination
  useEffect(() => {
    router.push("/indian/all-baby-names");
  }, []);

  return null; // No content is rendered for this page
};

export default BabyNameIndexPage;
