import { Calendar, Clock, Tag } from "lucide-react"

interface PostMetaProps {
  date: string
  readTime: string
  tag?: string
}

export default function PostMeta({
  date,
  readTime,
  tag,
}: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center text-sm text-muted-foreground">
      <MetaItem icon={<Calendar className="size-4" />}>
        {date}
      </MetaItem>

      <Bullet />

      <MetaItem icon={<Clock className="size-4" />}>
        {readTime}
      </MetaItem>
    </div>
  )
}

function Bullet() {
  return <span className="mx-3 select-none">•</span>
}

function MetaItem({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <span className="flex items-center gap-1">
      {icon}
      {children}
    </span>
  )
}
