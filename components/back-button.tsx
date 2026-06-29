"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { ChevronLeft } from "lucide-react"

function ReturnButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.back()}
      className="absolute right-0 z-10"
      size="icon-lg"
    >
      <ChevronLeft size={48} />
    </Button>
  )
}

export { ReturnButton }
