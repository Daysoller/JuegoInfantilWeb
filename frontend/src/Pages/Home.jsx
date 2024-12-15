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
    <div className="h-screen">
      {Open && <GameOverModal resetGame={ResetBtn} />}

      <div className=" bg-blue-400 flex justify-start">
        <img
          onClick={ResetBtn}
          className="mr-72 ml-6 mt-8 w-14 h-14 cursor-pointer"
          src="reset.png"
          alt="Reset"
        />
        <p className="bg-blue-400  text-2xl font-normal text-yellow-200 p-4">
          Bienvenido!
          <span className="mx-2 text-violet-700 font-extrabold">Da clic</span> a
          una de las
          <span className="text-orange-300 mx-2 font-bold">imágenes</span> de
          abajo y diviértete.
        </p>
      </div>

      <div className="bg-blue-400 flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-yellow-600 text-slate-100 p-4 rounded-lg text-center">
            Haz <span className="font-extrabold">click</span> en el
            <span className="font-bold mx-1">Zorro!</span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/ciervo.jpg"
                soundAnimal="/sounds/venado.mp3"
              />
            </div>

            <InteractiveBtn
              imageAnimal="/fox.jpg"
              soundAnimal="/sounds/fox.mp3"
            />
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/elephant.jpg"
                soundAnimal="/sounds/elefante.mp3"
              />
            </div>
          </div>
          <label className="text-yellow-300 text-3xl font-bold">
            {points}/7
          </label>
        </div>
      </div>
      <div className="bg-blue-400 flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-yellow-600 text-slate-100 p-4 rounded-lg text-center">
            Haz <span className="font-extrabold">click</span> en el
            <span className="font-bold mx-1">Rino!</span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/cat.jpg"
                soundAnimal="/sounds/cat.wav"
              />
            </div>
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/coyote.jpg"
                soundAnimal="/sounds/coyote.mp3"
              />
            </div>

            <InteractiveBtn
              imageAnimal="/rino.jpg"
              soundAnimal="/sounds/rinoceronte.mp3"
            />
          </div>
          <label className="text-yellow-300 text-3xl font-bold">
            {points}/7
          </label>
        </div>
      </div>
      <div className="bg-blue-400 flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-yellow-600 text-slate-100 p-4 rounded-lg text-center">
            Haz <span className="font-extrabold">click</span> en el
            <span className="font-bold mx-1">Perro!</span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <InteractiveBtn
              imageAnimal="/dog.png"
              soundAnimal="/sounds/dog.mp3"
            />
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/jiraff.jpg"
                soundAnimal="/sounds/jirafa.mp3"
              />
            </div>
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/lion.jpg"
                soundAnimal="/sounds/leon.mp3"
              />
            </div>
          </div>
          <label className="text-yellow-300 text-3xl font-bold">
            {points}/7
          </label>
        </div>
      </div>
      <div className="bg-blue-400 flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-yellow-600 text-slate-100 p-4 rounded-lg text-center">
            Haz <span className="font-extrabold">click</span> en el
            <span className="font-bold mx-1">lobo!</span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/lince.jpg"
                soundAnimal="/sounds/linx.mp3"
              />
            </div>

            <InteractiveBtn
              imageAnimal="/wolf.jpg"
              soundAnimal="/sounds/lobo.mp3"
            />
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/rino.jpg"
                soundAnimal="/sounds/rinoceronte.mp3"
              />
            </div>
          </div>
          <label className="text-yellow-300 text-3xl font-bold">
            {points}/7
          </label>
        </div>
      </div>
      <div className="bg-blue-400 flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-yellow-600 text-slate-100 p-4 rounded-lg text-center">
            Haz <span className="font-extrabold">click</span> en el
            <span className="font-bold mx-1">Caballo!</span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <InteractiveBtn
              imageAnimal="/caballo.jpg"
              soundAnimal="/sounds/caballo.mp3"
            />
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/fox.jpg"
                soundAnimal="/sounds/fox.mp3"
              />
            </div>
            <div>
              <InteractiveBtn
                imageAnimal="/elephant.jpg"
                soundAnimal="/sounds/elefante.mp3"
              />
            </div>
          </div>
          <label className="text-yellow-300 text-3xl font-bold">
            {points}/7
          </label>
        </div>
      </div>
      <div className="bg-blue-400 flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-yellow-600 text-slate-100 p-4 rounded-lg text-center">
            Haz <span className="font-extrabold">click</span> en el
            <span className="font-bold mx-1">cuervo!</span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <InteractiveBtn
              imageAnimal="/cuervo.png"
              soundAnimal="/sounds/cuervo.mp3"
            />
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/dog.png"
                soundAnimal="/sounds/dog.mp3"
              />
            </div>
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/rino.jpg"
                soundAnimal="/sounds/rinoceronte.mp3"
              />
            </div>
          </div>
          <label className="text-yellow-300 text-3xl font-bold">
            {points}/7
          </label>
        </div>
      </div>
      <div className="bg-blue-400 flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-yellow-600 text-slate-100 p-4 rounded-lg text-center">
            Haz <span className="font-extrabold">click</span> en el
            <span className="font-bold mx-1">coyote!</span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <InteractiveBtn
              imageAnimal="/coyote.jpg"
              soundAnimal="/sounds/coyote.mp3"
            />
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/cat.jpg"
                soundAnimal="/sounds/cat.wav"
              />
            </div>
            <div onClick={HandleClick}>
              <InteractiveBtn
                imageAnimal="/lince.jpg"
                soundAnimal="/sounds/linx.mp3"
              />
            </div>
          </div>
          <label className="text-yellow-300 text-3xl font-bold">
            {points}/7
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;

// eslint-disable-next-line react/prop-types
const GameOverModal = ({ resetGame }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          ¡Juego Terminado!
        </h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={resetGame}
        >
          Reiniciar Juego
        </button>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
function InteractiveBtn({ imageAnimal, soundAnimal }) {
  const [isActive, setActive] = useState(false);

  const playSound = () => {
    const audio = new Audio(soundAnimal);
    audio.play();
  };
  const toggleButton = () => {
    setActive(!isActive);
    !isActive && playSound();
  };

  return (
    <div className="bg-slate-300 p-2 rounded-lg">
      <img
        style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
        className={`transition-all duration-300 transform ${
          isActive
            ? "grayscale-0 scale-110 brightness-125"
            : "grayscale hover:scale-110"
        }`}
        onClick={toggleButton}
        src={imageAnimal}
        alt="Animal"
      />
    </div>
  );
}
