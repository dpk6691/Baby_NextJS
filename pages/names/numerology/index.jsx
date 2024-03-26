import Numerology from "../../../components/Numerology";
import Head from "next/head";

const NumPage = () => {
  return (
    <>
      <Head>
        <title>Numerology Name Calculator - Firststep.baby</title>
        <meta
          name="description"
          content="Discover the numerological meaning behind your name. Get the details of your lucky number, day, color, gemstone benefits etc. based on Numerology.
          "
        />
      </Head>
      <Numerology />
    </>
  );
};

export default NumPage;
