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
    aboutText:  "Projeto educativo para preparar pessoas para exames clínicos e uso seguro de medicamentos.",
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
    aboutTitle: "Sobre PrepareExame",
    aboutText:  "Proyecto educativo para preparar a las personas para exámenes clínicos y uso seguro de medicamentos.",
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
      image: "Imaging",
      meds:  "Medications"
    },
    blocks: {
      prep:   "Preparation",
      during: "During exam/use",
      after:  "Aftercare",
      risks:  "Risks if not followed",
      tips:   "Practical tips"
    },
    aboutTitle: "About PrepareExame",
    aboutText:  "Educational project to help people prepare for clinical tests and use medications safely.",
    heroPhrase:
      "You <span class='em'>understand</span> what you are <span class='em'>doing</span> and<br>" +
      "therefore <span class='em'>take better care</span> of yourself!"
  }
};

export const DATA = {
  pt: [
    {
      id: "hemograma",
      title: "Hemograma",
      category: "lab",
      tags: ["jejum", "sangue"],
      blocks: {
        prep:
          "Na maior parte dos laboratórios o hemograma pede jejum de 8 a 12 horas (se o médico ou o serviço orientar diferente, siga a orientação deles). " +
          "Você pode beber água em pequena quantidade; evite café, álcool e alimentos muito gordurosos na véspera. " +
          "Evite exercício físico intenso nas 24 horas anteriores, não fume antes da coleta e leve a lista de medicamentos, suplementos e uso recente de antibióticos.",
        during:
          "A coleta é feita por punção venosa no braço: sente-se confortavelmente, mantenha o braço relaxado e avise se tiver medo de agulha, desmaios prévios ou dificuldade de acesso venoso. " +
          "Respirar fundo e olhar para outro ponto ajuda a reduzir o desconforto.",
        after:
          "Pressione o local da punção com algodão por 3–5 minutos sem dobrar o braço para evitar hematomas. " +
          "Mantenha-se hidratado, evite carregar peso com o braço puncionado nas próximas horas e observe o local: se aparecer dor intensa, inchaço ou hematoma muito escuro, procure o serviço.",
        risks:
          "Jejum inadequado, álcool, esforço intenso ou não informar medicamentos podem alterar o resultado (ex.: glicose, lipídios, leucócitos) e levar a interpretações erradas. " +
          "Não comprimir bem o local pode causar hematoma e dor. Em pessoas com história de síncope, há risco de desmaio se não estiverem sentadas ou deitadas.",
        tips:
          "Confirme o tempo de jejum diretamente com o laboratório e pergunte quais remédios podem ser mantidos no dia do exame. " +
          "Se você costuma desmaiar, peça para fazer a coleta deitado. " +
          "Vídeos para entender melhor o preparo e o hemograma:\n" +
          "- Exames de sangue e jejum: https://www.youtube.com/watch?v=phQBec59wZw\n" + // preparado para coletar exames de sangue
          "- O que é o hemograma: https://www.youtube.com/watch?v=SgE7pbkn9b0"
      }
    },
    {
      id: "urina",
      title: "Urina tipo I",
      category: "lab",
      tags: ["urina", "coleta"],
      blocks: {
        prep:
          "Use frasco estéril fornecido pelo laboratório ou comprado em farmácia. " +
          "Antes de urinar, lave bem a região genital apenas com água e seque com papel ou toalha limpa. " +
          "Mulheres: se estiver menstruada, avise o laboratório; às vezes é melhor adiar, ou usar tampão e seguir orientação específica.",
        during:
          "Ao urinar, descarte o primeiro jato no vaso (ele leva impurezas da uretra), depois coloque o frasco no fluxo do jato médio sem encostar a borda na pele. " +
          "Encha até o volume indicado, feche bem a tampa e não toque na parte interna da tampa ou do frasco.",
        after:
          "Identifique o frasco com nome completo e horário da coleta. " +
          "Leve a amostra ao laboratório em até 2 horas; se houver atraso, mantenha refrigerada (geladeira doméstica, não congelar). " +
          "Não deixe exposta ao calor ou sol, pois isso altera o exame.",
        risks:
          "Coleta sem higiene adequada, coleta do primeiro jato ou demora excessiva para entregar a amostra favorecem contaminação por bactérias e células, gerando resultados falsos e, às vezes, tratamentos desnecessários. " +
          "Urina muito antiga pode não ser aproveitada.",
        tips:
          "Planeje o horário de coleta para conseguir entregar logo em seguida. " +
          "Evite coletar após grande ingestão de líquidos para não ficar muito diluída. " +
          "Se você tiver dificuldade de entender o passo a passo, assista:\n" +
          "- Como coletar corretamente a urina: https://www.youtube.com/watch?v=tRgL8lxM0WY\n" +
          "- Orientações para coleta de urina: https://www.youtube.com/watch?v=8Jamo1uWbu8"
      }
    },
    {
      id: "rx",
      title: "Radiografia (Raio-X)",
      category: "image",
      tags: ["imagem", "raio-x"],
      blocks: {
        prep:
          "Leve o pedido médico, documento com foto e exames anteriores da mesma região, se tiver. " +
          "Use roupas confortáveis e fáceis de trocar; de preferência, evite peças com zíper, botões metálicos ou adornos na área que será examinada. " +
          "Retire brincos, cordões, sutiã com aro metálico, cintos e outros metais da região. " +
          "Se houver chance de gravidez, avise o serviço ANTES do exame.",
        during:
          "Você será posicionado pelo técnico e precisa ficar bem parado durante a exposição para que a imagem saia nítida. " +
          "Em alguns exames, será solicitado que prenda a respiração por alguns segundos. " +
          "Siga exatamente as orientações do técnico, avise se tiver dor ao movimentar-se ou limitação para certas posições.",
        after:
          "Normalmente você pode retornar imediatamente à sua rotina sem cuidados especiais. " +
          "Se tiver feito exame com contraste (situação mais comum em outros tipos de imagem, como tomografia), siga as orientações específicas sobre hidratação ou observação de possíveis reações.",
        risks:
          "A radiografia usa uma dose baixa de radiação, geralmente segura quando usada de forma controlada. " +
          "Repetir muitas exposições sem necessidade aumenta a dose acumulada; por isso é importante guardar exames antigos e informar ao médico. " +
          "Em gestantes, o exame só é feito quando o benefício é maior que o risco.",
        tips:
          "Vá sem acessórios metálicos para agilizar. Leve exames de imagem antigos para comparação, principalmente se for controle de doença crônica. " +
          "Para entender melhor o que é o raio-X e como funciona, veja:\n" +
          "- Minuto da Saúde – Como funciona o Raio-X?: https://www.youtube.com/watch?v=tFEU2VJn5pY"
      }
    },
    {
      id: "rm",
      title: "Ressonância magnética",
      category: "image",
      tags: ["imagem", "ressonância"],
      blocks: {
        prep:
          "Informe sempre se você tem marca-passo, clipes de aneurisma, implantes metálicos, próteses, fragmentos de metal nos olhos ou no corpo, aparelhos auditivos implantáveis ou neuroestimuladores. " +
          "Preencha o questionário de segurança com calma. " +
          "Retire todos os objetos metálicos e eletrônicos (relógio, cartão magnético, piercings, moedas, celular). " +
          "Se você tem claustrofobia ou ansiedade em ambiente fechado, converse antes com o médico para avaliar uso de sedação leve ou exame em aparelho mais aberto.",
        during:
          "O exame é barulhento e demorado (em geral de 15 a 40 minutos), mas não dói. " +
          "Você ficará deitado, normalmente de barriga para cima, dentro do equipamento. " +
          "Use protetor auricular ou fones se forem oferecidos e fique o mais imóvel possível para evitar que as imagens saiam borradas. " +
          "Se for usar contraste ou sedação, o profissional explicará cada etapa.",
        after:
          "Na maioria dos casos você sai andando e pode voltar às atividades habituais. " +
          "Se houver uso de contraste, beba bastante água ao longo do dia, a menos que o médico tenha orientado o contrário. " +
          "Se tiver sido sedado, você não deve dirigir e precisa de um acompanhante até passar totalmente o efeito do medicamento.",
        risks:
          "A ressonância não usa radiação ionizante, mas o campo magnético é muito intenso: por isso, certos implantes e objetos metálicos podem ser contraindicados. " +
          "Algumas pessoas podem ter reação ao contraste (alergia, náusea, mal-estar), e pacientes claustrofóbicos podem entrar em crise se não forem preparados.",
        tips:
          "Leve resultados de exames de imagem anteriores e um cobertor leve se sentir frio. " +
          "Combine com a equipe uma forma de avisar se estiver desconfortável (ex.: campainha na mão). " +
          "Se você tem medo de tubo fechado, estes vídeos ajudam a entender e reduzir a ansiedade:\n" +
          "- Claustrofobia e exame de ressonância magnética: https://www.youtube.com/watch?v=Heqs0vV50kk"
      }
    },
    {
      id: "mdi",
      title: "Bombinha inaladora (MDI)",
      category: "meds",
      tags: ["medicamento", "inalador"],
      blocks: {
        prep:
          "Antes de usar, agite bem o frasco por alguns segundos para misturar o medicamento. " +
          "Se for a primeira utilização ou se ficou vários dias sem usar, faça a “ativação” (sprays de teste no ar) conforme a bula. " +
          "Sempre que possível, use um espaçador (câmara de inalação), principalmente em crianças ou em quem tem dificuldade de coordenar o jato com a inspiração.",
        during:
          "Sente-se ou fique em pé. Expire o ar normalmente para esvaziar o pulmão, coloque o bocal entre os lábios vedando bem. " +
          "Comece a inspirar lentamente pela boca e, AO MESMO TEMPO, aperte a bombinha uma vez. " +
          "Continue inspirando fundo até encher o pulmão, retire o inalador e segure a respiração por cerca de 10 segundos (ou o máximo confortável). " +
          "Se precisar de mais de 1 jato, espere cerca de 30 segundos a 1 minuto entre eles, agitando novamente.",
        after:
          "Se o medicamento contém corticoide, enxágue a boca e gargareje com água após o uso, cuspindo a água, para reduzir risco de candidíase oral e rouquidão. " +
          "Limpe o bocal regularmente com pano seco ou conforme orientação da bula, e mantenha o frasco em local fresco e seco.",
        risks:
          "Técnica incorreta (acionar o spray fora do tempo, inspirar rápido demais, não usar espaçador quando necessário) diminui muito o depósito do remédio nos pulmões e reduz o controle dos sintomas. " +
          "Não enxaguar a boca após uso de corticoide inalatório aumenta risco de sapinho e irritação na mucosa.",
        tips:
          "Peça ao farmacêutico, médico ou enfermeiro para revisar sua técnica de tempos em tempos, mesmo que você já use bombinha há anos. " +
          "Use lembretes no celular para não esquecer as doses de manutenção. " +
          "Veja uma demonstração prática em vídeo:\n" +
          "- Bomba de asma – como usar: https://www.youtube.com/watch?v=EUDXvmYBq70"
      }
    }
  ],

  en: [
    {
      id: "hemograma",
      title: "Complete Blood Count (CBC)",
      category: "lab",
      tags: ["fasting", "blood"],
      blocks: {
        prep:
          "Most laboratories require 8 to 12 hours of fasting for a CBC (if your doctor or the lab gives different instructions, follow theirs). " +
          "You may drink small amounts of water; avoid coffee, alcohol, and very fatty foods the day before. " +
          "Avoid intense physical exercise in the previous 24 hours, do not smoke before the collection, and bring a list of medications, supplements, or recent antibiotic use.",
        during:
          "The sample is collected by venipuncture in the arm: sit comfortably, keep your arm relaxed, and inform the staff if you are afraid of needles, have fainted before, or have difficult venous access. " +
          "Taking deep breaths and looking away can help reduce discomfort.",
        after:
          "Press the puncture site with cotton for 3–5 minutes without bending your arm to avoid bruising. " +
          "Stay hydrated, avoid lifting heavy objects with the punctured arm for the next few hours, and observe the area: if there is intense pain, swelling, or a very dark bruise, contact the service.",
        risks:
          "Improper fasting, alcohol, intense physical effort, or failing to report medications may alter results (e.g., glucose, lipids, white blood cells) and lead to misinterpretation. " +
          "Not applying pressure properly can cause bruising and pain. People with a history of fainting may pass out if not seated or lying down.",
        tips:
          "Confirm fasting time directly with the lab and ask which medications you may take on the day of the exam. " +
          "If you tend to faint, ask to have the collection done lying down. " +
          "Videos explaining CBC and preparation:\n" +
          "- Fasting for blood tests: https://www.youtube.com/watch?v=phQBec59wZw\n" +
          "- What is a complete blood count?: https://www.youtube.com/watch?v=SgE7pbkn9b0"
      }
    },
    {
      id: "urina",
      title: "Urinalysis (Type I)",
      category: "lab",
      tags: ["urine", "collection"],
      blocks: {
        prep:
          "Use a sterile container provided by the laboratory or purchased from a pharmacy. " +
          "Before urinating, wash the genital area well with water only and dry with clean paper or towel. " +
          "Women: if you are menstruating, inform the lab; sometimes it is better to postpone, or use a tampon and follow specific instructions.",
        during:
          "When urinating, discard the first stream into the toilet (it carries impurities from the urethra), then place the container in the middle stream without touching the rim to the skin. " +
          "Fill to the indicated level, close the lid tightly, and avoid touching the inside of the lid or container.",
        after:
          "Label the container with full name and collection time. " +
          "Take the sample to the lab within 2 hours; if delayed, keep refrigerated (home refrigerator, do not freeze). " +
          "Do not expose to heat or sunlight, as this alters the test.",
        risks:
          "Collection without proper hygiene, collecting the first stream, or waiting too long to deliver the sample may lead to contamination by bacteria or cells, causing false results and sometimes unnecessary treatments. " +
          "Very old urine samples may not be usable.",
        tips:
          "Plan the collection time to submit the sample promptly. " +
          "Avoid collecting after drinking excessive fluids, so it does not become overly diluted. " +
          "If you struggle with the procedure, watch:\n" +
          "- How to correctly collect urine: https://www.youtube.com/watch?v=tRgL8lxM0WY\n" +
          "- Urine collection instructions: https://www.youtube.com/watch?v=8Jamo1uWbu8"
      }
    },
    {
      id: "rx",
      title: "X-Ray (Radiography)",
      category: "image",
      tags: ["imaging", "x-ray"],
      blocks: {
        prep:
          "Bring your doctor's order, ID, and previous exams of the same region if available. " +
          "Wear comfortable clothes that are easy to remove; preferably avoid items with zippers, metal buttons, or accessories in the area to be examined. " +
          "Remove earrings, necklaces, underwire bras, belts, and other metal items. " +
          "If there is any chance of pregnancy, inform the staff BEFORE the exam.",
        during:
          "You will be positioned by the technician and must remain still during exposure for a clear image. " +
          "In some exams you may be asked to hold your breath for a few seconds. " +
          "Follow the technician’s instructions and inform them if you have pain or movement limitations.",
        after:
          "You may usually return to normal activities immediately. " +
          "If you underwent a study involving contrast (usually not the case for basic x-rays), follow hydration and observation instructions.",
        risks:
          "X-rays use a low dose of radiation, generally safe when used properly. " +
          "Repeated unnecessary exposures increase accumulated dose; therefore, it is helpful to keep previous exams and inform your doctor. " +
          "In pregnant women, the exam is performed only if benefits outweigh risks.",
        tips:
          "Arrive without metal accessories to speed up preparation. Bring previous imaging exams for comparison. " +
          "To understand how X-rays work, see:\n" +
          "- How X-rays work: https://www.youtube.com/watch?v=tFEU2VJn5pY"
      }
    },
    {
      id: "rm",
      title: "Magnetic Resonance Imaging (MRI)",
      category: "image",
      tags: ["imaging", "mri"],
      blocks: {
        prep:
          "Always inform if you have a pacemaker, aneurysm clips, metallic implants, prostheses, metal fragments in the eyes or body, implantable hearing devices, or neurostimulators. " +
          "Fill out the safety questionnaire carefully. " +
          "Remove all metallic and electronic objects (watches, magnetic cards, piercings, coins, phones). " +
          "If you have claustrophobia or anxiety in closed spaces, speak with your doctor beforehand to consider light sedation or an open MRI.",
        during:
          "The exam is noisy and lengthy (generally 15 to 40 minutes), but painless. " +
          "You will lie down, usually on your back, inside the equipment. " +
          "Use ear protection or headphones if offered and remain as still as possible to avoid blurry images. " +
          "If you will receive contrast or sedation, the staff will explain each step.",
        after:
          "Most people leave walking and return to normal activities. " +
          "If contrast was used, drink plenty of water unless instructed otherwise. " +
          "If sedated, you must not drive and need someone to accompany you until fully alert.",
        risks:
          "MRI does not use ionizing radiation, but the magnetic field is extremely strong: certain implants and metal objects are contraindicated. " +
          "Some people may have reactions to contrast (allergy, nausea, discomfort), and claustrophobic patients may panic without preparation.",
        tips:
          "Bring previous imaging results and a light blanket if you feel cold. " +
          "Agree on a way to signal discomfort (e.g., a call button). " +
          "If you fear enclosed spaces, these videos can help:\n" +
          "- Claustrophobia and MRI: https://www.youtube.com/watch?v=Heqs0vV50kk"
      }
    },
    {
      id: "mdi",
      title: "Inhaler (MDI)",
      category: "meds",
      tags: ["medication", "inhaler"],
      blocks: {
        prep:
          "Shake the inhaler well for a few seconds to mix the medication. " +
          "If this is the first use or it has been unused for several days, perform priming sprays according to the instructions. " +
          "Use a spacer (inhalation chamber) whenever possible, especially for children or people who struggle with coordination.",
        during:
          "Sit or stand. Exhale normally to empty your lungs, place the mouthpiece between your lips sealing firmly. " +
          "Begin inhaling slowly through your mouth and AT THE SAME TIME press the inhaler once. " +
          "Continue inhaling deeply, remove the inhaler, and hold your breath for about 10 seconds (or as long as comfortable). " +
          "If you need more than one puff, wait 30 seconds to 1 minute between doses and shake the inhaler again.",
        after:
          "If your medication contains corticosteroids, rinse your mouth and gargle with water after use to reduce the risk of oral thrush and hoarseness. " +
          "Clean the mouthpiece regularly with a dry cloth or as instructed. Keep the device in a cool, dry place.",
        risks:
          "Incorrect technique (activating too early or too late, inhaling too fast, not using a spacer when needed) greatly reduces lung deposition and decreases symptom control. " +
          "Not rinsing the mouth after corticosteroid use increases risks of irritation and infection.",
        tips:
          "Ask a pharmacist, doctor, or nurse to review your technique occasionally. " +
          "Set reminders on your phone for maintenance doses. " +
          "Watch a demonstration:\n" +
          "- How to use an asthma inhaler: https://www.youtube.com/watch?v=EUDXvmYBq70"
      }
    }
  ],

  es: [
    {
      id: "hemograma",
      title: "Hemograma completo",
      category: "lab",
      tags: ["ayuno", "sangre"],
      blocks: {
        prep:
          "En la mayoría de los laboratorios, el hemograma requiere un ayuno de 8 a 12 horas (si el médico o el servicio indican algo diferente, siga sus instrucciones). " +
          "Puede beber pequeñas cantidades de agua; evite café, alcohol y alimentos muy grasosos el día anterior. " +
          "Evite ejercicio físico intenso en las 24 horas anteriores, no fume antes de la extracción y lleve la lista de medicamentos, suplementos y uso reciente de antibióticos.",
        during:
          "La muestra se toma mediante punción venosa en el brazo: siéntese cómodamente, mantenga el brazo relajado e informe si tiene miedo a las agujas, antecedentes de desmayos o dificultad de acceso venoso. " +
          "Respirar profundamente y mirar hacia otro lado ayuda a reducir la molestia.",
        after:
          "Presione el sitio de la punción con algodón durante 3–5 minutos sin doblar el brazo para evitar hematomas. " +
          "Manténgase hidratado, evite cargar peso con el brazo puncionado durante las próximas horas y observe el área: si aparece dolor intenso, hinchazón o un hematoma muy oscuro, acuda al servicio.",
        risks:
          "Ayuno inadecuado, alcohol, ejercicio intenso o no informar medicamentos pueden alterar los resultados (glucosa, lípidos, leucocitos) y generar interpretaciones erróneas. " +
          "No comprimir bien el sitio puede causar hematomas y dolor. En personas con antecedentes de síncope, existe riesgo de desmayo si no están sentadas o acostadas.",
        tips:
          "Confirme el tiempo de ayuno directamente con el laboratorio y pregunte qué medicamentos puede tomar el día del examen. " +
          "Si suele desmayarse, solicite realizar la extracción acostado. " +
          "Videos para entender mejor el hemograma:\n" +
          "- Exámenes de sangre y ayuno: https://www.youtube.com/watch?v=phQBec59wZw\n" +
          "- ¿Qué es un hemograma?: https://www.youtube.com/watch?v=SgE7pbkn9b0"
      }
    },
    {
      id: "urina",
      title: "Análisis de orina (Tipo I)",
      category: "lab",
      tags: ["orina", "muestra"],
      blocks: {
        prep:
          "Use un frasco estéril proporcionado por el laboratorio o comprado en farmacia. " +
          "Antes de orinar, lave bien la zona genital solo con agua y séquela con papel o toalla limpia. " +
          "Mujeres: si está menstruando, informe al laboratorio; en algunos casos es mejor posponer o usar tampón con instrucciones específicas.",
        during:
          "Al orinar, deseche el primer chorro en el inodoro (arrastra impurezas de la uretra), luego coloque el frasco en el chorro medio sin tocar la piel. " +
          "Llene hasta el nivel indicado, cierre bien la tapa y evite tocar la parte interna de la tapa o el frasco.",
        after:
          "Identifique el frasco con nombre completo y hora de recolección. " +
          "Lleve la muestra al laboratorio en un máximo de 2 horas; si se retrasa, manténgala refrigerada (nevera doméstica, no congelar). " +
          "No la exponga al calor o al sol, pues altera el examen.",
        risks:
          "Recoger sin higiene adecuada, tomar el primer chorro o tardar demasiado en entregar la muestra favorece la contaminación con bacterias o células, generando resultados falsos y, a veces, tratamientos innecesarios. " +
          "La orina muy antigua puede no ser aprovechable.",
        tips:
          "Planifique la hora de recolección para poder entregar la muestra de inmediato. " +
          "Evite recolectar después de ingerir mucha agua para que no quede muy diluida. " +
          "Si tiene dificultad para entender el procedimiento, vea:\n" +
          "- Cómo recolectar correctamente la orina: https://www.youtube.com/watch?v=tRgL8lxM0WY\n" +
          "- Orientaciones para recolección de orina: https://www.youtube.com/watch?v=8Jamo1uWbu8"
      }
    },
    {
      id: "rx",
      title: "Radiografía (Rayos X)",
      category: "image",
      tags: ["imagen", "rayos-x"],
      blocks: {
        prep:
          "Lleve la orden médica, documento de identidad y exámenes anteriores de la misma región, si los tiene. " +
          "Use ropa cómoda y fácil de quitar; evite prendas con cierres, botones metálicos o accesorios en la zona que será examinada. " +
          "Retire aretes, collares, sostén con aro metálico, cinturones y otros metales. " +
          "Si existe posibilidad de embarazo, infórmelo ANTES del examen.",
        during:
          "El técnico lo posicionará y deberá permanecer muy quieto durante la exposición para obtener una imagen nítida. " +
          "En algunos exámenes deberá contener la respiración por unos segundos. " +
          "Siga exactamente las indicaciones del técnico e informe si presenta dolor o limitaciones de movimiento.",
        after:
          "Normalmente podrá retomar sus actividades inmediatamente. " +
          "Si se utilizó contraste (más común en otros tipos de imagen), siga las indicaciones específicas.",
        risks:
          "La radiografía utiliza una dosis baja de radiación, generalmente segura cuando se usa de manera controlada. " +
          "Repetir exposiciones sin necesidad aumenta la dosis acumulada; por eso es importante conservar exámenes anteriores e informar al médico. " +
          "En embarazadas, solo se realiza si el beneficio supera el riesgo.",
        tips:
          "Vaya sin accesorios metálicos para agilizar el proceso. Lleve exámenes antiguos para comparación. " +
          "Para entender cómo funcionan los rayos X, vea:\n" +
          "- ¿Cómo funcionan los rayos X?: https://www.youtube.com/watch?v=tFEU2VJn5pY"
      }
    },
    {
      id: "rm",
      title: "Resonancia magnética",
      category: "image",
      tags: ["imagen", "resonancia"],
      blocks: {
        prep:
          "Informe siempre si tiene marcapasos, clips de aneurisma, implantes metálicos, prótesis, fragmentos de metal en los ojos o el cuerpo, dispositivos auditivos implantables o neuroestimuladores. " +
          "Complete el cuestionario de seguridad con calma. " +
          "Retire todos los objetos metálicos y electrónicos (reloj, tarjetas magnéticas, piercings, monedas, celular). " +
          "Si tiene claustrofobia o ansiedad en espacios cerrados, consulte al médico para valorar sedación leve o un equipo más abierto.",
        during:
          "El examen es ruidoso y largo (generalmente de 15 a 40 minutos), pero no duele. " +
          "Estará acostado, normalmente boca arriba, dentro del equipo. " +
          "Use tapones auditivos o auriculares si los ofrecen y permanezca lo más inmóvil posible para evitar imágenes borrosas. " +
          "Si usará contraste o sedación, el profesional explicará cada paso.",
        after:
          "En la mayoría de los casos podrá volver a sus actividades habituales inmediatamente. " +
          "Si se usó contraste, beba bastante agua durante el día, a menos que el médico indique lo contrario. " +
          "Si fue sedado, no debe conducir y necesita un acompañante hasta que pase el efecto.",
        risks:
          "La resonancia no usa radiación ionizante, pero el campo magnético es muy intenso: ciertos implantes y objetos metálicos están contraindicados. " +
          "Algunas personas pueden tener reacciones al contraste (alergia, náusea, malestar), y pacientes claustrofóbicos pueden entrar en crisis si no están preparados.",
        tips:
          "Lleve exámenes de imagen anteriores y una manta liviana si siente frío. " +
          "Combine con el equipo una forma de avisar si está incómodo (por ejemplo, un timbre en la mano). " +
          "Si teme los espacios cerrados, estos videos ayudan:\n" +
          "- Claustrofobia y resonancia magnética: https://www.youtube.com/watch?v=Heqs0vV50kk"
      }
    },
    {
      id: "mdi",
      title: "Inhalador (MDI)",
      category: "meds",
      tags: ["medicamento", "inhalador"],
      blocks: {
        prep:
          "Antes de usar, agite bien el frasco durante algunos segundos para mezclar el medicamento. " +
          "Si es la primera vez de uso o si estuvo varios días sin usarlo, realice los disparos de prueba según el instructivo. " +
          "Use un espaciador siempre que sea posible, especialmente en niños o en personas con dificultad de coordinación.",
        during:
          "Siéntese o póngase de pie. Exhale normalmente para vaciar los pulmones y coloque la boquilla entre los labios sellando bien. " +
          "Comience a inhalar lentamente por la boca y AL MISMO TIEMPO presione una vez el inhalador. " +
          "Continúe inhalando profundamente, retire el inhalador y mantenga la respiración unos 10 segundos (o lo máximo cómodo). " +
          "Si necesita más de una dosis, espere 30 segundos a 1 minuto entre ellas, agitando nuevamente.",
        after:
          "Si el medicamento contiene corticoide, enjuague la boca y haga gárgaras con agua después del uso para reducir riesgo de candidiasis oral y ronquera. " +
          "Limpie la boquilla regularmente con un paño seco y mantenga el frasco en un lugar fresco y seco.",
        risks:
          "Técnica incorrecta (accionar fuera de tiempo, inhalar demasiado rápido, no usar espaciador cuando es necesario) reduce mucho la llegada del medicamento a los pulmones y disminuye el control de los síntomas. " +
          "No enjuagar la boca después de usar corticoide aumenta el riesgo de irritación e infección.",
        tips:
          "Pida a un farmacéutico, médico o enfermero revisar su técnica periódicamente. " +
          "Use recordatorios en el celular para no olvidar las dosis. " +
          "Vea una demostración práctica:\n" +
          "- Cómo usar un inhalador: https://www.youtube.com/watch?v=EUDXvmYBq70"
      }
    }
  ]
};
