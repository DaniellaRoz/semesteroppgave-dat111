"""
Dette er ett av to skjelettprogram for Python-delen av semesteroppgaven i DAT111 H2024.

Fullfør denne filen basert på kravene og strukturen spesifisert her og i pdf-filen på Canvas.

Merk: indenteringen som er brukt på kommentarene indikerer hvilket nivå koden dere fyller inn skal ligge på.

Fyll inn informasjonen under.
Gruppe: 
Navn på gruppemedlemmer:Stan,Daniella og Solveig 
"""

### Importerer nødvendige bibliotek ###
import csv
import matplotlib.pyplot as plt

### Funksjon som styrer flyten i programmet ###
def main():
    # Bruk importerBesoekertall-funksjonen til å opprette en liste bestående av alle radene
    # i csv-filen og lagre denne i en variabel.
    csvliste = importerBesoekertall('besoekerstatistikk.csv')
    
    # Henter ut timene Læringslab er åpent fra csvliste, konverterer verdiene til heltall og gjør de om til en liste.
    x = list(map(int, csvliste[0][1:]))
    
    # Gå gjennom alle radene i csvliste, hent ut verdier, finn anbefalte tidsrom og plot grafer.
    for rad in csvliste[1:]:
        
        y = list(map(int, rad[1:]))
        
        # Utfør et kall på anbefalteTidsrom-funksjonen med følgende argument: dag, liste over tidspunkt, 
        # liste over besøkende og grenseverdi.
        anbefalteTidsrom(rad[0], x, y, 7)
        
        # Utfør et kall på plotGraf-funksjonen med verdiene for x- og y-aksen som argument, samt navnet på dagen.
        plotGraf(x, y, rad[0])

### Funksjon som importerer fil ved hjelp av csv-biblioteket ###
def importerBesoekertall(filnavn):
    
    # Opprett en tom liste som skal holde på verdiene som blir lest fra csv-filen.
    csvliste = []
    
    # Åpner filen for lesing.
    with open(filnavn, newline='') as csvfile:
        # Opprett en filleser ved hjelp av csv-biblioteket. Husk å spesifisere korrekt fil og skilletegn som argument.
        reader = csv.reader(csvfile, delimiter=',')
        
        # Bruk en for-løkke for å gå gjennom hver rad i filleseren.
        for rad in reader:
            # Legg til raden i listen som ble opprettet tidligere i funksjonen.
            csvliste.append(rad)
            
    # Returner den ferdige listen med innholdet fra csv-filen.
    return csvliste

### Funksjon som plotter en graf ved hjelp av matplotlib ###
def plotGraf(x, y, navn):
    
    # Opprett fire grenseverdier som spesifiserer lite, medium, høyt og veldig høyt besøkstall.
    grenseverdier = [3, 6, 8, 10]
    
    # Spesifiserer fargene i plottet. Vi bruker listekomprehensjon som setter verdier basert på elementene i listen,
    # dvs. vi går gjennom alle verdiene i listen og setter de til en ny verdi basert på sannhetsuttrykk.
    # Det fungerer likt som om vi hadde gjort det med for-else-struktur, men litt mer kompakt.
    # Vi opererer med RGBA-verdier, derfor trenger vi "True" som tillegsverdi i hakeparentes.
    barcolor = ['green' if verdi < grenseverdier[1] else
                'yellow' if verdi < grenseverdier[2] else
                'orange' if verdi < grenseverdier[3] else 'red' for verdi in y]
    
    # Definerer barene i plottet.
    plt.bar(x, y, color=barcolor, edgecolor='black', linewidth=1)
    
    # Legger til navn på x- og y-aksene, samt tittel på grafen.
    plt.xlabel('Tidspunkt')
    plt.ylabel('Antall besøkende')
    plt.title(f'Besøkstall for {navn}')
    
    # Lagrer plottet.
    plt.savefig(f'besokstall_{navn}.png')
    
    # Viser plottet i IDE.
    plt.show()

### Funksjon som finner og skriver ut anbefalte tidsrom for besøk. ###
def anbefalteTidsrom(dag, tidspunktliste, besoekendeliste, grenseverdi):
    
    start = 0
    slutt = 0
    tidsrom = []
    
    for i in range(len(besoekendeliste)):
        if besoekendeliste[i] < grenseverdi:
            if start == 0:  # Start a new time range
                start = tidspunktliste[i]
            slutt = tidspunktliste[i]  # Update the end time
            
            # Check if we are at the end of the list or the next value exceeds the threshold
            if i == len(besoekendeliste) - 1 or besoekendeliste[i+1] >= grenseverdi:
                tidsrom.append((start, slutt))
                start = 0
                slutt = 0
    
    # Print the recommended time ranges
    print(f"Anbefalte tidsrom for {dag}:")
    for start_time, end_time in tidsrom:
        if start_time == end_time:
            print(f"{start_time}:00")
        else:
            print(f"{start_time}:00 - {end_time}:00")
    print()
    
    return tidsrom

# Kaller på main-metoden til slutt. Siden Python er et tolket språk må alle funksjoner som brukes i 
# en funksjon allerede være definert når den kalles. Dette er en av måtene å håndtere dette på.
main()
