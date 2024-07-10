
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



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EntidadesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  cnpj: 'cnpj',
  type: 'type',
  email: 'email',
  id_endereco: 'id_endereco'
};

exports.Prisma.EspecialistasScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  crm: 'crm',
  sexo: 'sexo',
  entidadeID: 'entidadeID',
  especialidade: 'especialidade',
  tipo_Da_Consulta: 'tipo_Da_Consulta'
};

exports.Prisma.ContactoScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  id_entitie: 'id_entitie'
};

exports.Prisma.EnderecoScalarFieldEnum = {
  id: 'id',
  adress: 'adress'
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
  Entidades: 'Entidades',
  Especialistas: 'Especialistas',
  contacto: 'contacto',
  endereco: 'endereco'
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
      "value": "C:\\+ Saúde\\BackEnd\\src\\generated\\client2",
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
    "db2"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db2": {
      "url": {
        "fromEnvVar": "SECOND_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "DQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ID0gIi4uL3NyYy9nZW5lcmF0ZWQvY2xpZW50MiINCn0NCg0KZGF0YXNvdXJjZSBkYjIgew0KICBwcm92aWRlciA9ICJteXNxbCINCiAgdXJsICAgICAgPSBlbnYoIlNFQ09ORF9EQVRBQkFTRV9VUkwiKQ0KfQ0KDQplbnVtIFNleG97DQogIE1hc2N1bGlubw0KICBGZW1pbmlubw0KfQ0KDQoNCm1vZGVsIEVudGlkYWRlcyB7DQogIGlkICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgU3RyaW5nIEB1bmlxdWUNCiAgY25waiBTdHJpbmcgQHVuaXF1ZQ0KICB0eXBlIFN0cmluZw0KICBlbWFpbCBTdHJpbmcgQHVuaXF1ZQ0KICBlbmRlcmVjbyAgZW5kZXJlY28gQHJlbGF0aW9uKGZpZWxkczogW2lkX2VuZGVyZWNvXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgaWRfZW5kZXJlY28gU3RyaW5nDQogIGNvbnRhY3RvIGNvbnRhY3RvW10gDQogIGVzcGVjaWFsaXN0YXMgRXNwZWNpYWxpc3Rhc1tdDQoNCn0NCg0KbW9kZWwgRXNwZWNpYWxpc3RhcyB7DQogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBub21lIFN0cmluZyANCiAgY3JtIFN0cmluZyBAdW5pcXVlDQogIHNleG8gU2V4bw0KICBlbnRpZGFkZUlEIFN0cmluZz8NCiAgZXNwZWNpYWxpZGFkZSBTdHJpbmcNCiAgdGlwb19EYV9Db25zdWx0YSBTdHJpbmcNCiAgZW50aXRpZSBFbnRpZGFkZXM/IEByZWxhdGlvbihmaWVsZHM6IFtlbnRpZGFkZUlEXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgY29udGFjdG8gew0KICBpZCAgIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBudW1lcm8gU3RyaW5nIEB1bmlxdWUNCiAgaWRfZW50aXRpZSBTdHJpbmcNCiAgZW50aXRpZSAgRW50aWRhZGVzIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lbnRpdGllXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgZW5kZXJlY28gew0KICBpZCAgIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBhZHJlc3MgU3RyaW5nDQogIGVudGl0aWUgRW50aWRhZGVzW10gDQp9DQoNCg==",
  "inlineSchemaHash": "67c1edab38e3d642a9b48cb9e33b49e5ab203105d5f85024d8fe9a464599fe11"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Entidades\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"endereco\",\"relationName\":\"EntidadesToendereco\",\"relationFromFields\":[\"id_endereco\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contacto\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"contacto\",\"relationName\":\"EntidadesTocontacto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialistas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Especialistas\",\"relationName\":\"EntidadesToEspecialistas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Especialistas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sexo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidadeID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_Da_Consulta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entitie\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Entidades\",\"relationName\":\"EntidadesToEspecialistas\",\"relationFromFields\":[\"entidadeID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"contacto\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_entitie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entitie\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Entidades\",\"relationName\":\"EntidadesTocontacto\",\"relationFromFields\":[\"id_entitie\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"endereco\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entitie\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Entidades\",\"relationName\":\"EntidadesToendereco\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Sexo\":{\"values\":[{\"name\":\"Masculino\",\"dbName\":null},{\"name\":\"Feminino\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    SECOND_DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['SECOND_DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.SECOND_DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

