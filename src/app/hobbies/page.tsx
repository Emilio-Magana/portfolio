import HobbyCard from "@/components/HobbyCard";
import { hobbySchema } from "@/config/schema";
import hobbyData from "@/data/hobbies.json";

const hobbies = hobbySchema.parse(hobbyData).hobbies;

export default function Hobbies() {
  return (
    <section className="my-8 px-1">
      <h1 className="font-mono text-3xl text-primary">my hobbies.</h1>
      <div
        className="animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.1s" }}
      >
        {hobbies.map((hobby, key) => (
          <HobbyCard {...hobby} key={key} />
        ))}
      </div>
    </section>
  );
}
