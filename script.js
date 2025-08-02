
const preguntas = [
  {
    texto: "1. ¿Cuál de las siguientes actividades disfrutas más?",
    opciones: ["Escuchar música", "Ver películas", "Bailar con buena música"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "2. ¿Qué programa de televisión prefieres?",
    opciones: ["Reportajes de descubrimientos y lugares", "Cómico y de entretenimiento", "Noticias del mundo"],
    valores: ["A", "C", "B"]
  },
  {
    texto: "3. Cuando conversas con otra persona, tú:",
    opciones: ["La escuchas atentamente", "La observas", "Tiendes a tocarla"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "4. Si pudieras adquirir uno de los siguientes artículos, ¿cuál elegirías?",
    opciones: ["Un jacuzzi", "Un estéreo", "Un televisor"],
    valores: ["C", "B", "A"]
  },
  {
    texto: "5. ¿Qué prefieres hacer un sábado por la tarde?",
    opciones: ["Quedarte en casa", "Ir a un concierto", "Ir al cine"],
    valores: ["C", "B", "A"]
  },
  {
    texto: "6. ¿Qué tipo de exámenes se te facilitan más?",
    opciones: ["Examen oral", "Examen escrito", "Examen de opción múltiple"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "7. ¿Cómo te orientas más fácilmente?",
    opciones: ["Mediante el uso de un mapa", "Pidiendo indicaciones", "A través de la intuición"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "8. ¿En qué prefieres ocupar tu tiempo en un lugar de descanso?",
    opciones: ["Pensar", "Caminar por los alrededores", "Descansar"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "9. ¿Qué te halaga más?",
    opciones: ["Que te digan que tienes buen aspecto", "Que te digan que tienes un trato muy agradable", "Que te digan que tienes una conversación interesante"],
    valores: ["A", "C", "B"]
  },
  {
    texto: "10. ¿Cuál de estos ambientes te atrae más?",
    opciones: ["Uno en el que se sienta un clima agradable", "Uno en el que se escuchen las olas del mar", "Uno con una hermosa vista al océano"],
    valores: ["C", "B", "A"]
  },
  {
    texto: "11. ¿De qué manera se te facilita aprender algo?",
    opciones: ["Repitiendo en voz alta", "Escribiéndolo varias veces", "Relacionándolo con algo divertido"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "12. ¿A qué evento preferirías asistir?",
    opciones: ["A una reunión social", "A una exposición de arte", "A una conferencia"],
    valores: ["B", "C", "A"]
  },
  {
    texto: "13. ¿De qué manera te formas una opinión de otras personas?",
    opciones: ["Por la sinceridad en su voz", "Por la forma de estrecharte la mano", "Por su aspecto"],
    valores: ["C", "A", "B"]
  },
  {
    texto: "14. ¿Cómo te consideras?",
    opciones: ["Atlético", "Intelectual", "Sociable"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "15. ¿Qué tipo de películas te gustan más?",
    opciones: ["Clásicas", "De acción", "De amor"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "16. ¿Cómo prefieres mantenerte en contacto con otra persona?",
    opciones: ["por correo electrónico", "Tomando un café juntos", "Por teléfono"],
    valores: ["A", "C", "B"]
  },
  {
    texto: "17. ¿Cuál de las siguientes frases se identifican más contigo?",
    opciones: ["Me gusta que mi coche se sienta bien al conducirlo", "Percibo hasta el más ligero ruido que hace mi coche", "Es importante que mi coche esté limpio por fuera y por dentro"],
    valores: ["C", "B", "A"]
  },
  {
    texto: "18. ¿Cómo prefieres pasar el tiempo con tu pareja?",
    opciones: ["Conversando", "Acariciándose", "Mirando algo juntos"],
    valores: ["C", "A", "B"]
  },
  {
    texto: "19. Si no encuentras las llaves en una bolsa",
    opciones: ["La buscas mirando", "Sacudes la bolsa para oír el ruido", "Buscas al tacto"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "20. Cuando tratas de recordar algo, ¿cómo lo haces?",
    opciones: ["A través de imágenes", "A través de emociones", "A través de sonidos"],
    valores: ["A", "C", "B"]
  },
  {
    texto: "21. Si tuvieras dinero, ¿qué harías?",
    opciones: ["Comprar una casa", "Viajar y conocer el mundo", "Adquirir un estudio de grabación"],
    valores: ["B", "C", "A"]
  },
  {
    texto: "22. ¿Con qué frase te identificas más?",
    opciones: ["Reconozco a las personas por su voz", "No recuerdo el aspecto de la gente", "Recuerdo el aspecto de alguien, pero no su nombre"],
    valores: ["C", "A", "B"]
  },
  {
    texto: "23. Si tuvieras que quedarte en una isla desierta, ¿qué preferirías llevar contigo?",
    opciones: ["Algunos buenos libros", "Un radio portátil de alta frecuencia", "Golosinas y comida enlatada"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "24. ¿Cuál de los siguientes entretenimientos prefieres?",
    opciones: ["Tocar un instrumento musical", "Sacar fotografías", "Actividades manuales"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "25. ¿Cómo es tu forma de vestir?",
    opciones: ["Impecable", "Informal", "Muy informal"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "26. ¿Qué es lo que más te gusta de una fogata nocturna?",
    opciones: ["El calor del fuego y los bombones asados", "El sonido del fuego quemando la leña", "Mirar el fuego y las estrellas"],
    valores: ["C", "B", "A"]
  },
  {
    texto: "27. ¿Cómo se te facilita entender algo?",
    opciones: ["Cuando te lo explican verbalmente", "Cuando utilizan medios visuales", "Cuando se realiza a través de alguna actividad"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "28. ¿Por qué te distingues?",
    opciones: ["Por tener una gran intuición", "Por ser un buen conversador", "Por ser un buen observador"],
    valores: ["C", "B", "A"]
  },
  {
    texto: "29. ¿Qué es lo que más disfrutas de un amanecer?",
    opciones: ["La emoción de vivir un nuevo día", "Las tonalidades del cielo", "El canto de las aves"],
    valores: ["B", "C", "A"]
  },
  {
    texto: "30. Si pudieras elegir ¿qué preferirías ser?",
    opciones: ["Un gran médico", "Un gran músico", "Un gran pintor"],
    valores: ["C", "B", "A"]
  },
  {
    texto: "31. Cuando eliges tu ropa, ¿qué es lo más importante para ti?",
    opciones: ["Que sea adecuada", "Que luzca bien", "Que sea cómoda"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "32. ¿Qué es lo que más disfrutas de una habitación?",
    opciones: ["Que sea silenciosa", "Que sea confortable", "Que esté limpia y ordenada"],
    valores: ["C", "A", "B"]
  },
  {
    texto: "33. ¿Qué es más sexy para ti?",
    opciones: ["Una iluminación tenue", "El perfume", "Cierto tipo de música"],
    valores: ["A", "C", "B"]
  },
  {
    texto: "34. ¿A qué tipo de espectáculo preferirías asistir?",
    opciones: ["A un concierto de música", "A un espectáculo de magia", "A una muestra gastronómica"],
    valores: ["B", "A", "C"]
  },
  {
    texto: "35. ¿Qué te atrae más de una persona?",
    opciones: ["Su trato y forma de ser", "Su aspecto físico", "Su conversación"],
    valores: ["B", "C", "A"]
  },
  {
    texto: "36. Cuando vas de compras, ¿en dónde pasas mucho tiempo?",
    opciones: ["En una librería", "En una perfumería", "En una tienda de discos"],
    valores: ["A", "C", "B"]
  },
  {
    texto: "37. ¿Cuál es tu idea de una noche romántica?",
    opciones: ["A la luz de las velas", "Con música romántica", "Bailando tranquilamente"],
    valores: ["A", "B", "C"]
  },
  {
    texto: "38. ¿Qué es lo que más disfrutas de viajar?",
    opciones: ["Conocer personas y hacer nuevos amigos", "Conocer lugares nuevos", "Aprender sobre otras costumbres"],
    valores: ["B", "C", "A"]
  },
  {
    texto: "39. Cuando estás en la ciudad, ¿qué es lo que más hechas de menos del campo?",
    opciones: ["El aire limpio y refrescante", "Los paisajes", "La tranquilidad"],
    valores: ["B", "C", "A"]
  },
  {
    texto: "40. Si te ofrecieran uno de los siguientes empleos, ¿cuál elegirías?",
    opciones: ["Director de una estación de radio", "Director de un club deportivo", "Director de una revista"],
    valores: ["C", "A", "B"]
  }
];

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

  // Reiniciar totales
  totales.visual = 0;
  totales.auditivo = 0;
  totales.cinestesico = 0;

  const respuestas = document.querySelectorAll("input[type=radio]:checked");

  respuestas.forEach(r => {
    if (r.value === "A") totales.visual++;
    else if (r.value === "B") totales.auditivo++;
    else if (r.value === "C") totales.cinestesico++;
  });

  let resultado = "";
  const max = Math.max(totales.visual, totales.auditivo, totales.cinestesico);

  if (totales.visual === max) {
    resultado = "Tu estilo perceptivo dominante es VISUAL.\\nAprendes mejor observando imágenes, colores, formas y movimientos.";
  } else if (totales.auditivo === max) {
    resultado = "Tu estilo perceptivo dominante es AUDITIVO.\\nAprendes mejor escuchando sonidos, palabras y explicaciones verbales.";
  } else {
    resultado = "Tu estilo perceptivo dominante es CINESTÉSICO.\\nAprendes mejor a través del movimiento, la manipulación y la experiencia física.";
  }

  // Agregar conteo de respuestas
    },
  {
  resultado += "\\n\\nConteo de respuestas:";}
                                                       },
  {
  resultado += `\\nVisual: ${totales.visual}`;}
                                                       },
  {
  resultado += `\\nAuditivo: ${totales.auditivo}`;}
                                                       },
  {
  resultado += `\\nCinestésico: ${totales.cinestesico}`;}
}
  // Mostrar resultado
  document.getElementById("resultado").textContent = resultado;
});
