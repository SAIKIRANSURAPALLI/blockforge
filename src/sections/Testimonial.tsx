import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    avatar: "/assets/images/avatar-erica-wyatt.jpg",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team",
    avatar: "/assets/images/avatar-noel-baldwin.jpg",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
  },
  {
    text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
    avatar: "/assets/images/avatar-harry-bender.jpg",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
  },
];
export const Testimonial = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, testimonialIndex) => (
            <motion.blockquote
              key={testimonialIndex}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: testimonialIndex * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              className={twMerge(
                testimonialIndex === 2 && "md:hidden lg:block"
              )}
            >
              <p className="font-heading text-3xl font-black lg:text-4xl">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${testimonial.avatar})`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">
                      {testimonial.name}
                    </div>
                    <div className="text-zinc-400">{testimonial.title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
