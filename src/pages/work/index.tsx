import DefaultLayout from "@layouts/default";
import useScrollAnimation from "@hooks/use-scroll-animation";
import { ReactElement } from "react";

export default function WorkPage(): ReactElement {
  useScrollAnimation();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <article className="inline-block max-w-lg text-center justify-center" />
      </section>
    </DefaultLayout>
  );
}
