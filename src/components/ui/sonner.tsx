import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg font-primary",
          description: "group-[.toast]:text-muted-foreground font-primary",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-primary",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-primary",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
