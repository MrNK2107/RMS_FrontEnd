import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { UIProvider } from "./contexts/UIContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./components/common/ToastProvider";
import { EventProvider } from "./contexts/EventContext";
import AppRouter from "./routes/AppRouter";


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <UIProvider>
            <EventProvider>
              <ToastProvider>
                <AppRouter />
              </ToastProvider>
            </EventProvider>
          </UIProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
