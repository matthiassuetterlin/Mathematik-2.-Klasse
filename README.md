# Zahlenwerkstatt

Eine deutschsprachige Lernwerkstatt für das Zerlegen von Zahlen, Zehnerübergänge und das Bündeln im Dezimalsystem. Montessori-inspiriert, ergänzt um Fünferstrukturen. Ohne externe Laufzeitabhängigkeiten, Anmeldung, Tracking oder dauerhafte Speicherung von Kinderdaten.

## Start

Node.js installieren, im Projektordner `npm start` ausführen und http://127.0.0.1:4173 öffnen. Zum Beenden Strg+C drücken. Die statischen Dateien in `dist/` können bei einem beliebigen statischen Webhost veröffentlicht werden. ES-Module benötigen HTTP; `index.html` nicht einfach per Doppelklick öffnen.

## Lernbereiche

- Teilen & entdecken: einen vorgegebenen Teil verschieben, Rest bestimmen, wieder zusammenführen.
- Über die Zehn: Ergänzung aus dem zweiten Summanden nehmen, Rest bestimmen, Zehner und Rest zusammensetzen. Herkunftsplätze bleiben sichtbar. Nach zwei abgeschlossenen Aufgaben kann zuerst ohne sichtbares Material überlegt werden.
- Freie Werkstatt: Zahlen bis 20 zerlegen; Zahlen bis 100 in Zehner und Einer darstellen, Zehner öffnen und jeweils zehn Einer bündeln.

Mausziehen, Pointer Events für Touch, Antippen von Steinen und anschließendem Ziel sowie Tastaturbedienung über Tab/Enter/Leertaste. Vorlesen ist optional und verwendet die Sprachausgabe des Browsers/Betriebssystems. Stimme und deren lokale oder externe Verarbeitung hängen vom Gerät ab.

## Prüfen

`npm test` prüft Mengenerhaltung, Zehnerübergänge und Grenzen des Materialmodells. `npm run check` prüft JavaScript-Syntax.

## Pädagogische Grundlage

- https://montessori-ami.org/questions/introducing-number-rods
- https://montessori-ami.org/trainingvoices/control-of-error
- https://www.montessoricurriculum.org.au/curriculum-for-children-from-6-to-9/mathematics
- https://mahiko.dzlm.de/zahlraum-bis-20-ueberblick/zahlen-zerlegen/grundlagen
- https://mahiko.dzlm.de/zahlraum-bis-100-ueberblick/zahlen-zerlegen-0/grundlagen

Ein erster Prototyp, kein diagnostisches Verfahren und kein geprüftes Montessori-Lehrmaterial. Der Schwerpunkt liegt auf dem Verständnis der Teilmengen, nicht auf Geschwindigkeit. Richtige Antworten belegen für sich allein keinen nichtzählenden Rechenweg.

## Veröffentlichung

Die Veröffentlichung läuft über GitHub Pages, nach dem Vorbild der Repositories Zeitjournal und Verantwortungsplaner. `.github/workflows/pages.yml` prüft bei jedem Push auf `main` die Rechenlogik und JavaScript-Syntax und veröffentlicht anschließend ausschließlich die Dateien aus `dist/`. Der Workflow kann auch über die Actions-Seite manuell gestartet werden.

In den Repository-Einstellungen unter **Pages → Build and deployment → Source** muss **GitHub Actions** ausgewählt sein. Ein zusätzlicher Hosting-Dienst ist nicht erforderlich.

Eine eigenständige HTML-Datei ohne Server kann mit `node export-standalone.mjs /vollständiger/pfad/Zahlenwerkstatt.html` erzeugt werden.
