// footer.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [error, setError] = useState(null);

  try {
    const date = new Date().getFullYear().toString();

    return (
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center py-4 bg-gray-800 text-white dark:bg-gray-800 dark:text-gray-200"
      >
        {error && <p className="text-red-500">{error}</p>}
        <p>&copy; {date} Yunus Emre Gültepe. All rights reserved.</p>
      </motion.footer>
    );
  } catch (error) {
    console.error("Error rendering Footer:", error);
    setError("An error occurred while rendering the footer.");
    return null; // or a fallback UI
  }
};

export default Footer;
