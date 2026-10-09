# Zahlenwerkstatt

Eine deutschsprachige Lernwerkstatt für das Zerlegen von Zahlen, Zehnerübergänge und das Bündeln im Dezimalsystem. Montessori-inspiriert, ergänzt um Fünferstrukturen. Ohne externe Laufzeitabhängigkeiten, Anmeldung, Tracking oder dauerhafte Speicherung von Kinderdaten.

## Start

Node.js installieren, im Projektordner `npm start` ausführen und http://127.0.0.1:4173 öffnen. Zum Beenden Strg+C drücken. Die statischen Dateien in `dist/` können bei einem beliebigen statischen Webhost veröffentlicht werden. ES-Module benötigen HTTP; `index.html` nicht einfach per Doppelklick öffnen.

## Lernbereiche

- Teilen: zusammenhängende Perlengruppen mit einer Schere trennen und die Stücke in passende Aussparungen legen. Danach den verbleibenden Teil benennen.
- Zur Zehn: zum Beispiel die fünf in zwei und drei teilen, zwei zur Acht legen und danach die übrigen drei dazunehmen. Die ursprünglichen fünf Plätze bleiben sichtbar. Ganze Stücke werden bewegt; zu große Teile passen nicht in die Lücke.
- Bauen: frei Einer und Zehner bis 100 nehmen, Zehner öffnen, zehn Einer bündeln und Material zurücklegen. Lose Einer sind in Fünferreihen angeordnet.
- Werkstatt: eine Zielzahl (5, 10, 12, 15 oder 20) wählen und eigene 1er-, 2er-, 5er- und 10er-Pakete aufbauen. Die Summe zeigt sofort, wie viel noch fehlt. Ein Paket kann wieder entfernt werden; die Aufgabe hat mehrere richtige Zerlegungen.

Eine große Arbeitsmatte und ein kurzer Auftrag ersetzen die Textkarten des ersten Prototyps. Die vier Materialien liegen als klar getrennte Lern-Apps nebeneinander. Beim ersten Öffnen eines Materials wird eine kurze Bewegung vorgemacht; „Zeig’s mir“ wiederholt sie. Die Vorführung verändert die Aufgabe nicht und endet sofort bei einer eigenen Materialhandlung. Elterninformationen und Quellen stehen hinter „Für Große“.

Das Layout verwendet eine Materialleiste mit plastischen Symbolen, eine separate Zahlendarstellung, frei liegende Ablagen und eine Bedienleiste unter der Arbeitsfläche. Auf schmaleren Bildschirmen stehen alle vier Lernbereiche oberhalb der Aufgabe. Die Werkstatt wächst mit der Anzahl der Pakete. Ein gemeinsames Designsystem in `dist/studio.css` gestaltet Navigation, Dialoge und SVG-Material. Über das Hamburger-Menü lassen sich vier Farbwelten, drei Schriften und drei Schriftgrößen wählen. Ein dunkler Modus ist ebenfalls vorhanden. Die Darstellung wird lokal im Browser gespeichert und verändert die Mathematikaufgaben nicht.

Mausziehen, Pointer Events für Touch, Antippen eines Perlenstücks und anschließend des Ziels sowie Tastaturbedienung über Tab/Enter/Leertaste. In Bauen öffnet das Antippen eines Zehners diesen direkt; zehn lose Einer werden durch Antippen gebündelt. Materialien lassen sich auch auf die entsprechenden Ablagen ziehen. Antworten können angetippt oder in das Fragezeichen gezogen werden. Rückgängig und Neustart sind jederzeit verfügbar.

Vorlesen ist optional und verwendet die Sprachausgabe des Browsers/Betriebssystems. Stimme und deren lokale oder externe Verarbeitung hängen vom Gerät ab. Keine Zeitbegrenzung, Punkte oder Ranglisten.

## Prüfen

`npm test` prüft Mengenerhaltung, Teilgruppen, Zehnerübergänge, Bündelung und Grenzen des Materialmodells. `npm run check` prüft JavaScript-Syntax. Interaktionen und Layout wurden im Browser mit Desktop-, Tablet- und schmalen Ansichten geprüft. Ein Test mit Fingereingabe auf einem echten iPad sowie Beobachtungen mit Kindern stehen noch aus.

## Pädagogische Grundlage

- https://montessori-ami.org/questions/introducing-number-rods
- https://montessori-ami.org/node/9138
- https://www.montessori.org/the-integrated-montessori-curriculum/
- https://montessori-ami.org/trainingvoices/control-of-error
- https://www.montessori.org/montessori-101-what-is-a-montessori-material/
- https://www.montessoricurriculum.org.au/curriculum-for-children-from-6-to-9/mathematics
- https://mahiko.dzlm.de/zahlraum-bis-20-ueberblick/zahlen-zerlegen/grundlagen
- https://mahiko.dzlm.de/zahlraum-bis-100-ueberblick/zahlen-zerlegen-0/grundlagen

Ein Lernprototyp, kein diagnostisches Verfahren und kein geprüftes Montessori-Lehrmaterial. Übernommen werden überschaubare Materialien, isolierte Schwierigkeiten, kurze Vorführungen und Selbstkontrolle durch die Passform. Die digitalen Perlengruppen und die Fünferstruktur sind eine eigene didaktische Übertragung. Echtes Material vermittelt zusätzliche körperliche und räumliche Erfahrungen. Der Schwerpunkt liegt auf dem Verständnis der Teilmengen, nicht auf Geschwindigkeit. Richtige Antworten belegen für sich allein keinen nichtzählenden Rechenweg.

## Veröffentlichung

Die Veröffentlichung läuft über GitHub Pages, nach dem Vorbild der Repositories Zeitjournal und Verantwortungsplaner. `.github/workflows/pages.yml` prüft bei jedem Push auf `main` die Rechenlogik und JavaScript-Syntax und veröffentlicht anschließend ausschließlich die Dateien aus `dist/`. Der Workflow kann auch über die Actions-Seite manuell gestartet werden.

In den Repository-Einstellungen unter **Pages → Build and deployment → Source** muss **GitHub Actions** ausgewählt sein. Ein zusätzlicher Hosting-Dienst ist nicht erforderlich.

Eine eigenständige HTML-Datei ohne Server kann mit `node export-standalone.mjs /vollständiger/pfad/Zahlenwerkstatt.html` erzeugt werden.
