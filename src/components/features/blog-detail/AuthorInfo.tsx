import Image from "next/image"

interface AuthorInfoProps {
    name: string
    avatar: string
}

export default function AuthorInfo({ name, avatar }: AuthorInfoProps) {
    return (
        <div className="flex items-center gap-5">
            <Image
                src={avatar}
                alt={name}
                width={48}
                height={48}
                className="rounded-full"
            />
            <span className="text-lg text-foreground">{name}</span>
        </div>
    )
}
