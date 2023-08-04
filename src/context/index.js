import React from "react";
import NotificationProvider from "./NotificationProvider";


export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      {children}
    </NotificationProvider>
  );
}
