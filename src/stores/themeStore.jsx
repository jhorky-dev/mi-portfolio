import { create } from "zustand";
import { Light, Dark } from "../styles/themes";

export const useThemeStore = create((set, get) => ({
  theme: localStorage.getItem("theme") || "dark", // Leer el tema almacenado o usar 'dark' por defecto
  themeStyle: localStorage.getItem("theme") === "light" ? Light : Dark, // Aplicar el tema almacenado
  setTheme: () => {
    const { theme } = get();
    const newTheme = theme === "light" ? "dark" : "light";
    const newThemeStyle = newTheme === "light" ? Light : Dark;

    localStorage.setItem("theme", newTheme); // Guardar el nuevo tema en localStorage
    set({ theme: newTheme, themeStyle: newThemeStyle });
  },
}));
