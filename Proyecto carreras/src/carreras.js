db.grupos.drop();

db.grupos.insertMany([

    {
        _id: 1,
        Familia: "Informatica",
        Grado: "ASIR",

    },

    {
        _id: 2,
        Familia: "Informatica",
        Grado: "DAM",

    },

    {
        _id: 3,
        Familia: "Informatica",
        Grado: "DAW",

    },
])


db.alumnos.drop();
db.alumnos.insertMany([

    {
        _id: 1,
        Matricula: "225478963",
        Nombre: "Manuel",    
        Apellidos: "Ugarte",
        Sexo: "M",
        Idg: 1,
        Edad: 18
    },

    {
        _id: 2,
        Matricula: "147896548",
        Nombre: "Paula",
        Apellidos: "Merino",
        Sexo: "F",
        Idg: 1,
        Edad: 19
    },

    {
        _id: 3,
        Matricula: "354789453",
        Nombre: "Jorge",
        Apellidos: "Gallego",
        Sexo: "M",
        Idg: 2,
        Edad: 21
    },

    {
        _id: 4,
        Matricula: "787841259",
        Nombre: "Eva",
        Apellidos: "Peña",
        Sexo: "F",
        Idg: 2,
        Edad: 25
    },

    {
        _id: 5,
        Matricula: "125478654",
        Nombre: "Roberto",
        Apellidos: "Linares",
        Sexo: "M",
        Idg: 3,
        Edad: 19
    },

    {
        _id: 6,
        Matricula: "478512367",
        Nombre: "Elisa",
        Apellidos: "Garcia",
        Sexo: "M",
        Idg: 3,
        Edad: 19
    },

    {
        _id: 7,
        Matricula: "784596357",
        Nombre: "Anuel",
        Apellidos: "AA",
        Sexo: "M",
        Idg: 1,
        Edad: 18
    },

    {
        _id: 8,
        Matricula: "478945239",
        Nombre: "Adrian",
        Apellidos: "Trasierra",
        Sexo: "M",
        Idg: 1,
        Edad: 19
    }

])


//....Muestra todos los alumnos masculinos del Grado ASIR mostrandome los campos matricula, nombre, sexo y el nombre del grado del alumno, mostrandolo de la A - Z ....//


db.alumnos.aggregate([
    {
        $lookup: {
            from: "grupos",
            localField: "Idg",
            foreignField: "_id",
            as: "grupos"
        }
    },
    { $match: { Sexo: "M", "grupos.Grado": "ASIR" } },

    {
        $project: {
            _id: 0,
            Matricula: 1,
            Nombre: 1,
            Sexo: 1,
            Grado: "$grupos.Grado"
        }

    },
    { $sort: { Nombre: 1 } }

]).pretty()


//....RESULTADO....//


/*{
    "Matricula" : "478945239",
    "Nombre" : "Adrian",
    "Sexo" : "M",
    "Grado" : [
            "ASIR"
    ]
}
{
    "Matricula" : "784596357",
    "Nombre" : "Anuel",
    "Sexo" : "M",
    "Grado" : [
            "ASIR"
    ]
}
{
    "Matricula" : "225478963",
    "Nombre" : "Manuel",
    "Sexo" : "M",
    "Grado" : [
            "ASIR"
    ]
}*/