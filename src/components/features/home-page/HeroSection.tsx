import Image from "next/image";
import { Button } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="w-full py-10">
      <div className="flex flex-col gap-6 @[480px]:gap-8 @[864px]:flex-row @[864px]:items-center">
        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl">
              Anh Nguyen
            </h1>
            <h2 className="text-primary-600 text-sm @[480px]:text-base font-normal">
              Full-Stack Web Developer | Biến ý tưởng thành trải nghiệm số.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="min-w-21">
              Xem dự án
            </Button>
            <Button variant="secondary" size="lg" className="min-w-21">
              Liên hệ
            </Button>
          </div>
        </div>

        <div className="w-full aspect-square rounded-xl overflow-hidden @[480px]:h-auto @[480px]:min-w-75 @[864px]:w-full @[864px]:max-w-md relative">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
            alt="Developer working on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
