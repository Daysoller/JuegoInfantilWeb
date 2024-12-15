import { useState } from "react";

const Home = () => {
  const [points, setPoints] = useState(7);
  const [count, setCount] = useState(0);
  const [Open, isOpen] = useState(false);

  const [currentAnimal, setCurrentAnimal] = useState(null);

  // Función para verificar si el animal es correcto
  const HandleClick = (clickedAnimal) => {
    if (clickedAnimal === currentAnimal) {
      console.log("Correcto!");
    } else {
      points > 1 ? setPoints(points - 1) : setPoints(0);
      console.log("Incorrecto!");
    }

    if (count < 6) {
      setCount(count + 1);
      setCurrentAnimal(null);
    } else {
      isOpen(true); // Termina el juego
    }
  };

  const ResetBtn = () => {
    setPoints(7);
    setCount(0);
    isOpen(false);
    setCurrentAnimal(null);
    window.location.reload();
  };

  return (
    <div className="h-screen w-full max-w-screen overflow-x-hidden bg-blue-400">
      {Open && <GameOverModal resetGame={ResetBtn} />}

      <header className="bg-blue-400 p-4 flex justify-between items-center">
        <img
          onClick={ResetBtn}
          className="w-12 h-12 cursor-pointer"
          src="reset.png"
          alt="Reset"
        />
        <p className="text-lg sm:text-xl md:text-2xl text-yellow-200 font-medium">
          Bienvenido! <span className="text-violet-700 font-bold">Da clic</span>{" "}
          al animal correcto.
        </p>
      </header>

      <main className="bg-blue-400 flex flex-wrap justify-center items-start gap-8 p-4">
        <AnimalGroup
          count={count}
          onCorrectAnimal={(animal) => setCurrentAnimal(animal)}
          onClickAnimal={HandleClick}
          points={points}
        />
      </main>
    </div>
  );
};

export default Home;

const GameOverModal = ({ resetGame }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Juego Terminado!</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={resetGame}
      >
        Reiniciar Juego
      </button>
    </div>
  </div>
);

const AnimalGroup = ({ count, onCorrectAnimal, onClickAnimal, points }) => {
  const animals = [
    { name: "Zorro", image: "fox.jpg", sound: "sounds/Fox.mp3" },
    { name: "Elefante", image: "elephant.jpg", sound: "sounds/Elefante.mp3" },
    { name: "Perro", image: "dog.png", sound: "sounds/Dog.mp3" },
    { name: "Gato", image: "cat.jpg", sound: "sounds/cat.wav" },
    { name: "León", image: "lion.jpg", sound: "sounds/Leon.mp3" },
    { name: "Lobo", image: "wolf.jpg", sound: "sounds/Lobo.mp3" },
  ];

  const targetAnimal = animals[count % animals.length];
  onCorrectAnimal(targetAnimal.name);

  return (
    <div>
      <div className="flex bg-blue-200 p-4 rounded-lg shadow-md max-w-xs w-full sm:w-auto">
        <div className="flex flex-wrap justify-center gap-4 sm:grid sm:gap-8 lg:flex lg:flex-row lg:gap-8 xl:flex xl:flex-row xl:gap-8">
          <h2 className="text-yellow-600 font-bold text-lg sm:text-xl">
            Haz click en el {targetAnimal.name}!
          </h2>
          {animals.map((animal, index) => (
            <InteractiveBtn
              key={index}
              imageAnimal={animal.image}
              soundAnimal={animal.sound}
              onClick={() => onClickAnimal(animal.name)}
            />
          ))}
        </div>

        <p className="text-yellow-400 font-bold text-lg sm:text-2xl">
          {points}/7
        </p>
      </div>
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
