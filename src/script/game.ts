const piedra = document.querySelector<HTMLButtonElement>("#piedra");
const papel = document.querySelector<HTMLButtonElement>("#papel");
const tijera = document.querySelector<HTMLButtonElement>("#tijera");

piedra?.addEventListener("click", (event) => {
  const option = "piedra";

  piedra.classList.add("bg-yellow-100", "border-yellow-500");
  papel?.classList.remove("bg-yellow-100", "border-yellow-500");
  tijera?.classList.remove("bg-yellow-100", "border-yellow-500");

  const cpuOption = getCpu();
  const resultado = compareOptions(option, cpuOption);

  showResult(resultado);
  showCpu(cpuOption);
});
papel?.addEventListener("click", (event) => {
  const option = "papel";

  papel.classList.add("bg-yellow-100", "border-yellow-500");
  piedra?.classList.remove("bg-yellow-100", "border-yellow-500");
  tijera?.classList.remove("bg-yellow-100", "border-yellow-500");

  const cpuOption = getCpu();
  const resultado = compareOptions(option, cpuOption);

  showResult(resultado);
  showCpu(cpuOption);
});
tijera?.addEventListener("click", (event) => {
  const option = "tijera";

  tijera.classList.add("bg-yellow-100", "border-yellow-500");
  piedra?.classList.remove("bg-yellow-100", "border-yellow-500");
  papel?.classList.remove("bg-yellow-100", "border-yellow-500");

  const cpuOption = getCpu();
  const resultado = compareOptions(option, cpuOption);

  showResult(resultado);
  showCpu(cpuOption);
});

function getCpu() {
  const random = Math.random() * 100;

  if (random < 33) {
    return "piedra";
  }
  if (random < 66) {
    return "papel";
  }
  return "tijera";
}
function compareOptions(jugador: string, cpu: string) {
  if (jugador === cpu) {
    return "empate";
  }

  if (jugador === "piedra" && cpu === "papel") {
    return "cpu";
  }

  if (jugador === "piedra" && cpu === "tijera") {
    return "jugador";
  }

  if (jugador === "papel" && cpu === "tijera") {
    return "cpu";
  }

  if (jugador === "papel" && cpu === "piedra") {
    return "jugador";
  }

  if (jugador === "tijera" && cpu === "piedra") {
    return "cpu";
  }

  if (jugador === "tijera" && cpu === "papel") {
    return "jugador";
  }
  return "cpu";
}
function showResult(resultado: string) {
  const empate = document.querySelector("#empate");
  const jugador = document.querySelector("#ganaste");
  const cpu = document.querySelector("#perdiste");

  if (!empate?.classList.contains("hidden")) {
    empate?.classList.toggle("hidden");
  }

  if (!jugador?.classList.contains("hidden")) {
    jugador?.classList.toggle("hidden");
  }

  if (!cpu?.classList.contains("hidden")) {
    cpu?.classList.toggle("hidden");
  }

  if (resultado === "empate") {
    empate?.classList.toggle("hidden");
  }

  if (resultado === "jugador") {
    jugador?.classList.toggle("hidden");
  }

  if (resultado === "cpu") {
    const cpu = document.querySelector("#perdiste");
    cpu?.classList.toggle("hidden");
  }
}
function showCpu(cpuOption: string) {
  const cpuPapel = document.querySelector("#cpu-papel");
  const cpuPiedra = document.querySelector("#cpu-piedra");
  const cpuTijera = document.querySelector("#cpu-tijera");

  cpuPapel?.classList.remove("bg-yellow-100", "border-yellow-500");
  cpuPiedra?.classList.remove("bg-yellow-100", "border-yellow-500");
  cpuTijera?.classList.remove("bg-yellow-100", "border-yellow-500");

  if (cpuOption === "papel") {
    cpuPapel?.classList.add("bg-yellow-100", "border-yellow-500");
  }

  if (cpuOption === "piedra") {
    cpuPiedra?.classList.add("bg-yellow-100", "border-yellow-500");
  }

  if (cpuOption === "tijera") {
    cpuTijera?.classList.add("bg-yellow-100", "border-yellow-500");
  }
}
