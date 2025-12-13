"use client";

import { Button } from "../ui";
import { Palette, X } from "lucide-react";
import { useState } from "react";
import { useThemeStore, themes } from "@/store/themeStore";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { cn } from "@/lib/utils";

export function PaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const { currentTheme, setTheme } = useThemeStore();

  return (
    <>
      <Button variant="secondary" size="icon" onClick={() => setOpen(true)}>
        <Palette className="w-5 h-5" />
      </Button>

      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerContent className="h-full max-w-md ml-auto">
          <DrawerHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <DrawerTitle>Chọn chủ đề</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="w-5 h-5" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="p-6 space-y-4">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                type="button"
                title={`Change Theme Button To ${theme.name}`}
                key={key}
                onClick={() => {
                  setTheme(key);
                }}
                className={`w-full text-left rounded-xl p-1 transition-all ${
                  currentTheme === key
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "hover:ring-2 hover:ring-border"
                }`}
              >
                <div className="relative">
                  <div
                    className={cn(
                      "w-full h-24 rounded-lg",
                      theme.optionClassName
                    )}
                  />
                </div>
              </button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
