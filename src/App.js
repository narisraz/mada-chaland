import "./App.css";

function App() {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url("./assets/home_bg.jpg")`,
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
        }}
      >
        <div className="flex justify-between items-center px-56 py-8 text-onPrimary">
          <div className="font-bold text-xl">Mada Chaland</div>
          <ul className="flex gap-8 justify-center items-center">
            <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
              Accueil
            </li>
            <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
              A propos
            </li>
            <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
              Circuits
            </li>
            <li className="hover:border-b hover:border-onPrimary hover:font-semibold duration-150 cursor-pointer">
              Partenaires
            </li>
          </ul>
          <button className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100">
            Contactez nous
          </button>
        </div>
      </div>

      <div className="relative rounded-t-3xl -top-5 w-full bg-surface h-full px-56 py-8">
        <div className="text-center text-4xl mb-16 mt-8">Nos offres</div>

        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-2 gap-8 items-center">
            <img
              src="./assets/tsiribihana.jpeg"
              alt=""
              className="rounded-xl shadow-xl shadow-primary object-cover h-96 w-full"
            />
            <div>
              <div className="text-2xl text-primary font-bold tracking-wider">
                Titre offre
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, inventore quae. Placeat, excepturi! Quis rerum nihil
                aliquid, iusto ipsam voluptatem repudiandae quidem praesentium
                voluptas incidunt maiores nam beatae fugiat soluta.
              </div>
              <button className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100">
                En savoir plus
                <img
                  src="./assets/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 ml-4 scale-125"
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center">
            <img
              src="./assets/home_bg.jpg"
              alt=""
              className="rounded-xl shadow-xl shadow-primary h-96 w-full object-cover order-last"
            />
            <div>
              <div className="text-2xl text-primary font-bold tracking-wider">
                Titre offre
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, inventore quae. Placeat, excepturi! Quis rerum nihil
                aliquid, iusto ipsam voluptatem repudiandae quidem praesentium
                voluptas incidunt maiores nam beatae fugiat soluta.
              </div>
              <button className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100">
                En savoir plus
                <img
                  src="./assets/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 ml-4 scale-125"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-onPrimary px-56 py-8 grid grid-cols-3">
        <div className="font-bold text-xl flex items-center">Mada Chaland</div>
        <div className="flex flex-col gap-2">
          <div className="cursor-pointer">A propos de nous</div>
          <div className="cursor-pointer">Notre équipe</div>
          <div className="cursor-pointer">Contact</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="cursor-pointer">Circuit Ouest</div>
          <div className="cursor-pointer">Circuit Sud</div>
        </div>
      </div>
    </div>
  );
}

export default App;
