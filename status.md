# Single Netværket status

Dette Git dokument indeholder detaljer omkring udviklingen af web app (projekt: Single Netværket). Både detaljer omkring fremgangen, evt. spørgsmål og en liste over de features som der skal laves.

## Opdatering 4 30/08-2018

### Min profil
Brugeren bliver informeret om at hans konto ikke er aktiv før han udfylder alle obligatoriske felter. Disse påmindelse (aktivering + ingen billeder i galleri) vises kun så længe det er tilfældet.

### Services
Opdateringer til vores vi gemmer brugeren og hans data i sessionen. Dette er praktisk ift. front end og vise/redigerer sine oplysninger.

### Lidt "Juice"
Progress bar til min profil, så man se hvor langt man er nået med udfyldelse. Det er vist visuelt med en bar der tikker op, som man gennemføre opgaver. 

### UML diagram
Der er lavet et udkast til UML for databasen. Denne skal opdateres når den endelig struktur/strategi tager form.

### Firebase CRUD
Indenfor database snakker man om akronymet CRUD. Create, read, update og delete. Alle disse operationer er nu mulige for:
* Opret ny bruger
* Opdater mine profil oplysninger
* Oprette et nyt arrangement/event
* Opdaterer et arrangement/event

## Opdatering 3 23/08-2018

### Om os, privatlivs politik, brugsvilkår, feedback og del din personlige historie
Vi har lavet undersiderne tilsvarende de ovenstående overskrifter. De er fyldt ud med auto generede tekst (eks: Terms of Service og privacy. Derfor på Engelsk).

### Layout
Opdateringer til layout så det er responsivt til flere devices og platforme.

### Cookies
Vi har implementeret så brugerne er informeret om cookie per EU lovgivning og lagrer derefter en cookie der fortæller web appen at dette er godkendt. (Så generer vi ikke brugeren med den samme påmindelse hele tiden)

### Database
Vi har lagt en masse test data ind i databasen og fører efterfølgende dette ind i tabellen for alle events og de første 6 på forsiden.

### Diverse formularer
Det er nu mulgit at give feedback, komme med forslag, kontakte support og oprette nye events. (Front end delen er lavet)


## Opdatering 2 17/08-2018

### Login
Vi har arbejdet på at lave brugerlogin der bruger email og password, som er givet til systemet efter oprettelse af en ny bruger.

### Oprettelse
Det er nu muligt for nye brugere at registrere sig

### Dashboard
Der er lavet et dashboard, som brugere umiddelbart ser efter login. Denne kan føre videre til min profil, arrangementer m.fl. Disse er selvfølgelig også tilgængelige i navigationsbaren

### Min profil
En bruger kan nu gå til sin profil side og se sine detaljer.  


### Opdatering 1 - 10/08-2018  

Dette Git dokument indeholder detaljer omkring udviklingen af web app (projekt: Single Netværket). Både detaljer omkring fremgangen, evt. spørgsmål og en liste over de features som der skal laves.

## Product backlog
Som aftalt har vi arbejdet på at oversætte kravspecifikationen til en product backlog med tilhørende user stories. Ideen er at kort og præcist formulerer en feature. Artifaktet indeholder alle disse features og er derfor listen over alt der skal med.
Mangler der features på listen, kan disse nemt tilføjes og vi vil sørge for at få dem med i processen.

Artifaktet kan findes her på link: [product backlog](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/files/Product%20backlog.pdf)

### Bemærk
Projektet udvikles umiddelbart med de mobile platformer i tankerne og testes derfor både der og i Google Chrome. Der kan forekomme forskelle på kryds af devices og browsers. Hvis disse er et problem må vi finde en løsning.

## Teknologier
Indtil andet oplyses er dette listen over de teknologier som vi anvender til at realisere projektet:
* [Angular6](http://www.google.dk)
* [Firebase](http://www.google.dk)
* [Bootstrap](http://www.google.dk)
* [Ngbbootstrap](http://www.google.dk)
### Bemærk
At der vil blive tilføjet til listen som vi kommer længere i processen. Eksempelvis for sikkerhed, privatlivs indstillinger m.v.

## Milestones
Vi har lagt plan for 3 milestones:
* Milestone 1
* Milestone 2
* Milestone 3

### Milestone 1
Alle opgaver er løst.

### Milestone 2
Alle opgaver er løst.

### Milestone 3
Undervejs.

## Screenshots
### Desktop

#### Privacy
![Privacy-policy](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_privacypolicy.PNG "Landing Page")
#### About
![About](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_about.PNG "Landing Page")

#### Feedback
![Feedback](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_feedback.PNG "Landing Page")

#### Contact
![Contact](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_contact.PNG "Landing Page")

####Landing page
![Landing Page](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_landingpage.PNG "Landing Page")

#### Events
![Landing Page](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_events.PNG "Events Page")

#### My profile
![Landing Page](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_minprofil.PNG "My profile Page")

### Mobile
#### Events
![Landing Page](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_mobile_events.PNG "Mobile event Page")

#### Dashboard
![Landing Page](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_mobile_dashboard.PNG "Mobile Dashboard Page")

#### Mobile My profile
![Landing Page](https://github.com/FenrirGameStudio/SingleNetwork/blob/master/src/assets/images/screenshot_mobile_myprofile.PNG "Mobile Dashboard Page")



## Spørgsmål
Dette er de spørgsmål vi umiddelbart sidder inde med, eller ting som vi undrer os over. Det kan give mening at vi drøfter disse til et møde eller over mail korrespondance.

### Design/layout
Skal vi have os på some grafiske designere og stylister på site? Dette er en mellemstor men vigtig opgave. Der skal overvejes om vi skal sættes på den opgave eller om vi skal have konsulenter/designer på eksternt.

### Fyldtekst
Vi skal bruge fyldtekst til de følgende sider:
* Privatlivs politik
* Brugsvilkår
* Om ejerne
* Om virksomheden
* Om konceptet

### Fødselsdage
Det er meget bøvlet at vi skal bruge børnenes fødselsdage i vores datastrategi og vi undrer os derfor over hvordan denne information er relevant for oplevelsen på
websitet?

### Beskeder og inbox (besvaret)
> Hvad er pointen i en bruger inbox, hvis man ikke kan skrive men kun modtage. Er det
> ikke nok at bruge brugerens personlige email i stedet?

### Abonnement (besvaret)
> Hvorfor antage at brugeren ikke vil fortsætte sit abonnment og spørge med en
> mail-robot hver måned? Hvorfor ikke i stedet antage at brugeren vil fortsætte og lade
> brugeren selv annullere som f.eks. Netflix/HBO gør det?

### Logo (besvaret)
> Vi bør genoverveje om de sorte farver i logoet er de rigtige. Vi skal overveje farvepaletten ift.
> * Sammenspil mellem logo -> layout og farveskema på website
> * Kan vi finde en anden farve til at få et mere spændende grafisk indtryk?
> Øvrige overvejelser:
> * Balancen i logoet mellem tekst, tomrum og ikoner.
