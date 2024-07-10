
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EntidadesSistemaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  cnpj: 'cnpj',
  tipo_entidade: 'tipo_entidade',
  sobre: 'sobre',
  email: 'email',
  foto: 'foto',
  enderecoID: 'enderecoID'
};

exports.Prisma.EnderecoScalarFieldEnum = {
  id: 'id',
  adress: 'adress'
};

exports.Prisma.ContactosScalarFieldEnum = {
  id: 'id',
  contacto: 'contacto',
  entidadeID: 'entidadeID',
  usuarioID: 'usuarioID'
};

exports.Prisma.EspecialistasScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  crm: 'crm',
  especialidade: 'especialidade',
  tipo_De_Consulta: 'tipo_De_Consulta',
  valor: 'valor',
  bloqueado: 'bloqueado',
  sexo: 'sexo',
  entidadeID: 'entidadeID'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  crm: 'crm',
  cnpj: 'cnpj',
  foto: 'foto',
  senha: 'senha',
  sobre: 'sobre',
  sexo: 'sexo',
  socketID: 'socketID',
  nascimento: 'nascimento'
};

exports.Prisma.PublicacoesScalarFieldEnum = {
  id: 'id',
  conteudo: 'conteudo',
  foto: 'foto',
  video: 'video',
  data: 'data',
  updatedAt: 'updatedAt',
  usuarioID: 'usuarioID'
};

exports.Prisma.ComentariosScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  autorId: 'autorId',
  conteudo: 'conteudo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReacoesScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.NotificacoesScalarFieldEnum = {
  id: 'id',
  data: 'data',
  usuarioID: 'usuarioID',
  destinatarioID: 'destinatarioID',
  consultaID: 'consultaID',
  postID: 'postID',
  tipo: 'tipo',
  visto: 'visto'
};

exports.Prisma.SeguidoresScalarFieldEnum = {
  id: 'id',
  seguidorID: 'seguidorID',
  entidadeID: 'entidadeID'
};

exports.Prisma.MensagensScalarFieldEnum = {
  id: 'id',
  conteudo: 'conteudo',
  foto: 'foto',
  video: 'video',
  arquivo: 'arquivo',
  data: 'data',
  emissorID: 'emissorID',
  receptorID: 'receptorID',
  visto: 'visto'
};

exports.Prisma.DiasDisponiveisScalarFieldEnum = {
  id: 'id',
  date: 'date',
  especialistaID: 'especialistaID'
};

exports.Prisma.HorasDisponiveisScalarFieldEnum = {
  id: 'id',
  hora: 'hora',
  diasDisponiveisID: 'diasDisponiveisID',
  especialistaID: 'especialistaID'
};

exports.Prisma.ConsultasScalarFieldEnum = {
  id: 'id',
  tipo_Da_Consulta: 'tipo_Da_Consulta',
  data: 'data',
  hora: 'hora',
  especialistaID: 'especialistaID',
  status: 'status',
  pacienteID: 'pacienteID'
};

exports.Prisma.VideoCallScalarFieldEnum = {
  id: 'id',
  emissor: 'emissor',
  destinatario: 'destinatario',
  offer: 'offer',
  answer: 'answer'
};

exports.Prisma.MinhasConexoesScalarFieldEnum = {
  id: 'id',
  userID: 'userID',
  friendID: 'friendID'
};

exports.Prisma.PedidoDeConexaoScalarFieldEnum = {
  id: 'id',
  userID: 'userID',
  destinatarioID: 'destinatarioID'
};

exports.Prisma.PartilhaScalarFieldEnum = {
  id: 'id',
  userID: 'userID',
  createPostShareID: 'createPostShareID',
  postShareID: 'postShareID',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Sexo = exports.$Enums.Sexo = {
  Masculino: 'Masculino',
  Feminino: 'Feminino'
};

exports.Consulta = exports.$Enums.Consulta = {
  Marcada: 'Marcada',
  Realizada: 'Realizada',
  NRealizada: 'NRealizada',
  Cancelada: 'Cancelada'
};

exports.Prisma.ModelName = {
  EntidadesSistema: 'EntidadesSistema',
  Endereco: 'Endereco',
  Contactos: 'Contactos',
  Especialistas: 'Especialistas',
  Usuarios: 'Usuarios',
  Publicacoes: 'Publicacoes',
  Comentarios: 'Comentarios',
  Reacoes: 'Reacoes',
  Notificacoes: 'Notificacoes',
  Seguidores: 'Seguidores',
  Mensagens: 'Mensagens',
  DiasDisponiveis: 'DiasDisponiveis',
  HorasDisponiveis: 'HorasDisponiveis',
  Consultas: 'Consultas',
  VideoCall: 'VideoCall',
  MinhasConexoes: 'MinhasConexoes',
  PedidoDeConexao: 'PedidoDeConexao',
  Partilha: 'Partilha'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\+ Saúde\\BackEnd\\src\\generated\\client1",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.8.1",
  "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9zcmMvZ2VuZXJhdGVkL2NsaWVudDEiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgovL0RhdGFCYXNlICtNYWlzU2F1ZGUKCm1vZGVsIEVudGlkYWRlc1Npc3RlbWEgewogIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSAgICAgICAgICBTdHJpbmcKICBjbnBqICAgICAgICAgIFN0cmluZyAgICAgICAgICBAdW5pcXVlCiAgdGlwb19lbnRpZGFkZSBTdHJpbmcKICBzb2JyZSAgICAgICAgIFN0cmluZz8KICBlbWFpbCAgICAgICAgIFN0cmluZyAgICAgICAgICBAdW5pcXVlCiAgZm90byAgICAgICAgICBTdHJpbmc/CiAgZW5kZXJlY29JRCAgICBTdHJpbmcKICBlbmRlcmVjbyAgICAgIEVuZGVyZWNvICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZW5kZXJlY29JRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29udGFjdG9zICAgICBDb250YWN0b3NbXQogIGVzcGVjaWFsaXN0YSAgRXNwZWNpYWxpc3Rhc1tdCiAgc2VndWlkb3JlcyAgICBTZWd1aWRvcmVzW10KfQoKbW9kZWwgRW5kZXJlY28gewogIGlkICAgICAgU3RyaW5nICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgYWRyZXNzICBTdHJpbmcKICBlbnRpdGllIEVudGlkYWRlc1Npc3RlbWFbXQp9Cgptb2RlbCBDb250YWN0b3MgewogIGlkICAgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGNvbnRhY3RvICAgU3RyaW5nCiAgZW50aWRhZGUgICBFbnRpZGFkZXNTaXN0ZW1hIEByZWxhdGlvbihmaWVsZHM6IFtlbnRpZGFkZUlEXSwgcmVmZXJlbmNlczogW2lkXSkKICBlbnRpZGFkZUlEIFN0cmluZwogIHVzdWFyaW9JRCAgU3RyaW5nCiAgdXN1YXJpbyAgICBVc3VhcmlvcyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c3VhcmlvSURdLCByZWZlcmVuY2VzOiBbaWRdKQp9CgplbnVtIFNleG8gewogIE1hc2N1bGlubwogIEZlbWluaW5vCn0KCmVudW0gQ29uc3VsdGEgewogIE1hcmNhZGEKICBSZWFsaXphZGEKICBOUmVhbGl6YWRhCiAgQ2FuY2VsYWRhCn0KCm1vZGVsIEVzcGVjaWFsaXN0YXMgewogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbm9tZSAgICAgICAgICAgICBTdHJpbmcKICBjcm0gICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAdW5pcXVlCiAgZXNwZWNpYWxpZGFkZSAgICBTdHJpbmcKICB0aXBvX0RlX0NvbnN1bHRhIFN0cmluZwogIHZhbG9yICAgICAgICAgICAgU3RyaW5nPwogIGJsb3F1ZWFkbyAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIAogIHNleG8gICAgICAgICAgICAgU2V4bwogIGVudGlkYWRlSUQgICAgICAgU3RyaW5nPwogIGVudGlkYWRlICAgICAgICAgRW50aWRhZGVzU2lzdGVtYT8gICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtlbnRpZGFkZUlEXSwgcmVmZXJlbmNlczogW2lkXSkKICBkaWFzRGlzcG9uaXZlaXMgIERpYXNEaXNwb25pdmVpc1tdCiAgaG9yYXNEaXNwb25pdmVpcyBIb3Jhc0Rpc3Bvbml2ZWlzW10KICBjb25zdWx0YXMgICAgICAgIENvbnN1bHRhc1tdCn0KCm1vZGVsIFVzdWFyaW9zIHsKICBpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZwogIGVtYWlsICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIGNybSAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIGNucGogICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgCiAgZm90byAgICAgICAgICAgICAgIFN0cmluZz8KICBzZW5oYSAgICAgICAgICAgICAgU3RyaW5nCiAgc29icmUgICAgICAgICAgICAgIFN0cmluZz8KICBzZXhvICAgICAgICAgICAgICAgU2V4bwogIHNvY2tldElEICAgICAgICAgICBTdHJpbmc/CiAgbmFzY2ltZW50byAgICAgICAgIERhdGVUaW1lCiAgY29udGFjdG9zICAgICAgICAgIENvbnRhY3Rvc1tdCiAgcHViYmxpY2Fjb2VzICAgICAgIFB1YmxpY2Fjb2VzW10KICBvcmlnZW0gICAgICAgTm90aWZpY2Fjb2VzW10gQHJlbGF0aW9uKCJzZW5kZXIiKQogIGRlc3RpbmF0YXJpb05vdGlmaWNhY2FvICAgICAgIE5vdGlmaWNhY29lc1tdIEByZWxhdGlvbigicmVjZWl2ZXIiKQogIGNvbnN1bHRhcyAgICAgICAgICBDb25zdWx0YXNbXQogIG1lbnNhZ2Vuc0VudmlhZGFzICBNZW5zYWdlbnNbXSAgICAgICAgICAgICAgQHJlbGF0aW9uKCJFbnZpYWRhcyIpCiAgbWVuc2FnZW5zUmVjZWJpZGFzIE1lbnNhZ2Vuc1tdICAgICAgICAgICAgICBAcmVsYXRpb24oIlJlY2ViaWRhcyIpCiAgcmVtZXRlbnRlICAgICAgICAgIE1pbmhhc0NvbmV4b2VzW10gICAgICAgICBAcmVsYXRpb24oInJlbWV0ZW50ZUNvbm5lY3Rpb24iKSAgCiAgZGVzdGluYXRhcmlvICAgICAgIE1pbmhhc0NvbmV4b2VzW10gICAgICAgICBAcmVsYXRpb24oImRlc3RpbmF0YXJpb0Nvbm5lY3Rpb24iKQogIGVtaXNzb3JEb1BlZGlkbyAgICBQZWRpZG9EZUNvbmV4YW9bXSAgICAgICAgQHJlbGF0aW9uKCJlbWlzc29yRG9QZWRpZG8iKQogIHJlY2VwdG9yRG9QZWRpZG8gICBQZWRpZG9EZUNvbmV4YW9bXSAgICAgICAgQHJlbGF0aW9uKCJyZWNlcHRvckRvUGVkaWRvIikKICByZWFjb2VzICAgICAgICAgICAgUmVhY29lc1tdCiAgY29tZW50YXJpb3MgICAgICAgIENvbWVudGFyaW9zW10KICBzZWd1aWRvciAgICAgICAgICAgU2VndWlkb3Jlc1tdCiAgcGFydGlsaGEgICAgICAgICAgIFBhcnRpbGhhW10KfQoKbW9kZWwgUHVibGljYWNvZXMgewogIGlkICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjb250ZXVkbyAgIFN0cmluZwogIGZvdG8gICAgICAgU3RyaW5nPwogIHZpZGVvICAgICAgU3RyaW5nPwogIGRhdGEgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lICBAdXBkYXRlZEF0CiAgdXN1YXJpb1B1YiBVc3VhcmlvcyBAcmVsYXRpb24oZmllbGRzOiBbdXN1YXJpb0lEXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c3VhcmlvSUQgIFN0cmluZwogIHJlYWNvZXMgICAgUmVhY29lc1tdCiAgY29tZW50YXJpb3MgQ29tZW50YXJpb3NbXQogIG5vdGlmaWNhY2FvIE5vdGlmaWNhY29lc1tdCiAgcG9zdFBhcnRpbGhhZG8gICBQYXJ0aWxoYVtdICAgIEByZWxhdGlvbigicG9zdFBhcnRpbGhhZG8iKQogIHBvc3RDcmlhZG8gICBQYXJ0aWxoYVtdICAgIEByZWxhdGlvbigicG9zdENyaWFkbyIpCn0KCm1vZGVsIENvbWVudGFyaW9zIHsKICBpZCAgICAgICAgU3RyaW5nICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgcG9zdCAgICAgIFB1YmxpY2Fjb2VzICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Bvc3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcG9zdElkICAgIFN0cmluZwogIGF1dG9yICAgIFVzdWFyaW9zICAgICBAcmVsYXRpb24oZmllbGRzOiBbYXV0b3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYXV0b3JJZCAgU3RyaW5nCiAgY29udGV1ZG8gICBTdHJpbmcKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZSAgQHVwZGF0ZWRBdAp9Cgptb2RlbCBSZWFjb2VzIHsKICBpZCAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgcG9zdCAgICAgIFB1YmxpY2Fjb2VzICAgQHJlbGF0aW9uKGZpZWxkczogW3Bvc3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcG9zdElkICAgIFN0cmluZwogIHVzZXIgICAgICBVc3VhcmlvcyAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICBTdHJpbmcKICB0eXBlICAgICAgU3RyaW5nIC8vIFBvZGUgc2VyICdsaWtlJywgJ2xvdmUnLCAnaGFoYScsICd3b3cnLCAnc2FkJyBvdSAnYW5ncnknCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQp9Cgptb2RlbCBOb3RpZmljYWNvZXMgewogIGlkICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgZGF0YSAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpICAKICB1c3VhcmlvTm90aWZpY2FjYW8gICAgICBVc3VhcmlvcyBAcmVsYXRpb24oInNlbmRlciIsZmllbGRzOiBbdXN1YXJpb0lEXSwgcmVmZXJlbmNlczogW2lkXSkKICBkZXN0aW5hdGFyaW9Ob3RpZmljYWNhbyBVc3VhcmlvcyBAcmVsYXRpb24oInJlY2VpdmVyIixmaWVsZHM6IFtkZXN0aW5hdGFyaW9JRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXN1YXJpb0lEICAgICAgICAgICAgICAgU3RyaW5nCiAgZGVzdGluYXRhcmlvSUQgICAgICAgICAgU3RyaW5nCiAgY29uc3VsdGFJRCAgICAgICAgICAgICAgU3RyaW5nCiAgcG9zdElEICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgcG9zdCAgICAgICAgICAgICAgICAgICAgUHVibGljYWNvZXMgQHJlbGF0aW9uKGZpZWxkczogW3Bvc3RJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29uc3VsdGEgICAgICAgICAgICAgICAgQ29uc3VsdGFzIEByZWxhdGlvbihmaWVsZHM6IFtjb25zdWx0YUlEXSwgcmVmZXJlbmNlczogW2lkXSkKICB0aXBvICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICB2aXN0byAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgCn0KCm1vZGVsIFNlZ3VpZG9yZXN7CiAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgc2VndWlkb3JJRCBTdHJpbmcKICBzZWd1aWRvciBVc3VhcmlvcyBAcmVsYXRpb24oZmllbGRzOiBbc2VndWlkb3JJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZW50aWRhZGVJRCBTdHJpbmcKICBlbnRpZGFkZSBFbnRpZGFkZXNTaXN0ZW1hIEByZWxhdGlvbihmaWVsZHM6IFtlbnRpZGFkZUlEXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKbW9kZWwgTWVuc2FnZW5zIHsKICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgY29udGV1ZG8gICBTdHJpbmc/CiAgZm90byAgICAgICBTdHJpbmc/CiAgdmlkZW8gICAgICBTdHJpbmc/CiAgYXJxdWl2byAgICBTdHJpbmc/CiAgZGF0YSAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICBlbWlzc29yICAgIFVzdWFyaW9zIEByZWxhdGlvbigiRW52aWFkYXMiLCBmaWVsZHM6IFtlbWlzc29ySURdLCByZWZlcmVuY2VzOiBbaWRdKQogIHJlY2VwdG9yICAgVXN1YXJpb3MgQHJlbGF0aW9uKCJSZWNlYmlkYXMiLCBmaWVsZHM6IFtyZWNlcHRvcklEXSwgcmVmZXJlbmNlczogW2lkXSkKICBlbWlzc29ySUQgIFN0cmluZwogIHJlY2VwdG9ySUQgU3RyaW5nCiAgdmlzdG8gICAgICBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKQp9Cgptb2RlbCBEaWFzRGlzcG9uaXZlaXMgewogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgZGF0ZSAgICAgICAgICAgICBEYXRlVGltZQogIGVzcGVjaWFsaXN0YUlEICAgU3RyaW5nCiAgaG9yYXNEaXNwb25pdmVpcyBIb3Jhc0Rpc3Bvbml2ZWlzW10KICBlc3BlY2lhbGlzdGEgICAgIEVzcGVjaWFsaXN0YXMgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZXNwZWNpYWxpc3RhSURdLCByZWZlcmVuY2VzOiBbaWRdKQp9Cgptb2RlbCBIb3Jhc0Rpc3Bvbml2ZWlzIHsKICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBob3JhICAgICAgICAgICAgICBTdHJpbmcKICBkaWFzRGlzcG9uaXZlaXNJRCBTdHJpbmcKICBkaWFzRGlzcG9uaXZlaXMgICBEaWFzRGlzcG9uaXZlaXMgQHJlbGF0aW9uKGZpZWxkczogW2RpYXNEaXNwb25pdmVpc0lEXSwgcmVmZXJlbmNlczogW2lkXSkKICBlc3BlY2lhbGlzdGFJRCAgICBTdHJpbmcKICBlc3BlY2lhbGlzdGEgICAgICBFc3BlY2lhbGlzdGFzICAgQHJlbGF0aW9uKGZpZWxkczogW2VzcGVjaWFsaXN0YUlEXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKbW9kZWwgQ29uc3VsdGFzIHsKICBpZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICB0aXBvX0RhX0NvbnN1bHRhIFN0cmluZwogIGRhdGEgICAgICAgICAgICAgRGF0ZVRpbWUKICBob3JhICAgICAgICAgICAgIFN0cmluZwogIGVzcGVjaWFsaXN0YUlEICAgU3RyaW5nCiAgc3RhdHVzICAgICAgICAgICBDb25zdWx0YQogIHBhY2llbnRlSUQgICAgICAgU3RyaW5nCiAgZXNwZWNpYWxpc3RhICAgICBFc3BlY2lhbGlzdGFzIEByZWxhdGlvbihmaWVsZHM6IFtlc3BlY2lhbGlzdGFJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXN1YXJpbyAgICAgICAgICBVc3VhcmlvcyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwYWNpZW50ZUlEXSwgcmVmZXJlbmNlczogW2lkXSkKICBub3RpZmljYWNvZXMgICAgIE5vdGlmaWNhY29lc1tdCn0KCm1vZGVsIFZpZGVvQ2FsbCB7CiAgaWQgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgZW1pc3NvciAgICAgIFN0cmluZwogIGRlc3RpbmF0YXJpbyBTdHJpbmcKICBvZmZlciAgICAgICAgSnNvbj8KICBhbnN3ZXIgICAgICAgSnNvbj8KfQoKbW9kZWwgTWluaGFzQ29uZXhvZXMgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICB1c2VySUQgU3RyaW5nCiAgdXNlciAgIFVzdWFyaW9zIEByZWxhdGlvbigicmVtZXRlbnRlQ29ubmVjdGlvbiIsIGZpZWxkczogW3VzZXJJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZnJpZW5kSUQgU3RyaW5nCiAgZnJpZW5kICAgVXN1YXJpb3MgQHJlbGF0aW9uKCJkZXN0aW5hdGFyaW9Db25uZWN0aW9uIiwgZmllbGRzOiBbZnJpZW5kSURdLCByZWZlcmVuY2VzOiBbaWRdKQoKfQoKbW9kZWwgUGVkaWRvRGVDb25leGFvewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHVzZXJJRCBTdHJpbmcKICBkZXN0aW5hdGFyaW9JRCBTdHJpbmcKICB1c2VyIFVzdWFyaW9zIEByZWxhdGlvbigiZW1pc3NvckRvUGVkaWRvIixmaWVsZHM6IFt1c2VySURdLCByZWZlcmVuY2VzOiBbaWRdKQogIGRlc3RpbmF0YXJpbyBVc3VhcmlvcyBAcmVsYXRpb24oInJlY2VwdG9yRG9QZWRpZG8iLGZpZWxkczogW2Rlc3RpbmF0YXJpb0lEXSwgcmVmZXJlbmNlczogW2lkXSkKfSAKCm1vZGVsIFBhcnRpbGhhIHsKICBpZCAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHVzZXJJRCAgIFN0cmluZwogIGNyZWF0ZVBvc3RTaGFyZUlEIFN0cmluZwogIHBvc3RTaGFyZUlEICAgIFN0cmluZwogIHVzZXIgICAgICBVc3VhcmlvcyAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcG9zdCAgICAgIFB1YmxpY2Fjb2VzICAgICBAcmVsYXRpb24oInBvc3RQYXJ0aWxoYWRvIixmaWVsZHM6IFtwb3N0U2hhcmVJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcG9zdFNoYXJlICAgICAgUHVibGljYWNvZXMgICAgIEByZWxhdGlvbigicG9zdENyaWFkbyIsZmllbGRzOiBbY3JlYXRlUG9zdFNoYXJlSURdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKfQ==",
  "inlineSchemaHash": "4355d5281f75c1e0a3860c5d99b73fb159e44bf72b3556cea15833cbd3aee99a"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/client1",
    "generated/client1",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"EntidadesSistema\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_entidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sobre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enderecoID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Endereco\",\"relationName\":\"EnderecoToEntidadesSistema\",\"relationFromFields\":[\"enderecoID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contactos\",\"relationName\":\"ContactosToEntidadesSistema\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialista\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Especialistas\",\"relationName\":\"EntidadesSistemaToEspecialistas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguidores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Seguidores\",\"relationName\":\"EntidadesSistemaToSeguidores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Endereco\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entitie\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntidadesSistema\",\"relationName\":\"EnderecoToEntidadesSistema\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contactos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contacto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntidadesSistema\",\"relationName\":\"ContactosToEntidadesSistema\",\"relationFromFields\":[\"entidadeID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"ContactosToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Especialistas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_De_Consulta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bloqueado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sexo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntidadesSistema\",\"relationName\":\"EntidadesSistemaToEspecialistas\",\"relationFromFields\":[\"entidadeID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diasDisponiveis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DiasDisponiveis\",\"relationName\":\"DiasDisponiveisToEspecialistas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horasDisponiveis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HorasDisponiveis\",\"relationName\":\"EspecialistasToHorasDisponiveis\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Consultas\",\"relationName\":\"ConsultasToEspecialistas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sobre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sexo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socketID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contactos\",\"relationName\":\"ContactosToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pubblicacoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publicacoes\",\"relationName\":\"PublicacoesToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"origem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notificacoes\",\"relationName\":\"sender\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinatarioNotificacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notificacoes\",\"relationName\":\"receiver\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Consultas\",\"relationName\":\"ConsultasToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagensEnviadas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mensagens\",\"relationName\":\"Enviadas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagensRecebidas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mensagens\",\"relationName\":\"Recebidas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remetente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MinhasConexoes\",\"relationName\":\"remetenteConnection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinatario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MinhasConexoes\",\"relationName\":\"destinatarioConnection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emissorDoPedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PedidoDeConexao\",\"relationName\":\"emissorDoPedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receptorDoPedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PedidoDeConexao\",\"relationName\":\"receptorDoPedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reacoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reacoes\",\"relationName\":\"ReacoesToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comentarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comentarios\",\"relationName\":\"ComentariosToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguidor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Seguidores\",\"relationName\":\"SeguidoresToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partilha\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partilha\",\"relationName\":\"PartilhaToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Publicacoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"usuarioPub\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"PublicacoesToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reacoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reacoes\",\"relationName\":\"PublicacoesToReacoes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comentarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comentarios\",\"relationName\":\"ComentariosToPublicacoes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notificacoes\",\"relationName\":\"NotificacoesToPublicacoes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postPartilhado\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partilha\",\"relationName\":\"postPartilhado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postCriado\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partilha\",\"relationName\":\"postCriado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Comentarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publicacoes\",\"relationName\":\"ComentariosToPublicacoes\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"ComentariosToUsuarios\",\"relationFromFields\":[\"autorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reacoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publicacoes\",\"relationName\":\"PublicacoesToReacoes\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"ReacoesToUsuarios\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notificacoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioNotificacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"sender\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinatarioNotificacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"receiver\",\"relationFromFields\":[\"destinatarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinatarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultaID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publicacoes\",\"relationName\":\"NotificacoesToPublicacoes\",\"relationFromFields\":[\"postID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consulta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Consultas\",\"relationName\":\"ConsultasToNotificacoes\",\"relationFromFields\":[\"consultaID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Seguidores\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguidorID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguidor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"SeguidoresToUsuarios\",\"relationFromFields\":[\"seguidorID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntidadesSistema\",\"relationName\":\"EntidadesSistemaToSeguidores\",\"relationFromFields\":[\"entidadeID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Mensagens\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emissor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"Enviadas\",\"relationFromFields\":[\"emissorID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receptor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"Recebidas\",\"relationFromFields\":[\"receptorID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emissorID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receptorID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DiasDisponiveis\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialistaID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horasDisponiveis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HorasDisponiveis\",\"relationName\":\"DiasDisponiveisToHorasDisponiveis\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialista\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Especialistas\",\"relationName\":\"DiasDisponiveisToEspecialistas\",\"relationFromFields\":[\"especialistaID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HorasDisponiveis\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diasDisponiveisID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diasDisponiveis\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DiasDisponiveis\",\"relationName\":\"DiasDisponiveisToHorasDisponiveis\",\"relationFromFields\":[\"diasDisponiveisID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialistaID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialista\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Especialistas\",\"relationName\":\"EspecialistasToHorasDisponiveis\",\"relationFromFields\":[\"especialistaID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Consultas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_Da_Consulta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialistaID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Consulta\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pacienteID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialista\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Especialistas\",\"relationName\":\"ConsultasToEspecialistas\",\"relationFromFields\":[\"especialistaID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"ConsultasToUsuarios\",\"relationFromFields\":[\"pacienteID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificacoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notificacoes\",\"relationName\":\"ConsultasToNotificacoes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VideoCall\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emissor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinatario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MinhasConexoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"remetenteConnection\",\"relationFromFields\":[\"userID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friend\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"destinatarioConnection\",\"relationFromFields\":[\"friendID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PedidoDeConexao\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinatarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"emissorDoPedido\",\"relationFromFields\":[\"userID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinatario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"receptorDoPedido\",\"relationFromFields\":[\"destinatarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Partilha\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createPostShareID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postShareID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"PartilhaToUsuarios\",\"relationFromFields\":[\"userID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publicacoes\",\"relationName\":\"postPartilhado\",\"relationFromFields\":[\"postShareID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postShare\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publicacoes\",\"relationName\":\"postCriado\",\"relationFromFields\":[\"createPostShareID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Sexo\":{\"values\":[{\"name\":\"Masculino\",\"dbName\":null},{\"name\":\"Feminino\",\"dbName\":null}],\"dbName\":null},\"Consulta\":{\"values\":[{\"name\":\"Marcada\",\"dbName\":null},{\"name\":\"Realizada\",\"dbName\":null},{\"name\":\"NRealizada\",\"dbName\":null},{\"name\":\"Cancelada\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/client1/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client1/schema.prisma")
