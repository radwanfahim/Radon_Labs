import { FaSolidCalendarDay } from "solid-icons/fa";

const AppointmentButton = () => {
  return (
    <div class="flex items-center gap-3">
      <a
        href=""
        class=" inline-flex items-center justify-center space-x-2  bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-xl group cursor-pointer"
      >
        <span class="font-semibold">Book Appointment</span>

        <FaSolidCalendarDay class="w-5 h-5 group-hover:scale-110 transition delay-150 duration-300 ease-in-out" />
      </a>
    </div>
  );
};

export default AppointmentButton;
