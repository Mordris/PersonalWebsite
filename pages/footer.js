// footer.js
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const date = new Date().getFullYear().toString();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center py-4 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
    >
      <p>&copy; {date} Yunus Emre Gültepe. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
