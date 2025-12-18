import { Calendar, Clock, Tag } from "lucide-react"

interface PostMetaProps {
    date: string
    readTime: string
    tags?: string[]
}

export default function PostMeta({
    date,
    readTime,
    tags = [],
}: PostMetaProps) {
    return (
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {tags.length > 0 && (
                <div className="flex items-center gap-1">
                    <Tag className="size-4" />
                    <span>{tags.join(", ")}</span>
                </div>
            )}

            <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>{date}</span>
            </div>

            <div className="flex items-center gap-1">
                <Clock className="size-4" />
                <span>{readTime}</span>
            </div>
        </div>
    )
}
