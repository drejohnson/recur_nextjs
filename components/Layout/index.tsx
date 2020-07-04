import React, { ReactNode } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "components/Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Recur" }: Props) => (
  <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Oswald:400,600,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    {children}
  </motion.div>
);

export default Layout;
