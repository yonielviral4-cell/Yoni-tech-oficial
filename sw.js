// Service worker mínimo: solo existe para que el navegador considere esta
// página instalable como app (requisito técnico de Chrome/Android para
// mostrar "Agregar a pantalla de inicio" y, con eso, los accesos directos
// del manifest como "Pregúntame"). No cachea nada ni intercepta peticiones:
// cada carga sigue yendo a la red igual que antes.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {}); // passthrough intencional
