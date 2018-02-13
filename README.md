# Platzom

Platzom es un idioma inventado para el cursod e [fundamentos de javascript](https://platzi.com/js) de [platzi](https://platzi.com)

## Descripción del idioma
- si la palabra termina en -ar, se le quitan esas dos letras
- si la palabra inicia con z, se le añade "pe"al final
- si la palabra traducida tiene 10 o mas letras, se debe partir en la mitad y unir con guion medio
- si la palabra en palindroma, no se aplica ninguna regla y se devuelve la misma palbra pero intercalando mayusculas y minusculas

## instalación
```
npm install platzom
```

## uso
```
import platzom from "platzom"

platzom("programar") //program
platzom("zorro") // zorrope
platzom("zarpar")zarppe
platzom("abecedario") //abece-dario
platzom("sometemos") // SoMeTeMoS
```
## creditos
- [juan david jaramillo](https:// twitter.com/@juandajrm)

## licencia
[MIT](https://opensource.org/licenses/MIT)
