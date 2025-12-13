"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const DrawerContext = React.createContext<{
  direction?: "top" | "bottom" | "left" | "right";
}>({});

type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root> & {
  direction?: "top" | "bottom" | "left" | "right";
};

function Drawer({ direction = "bottom", ...props }: DrawerProps) {
  return (
    <DrawerContext.Provider value={{ direction }}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        direction={direction}
        {...props}
      />
    </DrawerContext.Provider>
  );
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

const drawerContentVariants = cva(
  "group/drawer-content bg-background fixed z-50 flex flex-col",
  {
    variants: {
      direction: {
        top: [
          "inset-x-0 top-0 mb-24",
          "max-h-[80vh] rounded-b-lg border-b",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        ],
        bottom: [
          "inset-x-0 bottom-0 mt-24",
          "max-h-[80vh] rounded-t-lg border-t",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        ],
        left: [
          "inset-y-0 left-0",
          "h-full w-3/4 border-r sm:max-w-sm",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        ],
        right: [
          "inset-y-0 right-0",
          "h-full w-3/4 border-l sm:max-w-sm",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        ],
      },
    },
    defaultVariants: {
      direction: "bottom",
    },
  }
);

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  const { direction } = React.useContext(DrawerContext);

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(drawerContentVariants({ direction }), className)}
        {...props}
      >
        {(direction === "bottom" || direction === "top") && (
          <div
            className={cn(
              "bg-muted mx-auto h-2 w-[100px] shrink-0 rounded-full",
              direction === "bottom" && "mt-4",
              direction === "top" && "mb-4 order-last"
            )}
          />
        )}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { direction } = React.useContext(DrawerContext);

  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 md:gap-1.5",
        (direction === "bottom" || direction === "top") &&
          "text-center md:text-left",
        className
      )}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
