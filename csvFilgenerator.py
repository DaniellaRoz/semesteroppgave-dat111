"""
Dette er ett av to skjelettprogram for Python-delen av semesteroppgaven i DAT111 H2024.

Fullfør denne filen basert på kravene og strukturen spesifisert her og i pdf-filen på Canvas.

Merk: indenteringen som er brukt på kommentarene indikerer hvilket nivå koden dere fyller inn skal ligge på.

Fyll inn informasjonen under.
Gruppe:
    
Navn på gruppemedlemmer: Stian, Daniella og Solveig
    
"""

### Importer nødvendige bibliotek ###
import csv
import random

### Generer csv-fil med csv-biblioteket ###
# Åpne eksisterende fil/opprett ny med det spesifiserte navnet, i skrivemodus.
with open('besoekerstatistikk.csv', 'w', newline='') as file:
    # Opprett en referanse til csv-biblioteket sin skriverfunksjon med den åpnede filen som argument.
    writer = csv.writer(file)
    
    # Lag header-raden som skal bestå av tekststrengen "Dag" og alle tidspunktene i åpningstiden.
    header = ["Dag", 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    
    # Skriv header-raden til filen ved hjelp av skriverfunksjonen.
    writer.writerow(header)
    
    # Lag en liste av alle dagene det er åpent på Læringslab.
    days_open = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"]
    
    # Vi skal nå generere besøkstall per dag, med tilfeldig variasjon, og skrive de til fil.
    # Bruk en for-løkke til å gå gjennom alle dagene i listen over dager.
    for day in days_open:
        
        # Opprett en ny liste som skal representere dagens besøkstall.
        # Legg inn navnet på dagen som startelement.
        day_visitors = [day]

        # Opprett to variabler som holder på start- og sluttverdi for det tilfeldige intervallet.
        random_min = 4
        random_max = 7
        
        # Bruk en for-løkke til å gå gjennom alle tidspunktene i åpningstiden ved hjelp av range()-funksjonen.
        for i in range(9, 19):
            # Hvis en feil skulle skje med endring av random verdiene.
            if random_max <= random_min:
                random_max = random_min + 1
            
            # Opprett en tilfeldig verdi ved hjelp av random.sample(). Som argument til funksjonen
            # gir dere range() med start- og slutt-verdier som dere har lagret i variabler tidligere.
            # random.sample() returnerer en liste (i dette tilfellet av størrelse 1), hent ut den
            # første verdien fra listen.
            random_visitor_count = random.sample(range(random_min, random_max), 1)[0]
        
            # Legg til den nye verdien i listen for dagens besøkstall.
            day_visitors.append(random_visitor_count)
            
            # Bruk en if-elif-else-struktur for å endre på start- og sluttverdi for det tilfeldige intervallet.
            # Målet er at det skal resultere i en naturlig fordeling av besøkende, for eksempel normalfordelt eller
            # med en topp før og en etter lunsjtid.
            if i < 11:
                random_min += 2
                random_max += 2
            elif i < 13:
                random_min -= 1
                random_max -= 1
            elif i < 16:
                random_min += 1
                random_max += 1
            else:
                random_min -= 3
                random_max -= 3
        # Skriv raden til fil.
        writer.writerow(day_visitors)#