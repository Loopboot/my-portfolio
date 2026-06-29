import { ThemeProvider } from "./theme-provider"
import { TooltipProvider } from "./ui/tooltip"

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </>
  )
}

export { Providers }
