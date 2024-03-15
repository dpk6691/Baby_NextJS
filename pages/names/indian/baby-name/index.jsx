import { useRouter } from "next/router";
import { useEffect } from "react";

const BabyNameIndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /indian/all
    router.replace("/indian/all");
  }, []);

  return null; // No content is rendered for this page
};

export default BabyNameIndexPage;
