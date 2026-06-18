
import { Toaster, toast } from "react-hot-toast"


const Toaster = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#fffdf8",
          color: "#1E2A26",
          border: "1px solid #FBBF24",
          borderRadius: "16px",
          padding: "14px 18px",
          fontWeight: "500",
        },
      }}
    />
  );
};
 
export const Toaster;
