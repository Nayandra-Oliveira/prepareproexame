/* ==========================================================
   STRINGS DE INTERFACE (3 IDIOMAS)
========================================================== */

export const STR = {
  pt: {
    brandSubtitle: "Entenda. Prepare-se. Cuide-se.",
    searchPlaceholder: "Buscar exame ou medicamento…",
    contrast: "Alto contraste",
    printCat: "Imprimir PDF desta categoria",
    categories: {
      lab:   "Exames laboratoriais",
      image: "Exames de imagem",
      meds:  "Medicamentos"
    },
    blocks: {
      prep:   "Preparo",
      during: "Durante o exame/uso",
      after:  "Cuidados após",
      risks:  "Riscos se não seguir",
      tips:   "Dicas práticas"
    },
    aboutTitle: "Sobre o PrepareExame",
    aboutText:
      "Projeto educativo para preparar pessoas para exames clínicos e uso seguro de medicamentos.",
    heroPhrase:
      "Você <span class='em'>entende</span> o que está <span class='em'>fazendo</span> e<br>" +
      "por isso se <span class='em'>cuida melhor!</span>"
  },

  es: {
    brandSubtitle: "Entiende. Prepárate. Cuídate.",
    searchPlaceholder: "Buscar examen o medicamento…",
    contrast: "Alto contraste",
    printCat: "Imprimir PDF de esta categoría",
    categories: {
      lab:   "Análisis de laboratorio",
      image: "Exámenes de imagen",
      meds:  "Medicamentos"
    },
    blocks: {
      prep:   "Preparación",
      during: "Durante el examen/uso",
      after:  "Cuidados después",
      risks:  "Riesgos si no sigue",
      tips:   "Consejos prácticos"
    },
    aboutText:
      "Proyecto educativo para preparar a las personas para exámenes clínicos y uso seguro de medicamentos.",
    heroPhrase:
      "Tú <span class='em'>entiendes</span> lo que estás <span class='em'>haciendo</span> y<br>" +
      "por eso te <span class='em'>cuidas mejor!</span>"
  },

  en: {
    brandSubtitle: "Understand. Prepare. Take care.",
    searchPlaceholder: "Search for a test or medication…",
    contrast: "High contrast",
    printCat: "Print this category",
    categories: {
      lab:   "Laboratory tests",
      image: "Imaging exams",
      meds:  "Medications"
    },
    blocks: {
      prep:   "Preparation",
      during: "During exam/use",
      after:  "Aftercare",
      risks:  "Risks if not followed",
      tips:   "Practical tips"
    },
    aboutText:
      "Educational project to help people prepare for clinical exams and use medications safely.",
    heroPhrase:
      "You <span class='em'>understand</span> what you are <span class='em'>doing</span> and<br>" +
      "therefore <span class='em'>take better care</span> of yourself!"
  }
};



/* ==========================================================
   BASE DE DADOS — EXAMES E MEDICAMENTOS
========================================================== */

export const DATA = {

  /* ======================================================
     🇧🇷 PORTUGUÊS
  ====================================================== */
  pt: [

    /* ----------------------------- */
    /* HEMOGRAMA */
    /* ----------------------------- */
    {
      id: "hemograma",
      title: "Hemograma",
      category: "lab",
      tags: ["jejum", "sangue"],
      blocks: {
        prep:
          "Jejum de 8 a 12 horas, conforme orientação do laboratório. Pode beber pequena quantidade de água. Evite álcool, café, alimentos gordurosos e exercícios físicos 24h antes. Informe medicamentos em uso.",
        during:
          "Coleta por punção venosa no braço. Mantenha o braço relaxado e avise o profissional caso tenha histórico de desmaio ou medo de agulha.",
        after:
          "Pressione o local por 3–5 minutos. Evite carregar peso com o braço puncionado. Procure o serviço se houver dor intensa, inchaço ou hematoma escuro.",
        risks:
          "Jejum incorreto ou esforço físico recente pode alterar leucócitos, glicose e lipídios. Falta de compressão adequada gera hematomas.",
        tips:
          "Peça coleta deitado se costuma desmaiar.\n" +
          "🎥 *Vídeos úteis:*\n" +
          "- Jejum para exames de sangue: https://www.youtube.com/watch?v=phQBec59wZw\n" +
          "- O que é hemograma: https://www.youtube.com/watch?v=SgE7pbkn9b0"
      }
    },

    /* ----------------------------- */
    /* URINA TIPO I */
    /* ----------------------------- */
    {
      id: "urina",
      title: "Urina tipo I",
      category: "lab",
      tags: ["urina", "coleta"],
      blocks: {
        prep:
          "Use frasco estéril. Lave a região genital com água. Mulheres menstruadas devem avisar o laboratório.",
        during:
          "Despreze o primeiro jato. Colha o jato médio, sem encostar o frasco na pele.",
        after:
          "Entregue em até 2 horas ou mantenha refrigerado. Não exponha ao calor.",
        risks:
          "Coleta inadequada gera contaminação e resultados falsos.",
        tips:
          "🎥 *Vídeos úteis:*\n" +
          "- Como coletar urina corretamente: https://www.youtube.com/watch?v=tRgL8lxM0WY"
      }
    },

    /* ----------------------------- */
    /* FEZES */
    /* ----------------------------- */
    {
      id: "fezes",
      title: "Exame de Fezes",
      category: "lab",
      tags: ["fezes", "parasitologia"],
      blocks: {
        prep:
          "Coletar em frasco próprio. Não misturar com urina. Evitar laxantes sem orientação.",
        during:
          "Coletar pequena porção representativa. Em exames específicos, seguir instruções do laboratório.",
        after:
          "Enviar ao laboratório rapidamente. Manter refrigerado se houver atraso.",
        risks:
          "Amostra contaminada ou envelhecida altera o resultado.",
        tips:
          "🎥 Vídeo sobre coleta correta de fezes: https://www.youtube.com/watch?v=JokjRzCQXDg"
      }
    },

    /* ----------------------------- */
    /* RX */
    /* ----------------------------- */
    {
      id: "rx",
      title: "Radiografia (Raio-X)",
      category: "image",
      tags: ["raio-x", "imagem"],
      blocks: {
        prep:
          "Retire acessórios metálicos. Leve exames anteriores. Avise se houver possibilidade de gravidez.",
        during:
          "Fique imóvel durante a exposição. Pode ser solicitado segurar a respiração.",
        after:
          "Retorno imediato às atividades.",
        risks:
          "Baixa dose de radiação. Evite exposições repetidas.",
        tips:
          "🎥 Como funciona o Raio-X: https://www.youtube.com/watch?v=tFEU2VJn5pY"
      }
    },

    /* ----------------------------- */
    /* ULTRASSOM */
    /* ----------------------------- */
    {
      id: "usg",
      title: "Ultrassonografia",
      category: "image",
      tags: ["imagem", "ultrassom"],
      blocks: {
        prep:
          "Alguns exames exigem bexiga cheia; outros, jejum. Siga o pedido do laboratório.",
        during:
          "Exame rápido e indolor. O profissional aplica gel e desliza o transdutor.",
        after:
          "Rotina normal.",
        risks:
          "Método seguro, sem radiação.",
        tips:
          "🎥 Ultrassom explicado: https://www.youtube.com/watch?v=t9z9JZHJ2yM"
      }
    },

    /* ----------------------------- */
    /* TOMOGRAFIA */
    /* ----------------------------- */
    {
      id: "tomo",
      title: "Tomografia Computadorizada",
      category: "image",
      tags: ["imagem", "tomo"],
      blocks: {
        prep:
          "Alguns exames usam contraste. Informe alergias e problemas renais.",
        during:
          "Exame rápido. Fique imóvel. Pode haver sensação de calor ao injetar contraste.",
        after:
          "Hidratação recomendada após contraste.",
        risks:
          "Envolve radiação. Contraste pode causar reações.",
        tips:
          "🎥 Tomografia explicada: https://www.youtube.com/watch?v=0pNfYPdzEY4"
      }
    },

    /* ----------------------------- */
    /* Ressonância Magnética */
    /* ----------------------------- */
    {
      id: "rm",
      title: "Ressonância Magnética",
      category: "image",
      tags: ["ressonância"],
      blocks: {
        prep:
          "Remova objetos metálicos. Avise sobre implantes, marcapasso ou claustrofobia.",
        during:
          "Equipamento barulhento. Fique imóvel. Dura 15–40 min.",
        after:
          "Se usar contraste, beba água. Se sedado, precisa acompanhante.",
        risks:
          "Certos implantes são contraindicados. Pode haver reação ao contraste.",
        tips:
          "🎥 Claustrofobia na RM: https://www.youtube.com/watch?v=Heqs0vV50kk"
      }
    },

    /* ----------------------------- */
    /* FLEET + ENEMA */
    /* ----------------------------- */
    {
      id: "fleet",
      title: "Fleet + Enema",
      category: "meds",
      tags: ["laxante", "preparo"],
      blocks: {
        prep:
          "O Fleet Enema provoca evacuação rápida por aumento da osmolaridade intestinal.\n\n" +
          "Antes do uso:\n" +
          "• Hidrate-se bem (250–500 mL de água).\n" +
          "• Evite refeições gordurosas nas horas anteriores.\n" +
          "• Evite usar se houver desidratação, vômitos intensos ou dor abdominal não explicada.\n" +
          "• Contraindicado para insuficiência renal, insuficiência cardíaca e megacólon.\n",
        during:  
        "É esperado sentir cólicas, distensão e forte urgência evacuatória.\n\n" +
        "Mantenha-se próximo ao banheiro, pois a evacuação é rápida e intensa.\n\n" +
        "Aplique conforme instruções da bula:\n" +
        "• Retirar a tampa protetora,\n" +
        "• Lubrificar a ponta,\n" +
        "• Inserir suavemente no reto,\n" +
        "• Apertar o frasco COMPLETO, mantendo a compressão ao retirar.\n\n" +
        "Se houver dor intensa, sangramento ou incapacidade de reter a solução por alguns segundos, interrompa e procure orientação.",
         after:
          "Reponha líquidos após o uso (300–500 mL de água nas primeiras horas).\n\n" +
          "Evite repetir a dose no mesmo dia.\n" +
          "Prefira alimentos leves nas próximas refeições (sopas, frutas, arroz).\n" +
          "Observe sinais de desidratação: boca seca, tontura, fraqueza.\n" +
          "Se houver irritação anal, pode usar pomada calmante (ex.: óxido de zinco).\n",
        risks:
         "Se usado incorretamente, pode causar alteração de eletrólitos:\n" +
          "• Hipernatremia\n" +
          "• Hipocalcemia\n" +
          "• Hiperfosfatemia\n" +
          "• Hipopotassemia\n\n" +
          "Risco maior em crianças, idosos e pessoas com problemas renais.\n" +
          "Pode interferir em exames laboratoriais de eletrólitos.\n" +
          "Raramente, pode ocorrer insuficiência renal aguda.\n",
        tips:
            "Use lubrificante na ponta para reduzir desconforto.\n" +
             "Realize o procedimento deitado sobre o lado esquerdo.\n" +
             "Tente reter a solução por 2–3 minutos antes de evacuar.\n" +
             "Evite uso noturno.\n" +
             "Não utilize mais de 1 dose em 24h.\n" +
             "Vídeo recomendado: https://www.youtube.com/watch?v=GccT0BmV5xg\n"   
      }
    },

    /* ----------------------------- */
    /* BOMBINHA MDI */
    /* ----------------------------- */
    {
      id: "mdi",
      title: "Bombinha Inaladora (MDI)",
      category: "meds",
      tags: ["inalador", "asma"],
      blocks: {
        prep:
          "Agite o frasco. Use espaçador se possível.",
        during:
          "Inspire lentamente enquanto aciona o jato. Segure por 10 segundos.",
        after:
          "Se contiver corticoide: enxaguar a boca.",
        risks:
          "Técnica incorreta reduz eficácia.",
        tips:
          "🎥 Como usar bombinha: https://www.youtube.com/watch?v=EUDXvmYBq70"
      }
    }

  ],





  /* ======================================================
     🇺🇸 ENGLISH
  ====================================================== */
  en: [
    {
      id: "hemograma",
      title: "Complete Blood Count (CBC)",
      category: "lab",
      tags: ["fasting", "blood"],
      blocks: {
        prep:
          "8–12h fasting. Avoid alcohol, coffee, fatty food and heavy exercise.",
        during:
          "Blood collected by venipuncture. Relax arm.",
        after:
          "Apply pressure for 3–5 min. Avoid heavy lifting.",
        risks:
          "Wrong fasting alters results.",
        tips:
          "Videos:\nhttps://www.youtube.com/watch?v=SgE7pbkn9b0"
      }
    },

    {
      id: "urina",
      title: "Urinalysis (Type I)",
      category: "lab",
      tags: ["urine"],
      blocks: {
        prep: "Use sterile container.",
        during: "Collect midstream urine.",
        after: "Deliver within 2 hours.",
        risks: "Contamination alters results.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=tRgL8lxM0WY"
      }
    },

    {
      id: "fezes",
      title: "Stool Test",
      category: "lab",
      tags: ["stool"],
      blocks: {
        prep: "Use proper container.",
        during: "Collect representative sample.",
        after: "Keep refrigerated if delayed.",
        risks: "Old samples alter results.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=JokjRzCQXDg"
      }
    },

    {
      id: "rx",
      title: "X-Ray",
      category: "image",
      tags: ["x-ray"],
      blocks: {
        prep: "Remove metal accessories.",
        during: "Stay still.",
        after: "Return to activities.",
        risks: "Low dose radiation.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=tFEU2VJn5pY"
      }
    },

    {
      id: "usg",
      title: "Ultrasound",
      category: "image",
      tags: ["ultrasound"],
      blocks: {
        prep: "Follow lab instructions.",
        during: "Painless, uses gel.",
        after: "Normal routine.",
        risks: "Safe method.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=t9z9JZHJ2yM"
      }
    },

    {
      id: "tomo",
      title: "CT Scan",
      category: "image",
      tags: ["ct"],
      blocks: {
        prep: "Inform allergies.",
        during: "Stay still.",
        after: "Hydrate.",
        risks: "Radiation exposure.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=0pNfYPdzEY4"
      }
    },

    {
      id: "rm",
      title: "MRI",
      category: "image",
      tags: ["mri"],
      blocks: {
        prep: "Remove metal objects.",
        during: "Loud machine.",
        after: "Hydrate if contrast used.",
        risks: "Implants contraindications.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=Heqs0vV50kk"
      }
    },

    {
      id: "fleet",
      title: "Fleet + Enema",
      category: "meds",
      tags: ["laxative"],
      blocks: {
        prep: "Fleet Enema works by drawing water into the intestines, causing rapid evacuation.\n\n" +
          "Before use:\n" +
          "• Drink 250–500 mL of water to ensure hydration.\n" +
          "• Avoid heavy or fatty meals before using the enema.\n" +
          "• Do not use if you have dehydration, severe vomiting, or unexplained abdominal pain.\n" +
          "• Contraindicated in kidney disease, heart failure, and megacolon.\n",
        during: "Cramping, bloating, and strong urgency to evacuate are expected.\n\n" +
          "Stay near a bathroom, as evacuation happens quickly and intensely.\n\n" +
          "Follow the instructions from the package insert:\n" +
          "• Remove the protective cap,\n" +
          "• Lubricate the tip,\n" +
          "• Insert gently into the rectum,\n" +
          "• Squeeze the entire bottle, keeping it compressed while removing the tip.\n\n" +
          "If you experience severe pain, bleeding, or inability to retain the solution even briefly, stop and seek medical advice.\n",
        after:  "Drink 300–500 mL of water after use to rehydrate.\n\n" +
             "Do not repeat the dose on the same day.\n" +
             "Eat light meals afterward (soups, fruits, rice).\n" +
             "Watch for signs of dehydration: dry mouth, dizziness, weakness.\n" +
             "If irritation occurs, a soothing ointment may be used (e.g., zinc oxide).\n",
         risks: "Incorrect use may cause electrolyte disturbances:\n" +
                "• Hypernatremia\n" +
                "• Hypocalcemia\n" +
                "• Hyperphosphatemia\n" +
                "• Hypokalemia\n\n" +
                "Higher risk in children, older adults, and people with kidney problems.\n" +
                "May alter laboratory results related to electrolytes.\n" +
                "In rare cases, may cause acute kidney injury.\n",
         tips: "Apply a lubricant to the tip to reduce discomfort.\n" +
                "Perform the procedure lying on your left side.\n" +
                "Try to retain the solution for 2–3 minutes before evacuating.\n" +
                "Avoid using it at night.\n" +
                "Do not use more than 1 dose in 24 hours.\n" +
                "Recommended video: https://www.youtube.com/watch?v=GccT0BmV5xg\n"
      }
    },

    {
      id: "mdi",
      title: "Inhaler (MDI)",
      category: "meds",
      tags: ["inhaler"],
      blocks: {
        prep: "Shake well.",
        during: "Inhale slowly while pressing.",
        after: "Rinse mouth.",
        risks: "Wrong technique reduces effect.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=EUDXvmYBq70"
      }
    }
  ],



  /* ======================================================
     🇪🇸 ESPAÑOL
  ====================================================== */
  es: [

    {
      id: "hemograma",
      title: "Hemograma completo",
      category: "lab",
      tags: ["sangre"],
      blocks: {
        prep: "Ayuno de 8–12h.",
        during: "Extracción venosa.",
        after: "Presione 3–5 min.",
        risks: "Ayuno incorrecto altera resultados.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=SgE7pbkn9b0"
      }
    },

    {
      id: "urina",
      title: "Análisis de orina",
      category: "lab",
      tags: ["orina"],
      blocks: {
        prep: "Use frasco estéril.",
        during: "Recoja chorro medio.",
        after: "Entregar antes de 2h.",
        risks: "Contaminación altera el examen.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=tRgL8lxM0WY"
      }
    },

    {
      id: "fezes",
      title: "Examen de heces",
      category: "lab",
      tags: ["heces"],
      blocks: {
        prep: "Use frasco adecuado.",
        during: "Recoja muestra representativa.",
        after: "Refrigerar si demora.",
        risks: "Muestra vieja pierde validez.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=JokjRzCQXDg"
      }
    },

    {
      id: "rx",
      title: "Radiografía (Rayos X)",
      category: "image",
      tags: ["rayos-x"],
      blocks: {
        prep: "Quite metales.",
        during: "Permanezca quieto.",
        after: "Actividad normal.",
        risks: "Radiación baja.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=tFEU2VJn5pY"
      }
    },

    {
      id: "usg",
      title: "Ultrasonido",
      category: "image",
      tags: ["imagen"],
      blocks: {
        prep: "Siga instrucciones.",
        during: "Indoloro.",
        after: "Rutina normal.",
        risks: "Método seguro.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=t9z9JZHJ2yM"
      }
    },

    {
      id: "tomo",
      title: "Tomografía computarizada",
      category: "image",
      tags: ["tac"],
      blocks: {
        prep: "Informe alergias.",
        during: "Permanezca inmóvil.",
        after: "Hidratación.",
        risks: "Radiación.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=0pNfYPdzEY4"
      }
    },

    {
      id: "rm",
      title: "Resonancia magnética",
      category: "image",
      tags: ["rm"],
      blocks: {
        prep: "Quite objetos metálicos.",
        during: "Equipo ruidoso.",
        after: "Hidratación tras contraste.",
        risks: "Implantes contraindicados.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=Heqs0vV50kk"
      }
    },

    {
      id: "fleet",
      title: "Fleet + Enema",
      category: "meds",
      tags: ["laxante"],
      blocks: {
        prep: "El Fleet Enema actúa atrayendo agua hacia los intestinos, lo que provoca una evacuación rápida.\n\n" +
             "Antes de usarlo:\n" +
             "• Beba 250–500 mL de agua para mantenerse hidratado.\n" +
             "• Evite comidas pesadas o muy grasosas antes del enema.\n" +
             "• No lo use si presenta deshidratación, vómitos intensos o dolor abdominal sin causa definida.\n" +
             "• Contraindicado para personas con enfermedad renal, insuficiencia cardíaca o megacolon.\n",

        during: "Es esperado sentir cólicos, distensión y una fuerte urgencia para evacuar.\n\n" +
                "Permanezca cerca del baño, ya que la evacuación ocurre de forma rápida e intensa.\n\n" +
                "Siga las instrucciones del prospecto:\n" +
                "• Retire la tapa protectora,\n" +
                "• Lubrique la punta,\n" +
                "• Inserte suavemente en el recto,\n" +
                "• Apriete todo el frasco, manteniéndolo comprimido al retirarlo.\n\n" +
                "Si presenta dolor intenso, sangrado o incapacidad para retener la solución incluso por pocos segundos, suspenda el uso y busque orientación.\n",

        after: "Beba 300–500 mL de agua después del uso para rehidratarse.\n\n" +
                "No repita la dosis en el mismo día.\n" +
                "Prefiera comidas livianas después del procedimiento (sopas, frutas, arroz).\n" +
                "Observe signos de deshidratación: boca seca, mareos, debilidad.\n" +
                "Si ocurre irritación anal, puede usar una pomada calmante (p. ej., óxido de zinc).\n",
        risks:  "El uso incorrecto puede causar alteraciones de electrolitos:\n" +
                "• Hipernatremia\n" +
                "• Hipocalcemia\n" +
                "• Hiperfosfatemia\n" +
                "• Hipopotasemia\n\n" +
                "Mayor riesgo en niños, ancianos y personas con problemas renales.\n" +
                "Puede alterar resultados de laboratorio relacionados con electrolitos.\n" +
                "En casos raros, puede causar lesión renal aguda.\n",
        tips: "Utilice lubricante en la punta para reducir molestias.\n" +
                "Realice el procedimiento recostado sobre el lado izquierdo.\n" +
                "Intente retener la solución por 2–3 minutos antes de evacuar.\n" +
                "Evite usarlo por la noche.\n" +
                "No utilice más de 1 dosis en 24 horas.\n" +
                "Video recomendado: https://www.youtube.com/watch?v=GccT0BmV5xg\n"
      }
    },

    {
      id: "mdi",
      title: "Inhalador (MDI)",
      category: "meds",
      tags: ["inhalador"],
      blocks: {
        prep: "Agite bien.",
        during: "Inhale lentamente al presionar.",
        after: "Enjuague la boca.",
        risks: "Técnica incorrecta reduce efecto.",
        tips: "Video:\nhttps://www.youtube.com/watch?v=EUDXvmYBq70"
      }
    }

  ]

};
