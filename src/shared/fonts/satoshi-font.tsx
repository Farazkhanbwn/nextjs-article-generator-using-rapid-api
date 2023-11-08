import Head from "next/head";
import React from "react";

const SatoshiFont = () => {
  return (
    <Head>
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SatoshiFont;
