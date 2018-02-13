
const expect = require("chai").expect
const platzom = require("..").default

describe("#platzom", function(){

it("si la palabra termina en -ar, se le quitan esas dos letras", function (){
  const translation = platzom("programar")
  expect(translation).to.equal("program")
})
it("si la palabra inicia con z, se le añade pe al final", function (){
  const translation = platzom("zorro")
  const translation2 = platzom("zarpar")
  expect(translation).to.equal("zorrope")
  expect(translation2).to.equal("zarppe")
})
it("si la palabra traducida tiene 10 o mas letras, se debe partir en la mitad y unir con guion medio", function (){
  const translation = platzom("abecedario")
  expect(translation).to.equal("abece-dario")
})
it("si la palabra en palindroma, no se aplica ninguna regla y se devuelve la misma palbra pero intercalando mayusculas y minusculas", function (){
  const translation = platzom("sometemos")
  expect(translation).to.equal("SoMeTeMoS")
})

})
