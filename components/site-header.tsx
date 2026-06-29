import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const items = [
  { name: "Home", url: "/" },

  {
    name: "Projects",
    url: "/projects",
  },
  { name: "Experience", url: "/experience" },
  { name: "Blogs", url: "/blog" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
]

function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-screen justify-center backdrop-blur-2xl">
      <SiteHeaderNavButtons />
    </header>
  )
}

function SiteHeaderNavButtons({
  ...props
}: React.ComponentProps<typeof NavigationMenu>) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        {items.map((item, idx) => (
          <NavigationMenuItem key={idx}>
            <NavigationMenuLink asChild>
              <Link href={item.url}>{item.name}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export { SiteHeader }
