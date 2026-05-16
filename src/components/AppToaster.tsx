import { Toaster } from "react-hot-toast";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{ top: 72, right: 16, zIndex: 9999 }}
      toastOptions={{
        duration: 5000,
        className: "app-toast",
        style: {
          background: "var(--theme-panel)",
          color: "var(--theme-fg)",
          border: "1px solid var(--theme-card-border)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
          fontWeight: 600,
          fontSize: "0.9rem",
          maxWidth: "min(100vw - 2rem, 28rem)",
        },
        success: {
          iconTheme: { primary: "#22c55e", secondary: "var(--theme-panel)" },
        },
        error: {
          iconTheme: { primary: "#ef4444", secondary: "var(--theme-panel)" },
        },
      }}
    />
  );
}
