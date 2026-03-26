import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const StickyBooking = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
    <Button asChild className="w-full h-12 text-base font-semibold gap-2">
      <Link to="/contact">
        <Calendar className="w-5 h-5" />
        Book Appointment
      </Link>
    </Button>
  </div>
);

export default StickyBooking;
