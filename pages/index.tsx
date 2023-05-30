/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import HomePageCarousel from "@/components/HomePageCarousel";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-700">
            Welcome to Farlo Softball Club!
          </h1>
        </div>
        <div>
          <HomePageCarousel></HomePageCarousel>
        </div>

        <div className="text-xl text-center text-gray-700 bg-sky-100">
          <p className="mb-4">
            We're delighted that you've joined us! We're a vibrant and committed
            softball team, proudly carrying the spirit of our community with
            every pitch and swing. Over the years, we've cultivated a team that
            plays with determination, skill, and a strong sense of camaraderie.
          </p>

          <p className="mb-4">
            Our crowning moment came in 2022 when we clinched the championship
            title. It was a monumental achievement that demonstrated our passion
            for the game, unyielding team spirit, and commitment to excellence.
          </p>

          <p className="mb-4">
            But Farlo Softball Club isn't just about winning—it's about the
            journey. We're as excited about the process of growth, learning, and
            striving for better as we are about the victories. And we can't wait
            to bring you along for the ride.
          </p>

          <p className="mb-4">
            Explore our website to meet the stars of our team. Check out the
            'Players' section where you can delve into individual player
            profiles and their contributions to the club. In our 'Seasons'
            section, you can journey through our history and relive our most
            memorable moments. Find out who led each season in various
            statistical categories and see how our team has evolved over time.
          </p>

          <p className="mb-4">
            We're proud of our past, excited about our present, and optimistic
            for our future. Whether you're a potential player, a fan, or just a
            softball enthusiast, we invite you to join us on this journey.
          </p>

          <p>
            Welcome to the Farlo Softball Club, where every game is a home run!
          </p>
        </div>
      </div>
    </main>
  );
}
