import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapComp() {
  return (
    <div className="py-8 bg-white max-w-7xl w-full mx-auto rounded-xl">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="font-extrabold text-2xl md:text-5xl text-black mb-2">
          Global Voices, Connected{" "}
          <span className="text-neutral-400">
            {"Stories".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          From local tales to global perspectives, Pen & Pulse connects writers
          and readers across the world. Share your story and discover a universe
          of ideas.
        </p>
      </div>
      <div className="flex justify-center py-4">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>
    </div>
  );
}
