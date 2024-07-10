
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
