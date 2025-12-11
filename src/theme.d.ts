import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    // Nothing to add — this loads the full MUI Theme type (including breakpoints)
  }

  interface ThemeOptions {
    // Nothing here either — just required for augmentation
  }
}
