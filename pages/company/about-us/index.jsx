import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <section className="w-11/12 m-auto pt-32 md:pt-28">
        <div class="mx-auto format">
          <h1 class="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl ">
            About us
          </h1>
          <p class="mb-10 text-lg text-slate-600  lg:text-lg">
            If you have a question please
            <Link
              class="mx-2 font-normal text-blue-500 no-underline hover:underline"
              href="/contact-us/"
            >
              contact us
            </Link>
            and we will help you out as soon as we can.
          </p>
          <hr class="my-12 border-slate-200 dark:border-slate-800" />
          <p>
            FirstStep.Baby is the brainchild of two friends—a passionate React
            Developer and a seasoned Digital Marketer—who shared a common
            vision: to create a website unlike any other, featuring an
            unparalleled database of baby names from around the world.
          </p>
          <br></br>
          <p>
            As they embarked on this journey, they tackled each element of the
            website one thread at a time, pouring their expertise and dedication
            into bringing their vision to life. The result? FirstStep.Baby—a
            platform that offers a vast collection of over 3 million baby names,
            spanning Indian, Arabic, Chinese, American, German, French, African,
            and Australian origins. Each name is accompanied by its meaning,
            origin, and even numerology insights, providing parents with a
            comprehensive resource for choosing the perfect name for their
            little one.
          </p>
          <br></br>
          <p>
            <h2>
              <strong className="underline">Our Mission</strong>
            </h2>
          </p>
          <br></br>
          <p>
            At FirstStep.Baby, our mission is to empower parents and families to
            make informed decisions about their child's name, ensuring that it
            reflects their cultural heritage, values, and aspirations. We
            believe that a name is more than just a label—it's a gift that
            shapes a child's identity and journey through life.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
