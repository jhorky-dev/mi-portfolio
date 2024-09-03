import { ThemeProvider } from "styled-components";
import { GlobalStyles, MyRoutes, useThemeStore } from "./index";

function App() {
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyles />
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
