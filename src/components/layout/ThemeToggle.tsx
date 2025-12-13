import { Button } from "../ui";
import { Moon } from "lucide-react";

export function ThemeToggle() {
  return (
    <Button variant="secondary" size="icon">
      <Moon className="w-5 h-5" />
    </Button>
  );
}
