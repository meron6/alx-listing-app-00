import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Beachfront", "City View", "Luxury"];

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-200 transition">
    {label}
  </button>
);

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-64 bg-cover bg-center flex flex-col items-center justify-center text-white text-center rounded-xl"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Find your favorite place here!
        </h1>
        <p className="mt-3 text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="flex gap-3 mt-6 flex-wrap">
        {filters.map((f) => (
          <Pill key={f} label={f} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, i: number) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-gray-600">${property.price} / night</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default HomePage;
