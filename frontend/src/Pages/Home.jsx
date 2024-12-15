import { useState } from "react";

const Home = () => {
  const [points, setPoints] = useState(7);
  const [count, setCount] = useState(0);
  const [Open, isOpen] = useState(false);

  const HandleClick = () => {
    setCount(count + 1);
    points > 1 ? setPoints(points - 1) : isOpen(true) && setPoints(0);
    count < 7 ? setCount(count + 1) : isOpen(true);
  };

  const ResetBtn = () => {
    setPoints(7);
    setCount(0);
    isOpen(false);
    window.location.reload();
  };

  return (
    <div className="h-screen w-full max-w-screen overflow-x-hidden">
      {Open && <GameOverModal resetGame={ResetBtn} />}

      <header className="bg-blue-400 p-4 flex justify-between items-center">
        <img
          onClick={ResetBtn}
          className="w-12 h-12 cursor-pointer"
          src="reset.png"
          alt="Reset"
        />
        <p className="text-lg sm:text-xl md:text-2xl text-yellow-200 font-medium">
          Bienvenido!{" "}
          <span className="text-violet-700 font-bold">Da clic</span> a una de
          las <span className="text-orange-300 font-bold">imágenes</span> de
          abajo y diviértete.
        </p>
      </header>

      <main className="bg-blue-400 flex flex-wrap justify-center items-start gap-8 p-4">
        {/** Grupos de animales */}
        {[1, 2, 3, 4, 5, 6].map((group, index) => (
          <AnimalGroup key={index} group={group} points={points} onClick={HandleClick} />
        ))}
      </main>
    </div>
  );
};

export default Home;

const GameOverModal = ({ resetGame }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-red-600 mb-4">¡Juego Terminado!</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={resetGame}
      >
        Reiniciar Juego
      </button>
    </div>
  </div>
);

const AnimalGroup = ({ group, points, onClick }) => {
  const animals = [
    { name: "Zorro", image: "/fox.jpg", sound: "/sounds/fox.mp3" },
    { name: "Elefante", image: "/elephant.jpg", sound: "/sounds/elefante.mp3" },
    { name: "Perro", image: "/dog.png", sound: "/sounds/dog.mp3" },
  ];

  return (
    <div className="flex flex-col gap-4 bg-blue-200 p-4 rounded-lg shadow-md max-w-xs w-full sm:w-auto">
      <h2 className="text-yellow-600 font-bold text-lg sm:text-xl">
        Haz click en el {animals[group % animals.length].name}!
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {animals.map((animal, index) => (
          <InteractiveBtn
            key={index}
            imageAnimal={animal.image}
            soundAnimal={animal.sound}
            onClick={onClick}
          />
        ))}
      </div>
      <p className="text-yellow-400 font-bold text-lg sm:text-2xl">
        {points}/7
      </p>
    </div>
  );
};

const InteractiveBtn = ({ imageAnimal, soundAnimal, onClick }) => {
  const [isActive, setActive] = useState(false);

  const playSound = () => {
    const audio = new Audio(soundAnimal);
    audio.play();
  };

  const toggleButton = () => {
    setActive(!isActive);
    !isActive && playSound();
    onClick && onClick();
  };

  return (
    <div className="p-2 rounded-lg bg-slate-300 hover:bg-slate-400">
      <img
        className={`w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg transition-all duration-300 ${
          isActive
            ? "scale-110 brightness-125"
            : "grayscale hover:scale-105 hover:grayscale-0"
        }`}
        onClick={toggleButton}
        src={imageAnimal}
        alt="Animal"
      />
    </div>
  );
};
          
