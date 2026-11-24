// Portuguese content lives in index.html so the portfolio also opens without JavaScript.
const translations = {
  pt: {
    language: 'Idioma', light: 'Ativar tema claro', dark: 'Ativar tema escuro',
    title: 'Software & Automação'
  },
  en: {
    language: 'Language', light: 'Switch to light mode', dark: 'Switch to dark mode',
    title: 'Software & Automation', skip: 'Skip to content', projects: 'Projects', about: 'About',
    discipline: 'Software & automation',
    lead: 'I build software that connects sensors, visualizes movement and brings automation to the factory floor.',
    explore: 'Explore projects', instrument: 'Signal lab', amp: 'Amplitude',
    selected: 'Selected projects', research: 'Applied research', imu: 'Movement in 3D',
    imuDesc: 'Wearable sensors and a Python application for visualizing the motion of the trunk, upper arm and forearm.',
    imuMore: 'For my electrical engineering thesis, I use BNO086 sensors connected to ESP32 boards. The application receives orientation data over Wi-Fi to help explore movement during the Box and Block Test.',
    details: 'View details', industry: 'Industrial automation', inspection: 'Field inspections',
    fieldDesc: 'Mobile apps for logging inspections during a round and syncing records when connectivity returns.',
    fieldMore: 'During my automation internship, I worked on offline data collection, duplicate prevention and inspection tracking with Power Apps and SharePoint.',
    front: 'Web development', notebook: 'Kote · Travel journal',
    koteDesc: 'An interactive RPG character sheet with inventory, spells, dice rolls and local browser storage.',
    source: 'View code on GitHub', background: 'From engineering to software',
    bio: 'I study electrical engineering at Ifes in Vitória, Brazil, and work as an automation intern at ArcelorMittal Tubarão. I like tracing the whole journey of a reading, from the sensor to the screen of the person making a decision.',
    bio2: 'Outside industry, I build tools for tabletop games. They give me room to experiment with interfaces and discover what makes an app enjoyable to use.',
    repos: 'My GitHub repositories', credit: 'This project was built using AI agents and models.'
  },
  es: {
    language: 'Idioma', light: 'Activar el tema claro', dark: 'Activar el tema oscuro',
    title: 'Software y automatización', skip: 'Saltar al contenido', projects: 'Proyectos', about: 'Sobre mí',
    discipline: 'Software y automatización',
    lead: 'Desarrollo software para conectar sensores, visualizar el movimiento y llevar la automatización a la planta industrial.',
    explore: 'Explorar proyectos', instrument: 'Laboratorio de señales', amp: 'Amplitud',
    selected: 'Proyectos seleccionados', research: 'Investigación aplicada', imu: 'Movimiento en 3D',
    imuDesc: 'Sensores vestibles y una aplicación en Python para visualizar el movimiento del tronco, el brazo y el antebrazo.',
    imuMore: 'En mi trabajo de fin de grado en Ingeniería Eléctrica utilizo sensores BNO086 conectados a placas ESP32. La aplicación recibe datos de orientación por wifi para estudiar el movimiento durante la prueba Box and Block Test.',
    details: 'Ver detalles', industry: 'Automatización industrial', inspection: 'Inspecciones de campo',
    fieldDesc: 'Aplicaciones móviles para registrar inspecciones durante las rondas y sincronizar los datos cuando vuelve la conexión.',
    fieldMore: 'Durante mis prácticas en automatización, trabajé en la recopilación de datos sin conexión, la prevención de duplicados y el seguimiento de inspecciones con Power Apps y SharePoint.',
    front: 'Desarrollo web', notebook: 'Kote · Cuaderno de viaje',
    koteDesc: 'Una ficha interactiva de rol con inventario, hechizos, tiradas de dados y almacenamiento local en el navegador.',
    source: 'Ver código en GitHub', background: 'De la ingeniería al software',
    bio: 'Estudio Ingeniería Eléctrica en el Ifes, en Vitória, Brasil, y hago prácticas en automatización en ArcelorMittal Tubarão. Me gusta seguir el recorrido de un dato, desde la lectura del sensor hasta la pantalla de quien toma la decisión.',
    bio2: 'Fuera de la industria, desarrollo herramientas para juegos de mesa. Me dan espacio para experimentar con interfaces y descubrir qué hace agradable el uso de una aplicación.',
    repos: 'Mis repositorios en GitHub', credit: 'Proyecto creado con agentes y modelos de IA.'
  },
  de: {
    language: 'Sprache', light: 'Helles Design aktivieren', dark: 'Dunkles Design aktivieren',
    title: 'Software & Automatisierung', skip: 'Zum Inhalt springen', projects: 'Projekte', about: 'Über mich',
    discipline: 'Software & Automatisierung',
    lead: 'Ich entwickle Software, die Sensoren vernetzt, Bewegungen sichtbar macht und die Automatisierung in der Produktion unterstützt.',
    explore: 'Projekte entdecken', instrument: 'Signallabor', amp: 'Amplitude',
    selected: 'Ausgewählte Projekte', research: 'Angewandte Forschung', imu: 'Bewegung in 3D',
    imuDesc: 'Tragbare Sensoren und eine Python-Anwendung machen die Bewegung von Rumpf, Oberarm und Unterarm sichtbar.',
    imuMore: 'Für meine Abschlussarbeit in Elektrotechnik verbinde ich BNO086-Sensoren mit ESP32-Platinen. Die Anwendung empfängt Orientierungsdaten über WLAN und macht Bewegungen beim Box and Block Test nachvollziehbar.',
    details: 'Details ansehen', industry: 'Industrieautomatisierung', inspection: 'Inspektionen vor Ort',
    fieldDesc: 'Mit mobilen Apps lassen sich Inspektionen beim Rundgang erfassen. Sobald die Verbindung wieder steht, werden die Daten synchronisiert.',
    fieldMore: 'In meinem Praktikum habe ich mit Power Apps und SharePoint an der Offline-Erfassung, der Vermeidung doppelter Einträge und der Nachverfolgung von Inspektionen gearbeitet.',
    front: 'Webentwicklung', notebook: 'Kote · Reisetagebuch',
    koteDesc: 'Ein interaktiver Rollenspiel-Charakterbogen mit Inventar, Zaubersprüchen, Würfelfunktion und lokaler Speicherung im Browser.',
    source: 'Code auf GitHub ansehen', background: 'Von der Elektrotechnik zur Software',
    bio: 'Ich studiere Elektrotechnik am Ifes in Vitória, Brasilien, und arbeite als Praktikant in der Automatisierung bei ArcelorMittal Tubarão. Mich interessiert der ganze Weg eines Messwerts, vom Sensor bis zu der Person, die anhand der Anzeige eine Entscheidung trifft.',
    bio2: 'Abseits der Industrie entwickle ich Werkzeuge für Tischrollenspiele. Dabei probiere ich Benutzeroberflächen aus und lerne, was eine Anwendung im Alltag angenehm macht.',
    repos: 'Meine GitHub-Repositories', credit: 'Dieses Projekt entstand mit KI-Agenten und KI-Modellen.'
  }
};
