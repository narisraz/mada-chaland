import PartnerItem from "../components/partner";
import useCars from "../hooks/useCars";
import useHotels from "../hooks/useHotels";

export default function Partners() {
  const [cars] = useCars();
  const [hotels] = useHotels();

  return (
    <div className="px-56 py-16">
      <div className="text-2xl text-primary font-bold tracking-wider mb-8">
        Nos partenaires
      </div>
      <div className="flex flex-col">
        {cars.length > 0 && (
          <>
            <div className="text-lg text-primary font-bold tracking-wider mb-8">
              Voitures
            </div>
            <div className=" flex flex-col gap-8">
              {cars.map((car, index) => (
                <PartnerItem partner={car} key={index} />
              ))}
            </div>
          </>
        )}
        {hotels.length > 0 && (
          <>
            <div className="text-lg text-primary font-bold tracking-wider my-8">
              Hôtels
            </div>
            <div className=" flex flex-col gap-8">
              {hotels.map((hotel, index) => (
                <PartnerItem partner={hotel} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
