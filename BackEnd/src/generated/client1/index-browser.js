
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
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
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
