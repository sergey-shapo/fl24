const BcnDepartures = (): React.ReactNode => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white text-center py-6">
          <h1 className="text-3xl font-bold">
            Salidas del Aeropuerto de Barcelona (BCN)
          </h1>
          <p className="mt-2 text-lg">
            Todo lo que necesitas saber antes de tu vuelo
          </p>
        </header>

        <section className="p-6 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Terminales y Servicios
              </h2>
              <p className="text-gray-600">
                El Aeropuerto de Barcelona cuenta con dos terminales principales
                (T1 y T2). Ofrece una variedad de servicios como tiendas,
                restaurantes, WiFi gratuito y salas VIP.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cómo Llegar
              </h2>
              <p className="text-gray-600">
                Puedes llegar al aeropuerto en Aerobús, metro (L9 Sud), tren (R2
                Nord) o taxi. Asegúrate de verificar tu terminal antes de salir.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Consejos para tu Vuelo
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Llega con antelación: 2 horas para vuelos nacionales y 3 para
              internacionales.
            </li>
            <li>Verifica tu terminal antes de salir de casa.</li>
            <li>Haz el check-in online para ahorrar tiempo.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BcnDepartures;
