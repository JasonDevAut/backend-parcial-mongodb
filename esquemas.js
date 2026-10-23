use cafeteria

db.createCollection("logs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["accion", "statusCode", "IP", "id_usuario", "fecha_ejecucion"],
      properties: {
        accion: {
          bsonType: "string",
          description: "Nombre de la accion"
        },
        statusCode: {
          bsonType: "int",
          minimum: 100,
          maximum: 599,
          description: "Codigo de estado de salida"
        },
        IP: {
          bsonType: "string",
          description: "IP de la ejecucion"
        },
        id_usuario: {
          bsonType: "string",
          description: "Identificador del usuario que ejecuta la accion"
        },
        metodo: {
          bsonType: "string",
          description: "Verbo HTTP de la peticion"
        },
        ruta: {
          bsonType: "string",
          description: "Ruta solicitada"
        },
        fecha_ejecucion: {
          bsonType: "date",
          description: "Fecha de ejecucion de la accion"
        },
        pedidoId: {
          bsonType: "int",
          description: "Pedido relacionado cuando la accion lo tiene"
        },
        comentarioId: {
          bsonType: "string",
          description: "Comentario relacionado cuando la accion es un comentario"
        },
        texto: {
          bsonType: "string",
          description: "Comentario asociado cuando la accion es un comentario"
        },
        mensaje: {
          bsonType: "string",
          description: "Resultado de la peticion o mensaje original de un error interno"
        },
        descripcion: {
          bsonType: "string",
          description: "Detalle de la peticion o traza original de un error interno"
        }
      }
    }
  }
})

db.createCollection("comentarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pedidoId", "texto", "fecha"],
      properties: {
        pedidoId: {
          bsonType: "int",
          minimum: 1,
          description: "Pedido al que pertenece el comentario"
        },
        texto: {
          bsonType: "string",
          description: "Texto del comentario"
        },
        fecha: {
          bsonType: "date",
          description: "Fecha en la que se registro el comentario"
        }
      }
    }
  }
})
