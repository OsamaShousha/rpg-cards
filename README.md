1- .map() går igenom varje element i todos och skapar en <li> för varje todo.

Om arrayen innehåller tre todos visas tre <li>-rader i UI.

Om jag lägger till en ny todo skapas automatiskt en ny rad. map() gör att jag inte behöver skriva varje <li> manuellt.

Det fungerar som ett löpande band: varje todo går in och blir en JSX-rad.

2- När jag klickar på Ta bort skickas den todo jag klickade på till handleRemove
När jag klickar på Ta bort skickas den todo jag klickade på till handleRemove.filter() går igenom arrayen och behåller alla todos som uppfyller villkoret:

3- key syns inte som text på sidan.

React använder key för att kunna skilja listans syskon åt och hålla reda på vilken rad som hör till vilket element.

När key saknas får jag en varning i React Console om att listan behöver unika keys.
