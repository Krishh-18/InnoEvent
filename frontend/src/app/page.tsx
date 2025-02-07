import { div } from "motion/react-client";
import ShootingStarsAndStarsBackgroundDemo from "@/components/merge"
import mynav from "@/components/navbar";
export default function Home() {
  return (
    <div className="min-h-screen min-w-full">
        <mynav></mynav>
        <ShootingStarsAndStarsBackgroundDemo>

      </ShootingStarsAndStarsBackgroundDemo>
    </div>
  );
}
