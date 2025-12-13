import { Button } from "./ui";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  return (
    <Button
      variant="secondary"
      size="default"
      className="min-w-[84px] flex items-center gap-1"
    >
      <span>VIE</span>
      <Globe className="w-4 h-4 ml-1" />
    </Button>
  );
}
