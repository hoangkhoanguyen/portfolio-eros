import { Button } from "../ui";
import Link from "next/link";

export function ButtonContact() {
    return (
        <Button className="fixed bottom-6 right-6 z-50 rounded-full px-6 py-4 shadow-lg">
            <Link href="#contact">
                Liên hệ nhanh
            </Link>
        </Button>
    )
}