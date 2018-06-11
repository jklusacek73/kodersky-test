# Kodérský test

**Autor:** Jiří Klusáček

Celou webovou stránku jsem rozdělil na několik částí, které zde ve stručnosti popíšu. Celá stránka je responzivní a po změně velikosti se aktualizují i javaScripty (hlavně kvůli grafům).

Menu
----
Hlavní menu je responzivní tak aby nezakrývalo hlavní logo. Pokud je velikost okna menší než 1000px, je menu sbaleno do rozevíracího menu. Celé menu je zafixováno k hornímu okraji stránky.

Carousel
--------
Pro vytvoření byl použit jQuery Flickerplate Plugin. Do této komponenty jsem vložil dva obrázky. Při zmenšení obrazu se zmenší i carousel a vnitřní text.

Texty a obrázky
---------------
Pro texty jsem implementoval font Open Sans. Pro nadpisy je použita tenká verze písma. Podobně jako v předchozím případě se písmo zmenšuje s velikostí okna.
Obrázek kávy se při menších velikostech okna zmenší a vystředí. Při menších velikostech okna webové stránky se také text ve dvou sloupcích převede na text v jednom sloupci, aby byl lépe čitelný.

Grafy
-----
Oba grafy jsou vytvořeny pomocí highcharts knihovny. Aby se dosáhlo zaoblení hran podle vzoru byl také implementována funkce, která toto zabezpečuje.
Legenda se po zmenšení okna zobrazí jako klasický seznam.

Odkazy
------
Všechny odkazy na stránce odkazují na stejnou stránku (odkazy jsou slepé).
