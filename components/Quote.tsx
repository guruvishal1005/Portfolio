import { quote } from "@/data/portfolio";

export default function Quote() {
  return (
    <section className="container-px mt-24">
      <div className="mx-auto max-w-3xl">
        <figure className="relative border border-gray/50 px-8 py-8">
          <span className="absolute -top-5 left-6 text-5xl leading-none text-white">
            &ldquo;
          </span>
          <blockquote className="text-center text-xl font-medium text-white sm:text-2xl">
            {quote.text}
          </blockquote>
          <span className="absolute -bottom-8 right-6 text-5xl leading-none text-white">
            &rdquo;
          </span>
          <figcaption className="mt-4 text-right text-gray">
            &mdash; {quote.author}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
