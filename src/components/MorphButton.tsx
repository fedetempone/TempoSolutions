import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import "../styles/morphButton.css";

export default function MorphButton() {
  const [hovered, setHovered] = useState(false);

  // link de whatsapp
  const whatsappUrl = "https://wa.me/5491130607355?text=Hola%20Fede!%20Estuve%20viendo%20tu%20portfolio%20de%20TempoSolutions%20y%20me%20gustaría%20que%20charlemos%20sobre%20un%20proyecto.";

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: "none", display: "inline-block" }}
    >
      <motion.button
        className="morphButton"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileTap={{ scale: 0.97 }}
      >
        <div className="iconContainer">
          <AnimatePresence mode="wait">
            {!hovered ? (
              <motion.div
                key="whatsapp"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.3,
                  rotate: -180
                }}
                transition={{ duration: 0.35 }}
              >
                <FaWhatsapp className="icon-whatsapp" />
              </motion.div>
            ) : (
              <motion.div
                key="computer"
                initial={{
                  scale: 0.3,
                  opacity: 0,
                  rotate: 180
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: 0
                }}
                exit={{
                  opacity: 0
                }}
                transition={{ duration: 0.35 }}
              >
                <HiComputerDesktop className="icon-desktop" />
              </motion.div>
            )}
          </AnimatePresence>

          {hovered && (
            <>
              <motion.span
                className="particle p1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: 20,
                  y: -15,
                  scale: [0, 1.2, 0]
                }}
                transition={{ duration: 0.8 }}
              />

              <motion.span
                className="particle p2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: -20,
                  y: 15,
                  scale: [0, 1.2, 0]
                }}
                transition={{ duration: 0.8 }}
              />

              <motion.span
                className="particle p3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: 25,
                  y: 20,
                  scale: [0, 1.2, 0]
                }}
                transition={{ duration: 0.8 }}
              />
            </>
          )}
        </div>

        <span className="buttonText">Escribime por WhatsApp</span>
      </motion.button>
    </a>
  );
}