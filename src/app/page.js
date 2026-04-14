import Banner from "@/components/Banner/Banner";
import Friends from "@/components/Friends/Friends";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <div className="bg-base-200">
      <Banner />
      <Stats/>
      <Friends />
    </div>
  );
}
