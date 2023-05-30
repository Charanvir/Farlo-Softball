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
            Welcome to Farlo Softball Club! We're a passionate team known for
            skill, determination, and camaraderie. Our dedication led us to a
            championship title in 2022, a testament to our love for the game and
            pursuit of excellence.
          </p>

          <p className="mb-4">
            The 'Players' page showcases our Farlo players, each represented by
            a unique baseball card. On individual player pages, you'll find
            comprehensive career and yearly stats. The 'Seasons' page provides
            yearly highlights, showcasing major stat leaders and team stats. In
            each specific season page, you'll discover the top performer in
            every stat, followed by a detailed table covering the entire team's
            performance. Explore and enjoy the rich history of Farlo Softball
            Club!
          </p>

          <p className="mb-4">
            Join us as a player, a fan, or a softball enthusiast as we celebrate
            our past, enjoy our present, and anticipate our future. At Farlo
            Softball Club, every game is a home run! Welcome aboard!
          </p>
        </div>
      </div>
    </main>
  );
}
