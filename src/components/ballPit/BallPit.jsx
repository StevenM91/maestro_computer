import { useRef, useEffect } from "react";
import createBallpit from "./ballpitUtility";
import styles from "./ballpit.module.css";

const Ballpit = ({ className = "", followCursor = false, ...props }) => {
  const canvasRef = useRef(null);
  const spheresInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    spheresInstanceRef.current = createBallpit(canvas, {
      followCursor,
      ...props,
    });

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
      }
    };
    // Dependencies intentionally left empty for single initialization
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      className={styles.ballpit}
      ref={canvasRef}
      style={{ width: "100%", zIndex: -1000 }}
    />
  );
};

export default Ballpit;
