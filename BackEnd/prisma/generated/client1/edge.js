
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
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
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
  email: 'email',
  endereco: 'endereco'
};

exports.Prisma.ContactoEntidadeScalarFieldEnum = {
  id: 'id',
  contacto: 'contacto',
  entidadeID: 'entidadeID'
};

exports.Prisma.EspecialistasScalarFieldEnum = {
  id: 'id',
  name: 'name',
  especialidade: 'especialidade',
  crm: 'crm',
  entidadeID: 'entidadeID',
  sexo: 'sexo'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  senha: 'senha',
  sexo: 'sexo',
  foto: 'foto',
  crm: 'crm',
  cnpj: 'cnpj',
  nascimento: 'nascimento'
};

exports.Prisma.ContactoUsuarioScalarFieldEnum = {
  id: 'id',
  contacto: 'contacto',
  usuarioID: 'usuarioID'
};

exports.Prisma.PublicacoesScalarFieldEnum = {
  id: 'id',
  conteudo: 'conteudo',
  foto: 'foto',
  video: 'video',
  data: 'data',
  usuarioID: 'usuarioID'
};

exports.Prisma.NotificacoesScalarFieldEnum = {
  id: 'id',
  data: 'data',
  conteudo: 'conteudo',
  usuarioID: 'usuarioID'
};

exports.Prisma.MensagensScalarFieldEnum = {
  id: 'id',
  conteudo: 'conteudo',
  data: 'data',
  usuarioID: 'usuarioID'
};

exports.Prisma.MensagemRecebidaScalarFieldEnum = {
  id: 'id',
  leitura: 'leitura',
  data: 'data',
  mensagemId: 'mensagemId',
  usuarioID: 'usuarioID'
};

exports.Prisma.MensagemEnviadaScalarFieldEnum = {
  id: 'id',
  mensagemId: 'mensagemId',
  usuarioID: 'usuarioID'
};

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  token: 'token'
};

exports.Prisma.UserLoggedScalarFieldEnum = {
  id: 'id',
  UserID: 'UserID'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Sexo = exports.$Enums.Sexo = {
  Masculino: 'Masculino',
  Feminino: 'Feminino'
};

exports.Prisma.ModelName = {
  EntidadesSistema: 'EntidadesSistema',
  ContactoEntidade: 'ContactoEntidade',
  Especialistas: 'Especialistas',
  Usuarios: 'Usuarios',
  ContactoUsuario: 'ContactoUsuario',
  Publicacoes: 'Publicacoes',
  Notificacoes: 'Notificacoes',
  Mensagens: 'Mensagens',
  MensagemRecebida: 'MensagemRecebida',
  MensagemEnviada: 'MensagemEnviada',
  Tokens: 'Tokens',
  UserLogged: 'UserLogged'
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
      "value": "C:\\+ Saúde\\BackEnd\\prisma\\generated\\client1",
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
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgPSAiLi9nZW5lcmF0ZWQvY2xpZW50MSIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCgoKLy9EYXRhQmFzZSArTWFpc1NhdWRlCgovLyAtLUVkbnRpZGFkZXMgZG8gU2lzdGVtYQptb2RlbCBFbnRpZGFkZXNTaXN0ZW1hewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgU3RyaW5nCiAgY25waiBTdHJpbmcgQHVuaXF1ZQogIHRpcG9fZW50aWRhZGUgU3RyaW5nCiAgZW1haWwgU3RyaW5nIEB1bmlxdWUKICBlbmRlcmVjbyBTdHJpbmcKICBjb250YWN0b3MgQ29udGFjdG9FbnRpZGFkZVtdCiAgZXNwZWNpYWxpc3RhIEVzcGVjaWFsaXN0YXNbXQp9Cgptb2RlbCBDb250YWN0b0VudGlkYWRlewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGNvbnRhY3RvIEludCAKICBlbnRpZGFkZSBFbnRpZGFkZXNTaXN0ZW1hICBAcmVsYXRpb24oZmllbGRzOiBbZW50aWRhZGVJRF0gLCByZWZlcmVuY2VzOiBbaWRdKQogIGVudGlkYWRlSUQgU3RyaW5nCn0KCmVudW0gU2V4b3sKICBNYXNjdWxpbm8KICBGZW1pbmlubwp9Cgptb2RlbCBFc3BlY2lhbGlzdGFzewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgU3RyaW5nCiAgZXNwZWNpYWxpZGFkZSBTdHJpbmcKICBjcm0gSW50CiAgZW50aWRhZGUgRW50aWRhZGVzU2lzdGVtYSBAcmVsYXRpb24oZmllbGRzOiBbZW50aWRhZGVJRF0gLCByZWZlcmVuY2VzOiBbaWRdKQogIGVudGlkYWRlSUQgU3RyaW5nCiAgc2V4byBTZXhvCn0KLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZCBFbnRpZGFkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgovL1VzZXJzCm1vZGVsIFVzdWFyaW9zewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgIFN0cmluZwogIGVtYWlsIFN0cmluZyBAdW5pcXVlCiAgc2VuaGEgU3RyaW5nCiAgc2V4byBTZXhvCiAgZm90byAgU3RyaW5nID8KICBjcm0gICBJbnQgPyBAdW5pcXVlCiAgY25waiAgIEludCA/IEB1bmlxdWUKICBuYXNjaW1lbnRvIERhdGVUaW1lCiAgdXNlclB1YiAgICAgICAgICAgIFB1YmxpY2Fjb2VzW10gCiAgdXN1YXJpb05vdGlmaWNhY2FvIE5vdGlmaWNhY29lc1tdCiAgdXN1YXJpb1NNU3JlY2ViaWRhIE1lbnNhZ2VtUmVjZWJpZGFbXQogIHVzdWFyaW9TTVNlbnZpYWRhICBNZW5zYWdlbUVudmlhZGFbXQogIHVzdWFyaW9NZW5zYWdlbnMgICBNZW5zYWdlbnNbXQogIHVzdWFyaW9Db250YWN0byBDb250YWN0b1VzdWFyaW9bXQogIHVzZXJMb2dnZWQgVXNlckxvZ2dlZFtdCn0KCm1vZGVsIENvbnRhY3RvVXN1YXJpb3sKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjb250YWN0byBJbnQgQHVuaXF1ZQogIHVzdWFyaW9Db250YWN0byBVc3VhcmlvcyBAcmVsYXRpb24oZmllbGRzOiBbdXN1YXJpb0lEXSAsIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXN1YXJpb0lEIFN0cmluZwp9Cgptb2RlbCBQdWJsaWNhY29lc3sKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjb250ZXVkbyBTdHJpbmcKICBmb3RvICAgICBTdHJpbmc/CiAgdmlkZW8gICAgU3RyaW5nPwogIGRhdGEgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVzdWFyaW9QdWIgVXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW3VzdWFyaW9JRF0gLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzdWFyaW9JRCBTdHJpbmcKfQoKbW9kZWwgTm90aWZpY2Fjb2VzewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGRhdGEgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgY29udGV1ZG8gU3RyaW5nCiAgdXN1YXJpb05vdGlmaWNhY2FvIFVzdWFyaW9zIEByZWxhdGlvbihmaWVsZHM6IFt1c3VhcmlvSURdICwgcmVmZXJlbmNlczogW2lkXSkKICB1c3VhcmlvSUQgU3RyaW5nCn0KCm1vZGVsIE1lbnNhZ2Vuc3sKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjb250ZXVkbyBTdHJpbmcKICBkYXRhIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQoKICBtZW5zYWdlbVJlY2ViaWRhIE1lbnNhZ2VtUmVjZWJpZGFbXQogIG1lbnNhZ2VtRW52aWFkYSAgTWVuc2FnZW1FbnZpYWRhW10KICB1c3VhcmlvTWVuc2FnZW5zIFVzdWFyaW9zIEByZWxhdGlvbihmaWVsZHM6IFt1c3VhcmlvSURdICwgcmVmZXJlbmNlczogW2lkXSkKICB1c3VhcmlvSUQgU3RyaW5nCn0KCi8vIERlZmluYSBvIG1vZGVsbyBwYXJhIHJlY2lib3MgZGUgbWVuc2FnZW5zCgptb2RlbCBNZW5zYWdlbVJlY2ViaWRhIHsKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBsZWl0dXJhICAgIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQogIGRhdGEgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCgogIG1lbnNhZ2VtSWQgU3RyaW5nCiAgbWVuc2FnZW1SZWNlYmlkYSAgICBNZW5zYWdlbnMgIEByZWxhdGlvbihmaWVsZHM6IFttZW5zYWdlbUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c3VhcmlvSUQgIFN0cmluZwogIHVzdWFyaW9TTVNyZWNlYmlkYSAgICAgIFVzdWFyaW9zICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXN1YXJpb0lEXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKLy8gRGVmaW5hIG8gbW9kZWxvIHBhcmEgbWVuc2FnZW5zIGVudmlhZGFzCgptb2RlbCBNZW5zYWdlbUVudmlhZGEgewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG1lbnNhZ2VtSWQgIFN0cmluZwogIG1lbnNhZ2VtRW52aWFkYSAgTWVuc2FnZW5zICBAcmVsYXRpb24oZmllbGRzOiBbbWVuc2FnZW1JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXN1YXJpb0lEICBTdHJpbmcKICB1c3VhcmlvU01TZW52aWFkYSBVc3VhcmlvcyAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzdWFyaW9JRF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCm1vZGVsIFRva2VucyB7CiAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgdG9rZW4gU3RyaW5nIEB1bmlxdWUKfQoKbW9kZWwgVXNlckxvZ2dlZCB7CiAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpIAogIFVzZXJJRCBTdHJpbmcKICB1c2VyIFVzdWFyaW9zIEByZWxhdGlvbihmaWVsZHM6IFtVc2VySURdLCByZWZlcmVuY2VzOiBbaWRdKQoKfQ==",
  "inlineSchemaHash": "79bc9a3338bdf29fa463bbbf338fbceb4f8a0339c76b52cd91515294bdd4177d",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"EntidadesSistema\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_entidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContactoEntidade\",\"relationName\":\"ContactoEntidadeToEntidadesSistema\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialista\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Especialistas\",\"relationName\":\"EntidadesSistemaToEspecialistas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ContactoEntidade\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contacto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntidadesSistema\",\"relationName\":\"ContactoEntidadeToEntidadesSistema\",\"relationFromFields\":[\"entidadeID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Especialistas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntidadesSistema\",\"relationName\":\"EntidadesSistemaToEspecialistas\",\"relationFromFields\":[\"entidadeID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sexo\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sexo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userPub\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Publicacoes\",\"relationName\":\"PublicacoesToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioNotificacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notificacoes\",\"relationName\":\"NotificacoesToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioSMSrecebida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemRecebida\",\"relationName\":\"MensagemRecebidaToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioSMSenviada\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemEnviada\",\"relationName\":\"MensagemEnviadaToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioMensagens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mensagens\",\"relationName\":\"MensagensToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioContacto\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContactoUsuario\",\"relationName\":\"ContactoUsuarioToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userLogged\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserLogged\",\"relationName\":\"UserLoggedToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ContactoUsuario\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contacto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioContacto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"ContactoUsuarioToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Publicacoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioPub\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"PublicacoesToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notificacoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioNotificacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"NotificacoesToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Mensagens\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagemRecebida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemRecebida\",\"relationName\":\"MensagemRecebidaToMensagens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagemEnviada\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MensagemEnviada\",\"relationName\":\"MensagemEnviadaToMensagens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioMensagens\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"MensagensToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MensagemRecebida\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leitura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagemId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagemRecebida\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mensagens\",\"relationName\":\"MensagemRecebidaToMensagens\",\"relationFromFields\":[\"mensagemId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioSMSrecebida\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"MensagemRecebidaToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MensagemEnviada\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagemId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagemEnviada\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mensagens\",\"relationName\":\"MensagemEnviadaToMensagens\",\"relationFromFields\":[\"mensagemId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioSMSenviada\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"MensagemEnviadaToUsuarios\",\"relationFromFields\":[\"usuarioID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tokens\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserLogged\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"UserLoggedToUsuarios\",\"relationFromFields\":[\"UserID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Sexo\":{\"values\":[{\"name\":\"Masculino\",\"dbName\":null},{\"name\":\"Feminino\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

