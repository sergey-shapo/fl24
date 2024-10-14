import BcnDepartures from "./components/BcnDepartures";

export default function Home() {
  return (
    <main>
      <iframe
        id="avionio-frame"
        height="650px"
        className="w-full"
        src="https://www.avionio.com/widget/es/bcn/departures?style=2"
        title="Horario de salidas y llegadas aeropuerto Barcelona"
      />
      <BcnDepartures />
    </main>
  );
}
