use cafeteria

db.logs.insertOne({
  accion: "Consulta Productos",
  statusCode: NumberInt(200),
  IP: "198.26.24.124",
  id_usuario: "1",
  metodo: "GET",
  ruta: "/api/productos",
  fecha_ejecucion: new Date("2026-10-21T13:00:00Z")
})

db.logs.insertMany([
  {
    accion: "Registro Pedido",
    statusCode: NumberInt(201),
    IP: "198.26.24.128",
    metodo: "POST",
    ruta: "/api/pedidos",
    fecha_ejecucion: new Date("2026-10-21T14:00:00Z"),
    id_usuario: "2",
    pedidoId: NumberInt(1)
  },
  {
    accion: "Registro Comentario",
    statusCode: NumberInt(201),
    IP: "198.26.24.121",
    metodo: "POST",
    ruta: "/api/pedidos/1/comentarios",
    fecha_ejecucion: new Date("2026-10-21T14:05:00Z"),
    id_usuario: "2",
    pedidoId: NumberInt(1),
    comentarioId: "comentario-ejemplo",
    texto: "Sin azúcar"
  },
  {
    accion: "Consulta Usuarios",
    statusCode: NumberInt(400),
    IP: "198.26.24.121",
    id_usuario: "2",
    metodo: "POST",
    ruta: "/api/usuarios",
    fecha_ejecucion: new Date("2026-10-21T14:06:00Z")
  },
  {
    accion: "Consulta Pedido",
    statusCode: NumberInt(404),
    IP: "198.26.24.201",
    id_usuario: "3",
    metodo: "GET",
    ruta: "/api/pedidos/999",
    fecha_ejecucion: new Date("2026-10-21T14:07:00Z")
  }
])

db.comentarios.insertOne({
  pedidoId: NumberInt(1),
  texto: "Sin azúcar",
  fecha: new Date("2026-10-21T14:05:00Z")
})

db.logs.aggregate(
  { $match: { statusCode: { $gte: 400 } } },
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d %H:%M", date: "$fecha_ejecucion" } },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
)
