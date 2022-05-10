import Animal from "../Animal.js"

const animais = [
  {
    "id": "1A",
    "nome": "Leão",
    "velocidadeMaximaKmH": 80,
    "patas": 4,
    "comprimentoM": 1.2,
    "pesoKg": 190,
    "expectativaDeVidaAnos": 15
  },
  {
    "id": "1B",
    "nome": "Gorila",
    "velocidadeMaximaKmH": 40,
    "patas": 4,
    "comprimentoM": 2,
    "pesoKg": 230,
    "expectativaDeVidaAnos": 45
  },
  {
    "id": "1C",
    "nome": "Elefante",
    "velocidadeMaximaKmH": 40,
    "patas": 4,
    "comprimentoM": 2.8,
    "pesoKg": 4,
    "expectativaDeVidaAnos": 50
  },
  {
    "id": "1D",
    "nome": "Pantera",
    "velocidadeMaximaKmH": 110,
    "patas": 4,
    "comprimentoM": 1.8,
    "pesoKg": 90,
    "expectativaDeVidaAnos": 17
  },
  {
    "id": "2A",
    "nome": "Borboleta",
    "velocidadeMaximaKmH": 20,
    "patas": 6,
    "comprimentoM": 0.32,
    "pesoKg": 0.003,
    "expectativaDeVidaAnos": 0.08
  },
  {
    "id": "2B",
    "nome": "Joaninha",
    "velocidadeMaximaKmH": 60,
    "patas": 6,
    "comprimentoM": 0.1,
    "pesoKg": 0.021,
    "expectativaDeVidaAnos": 0.75
  },
  {
    "id": "2C",
    "nome": "Formiga",
    "velocidadeMaximaKmH": 3.1,
    "patas": 6,
    "comprimentoM": 0.001,
    "pesoKg": 0.00003,
    "expectativaDeVidaAnos": 4
  },
  {
    "id": "2D",
    "nome": "Abelha",
    "velocidadeMaximaKmH": 32,
    "patas": 6,
    "comprimentoM": 0.002,
    "pesoKg": 0.000247,
    "expectativaDeVidaAnos": 0.16
  },
  {
    "id": "3A",
    "nome": "Cavalo",
    "velocidadeMaximaKmH": 88,
    "patas": 4,
    "comprimentoM": 2.4,
    "pesoKg": 300,
    "expectativaDeVidaAnos": 30
  },
  {
    "id": "3B",
    "nome": "Leopardo",
    "velocidadeMaximaKmH": 58,
    "patas": 4,
    "comprimentoM": 1.6,
    "pesoKg": 27,
    "expectativaDeVidaAnos": 17
  },
  {
    "id": "3C",
    "nome": "Guepardo",
    "velocidadeMaximaKmH": 120,
    "patas": 4,
    "comprimentoM": 1.5,
    "pesoKg": 72,
    "expectativaDeVidaAnos": 19
  },
  {
    "id": "3D",
    "nome": "Onça-pintada",
    "velocidadeMaximaKmH": 80,
    "patas": 4,
    "comprimentoM": 1.8,
    "pesoKg": 96,
    "expectativaDeVidaAnos": 15
  },
  {
    "id": "4A",
    "nome": "Pavão",
    "velocidadeMaximaKmH": 16,
    "patas": 2,
    "comprimentoM": 1.2,
    "pesoKg": 6,
    "expectativaDeVidaAnos": 25
  },
  {
    "id": "4B",
    "nome": "Peru",
    "velocidadeMaximaKmH": 24,
    "patas": 2,
    "comprimentoM": 1.17,
    "pesoKg": 10,
    "expectativaDeVidaAnos": 5
  },
  {
    "id": "4C",
    "nome": "Touro",
    "velocidadeMaximaKmH": 55,
    "patas": 4,
    "comprimentoM": 1.77,
    "pesoKg": 800,
    "expectativaDeVidaAnos": 22
  },
  {
    "id": "4D",
    "nome": "Veado",
    "velocidadeMaximaKmH": 50,
    "patas": 4,
    "comprimentoM": 2.1,
    "pesoKg": 200,
    "expectativaDeVidaAnos": 12
  },
  {
    "id": "5A",
    "nome": "Falcão",
    "velocidadeMaximaKmH": 390,
    "patas": 2,
    "comprimentoM": 0.58,
    "pesoKg": 1.5,
    "expectativaDeVidaAnos": 25
  },
  {
    "id": "5B",
    "nome": "Arara",
    "velocidadeMaximaKmH": 80,
    "patas": 2,
    "comprimentoM": 1,
    "pesoKg": "1,7",
    "expectativaDeVidaAnos": 50
  },
  {
    "id": "5C",
    "nome": "Águia",
    "velocidadeMaximaKmH": 160,
    "patas": 2,
    "comprimentoM": 2.3,
    "pesoKg": 6.3,
    "expectativaDeVidaAnos": 20
  },
  {
    "id": "5D",
    "nome": "Urubu",
    "velocidadeMaximaKmH": 28,
    "patas": 2,
    "comprimentoM": 0.76,
    "pesoKg": 1.9,
    "expectativaDeVidaAnos": 10
  },
  {
    "id": "6A",
    "nome": "Anta",
    "velocidadeMaximaKmH": 98,
    "patas": 4,
    "comprimentoM": 2,
    "pesoKg": 300,
    "expectativaDeVidaAnos": 35
  },
  {
    "id": "6B",
    "nome": "Tamanduá",
    "velocidadeMaximaKmH": 10,
    "patas": 4,
    "comprimentoM": 2.1,
    "pesoKg": 41,
    "expectativaDeVidaAnos": 25
  },
  {
    "id": "6C",
    "nome": "Tatu",
    "velocidadeMaximaKmH": 9,
    "patas": 4,
    "comprimentoM": 0.15,
    "pesoKg": 33,
    "expectativaDeVidaAnos": 15
  },
  {
    "id": "6D",
    "nome": "Cutia",
    "velocidadeMaximaKmH": 20,
    "patas": 4,
    "comprimentoM": 0.6,
    "pesoKg": 3,
    "expectativaDeVidaAnos": 20
  },
  {
    "id": "7A",
    "nome": "Peixe-espada",
    "velocidadeMaximaKmH": 97,
    "patas": 0,
    "comprimentoM": 3.5,
    "pesoKg": 2.8,
    "expectativaDeVidaAnos": 3
  },
  {
    "id": "7B",
    "nome": "Pirarucu",
    "velocidadeMaximaKmH": 90,
    "patas": 0,
    "comprimentoM": 2.1,
    "pesoKg": 112,
    "expectativaDeVidaAnos": 18
  },
  {
    "id": "7C",
    "nome": "Pacu",
    "velocidadeMaximaKmH": 100,
    "patas": 0,
    "comprimentoM": 0.7,
    "pesoKg": 20,
    "expectativaDeVidaAnos": 8
  },
  {
    "id": "7D",
    "nome": "Piranha",
    "velocidadeMaximaKmH": 70,
    "patas": 0,
    "comprimentoM": 0.033,
    "pesoKg": 3.5,
    "expectativaDeVidaAnos": 25
  },
  {
    "id": "8A",
    "nome": "Iguana",
    "velocidadeMaximaKmH": 35,
    "patas": 4,
    "comprimentoM": 1.8,
    "pesoKg": 4,
    "expectativaDeVidaAnos": 20
  },
  {
    "id": "8B",
    "nome": "Jacaré",
    "velocidadeMaximaKmH": 48,
    "patas": 4,
    "comprimentoM": 5.5,
    "pesoKg": 600,
    "expectativaDeVidaAnos": 30
  },
  {
    "id": "8C",
    "nome": "Camelo",
    "velocidadeMaximaKmH": 65,
    "patas": 4,
    "comprimentoM": 2,
    "pesoKg": 690,
    "expectativaDeVidaAnos": 40
  },
  {
    "id": "8D",
    "nome": "Tartaruga",
    "velocidadeMaximaKmH": 35,
    "patas": 4,
    "comprimentoM": 2.2,
    "pesoKg": 0.7,
    "expectativaDeVidaAnos": 150
  }
]

export default animais.map(animal => new Animal(animal))