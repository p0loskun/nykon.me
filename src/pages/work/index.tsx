import { title } from "@/src/components/primitives";
import DefaultLayout from "@/src/layouts/default";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

export default function WorkPage() {
  useScrollAnimation();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Work</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
