"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export function getContrastColor(hex: string): string {
  if (!hex) {
    return "#000000";
  }
  // Quitar # si existe
  hex = hex.replace("#", "");

  // Convertir a RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Fórmula de luminancia (percepción humana)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Si es oscuro, devolver blanco; si es claro, devolver negro
  return luminance > 0.5 ? "#000000" : "#ffffff";
}

type UserData = {
  name: string;
  role: string;
  backgroundColor: string;
};

type UserContextType = {
  user: UserData;
  setUser: (u: UserData) => void;
};

const defaultUser: UserData = {
  name: "",
  role: "",
  backgroundColor: "#0000ff",
};

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData>({
    name: "",
    role: "",
    backgroundColor: "#0000ff",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
