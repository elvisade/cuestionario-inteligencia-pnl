
const preguntas = [
  { texto: "1. ¿Cuál de las siguientes actividades disfrutas más?",
    opciones: ["Escuchar música", "Ver películas", "Bailar con buena música"],
    valores: ["A", "B", "C"]
  },
  { texto: "2. ¿Qué programa de televisión prefieres?",
    opciones: ["Reportajes de descubrimientos y lugares", "Cómico y de entretenimiento", "Noticias del mundo"],
    valores: ["A", "C", "B"]
  },
  { texto: "3. Cuando conversas con otra persona, tú:",
    opciones: ["La escuchas atentamente", "La observas", "Tiendes a tocarla"],
    valores: ["A", "B", "C"]
  },
  // (...) Aquí van las preguntas 4 a 40 con valores respectivos
  // Para simplificar la demo, pondremos 5 preguntas. Se puede ampliar fácilmente.
  { texto: "4. Si pudieras adquirir uno de los siguientes artículos, ¿cuál elegirías?",
    opciones: ["Un jacuzzi", "Un estéreo", "Un televisor"],
    valores: ["A", "B", "C"]
  },
  { texto: "5. ¿Qué prefieres hacer un sábado por la tarde?",
    opciones: ["Quedarte en casa", "Ir a un concierto", "Ir al cine"],
    valores: ["A", "B", "C"]
  }
];

const tablaConversion = {
  A: { visual: 0, auditivo: 1, cinestesico: 2 },
  B: { visual: 1, auditivo: 2, cinestesico: 0 },
  C: { visual: 2, auditivo: 0, cinestesico: 1 }
};

const totales = { visual: 0, auditivo: 0, cinestesico: 0 };

const contenedor = document.getElementById("preguntas");

preguntas.forEach((p, idx) => {
  const div = document.createElement("div");
  div.classList.add("question");
  const texto = document.createElement("p");
  texto.textContent = p.texto;
  div.appendChild(texto);
  p.opciones.forEach((opcion, i) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "q" + idx;
    input.value = p.valores[i];
    input.required = true;
    const label = document.createElement("label");
    label.textContent = opcion;
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });
  contenedor.appendChild(div);
});

document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const respuestas = document.querySelectorAll("input[type=radio]:checked");
  respuestas.forEach((r, i) => {
    const val = tablaConversion[r.value];
    if (val.visual === i % 3) totales.visual++;
    else if (val.auditivo === i % 3) totales.auditivo++;
    else totales.cinestesico++;
  });

  let resultado = "";
  const max = Math.max(totales.visual, totales.auditivo, totales.cinestesico);
  if (totales.visual === max) resultado = "Tu estilo predominante es VISUAL. Aprendes mejor observando.";
  else if (totales.auditivo === max) resultado = "Tu estilo predominante es AUDITIVO. Aprendes mejor escuchando.";
  else resultado = "Tu estilo predominante es CINESTÉSICO. Aprendes mejor haciendo y sintiendo.";

  document.getElementById("resultado").textContent = resultado;
});
