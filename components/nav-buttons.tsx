"use client"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useRouter } from "next/navigation"
import { LucideIcon, FolderKanban, Briefcase, Info, Phone } from "lucide-react"

export interface NavButtonsProps {
  items: {
    icon: LucideIcon
    name: string
    url: string
  }[]
}

const config = {
  items: [
    {
      icon: FolderKanban,
      name: "Projects",
      url: "/projects",
    },
    {
      icon: Briefcase,
      name: "Experience",
      url: "/experience",
    },
    {
      icon: Info,
      name: "About",
      url: "/about",
    },
    {
      icon: Phone,
      name: "Contact",
      url: "/contact",
    },
  ],
} satisfies NavButtonsProps

function NavButtons() {
  const router = useRouter()
  return (
    <>
      {config.items.map((item, idx) => {
        return (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button
                variant={"outline"}
                size={"icon-lg"}
                className="size-32 border-primary text-primary"
                onClick={() => router.push(item.url)}
              >
                <item.icon className="size-12" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{item.name}</TooltipContent>
          </Tooltip>
        )
      })}
    </>
  )
}

export { NavButtons }
