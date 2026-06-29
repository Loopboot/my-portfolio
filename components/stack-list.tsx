import * as Icons from "@/components/icons/icon-svgs"
import data from "@/data/stack-list.json"
type Icons =
  | "typescript"
  | "python"
  | "nextjs"
  | "react"
  | "django"
  | "postgres"
  | "mysql"
  | "sqlite3"
  | "docker"

interface StackListProps {
  categoryName: string
  contents: {
    name: string
    icon: Icons
  }[]
}

function StackList() {
  const stack = data as StackListProps[]

  const icons = {
    typescript: <Icons.TypescriptIcon />,
    python: <Icons.PythonIcon />,
    nextjs: <Icons.NextjsIcon />,
    react: <Icons.ReactIcon />,
    django: <Icons.DjangoIcon />,
    postgres: <Icons.PostgresIcon />,
    mysql: <Icons.MysqlIcon />,
    sqlite3: <Icons.Sqlite3Icon />,
    docker: <Icons.DockerIcon />,
  } as const
  return (
    <div className="flex w-full flex-col justify-start gap-6">
      {stack.map((category, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <h4>{category.categoryName}</h4>
          <div className="flex gap-4">
            {category.contents.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 border px-1.5 py-1"
              >
                {icons[item.icon]}
                <span className="text-sm font-medium tracking-wide uppercase">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { StackList }
