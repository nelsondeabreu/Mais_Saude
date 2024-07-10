
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EntidadesSistema
 * 
 */
export type EntidadesSistema = $Result.DefaultSelection<Prisma.$EntidadesSistemaPayload>
/**
 * Model ContactoEntidade
 * 
 */
export type ContactoEntidade = $Result.DefaultSelection<Prisma.$ContactoEntidadePayload>
/**
 * Model Especialistas
 * 
 */
export type Especialistas = $Result.DefaultSelection<Prisma.$EspecialistasPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model ContactoUsuario
 * 
 */
export type ContactoUsuario = $Result.DefaultSelection<Prisma.$ContactoUsuarioPayload>
/**
 * Model Publicacoes
 * 
 */
export type Publicacoes = $Result.DefaultSelection<Prisma.$PublicacoesPayload>
/**
 * Model Notificacoes
 * 
 */
export type Notificacoes = $Result.DefaultSelection<Prisma.$NotificacoesPayload>
/**
 * Model Mensagens
 * 
 */
export type Mensagens = $Result.DefaultSelection<Prisma.$MensagensPayload>
/**
 * Model MensagemRecebida
 * 
 */
export type MensagemRecebida = $Result.DefaultSelection<Prisma.$MensagemRecebidaPayload>
/**
 * Model MensagemEnviada
 * 
 */
export type MensagemEnviada = $Result.DefaultSelection<Prisma.$MensagemEnviadaPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model UserLogged
 * 
 */
export type UserLogged = $Result.DefaultSelection<Prisma.$UserLoggedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sexo: {
  Masculino: 'Masculino',
  Feminino: 'Feminino'
};

export type Sexo = (typeof Sexo)[keyof typeof Sexo]

}

export type Sexo = $Enums.Sexo

export const Sexo: typeof $Enums.Sexo

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EntidadesSistemas
 * const entidadesSistemas = await prisma.entidadesSistema.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EntidadesSistemas
   * const entidadesSistemas = await prisma.entidadesSistema.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.entidadesSistema`: Exposes CRUD operations for the **EntidadesSistema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntidadesSistemas
    * const entidadesSistemas = await prisma.entidadesSistema.findMany()
    * ```
    */
  get entidadesSistema(): Prisma.EntidadesSistemaDelegate<ExtArgs>;

  /**
   * `prisma.contactoEntidade`: Exposes CRUD operations for the **ContactoEntidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactoEntidades
    * const contactoEntidades = await prisma.contactoEntidade.findMany()
    * ```
    */
  get contactoEntidade(): Prisma.ContactoEntidadeDelegate<ExtArgs>;

  /**
   * `prisma.especialistas`: Exposes CRUD operations for the **Especialistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialistas
    * const especialistas = await prisma.especialistas.findMany()
    * ```
    */
  get especialistas(): Prisma.EspecialistasDelegate<ExtArgs>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs>;

  /**
   * `prisma.contactoUsuario`: Exposes CRUD operations for the **ContactoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactoUsuarios
    * const contactoUsuarios = await prisma.contactoUsuario.findMany()
    * ```
    */
  get contactoUsuario(): Prisma.ContactoUsuarioDelegate<ExtArgs>;

  /**
   * `prisma.publicacoes`: Exposes CRUD operations for the **Publicacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicacoes
    * const publicacoes = await prisma.publicacoes.findMany()
    * ```
    */
  get publicacoes(): Prisma.PublicacoesDelegate<ExtArgs>;

  /**
   * `prisma.notificacoes`: Exposes CRUD operations for the **Notificacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacoes
    * const notificacoes = await prisma.notificacoes.findMany()
    * ```
    */
  get notificacoes(): Prisma.NotificacoesDelegate<ExtArgs>;

  /**
   * `prisma.mensagens`: Exposes CRUD operations for the **Mensagens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagens
    * const mensagens = await prisma.mensagens.findMany()
    * ```
    */
  get mensagens(): Prisma.MensagensDelegate<ExtArgs>;

  /**
   * `prisma.mensagemRecebida`: Exposes CRUD operations for the **MensagemRecebida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MensagemRecebidas
    * const mensagemRecebidas = await prisma.mensagemRecebida.findMany()
    * ```
    */
  get mensagemRecebida(): Prisma.MensagemRecebidaDelegate<ExtArgs>;

  /**
   * `prisma.mensagemEnviada`: Exposes CRUD operations for the **MensagemEnviada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MensagemEnviadas
    * const mensagemEnviadas = await prisma.mensagemEnviada.findMany()
    * ```
    */
  get mensagemEnviada(): Prisma.MensagemEnviadaDelegate<ExtArgs>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs>;

  /**
   * `prisma.userLogged`: Exposes CRUD operations for the **UserLogged** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLoggeds
    * const userLoggeds = await prisma.userLogged.findMany()
    * ```
    */
  get userLogged(): Prisma.UserLoggedDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'entidadesSistema' | 'contactoEntidade' | 'especialistas' | 'usuarios' | 'contactoUsuario' | 'publicacoes' | 'notificacoes' | 'mensagens' | 'mensagemRecebida' | 'mensagemEnviada' | 'tokens' | 'userLogged'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      EntidadesSistema: {
        payload: Prisma.$EntidadesSistemaPayload<ExtArgs>
        fields: Prisma.EntidadesSistemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntidadesSistemaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntidadesSistemaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload>
          }
          findFirst: {
            args: Prisma.EntidadesSistemaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntidadesSistemaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload>
          }
          findMany: {
            args: Prisma.EntidadesSistemaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload>[]
          }
          create: {
            args: Prisma.EntidadesSistemaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload>
          }
          createMany: {
            args: Prisma.EntidadesSistemaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EntidadesSistemaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload>
          }
          update: {
            args: Prisma.EntidadesSistemaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload>
          }
          deleteMany: {
            args: Prisma.EntidadesSistemaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntidadesSistemaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntidadesSistemaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesSistemaPayload>
          }
          aggregate: {
            args: Prisma.EntidadesSistemaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntidadesSistema>
          }
          groupBy: {
            args: Prisma.EntidadesSistemaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntidadesSistemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntidadesSistemaCountArgs<ExtArgs>,
            result: $Utils.Optional<EntidadesSistemaCountAggregateOutputType> | number
          }
        }
      }
      ContactoEntidade: {
        payload: Prisma.$ContactoEntidadePayload<ExtArgs>
        fields: Prisma.ContactoEntidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactoEntidadeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactoEntidadeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload>
          }
          findFirst: {
            args: Prisma.ContactoEntidadeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactoEntidadeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload>
          }
          findMany: {
            args: Prisma.ContactoEntidadeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload>[]
          }
          create: {
            args: Prisma.ContactoEntidadeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload>
          }
          createMany: {
            args: Prisma.ContactoEntidadeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactoEntidadeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload>
          }
          update: {
            args: Prisma.ContactoEntidadeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload>
          }
          deleteMany: {
            args: Prisma.ContactoEntidadeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactoEntidadeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactoEntidadeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoEntidadePayload>
          }
          aggregate: {
            args: Prisma.ContactoEntidadeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactoEntidade>
          }
          groupBy: {
            args: Prisma.ContactoEntidadeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactoEntidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactoEntidadeCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactoEntidadeCountAggregateOutputType> | number
          }
        }
      }
      Especialistas: {
        payload: Prisma.$EspecialistasPayload<ExtArgs>
        fields: Prisma.EspecialistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialistasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialistasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload>
          }
          findFirst: {
            args: Prisma.EspecialistasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialistasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload>
          }
          findMany: {
            args: Prisma.EspecialistasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload>[]
          }
          create: {
            args: Prisma.EspecialistasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload>
          }
          createMany: {
            args: Prisma.EspecialistasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EspecialistasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload>
          }
          update: {
            args: Prisma.EspecialistasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload>
          }
          deleteMany: {
            args: Prisma.EspecialistasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialistasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EspecialistasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EspecialistasPayload>
          }
          aggregate: {
            args: Prisma.EspecialistasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEspecialistas>
          }
          groupBy: {
            args: Prisma.EspecialistasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EspecialistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialistasCountArgs<ExtArgs>,
            result: $Utils.Optional<EspecialistasCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      ContactoUsuario: {
        payload: Prisma.$ContactoUsuarioPayload<ExtArgs>
        fields: Prisma.ContactoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactoUsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactoUsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.ContactoUsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactoUsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload>
          }
          findMany: {
            args: Prisma.ContactoUsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload>[]
          }
          create: {
            args: Prisma.ContactoUsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload>
          }
          createMany: {
            args: Prisma.ContactoUsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactoUsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload>
          }
          update: {
            args: Prisma.ContactoUsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.ContactoUsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactoUsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactoUsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.ContactoUsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactoUsuario>
          }
          groupBy: {
            args: Prisma.ContactoUsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactoUsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      Publicacoes: {
        payload: Prisma.$PublicacoesPayload<ExtArgs>
        fields: Prisma.PublicacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacoesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacoesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload>
          }
          findFirst: {
            args: Prisma.PublicacoesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacoesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload>
          }
          findMany: {
            args: Prisma.PublicacoesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload>[]
          }
          create: {
            args: Prisma.PublicacoesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload>
          }
          createMany: {
            args: Prisma.PublicacoesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PublicacoesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload>
          }
          update: {
            args: Prisma.PublicacoesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload>
          }
          deleteMany: {
            args: Prisma.PublicacoesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacoesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PublicacoesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicacoesPayload>
          }
          aggregate: {
            args: Prisma.PublicacoesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePublicacoes>
          }
          groupBy: {
            args: Prisma.PublicacoesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PublicacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacoesCountArgs<ExtArgs>,
            result: $Utils.Optional<PublicacoesCountAggregateOutputType> | number
          }
        }
      }
      Notificacoes: {
        payload: Prisma.$NotificacoesPayload<ExtArgs>
        fields: Prisma.NotificacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacoesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacoesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload>
          }
          findFirst: {
            args: Prisma.NotificacoesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacoesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload>
          }
          findMany: {
            args: Prisma.NotificacoesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload>[]
          }
          create: {
            args: Prisma.NotificacoesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload>
          }
          createMany: {
            args: Prisma.NotificacoesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificacoesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload>
          }
          update: {
            args: Prisma.NotificacoesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload>
          }
          deleteMany: {
            args: Prisma.NotificacoesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacoesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificacoesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificacoesPayload>
          }
          aggregate: {
            args: Prisma.NotificacoesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotificacoes>
          }
          groupBy: {
            args: Prisma.NotificacoesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacoesCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificacoesCountAggregateOutputType> | number
          }
        }
      }
      Mensagens: {
        payload: Prisma.$MensagensPayload<ExtArgs>
        fields: Prisma.MensagensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagensFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagensFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload>
          }
          findFirst: {
            args: Prisma.MensagensFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagensFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload>
          }
          findMany: {
            args: Prisma.MensagensFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload>[]
          }
          create: {
            args: Prisma.MensagensCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload>
          }
          createMany: {
            args: Prisma.MensagensCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MensagensDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload>
          }
          update: {
            args: Prisma.MensagensUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload>
          }
          deleteMany: {
            args: Prisma.MensagensDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MensagensUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MensagensUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagensPayload>
          }
          aggregate: {
            args: Prisma.MensagensAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMensagens>
          }
          groupBy: {
            args: Prisma.MensagensGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MensagensGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagensCountArgs<ExtArgs>,
            result: $Utils.Optional<MensagensCountAggregateOutputType> | number
          }
        }
      }
      MensagemRecebida: {
        payload: Prisma.$MensagemRecebidaPayload<ExtArgs>
        fields: Prisma.MensagemRecebidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemRecebidaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemRecebidaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload>
          }
          findFirst: {
            args: Prisma.MensagemRecebidaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemRecebidaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload>
          }
          findMany: {
            args: Prisma.MensagemRecebidaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload>[]
          }
          create: {
            args: Prisma.MensagemRecebidaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload>
          }
          createMany: {
            args: Prisma.MensagemRecebidaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MensagemRecebidaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload>
          }
          update: {
            args: Prisma.MensagemRecebidaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload>
          }
          deleteMany: {
            args: Prisma.MensagemRecebidaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemRecebidaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MensagemRecebidaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemRecebidaPayload>
          }
          aggregate: {
            args: Prisma.MensagemRecebidaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMensagemRecebida>
          }
          groupBy: {
            args: Prisma.MensagemRecebidaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MensagemRecebidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemRecebidaCountArgs<ExtArgs>,
            result: $Utils.Optional<MensagemRecebidaCountAggregateOutputType> | number
          }
        }
      }
      MensagemEnviada: {
        payload: Prisma.$MensagemEnviadaPayload<ExtArgs>
        fields: Prisma.MensagemEnviadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemEnviadaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemEnviadaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload>
          }
          findFirst: {
            args: Prisma.MensagemEnviadaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemEnviadaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload>
          }
          findMany: {
            args: Prisma.MensagemEnviadaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload>[]
          }
          create: {
            args: Prisma.MensagemEnviadaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload>
          }
          createMany: {
            args: Prisma.MensagemEnviadaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MensagemEnviadaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload>
          }
          update: {
            args: Prisma.MensagemEnviadaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload>
          }
          deleteMany: {
            args: Prisma.MensagemEnviadaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemEnviadaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MensagemEnviadaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MensagemEnviadaPayload>
          }
          aggregate: {
            args: Prisma.MensagemEnviadaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMensagemEnviada>
          }
          groupBy: {
            args: Prisma.MensagemEnviadaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MensagemEnviadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemEnviadaCountArgs<ExtArgs>,
            result: $Utils.Optional<MensagemEnviadaCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>,
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      UserLogged: {
        payload: Prisma.$UserLoggedPayload<ExtArgs>
        fields: Prisma.UserLoggedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLoggedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLoggedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload>
          }
          findFirst: {
            args: Prisma.UserLoggedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLoggedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload>
          }
          findMany: {
            args: Prisma.UserLoggedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload>[]
          }
          create: {
            args: Prisma.UserLoggedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload>
          }
          createMany: {
            args: Prisma.UserLoggedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserLoggedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload>
          }
          update: {
            args: Prisma.UserLoggedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload>
          }
          deleteMany: {
            args: Prisma.UserLoggedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserLoggedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserLoggedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoggedPayload>
          }
          aggregate: {
            args: Prisma.UserLoggedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserLogged>
          }
          groupBy: {
            args: Prisma.UserLoggedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserLoggedGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLoggedCountArgs<ExtArgs>,
            result: $Utils.Optional<UserLoggedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EntidadesSistemaCountOutputType
   */

  export type EntidadesSistemaCountOutputType = {
    contactos: number
    especialista: number
  }

  export type EntidadesSistemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactos?: boolean | EntidadesSistemaCountOutputTypeCountContactosArgs
    especialista?: boolean | EntidadesSistemaCountOutputTypeCountEspecialistaArgs
  }

  // Custom InputTypes

  /**
   * EntidadesSistemaCountOutputType without action
   */
  export type EntidadesSistemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistemaCountOutputType
     */
    select?: EntidadesSistemaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EntidadesSistemaCountOutputType without action
   */
  export type EntidadesSistemaCountOutputTypeCountContactosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoEntidadeWhereInput
  }


  /**
   * EntidadesSistemaCountOutputType without action
   */
  export type EntidadesSistemaCountOutputTypeCountEspecialistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialistasWhereInput
  }



  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    userPub: number
    usuarioNotificacao: number
    usuarioSMSrecebida: number
    usuarioSMSenviada: number
    usuarioMensagens: number
    usuarioContacto: number
    userLogged: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPub?: boolean | UsuariosCountOutputTypeCountUserPubArgs
    usuarioNotificacao?: boolean | UsuariosCountOutputTypeCountUsuarioNotificacaoArgs
    usuarioSMSrecebida?: boolean | UsuariosCountOutputTypeCountUsuarioSMSrecebidaArgs
    usuarioSMSenviada?: boolean | UsuariosCountOutputTypeCountUsuarioSMSenviadaArgs
    usuarioMensagens?: boolean | UsuariosCountOutputTypeCountUsuarioMensagensArgs
    usuarioContacto?: boolean | UsuariosCountOutputTypeCountUsuarioContactoArgs
    userLogged?: boolean | UsuariosCountOutputTypeCountUserLoggedArgs
  }

  // Custom InputTypes

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUserPubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacoesWhereInput
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuarioNotificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacoesWhereInput
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuarioSMSrecebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemRecebidaWhereInput
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuarioSMSenviadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemEnviadaWhereInput
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuarioMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagensWhereInput
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUsuarioContactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoUsuarioWhereInput
  }


  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUserLoggedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLoggedWhereInput
  }



  /**
   * Count Type MensagensCountOutputType
   */

  export type MensagensCountOutputType = {
    mensagemRecebida: number
    mensagemEnviada: number
  }

  export type MensagensCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagemRecebida?: boolean | MensagensCountOutputTypeCountMensagemRecebidaArgs
    mensagemEnviada?: boolean | MensagensCountOutputTypeCountMensagemEnviadaArgs
  }

  // Custom InputTypes

  /**
   * MensagensCountOutputType without action
   */
  export type MensagensCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagensCountOutputType
     */
    select?: MensagensCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MensagensCountOutputType without action
   */
  export type MensagensCountOutputTypeCountMensagemRecebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemRecebidaWhereInput
  }


  /**
   * MensagensCountOutputType without action
   */
  export type MensagensCountOutputTypeCountMensagemEnviadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemEnviadaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model EntidadesSistema
   */

  export type AggregateEntidadesSistema = {
    _count: EntidadesSistemaCountAggregateOutputType | null
    _min: EntidadesSistemaMinAggregateOutputType | null
    _max: EntidadesSistemaMaxAggregateOutputType | null
  }

  export type EntidadesSistemaMinAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    tipo_entidade: string | null
    email: string | null
    endereco: string | null
  }

  export type EntidadesSistemaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    tipo_entidade: string | null
    email: string | null
    endereco: string | null
  }

  export type EntidadesSistemaCountAggregateOutputType = {
    id: number
    name: number
    cnpj: number
    tipo_entidade: number
    email: number
    endereco: number
    _all: number
  }


  export type EntidadesSistemaMinAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    tipo_entidade?: true
    email?: true
    endereco?: true
  }

  export type EntidadesSistemaMaxAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    tipo_entidade?: true
    email?: true
    endereco?: true
  }

  export type EntidadesSistemaCountAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    tipo_entidade?: true
    email?: true
    endereco?: true
    _all?: true
  }

  export type EntidadesSistemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntidadesSistema to aggregate.
     */
    where?: EntidadesSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadesSistemas to fetch.
     */
    orderBy?: EntidadesSistemaOrderByWithRelationInput | EntidadesSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntidadesSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadesSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadesSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntidadesSistemas
    **/
    _count?: true | EntidadesSistemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntidadesSistemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntidadesSistemaMaxAggregateInputType
  }

  export type GetEntidadesSistemaAggregateType<T extends EntidadesSistemaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntidadesSistema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntidadesSistema[P]>
      : GetScalarType<T[P], AggregateEntidadesSistema[P]>
  }




  export type EntidadesSistemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadesSistemaWhereInput
    orderBy?: EntidadesSistemaOrderByWithAggregationInput | EntidadesSistemaOrderByWithAggregationInput[]
    by: EntidadesSistemaScalarFieldEnum[] | EntidadesSistemaScalarFieldEnum
    having?: EntidadesSistemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntidadesSistemaCountAggregateInputType | true
    _min?: EntidadesSistemaMinAggregateInputType
    _max?: EntidadesSistemaMaxAggregateInputType
  }

  export type EntidadesSistemaGroupByOutputType = {
    id: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
    _count: EntidadesSistemaCountAggregateOutputType | null
    _min: EntidadesSistemaMinAggregateOutputType | null
    _max: EntidadesSistemaMaxAggregateOutputType | null
  }

  type GetEntidadesSistemaGroupByPayload<T extends EntidadesSistemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntidadesSistemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntidadesSistemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntidadesSistemaGroupByOutputType[P]>
            : GetScalarType<T[P], EntidadesSistemaGroupByOutputType[P]>
        }
      >
    >


  export type EntidadesSistemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    tipo_entidade?: boolean
    email?: boolean
    endereco?: boolean
    contactos?: boolean | EntidadesSistema$contactosArgs<ExtArgs>
    especialista?: boolean | EntidadesSistema$especialistaArgs<ExtArgs>
    _count?: boolean | EntidadesSistemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entidadesSistema"]>

  export type EntidadesSistemaSelectScalar = {
    id?: boolean
    name?: boolean
    cnpj?: boolean
    tipo_entidade?: boolean
    email?: boolean
    endereco?: boolean
  }

  export type EntidadesSistemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactos?: boolean | EntidadesSistema$contactosArgs<ExtArgs>
    especialista?: boolean | EntidadesSistema$especialistaArgs<ExtArgs>
    _count?: boolean | EntidadesSistemaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EntidadesSistemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntidadesSistema"
    objects: {
      contactos: Prisma.$ContactoEntidadePayload<ExtArgs>[]
      especialista: Prisma.$EspecialistasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cnpj: string
      tipo_entidade: string
      email: string
      endereco: string
    }, ExtArgs["result"]["entidadesSistema"]>
    composites: {}
  }


  type EntidadesSistemaGetPayload<S extends boolean | null | undefined | EntidadesSistemaDefaultArgs> = $Result.GetResult<Prisma.$EntidadesSistemaPayload, S>

  type EntidadesSistemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntidadesSistemaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntidadesSistemaCountAggregateInputType | true
    }

  export interface EntidadesSistemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntidadesSistema'], meta: { name: 'EntidadesSistema' } }
    /**
     * Find zero or one EntidadesSistema that matches the filter.
     * @param {EntidadesSistemaFindUniqueArgs} args - Arguments to find a EntidadesSistema
     * @example
     * // Get one EntidadesSistema
     * const entidadesSistema = await prisma.entidadesSistema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntidadesSistemaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesSistemaFindUniqueArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EntidadesSistema that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EntidadesSistemaFindUniqueOrThrowArgs} args - Arguments to find a EntidadesSistema
     * @example
     * // Get one EntidadesSistema
     * const entidadesSistema = await prisma.entidadesSistema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntidadesSistemaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesSistemaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EntidadesSistema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesSistemaFindFirstArgs} args - Arguments to find a EntidadesSistema
     * @example
     * // Get one EntidadesSistema
     * const entidadesSistema = await prisma.entidadesSistema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntidadesSistemaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesSistemaFindFirstArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EntidadesSistema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesSistemaFindFirstOrThrowArgs} args - Arguments to find a EntidadesSistema
     * @example
     * // Get one EntidadesSistema
     * const entidadesSistema = await prisma.entidadesSistema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntidadesSistemaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesSistemaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EntidadesSistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesSistemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntidadesSistemas
     * const entidadesSistemas = await prisma.entidadesSistema.findMany()
     * 
     * // Get first 10 EntidadesSistemas
     * const entidadesSistemas = await prisma.entidadesSistema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entidadesSistemaWithIdOnly = await prisma.entidadesSistema.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntidadesSistemaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesSistemaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EntidadesSistema.
     * @param {EntidadesSistemaCreateArgs} args - Arguments to create a EntidadesSistema.
     * @example
     * // Create one EntidadesSistema
     * const EntidadesSistema = await prisma.entidadesSistema.create({
     *   data: {
     *     // ... data to create a EntidadesSistema
     *   }
     * })
     * 
    **/
    create<T extends EntidadesSistemaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesSistemaCreateArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EntidadesSistemas.
     *     @param {EntidadesSistemaCreateManyArgs} args - Arguments to create many EntidadesSistemas.
     *     @example
     *     // Create many EntidadesSistemas
     *     const entidadesSistema = await prisma.entidadesSistema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EntidadesSistemaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesSistemaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EntidadesSistema.
     * @param {EntidadesSistemaDeleteArgs} args - Arguments to delete one EntidadesSistema.
     * @example
     * // Delete one EntidadesSistema
     * const EntidadesSistema = await prisma.entidadesSistema.delete({
     *   where: {
     *     // ... filter to delete one EntidadesSistema
     *   }
     * })
     * 
    **/
    delete<T extends EntidadesSistemaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesSistemaDeleteArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EntidadesSistema.
     * @param {EntidadesSistemaUpdateArgs} args - Arguments to update one EntidadesSistema.
     * @example
     * // Update one EntidadesSistema
     * const entidadesSistema = await prisma.entidadesSistema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntidadesSistemaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesSistemaUpdateArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EntidadesSistemas.
     * @param {EntidadesSistemaDeleteManyArgs} args - Arguments to filter EntidadesSistemas to delete.
     * @example
     * // Delete a few EntidadesSistemas
     * const { count } = await prisma.entidadesSistema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntidadesSistemaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesSistemaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntidadesSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesSistemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntidadesSistemas
     * const entidadesSistema = await prisma.entidadesSistema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntidadesSistemaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesSistemaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntidadesSistema.
     * @param {EntidadesSistemaUpsertArgs} args - Arguments to update or create a EntidadesSistema.
     * @example
     * // Update or create a EntidadesSistema
     * const entidadesSistema = await prisma.entidadesSistema.upsert({
     *   create: {
     *     // ... data to create a EntidadesSistema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntidadesSistema we want to update
     *   }
     * })
    **/
    upsert<T extends EntidadesSistemaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesSistemaUpsertArgs<ExtArgs>>
    ): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EntidadesSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesSistemaCountArgs} args - Arguments to filter EntidadesSistemas to count.
     * @example
     * // Count the number of EntidadesSistemas
     * const count = await prisma.entidadesSistema.count({
     *   where: {
     *     // ... the filter for the EntidadesSistemas we want to count
     *   }
     * })
    **/
    count<T extends EntidadesSistemaCountArgs>(
      args?: Subset<T, EntidadesSistemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntidadesSistemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntidadesSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesSistemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntidadesSistemaAggregateArgs>(args: Subset<T, EntidadesSistemaAggregateArgs>): Prisma.PrismaPromise<GetEntidadesSistemaAggregateType<T>>

    /**
     * Group by EntidadesSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesSistemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntidadesSistemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntidadesSistemaGroupByArgs['orderBy'] }
        : { orderBy?: EntidadesSistemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntidadesSistemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntidadesSistemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntidadesSistema model
   */
  readonly fields: EntidadesSistemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntidadesSistema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntidadesSistemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contactos<T extends EntidadesSistema$contactosArgs<ExtArgs> = {}>(args?: Subset<T, EntidadesSistema$contactosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'findMany'> | Null>;

    especialista<T extends EntidadesSistema$especialistaArgs<ExtArgs> = {}>(args?: Subset<T, EntidadesSistema$especialistaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EntidadesSistema model
   */ 
  interface EntidadesSistemaFieldRefs {
    readonly id: FieldRef<"EntidadesSistema", 'String'>
    readonly name: FieldRef<"EntidadesSistema", 'String'>
    readonly cnpj: FieldRef<"EntidadesSistema", 'String'>
    readonly tipo_entidade: FieldRef<"EntidadesSistema", 'String'>
    readonly email: FieldRef<"EntidadesSistema", 'String'>
    readonly endereco: FieldRef<"EntidadesSistema", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EntidadesSistema findUnique
   */
  export type EntidadesSistemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * Filter, which EntidadesSistema to fetch.
     */
    where: EntidadesSistemaWhereUniqueInput
  }


  /**
   * EntidadesSistema findUniqueOrThrow
   */
  export type EntidadesSistemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * Filter, which EntidadesSistema to fetch.
     */
    where: EntidadesSistemaWhereUniqueInput
  }


  /**
   * EntidadesSistema findFirst
   */
  export type EntidadesSistemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * Filter, which EntidadesSistema to fetch.
     */
    where?: EntidadesSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadesSistemas to fetch.
     */
    orderBy?: EntidadesSistemaOrderByWithRelationInput | EntidadesSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntidadesSistemas.
     */
    cursor?: EntidadesSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadesSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadesSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntidadesSistemas.
     */
    distinct?: EntidadesSistemaScalarFieldEnum | EntidadesSistemaScalarFieldEnum[]
  }


  /**
   * EntidadesSistema findFirstOrThrow
   */
  export type EntidadesSistemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * Filter, which EntidadesSistema to fetch.
     */
    where?: EntidadesSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadesSistemas to fetch.
     */
    orderBy?: EntidadesSistemaOrderByWithRelationInput | EntidadesSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntidadesSistemas.
     */
    cursor?: EntidadesSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadesSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadesSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntidadesSistemas.
     */
    distinct?: EntidadesSistemaScalarFieldEnum | EntidadesSistemaScalarFieldEnum[]
  }


  /**
   * EntidadesSistema findMany
   */
  export type EntidadesSistemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * Filter, which EntidadesSistemas to fetch.
     */
    where?: EntidadesSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadesSistemas to fetch.
     */
    orderBy?: EntidadesSistemaOrderByWithRelationInput | EntidadesSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntidadesSistemas.
     */
    cursor?: EntidadesSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadesSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadesSistemas.
     */
    skip?: number
    distinct?: EntidadesSistemaScalarFieldEnum | EntidadesSistemaScalarFieldEnum[]
  }


  /**
   * EntidadesSistema create
   */
  export type EntidadesSistemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * The data needed to create a EntidadesSistema.
     */
    data: XOR<EntidadesSistemaCreateInput, EntidadesSistemaUncheckedCreateInput>
  }


  /**
   * EntidadesSistema createMany
   */
  export type EntidadesSistemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntidadesSistemas.
     */
    data: EntidadesSistemaCreateManyInput | EntidadesSistemaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EntidadesSistema update
   */
  export type EntidadesSistemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * The data needed to update a EntidadesSistema.
     */
    data: XOR<EntidadesSistemaUpdateInput, EntidadesSistemaUncheckedUpdateInput>
    /**
     * Choose, which EntidadesSistema to update.
     */
    where: EntidadesSistemaWhereUniqueInput
  }


  /**
   * EntidadesSistema updateMany
   */
  export type EntidadesSistemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntidadesSistemas.
     */
    data: XOR<EntidadesSistemaUpdateManyMutationInput, EntidadesSistemaUncheckedUpdateManyInput>
    /**
     * Filter which EntidadesSistemas to update
     */
    where?: EntidadesSistemaWhereInput
  }


  /**
   * EntidadesSistema upsert
   */
  export type EntidadesSistemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * The filter to search for the EntidadesSistema to update in case it exists.
     */
    where: EntidadesSistemaWhereUniqueInput
    /**
     * In case the EntidadesSistema found by the `where` argument doesn't exist, create a new EntidadesSistema with this data.
     */
    create: XOR<EntidadesSistemaCreateInput, EntidadesSistemaUncheckedCreateInput>
    /**
     * In case the EntidadesSistema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntidadesSistemaUpdateInput, EntidadesSistemaUncheckedUpdateInput>
  }


  /**
   * EntidadesSistema delete
   */
  export type EntidadesSistemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
    /**
     * Filter which EntidadesSistema to delete.
     */
    where: EntidadesSistemaWhereUniqueInput
  }


  /**
   * EntidadesSistema deleteMany
   */
  export type EntidadesSistemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntidadesSistemas to delete
     */
    where?: EntidadesSistemaWhereInput
  }


  /**
   * EntidadesSistema.contactos
   */
  export type EntidadesSistema$contactosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    where?: ContactoEntidadeWhereInput
    orderBy?: ContactoEntidadeOrderByWithRelationInput | ContactoEntidadeOrderByWithRelationInput[]
    cursor?: ContactoEntidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactoEntidadeScalarFieldEnum | ContactoEntidadeScalarFieldEnum[]
  }


  /**
   * EntidadesSistema.especialista
   */
  export type EntidadesSistema$especialistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    where?: EspecialistasWhereInput
    orderBy?: EspecialistasOrderByWithRelationInput | EspecialistasOrderByWithRelationInput[]
    cursor?: EspecialistasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecialistasScalarFieldEnum | EspecialistasScalarFieldEnum[]
  }


  /**
   * EntidadesSistema without action
   */
  export type EntidadesSistemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesSistema
     */
    select?: EntidadesSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesSistemaInclude<ExtArgs> | null
  }



  /**
   * Model ContactoEntidade
   */

  export type AggregateContactoEntidade = {
    _count: ContactoEntidadeCountAggregateOutputType | null
    _avg: ContactoEntidadeAvgAggregateOutputType | null
    _sum: ContactoEntidadeSumAggregateOutputType | null
    _min: ContactoEntidadeMinAggregateOutputType | null
    _max: ContactoEntidadeMaxAggregateOutputType | null
  }

  export type ContactoEntidadeAvgAggregateOutputType = {
    contacto: number | null
  }

  export type ContactoEntidadeSumAggregateOutputType = {
    contacto: number | null
  }

  export type ContactoEntidadeMinAggregateOutputType = {
    id: string | null
    contacto: number | null
    entidadeID: string | null
  }

  export type ContactoEntidadeMaxAggregateOutputType = {
    id: string | null
    contacto: number | null
    entidadeID: string | null
  }

  export type ContactoEntidadeCountAggregateOutputType = {
    id: number
    contacto: number
    entidadeID: number
    _all: number
  }


  export type ContactoEntidadeAvgAggregateInputType = {
    contacto?: true
  }

  export type ContactoEntidadeSumAggregateInputType = {
    contacto?: true
  }

  export type ContactoEntidadeMinAggregateInputType = {
    id?: true
    contacto?: true
    entidadeID?: true
  }

  export type ContactoEntidadeMaxAggregateInputType = {
    id?: true
    contacto?: true
    entidadeID?: true
  }

  export type ContactoEntidadeCountAggregateInputType = {
    id?: true
    contacto?: true
    entidadeID?: true
    _all?: true
  }

  export type ContactoEntidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactoEntidade to aggregate.
     */
    where?: ContactoEntidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoEntidades to fetch.
     */
    orderBy?: ContactoEntidadeOrderByWithRelationInput | ContactoEntidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactoEntidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoEntidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoEntidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactoEntidades
    **/
    _count?: true | ContactoEntidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactoEntidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactoEntidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoEntidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoEntidadeMaxAggregateInputType
  }

  export type GetContactoEntidadeAggregateType<T extends ContactoEntidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateContactoEntidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactoEntidade[P]>
      : GetScalarType<T[P], AggregateContactoEntidade[P]>
  }




  export type ContactoEntidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoEntidadeWhereInput
    orderBy?: ContactoEntidadeOrderByWithAggregationInput | ContactoEntidadeOrderByWithAggregationInput[]
    by: ContactoEntidadeScalarFieldEnum[] | ContactoEntidadeScalarFieldEnum
    having?: ContactoEntidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoEntidadeCountAggregateInputType | true
    _avg?: ContactoEntidadeAvgAggregateInputType
    _sum?: ContactoEntidadeSumAggregateInputType
    _min?: ContactoEntidadeMinAggregateInputType
    _max?: ContactoEntidadeMaxAggregateInputType
  }

  export type ContactoEntidadeGroupByOutputType = {
    id: string
    contacto: number
    entidadeID: string
    _count: ContactoEntidadeCountAggregateOutputType | null
    _avg: ContactoEntidadeAvgAggregateOutputType | null
    _sum: ContactoEntidadeSumAggregateOutputType | null
    _min: ContactoEntidadeMinAggregateOutputType | null
    _max: ContactoEntidadeMaxAggregateOutputType | null
  }

  type GetContactoEntidadeGroupByPayload<T extends ContactoEntidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoEntidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoEntidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoEntidadeGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoEntidadeGroupByOutputType[P]>
        }
      >
    >


  export type ContactoEntidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contacto?: boolean
    entidadeID?: boolean
    entidade?: boolean | EntidadesSistemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactoEntidade"]>

  export type ContactoEntidadeSelectScalar = {
    id?: boolean
    contacto?: boolean
    entidadeID?: boolean
  }

  export type ContactoEntidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entidade?: boolean | EntidadesSistemaDefaultArgs<ExtArgs>
  }


  export type $ContactoEntidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactoEntidade"
    objects: {
      entidade: Prisma.$EntidadesSistemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contacto: number
      entidadeID: string
    }, ExtArgs["result"]["contactoEntidade"]>
    composites: {}
  }


  type ContactoEntidadeGetPayload<S extends boolean | null | undefined | ContactoEntidadeDefaultArgs> = $Result.GetResult<Prisma.$ContactoEntidadePayload, S>

  type ContactoEntidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactoEntidadeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactoEntidadeCountAggregateInputType | true
    }

  export interface ContactoEntidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactoEntidade'], meta: { name: 'ContactoEntidade' } }
    /**
     * Find zero or one ContactoEntidade that matches the filter.
     * @param {ContactoEntidadeFindUniqueArgs} args - Arguments to find a ContactoEntidade
     * @example
     * // Get one ContactoEntidade
     * const contactoEntidade = await prisma.contactoEntidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactoEntidadeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoEntidadeFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactoEntidade that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactoEntidadeFindUniqueOrThrowArgs} args - Arguments to find a ContactoEntidade
     * @example
     * // Get one ContactoEntidade
     * const contactoEntidade = await prisma.contactoEntidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactoEntidadeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoEntidadeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactoEntidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoEntidadeFindFirstArgs} args - Arguments to find a ContactoEntidade
     * @example
     * // Get one ContactoEntidade
     * const contactoEntidade = await prisma.contactoEntidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactoEntidadeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoEntidadeFindFirstArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactoEntidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoEntidadeFindFirstOrThrowArgs} args - Arguments to find a ContactoEntidade
     * @example
     * // Get one ContactoEntidade
     * const contactoEntidade = await prisma.contactoEntidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactoEntidadeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoEntidadeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactoEntidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoEntidadeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactoEntidades
     * const contactoEntidades = await prisma.contactoEntidade.findMany()
     * 
     * // Get first 10 ContactoEntidades
     * const contactoEntidades = await prisma.contactoEntidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoEntidadeWithIdOnly = await prisma.contactoEntidade.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactoEntidadeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoEntidadeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactoEntidade.
     * @param {ContactoEntidadeCreateArgs} args - Arguments to create a ContactoEntidade.
     * @example
     * // Create one ContactoEntidade
     * const ContactoEntidade = await prisma.contactoEntidade.create({
     *   data: {
     *     // ... data to create a ContactoEntidade
     *   }
     * })
     * 
    **/
    create<T extends ContactoEntidadeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoEntidadeCreateArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactoEntidades.
     *     @param {ContactoEntidadeCreateManyArgs} args - Arguments to create many ContactoEntidades.
     *     @example
     *     // Create many ContactoEntidades
     *     const contactoEntidade = await prisma.contactoEntidade.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactoEntidadeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoEntidadeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactoEntidade.
     * @param {ContactoEntidadeDeleteArgs} args - Arguments to delete one ContactoEntidade.
     * @example
     * // Delete one ContactoEntidade
     * const ContactoEntidade = await prisma.contactoEntidade.delete({
     *   where: {
     *     // ... filter to delete one ContactoEntidade
     *   }
     * })
     * 
    **/
    delete<T extends ContactoEntidadeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoEntidadeDeleteArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactoEntidade.
     * @param {ContactoEntidadeUpdateArgs} args - Arguments to update one ContactoEntidade.
     * @example
     * // Update one ContactoEntidade
     * const contactoEntidade = await prisma.contactoEntidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactoEntidadeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoEntidadeUpdateArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactoEntidades.
     * @param {ContactoEntidadeDeleteManyArgs} args - Arguments to filter ContactoEntidades to delete.
     * @example
     * // Delete a few ContactoEntidades
     * const { count } = await prisma.contactoEntidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactoEntidadeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoEntidadeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactoEntidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoEntidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactoEntidades
     * const contactoEntidade = await prisma.contactoEntidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactoEntidadeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoEntidadeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactoEntidade.
     * @param {ContactoEntidadeUpsertArgs} args - Arguments to update or create a ContactoEntidade.
     * @example
     * // Update or create a ContactoEntidade
     * const contactoEntidade = await prisma.contactoEntidade.upsert({
     *   create: {
     *     // ... data to create a ContactoEntidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactoEntidade we want to update
     *   }
     * })
    **/
    upsert<T extends ContactoEntidadeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoEntidadeUpsertArgs<ExtArgs>>
    ): Prisma__ContactoEntidadeClient<$Result.GetResult<Prisma.$ContactoEntidadePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContactoEntidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoEntidadeCountArgs} args - Arguments to filter ContactoEntidades to count.
     * @example
     * // Count the number of ContactoEntidades
     * const count = await prisma.contactoEntidade.count({
     *   where: {
     *     // ... the filter for the ContactoEntidades we want to count
     *   }
     * })
    **/
    count<T extends ContactoEntidadeCountArgs>(
      args?: Subset<T, ContactoEntidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoEntidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactoEntidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoEntidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactoEntidadeAggregateArgs>(args: Subset<T, ContactoEntidadeAggregateArgs>): Prisma.PrismaPromise<GetContactoEntidadeAggregateType<T>>

    /**
     * Group by ContactoEntidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoEntidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactoEntidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactoEntidadeGroupByArgs['orderBy'] }
        : { orderBy?: ContactoEntidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactoEntidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoEntidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactoEntidade model
   */
  readonly fields: ContactoEntidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactoEntidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactoEntidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entidade<T extends EntidadesSistemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntidadesSistemaDefaultArgs<ExtArgs>>): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactoEntidade model
   */ 
  interface ContactoEntidadeFieldRefs {
    readonly id: FieldRef<"ContactoEntidade", 'String'>
    readonly contacto: FieldRef<"ContactoEntidade", 'Int'>
    readonly entidadeID: FieldRef<"ContactoEntidade", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ContactoEntidade findUnique
   */
  export type ContactoEntidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * Filter, which ContactoEntidade to fetch.
     */
    where: ContactoEntidadeWhereUniqueInput
  }


  /**
   * ContactoEntidade findUniqueOrThrow
   */
  export type ContactoEntidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * Filter, which ContactoEntidade to fetch.
     */
    where: ContactoEntidadeWhereUniqueInput
  }


  /**
   * ContactoEntidade findFirst
   */
  export type ContactoEntidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * Filter, which ContactoEntidade to fetch.
     */
    where?: ContactoEntidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoEntidades to fetch.
     */
    orderBy?: ContactoEntidadeOrderByWithRelationInput | ContactoEntidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactoEntidades.
     */
    cursor?: ContactoEntidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoEntidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoEntidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactoEntidades.
     */
    distinct?: ContactoEntidadeScalarFieldEnum | ContactoEntidadeScalarFieldEnum[]
  }


  /**
   * ContactoEntidade findFirstOrThrow
   */
  export type ContactoEntidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * Filter, which ContactoEntidade to fetch.
     */
    where?: ContactoEntidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoEntidades to fetch.
     */
    orderBy?: ContactoEntidadeOrderByWithRelationInput | ContactoEntidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactoEntidades.
     */
    cursor?: ContactoEntidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoEntidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoEntidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactoEntidades.
     */
    distinct?: ContactoEntidadeScalarFieldEnum | ContactoEntidadeScalarFieldEnum[]
  }


  /**
   * ContactoEntidade findMany
   */
  export type ContactoEntidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * Filter, which ContactoEntidades to fetch.
     */
    where?: ContactoEntidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoEntidades to fetch.
     */
    orderBy?: ContactoEntidadeOrderByWithRelationInput | ContactoEntidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactoEntidades.
     */
    cursor?: ContactoEntidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoEntidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoEntidades.
     */
    skip?: number
    distinct?: ContactoEntidadeScalarFieldEnum | ContactoEntidadeScalarFieldEnum[]
  }


  /**
   * ContactoEntidade create
   */
  export type ContactoEntidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactoEntidade.
     */
    data: XOR<ContactoEntidadeCreateInput, ContactoEntidadeUncheckedCreateInput>
  }


  /**
   * ContactoEntidade createMany
   */
  export type ContactoEntidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactoEntidades.
     */
    data: ContactoEntidadeCreateManyInput | ContactoEntidadeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContactoEntidade update
   */
  export type ContactoEntidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactoEntidade.
     */
    data: XOR<ContactoEntidadeUpdateInput, ContactoEntidadeUncheckedUpdateInput>
    /**
     * Choose, which ContactoEntidade to update.
     */
    where: ContactoEntidadeWhereUniqueInput
  }


  /**
   * ContactoEntidade updateMany
   */
  export type ContactoEntidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactoEntidades.
     */
    data: XOR<ContactoEntidadeUpdateManyMutationInput, ContactoEntidadeUncheckedUpdateManyInput>
    /**
     * Filter which ContactoEntidades to update
     */
    where?: ContactoEntidadeWhereInput
  }


  /**
   * ContactoEntidade upsert
   */
  export type ContactoEntidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactoEntidade to update in case it exists.
     */
    where: ContactoEntidadeWhereUniqueInput
    /**
     * In case the ContactoEntidade found by the `where` argument doesn't exist, create a new ContactoEntidade with this data.
     */
    create: XOR<ContactoEntidadeCreateInput, ContactoEntidadeUncheckedCreateInput>
    /**
     * In case the ContactoEntidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactoEntidadeUpdateInput, ContactoEntidadeUncheckedUpdateInput>
  }


  /**
   * ContactoEntidade delete
   */
  export type ContactoEntidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
    /**
     * Filter which ContactoEntidade to delete.
     */
    where: ContactoEntidadeWhereUniqueInput
  }


  /**
   * ContactoEntidade deleteMany
   */
  export type ContactoEntidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactoEntidades to delete
     */
    where?: ContactoEntidadeWhereInput
  }


  /**
   * ContactoEntidade without action
   */
  export type ContactoEntidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoEntidade
     */
    select?: ContactoEntidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoEntidadeInclude<ExtArgs> | null
  }



  /**
   * Model Especialistas
   */

  export type AggregateEspecialistas = {
    _count: EspecialistasCountAggregateOutputType | null
    _avg: EspecialistasAvgAggregateOutputType | null
    _sum: EspecialistasSumAggregateOutputType | null
    _min: EspecialistasMinAggregateOutputType | null
    _max: EspecialistasMaxAggregateOutputType | null
  }

  export type EspecialistasAvgAggregateOutputType = {
    crm: number | null
  }

  export type EspecialistasSumAggregateOutputType = {
    crm: number | null
  }

  export type EspecialistasMinAggregateOutputType = {
    id: string | null
    name: string | null
    especialidade: string | null
    crm: number | null
    entidadeID: string | null
    sexo: $Enums.Sexo | null
  }

  export type EspecialistasMaxAggregateOutputType = {
    id: string | null
    name: string | null
    especialidade: string | null
    crm: number | null
    entidadeID: string | null
    sexo: $Enums.Sexo | null
  }

  export type EspecialistasCountAggregateOutputType = {
    id: number
    name: number
    especialidade: number
    crm: number
    entidadeID: number
    sexo: number
    _all: number
  }


  export type EspecialistasAvgAggregateInputType = {
    crm?: true
  }

  export type EspecialistasSumAggregateInputType = {
    crm?: true
  }

  export type EspecialistasMinAggregateInputType = {
    id?: true
    name?: true
    especialidade?: true
    crm?: true
    entidadeID?: true
    sexo?: true
  }

  export type EspecialistasMaxAggregateInputType = {
    id?: true
    name?: true
    especialidade?: true
    crm?: true
    entidadeID?: true
    sexo?: true
  }

  export type EspecialistasCountAggregateInputType = {
    id?: true
    name?: true
    especialidade?: true
    crm?: true
    entidadeID?: true
    sexo?: true
    _all?: true
  }

  export type EspecialistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialistas to aggregate.
     */
    where?: EspecialistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialistas to fetch.
     */
    orderBy?: EspecialistasOrderByWithRelationInput | EspecialistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialistas
    **/
    _count?: true | EspecialistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialistasMaxAggregateInputType
  }

  export type GetEspecialistasAggregateType<T extends EspecialistasAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialistas[P]>
      : GetScalarType<T[P], AggregateEspecialistas[P]>
  }




  export type EspecialistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialistasWhereInput
    orderBy?: EspecialistasOrderByWithAggregationInput | EspecialistasOrderByWithAggregationInput[]
    by: EspecialistasScalarFieldEnum[] | EspecialistasScalarFieldEnum
    having?: EspecialistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialistasCountAggregateInputType | true
    _avg?: EspecialistasAvgAggregateInputType
    _sum?: EspecialistasSumAggregateInputType
    _min?: EspecialistasMinAggregateInputType
    _max?: EspecialistasMaxAggregateInputType
  }

  export type EspecialistasGroupByOutputType = {
    id: string
    name: string
    especialidade: string
    crm: number
    entidadeID: string
    sexo: $Enums.Sexo
    _count: EspecialistasCountAggregateOutputType | null
    _avg: EspecialistasAvgAggregateOutputType | null
    _sum: EspecialistasSumAggregateOutputType | null
    _min: EspecialistasMinAggregateOutputType | null
    _max: EspecialistasMaxAggregateOutputType | null
  }

  type GetEspecialistasGroupByPayload<T extends EspecialistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialistasGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialistasGroupByOutputType[P]>
        }
      >
    >


  export type EspecialistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    especialidade?: boolean
    crm?: boolean
    entidadeID?: boolean
    sexo?: boolean
    entidade?: boolean | EntidadesSistemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialistas"]>

  export type EspecialistasSelectScalar = {
    id?: boolean
    name?: boolean
    especialidade?: boolean
    crm?: boolean
    entidadeID?: boolean
    sexo?: boolean
  }

  export type EspecialistasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entidade?: boolean | EntidadesSistemaDefaultArgs<ExtArgs>
  }


  export type $EspecialistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialistas"
    objects: {
      entidade: Prisma.$EntidadesSistemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      especialidade: string
      crm: number
      entidadeID: string
      sexo: $Enums.Sexo
    }, ExtArgs["result"]["especialistas"]>
    composites: {}
  }


  type EspecialistasGetPayload<S extends boolean | null | undefined | EspecialistasDefaultArgs> = $Result.GetResult<Prisma.$EspecialistasPayload, S>

  type EspecialistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EspecialistasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EspecialistasCountAggregateInputType | true
    }

  export interface EspecialistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialistas'], meta: { name: 'Especialistas' } }
    /**
     * Find zero or one Especialistas that matches the filter.
     * @param {EspecialistasFindUniqueArgs} args - Arguments to find a Especialistas
     * @example
     * // Get one Especialistas
     * const especialistas = await prisma.especialistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EspecialistasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EspecialistasFindUniqueArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Especialistas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EspecialistasFindUniqueOrThrowArgs} args - Arguments to find a Especialistas
     * @example
     * // Get one Especialistas
     * const especialistas = await prisma.especialistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EspecialistasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EspecialistasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Especialistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialistasFindFirstArgs} args - Arguments to find a Especialistas
     * @example
     * // Get one Especialistas
     * const especialistas = await prisma.especialistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EspecialistasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EspecialistasFindFirstArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Especialistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialistasFindFirstOrThrowArgs} args - Arguments to find a Especialistas
     * @example
     * // Get one Especialistas
     * const especialistas = await prisma.especialistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EspecialistasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EspecialistasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Especialistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialistasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialistas
     * const especialistas = await prisma.especialistas.findMany()
     * 
     * // Get first 10 Especialistas
     * const especialistas = await prisma.especialistas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialistasWithIdOnly = await prisma.especialistas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EspecialistasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EspecialistasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Especialistas.
     * @param {EspecialistasCreateArgs} args - Arguments to create a Especialistas.
     * @example
     * // Create one Especialistas
     * const Especialistas = await prisma.especialistas.create({
     *   data: {
     *     // ... data to create a Especialistas
     *   }
     * })
     * 
    **/
    create<T extends EspecialistasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EspecialistasCreateArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Especialistas.
     *     @param {EspecialistasCreateManyArgs} args - Arguments to create many Especialistas.
     *     @example
     *     // Create many Especialistas
     *     const especialistas = await prisma.especialistas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EspecialistasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EspecialistasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialistas.
     * @param {EspecialistasDeleteArgs} args - Arguments to delete one Especialistas.
     * @example
     * // Delete one Especialistas
     * const Especialistas = await prisma.especialistas.delete({
     *   where: {
     *     // ... filter to delete one Especialistas
     *   }
     * })
     * 
    **/
    delete<T extends EspecialistasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EspecialistasDeleteArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Especialistas.
     * @param {EspecialistasUpdateArgs} args - Arguments to update one Especialistas.
     * @example
     * // Update one Especialistas
     * const especialistas = await prisma.especialistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EspecialistasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EspecialistasUpdateArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Especialistas.
     * @param {EspecialistasDeleteManyArgs} args - Arguments to filter Especialistas to delete.
     * @example
     * // Delete a few Especialistas
     * const { count } = await prisma.especialistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EspecialistasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EspecialistasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialistas
     * const especialistas = await prisma.especialistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EspecialistasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EspecialistasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialistas.
     * @param {EspecialistasUpsertArgs} args - Arguments to update or create a Especialistas.
     * @example
     * // Update or create a Especialistas
     * const especialistas = await prisma.especialistas.upsert({
     *   create: {
     *     // ... data to create a Especialistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialistas we want to update
     *   }
     * })
    **/
    upsert<T extends EspecialistasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EspecialistasUpsertArgs<ExtArgs>>
    ): Prisma__EspecialistasClient<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Especialistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialistasCountArgs} args - Arguments to filter Especialistas to count.
     * @example
     * // Count the number of Especialistas
     * const count = await prisma.especialistas.count({
     *   where: {
     *     // ... the filter for the Especialistas we want to count
     *   }
     * })
    **/
    count<T extends EspecialistasCountArgs>(
      args?: Subset<T, EspecialistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EspecialistasAggregateArgs>(args: Subset<T, EspecialistasAggregateArgs>): Prisma.PrismaPromise<GetEspecialistasAggregateType<T>>

    /**
     * Group by Especialistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialistasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EspecialistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialistasGroupByArgs['orderBy'] }
        : { orderBy?: EspecialistasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EspecialistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialistas model
   */
  readonly fields: EspecialistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entidade<T extends EntidadesSistemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntidadesSistemaDefaultArgs<ExtArgs>>): Prisma__EntidadesSistemaClient<$Result.GetResult<Prisma.$EntidadesSistemaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Especialistas model
   */ 
  interface EspecialistasFieldRefs {
    readonly id: FieldRef<"Especialistas", 'String'>
    readonly name: FieldRef<"Especialistas", 'String'>
    readonly especialidade: FieldRef<"Especialistas", 'String'>
    readonly crm: FieldRef<"Especialistas", 'Int'>
    readonly entidadeID: FieldRef<"Especialistas", 'String'>
    readonly sexo: FieldRef<"Especialistas", 'Sexo'>
  }
    

  // Custom InputTypes

  /**
   * Especialistas findUnique
   */
  export type EspecialistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * Filter, which Especialistas to fetch.
     */
    where: EspecialistasWhereUniqueInput
  }


  /**
   * Especialistas findUniqueOrThrow
   */
  export type EspecialistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * Filter, which Especialistas to fetch.
     */
    where: EspecialistasWhereUniqueInput
  }


  /**
   * Especialistas findFirst
   */
  export type EspecialistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * Filter, which Especialistas to fetch.
     */
    where?: EspecialistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialistas to fetch.
     */
    orderBy?: EspecialistasOrderByWithRelationInput | EspecialistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialistas.
     */
    cursor?: EspecialistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialistas.
     */
    distinct?: EspecialistasScalarFieldEnum | EspecialistasScalarFieldEnum[]
  }


  /**
   * Especialistas findFirstOrThrow
   */
  export type EspecialistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * Filter, which Especialistas to fetch.
     */
    where?: EspecialistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialistas to fetch.
     */
    orderBy?: EspecialistasOrderByWithRelationInput | EspecialistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialistas.
     */
    cursor?: EspecialistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialistas.
     */
    distinct?: EspecialistasScalarFieldEnum | EspecialistasScalarFieldEnum[]
  }


  /**
   * Especialistas findMany
   */
  export type EspecialistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * Filter, which Especialistas to fetch.
     */
    where?: EspecialistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialistas to fetch.
     */
    orderBy?: EspecialistasOrderByWithRelationInput | EspecialistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialistas.
     */
    cursor?: EspecialistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialistas.
     */
    skip?: number
    distinct?: EspecialistasScalarFieldEnum | EspecialistasScalarFieldEnum[]
  }


  /**
   * Especialistas create
   */
  export type EspecialistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialistas.
     */
    data: XOR<EspecialistasCreateInput, EspecialistasUncheckedCreateInput>
  }


  /**
   * Especialistas createMany
   */
  export type EspecialistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialistas.
     */
    data: EspecialistasCreateManyInput | EspecialistasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Especialistas update
   */
  export type EspecialistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialistas.
     */
    data: XOR<EspecialistasUpdateInput, EspecialistasUncheckedUpdateInput>
    /**
     * Choose, which Especialistas to update.
     */
    where: EspecialistasWhereUniqueInput
  }


  /**
   * Especialistas updateMany
   */
  export type EspecialistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialistas.
     */
    data: XOR<EspecialistasUpdateManyMutationInput, EspecialistasUncheckedUpdateManyInput>
    /**
     * Filter which Especialistas to update
     */
    where?: EspecialistasWhereInput
  }


  /**
   * Especialistas upsert
   */
  export type EspecialistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialistas to update in case it exists.
     */
    where: EspecialistasWhereUniqueInput
    /**
     * In case the Especialistas found by the `where` argument doesn't exist, create a new Especialistas with this data.
     */
    create: XOR<EspecialistasCreateInput, EspecialistasUncheckedCreateInput>
    /**
     * In case the Especialistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialistasUpdateInput, EspecialistasUncheckedUpdateInput>
  }


  /**
   * Especialistas delete
   */
  export type EspecialistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
    /**
     * Filter which Especialistas to delete.
     */
    where: EspecialistasWhereUniqueInput
  }


  /**
   * Especialistas deleteMany
   */
  export type EspecialistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialistas to delete
     */
    where?: EspecialistasWhereInput
  }


  /**
   * Especialistas without action
   */
  export type EspecialistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialistas
     */
    select?: EspecialistasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EspecialistasInclude<ExtArgs> | null
  }



  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    crm: number | null
    cnpj: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    crm: number | null
    cnpj: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    senha: string | null
    sexo: $Enums.Sexo | null
    foto: string | null
    crm: number | null
    cnpj: number | null
    nascimento: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    senha: string | null
    sexo: $Enums.Sexo | null
    foto: string | null
    crm: number | null
    cnpj: number | null
    nascimento: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    name: number
    email: number
    senha: number
    sexo: number
    foto: number
    crm: number
    cnpj: number
    nascimento: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    crm?: true
    cnpj?: true
  }

  export type UsuariosSumAggregateInputType = {
    crm?: true
    cnpj?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    sexo?: true
    foto?: true
    crm?: true
    cnpj?: true
    nascimento?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    sexo?: true
    foto?: true
    crm?: true
    cnpj?: true
    nascimento?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    senha?: true
    sexo?: true
    foto?: true
    crm?: true
    cnpj?: true
    nascimento?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto: string | null
    crm: number | null
    cnpj: number | null
    nascimento: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    sexo?: boolean
    foto?: boolean
    crm?: boolean
    cnpj?: boolean
    nascimento?: boolean
    userPub?: boolean | Usuarios$userPubArgs<ExtArgs>
    usuarioNotificacao?: boolean | Usuarios$usuarioNotificacaoArgs<ExtArgs>
    usuarioSMSrecebida?: boolean | Usuarios$usuarioSMSrecebidaArgs<ExtArgs>
    usuarioSMSenviada?: boolean | Usuarios$usuarioSMSenviadaArgs<ExtArgs>
    usuarioMensagens?: boolean | Usuarios$usuarioMensagensArgs<ExtArgs>
    usuarioContacto?: boolean | Usuarios$usuarioContactoArgs<ExtArgs>
    userLogged?: boolean | Usuarios$userLoggedArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    senha?: boolean
    sexo?: boolean
    foto?: boolean
    crm?: boolean
    cnpj?: boolean
    nascimento?: boolean
  }

  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPub?: boolean | Usuarios$userPubArgs<ExtArgs>
    usuarioNotificacao?: boolean | Usuarios$usuarioNotificacaoArgs<ExtArgs>
    usuarioSMSrecebida?: boolean | Usuarios$usuarioSMSrecebidaArgs<ExtArgs>
    usuarioSMSenviada?: boolean | Usuarios$usuarioSMSenviadaArgs<ExtArgs>
    usuarioMensagens?: boolean | Usuarios$usuarioMensagensArgs<ExtArgs>
    usuarioContacto?: boolean | Usuarios$usuarioContactoArgs<ExtArgs>
    userLogged?: boolean | Usuarios$userLoggedArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      userPub: Prisma.$PublicacoesPayload<ExtArgs>[]
      usuarioNotificacao: Prisma.$NotificacoesPayload<ExtArgs>[]
      usuarioSMSrecebida: Prisma.$MensagemRecebidaPayload<ExtArgs>[]
      usuarioSMSenviada: Prisma.$MensagemEnviadaPayload<ExtArgs>[]
      usuarioMensagens: Prisma.$MensagensPayload<ExtArgs>[]
      usuarioContacto: Prisma.$ContactoUsuarioPayload<ExtArgs>[]
      userLogged: Prisma.$UserLoggedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      senha: string
      sexo: $Enums.Sexo
      foto: string | null
      crm: number | null
      cnpj: number | null
      nascimento: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }


  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuariosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuariosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuariosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
    **/
    create<T extends UsuariosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuarios = await prisma.usuarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuariosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
    **/
    delete<T extends UsuariosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuariosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuariosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuariosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
    **/
    upsert<T extends UsuariosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userPub<T extends Usuarios$userPubArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$userPubArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuarioNotificacao<T extends Usuarios$usuarioNotificacaoArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$usuarioNotificacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuarioSMSrecebida<T extends Usuarios$usuarioSMSrecebidaArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$usuarioSMSrecebidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuarioSMSenviada<T extends Usuarios$usuarioSMSenviadaArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$usuarioSMSenviadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuarioMensagens<T extends Usuarios$usuarioMensagensArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$usuarioMensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuarioContacto<T extends Usuarios$usuarioContactoArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$usuarioContactoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    userLogged<T extends Usuarios$userLoggedArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$userLoggedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuarios model
   */ 
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'String'>
    readonly name: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly senha: FieldRef<"Usuarios", 'String'>
    readonly sexo: FieldRef<"Usuarios", 'Sexo'>
    readonly foto: FieldRef<"Usuarios", 'String'>
    readonly crm: FieldRef<"Usuarios", 'Int'>
    readonly cnpj: FieldRef<"Usuarios", 'Int'>
    readonly nascimento: FieldRef<"Usuarios", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }


  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
  }


  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }


  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
  }


  /**
   * Usuarios.userPub
   */
  export type Usuarios$userPubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    where?: PublicacoesWhereInput
    orderBy?: PublicacoesOrderByWithRelationInput | PublicacoesOrderByWithRelationInput[]
    cursor?: PublicacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacoesScalarFieldEnum | PublicacoesScalarFieldEnum[]
  }


  /**
   * Usuarios.usuarioNotificacao
   */
  export type Usuarios$usuarioNotificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    where?: NotificacoesWhereInput
    orderBy?: NotificacoesOrderByWithRelationInput | NotificacoesOrderByWithRelationInput[]
    cursor?: NotificacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacoesScalarFieldEnum | NotificacoesScalarFieldEnum[]
  }


  /**
   * Usuarios.usuarioSMSrecebida
   */
  export type Usuarios$usuarioSMSrecebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    where?: MensagemRecebidaWhereInput
    orderBy?: MensagemRecebidaOrderByWithRelationInput | MensagemRecebidaOrderByWithRelationInput[]
    cursor?: MensagemRecebidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemRecebidaScalarFieldEnum | MensagemRecebidaScalarFieldEnum[]
  }


  /**
   * Usuarios.usuarioSMSenviada
   */
  export type Usuarios$usuarioSMSenviadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    where?: MensagemEnviadaWhereInput
    orderBy?: MensagemEnviadaOrderByWithRelationInput | MensagemEnviadaOrderByWithRelationInput[]
    cursor?: MensagemEnviadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemEnviadaScalarFieldEnum | MensagemEnviadaScalarFieldEnum[]
  }


  /**
   * Usuarios.usuarioMensagens
   */
  export type Usuarios$usuarioMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    where?: MensagensWhereInput
    orderBy?: MensagensOrderByWithRelationInput | MensagensOrderByWithRelationInput[]
    cursor?: MensagensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagensScalarFieldEnum | MensagensScalarFieldEnum[]
  }


  /**
   * Usuarios.usuarioContacto
   */
  export type Usuarios$usuarioContactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    where?: ContactoUsuarioWhereInput
    orderBy?: ContactoUsuarioOrderByWithRelationInput | ContactoUsuarioOrderByWithRelationInput[]
    cursor?: ContactoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactoUsuarioScalarFieldEnum | ContactoUsuarioScalarFieldEnum[]
  }


  /**
   * Usuarios.userLogged
   */
  export type Usuarios$userLoggedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    where?: UserLoggedWhereInput
    orderBy?: UserLoggedOrderByWithRelationInput | UserLoggedOrderByWithRelationInput[]
    cursor?: UserLoggedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLoggedScalarFieldEnum | UserLoggedScalarFieldEnum[]
  }


  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
  }



  /**
   * Model ContactoUsuario
   */

  export type AggregateContactoUsuario = {
    _count: ContactoUsuarioCountAggregateOutputType | null
    _avg: ContactoUsuarioAvgAggregateOutputType | null
    _sum: ContactoUsuarioSumAggregateOutputType | null
    _min: ContactoUsuarioMinAggregateOutputType | null
    _max: ContactoUsuarioMaxAggregateOutputType | null
  }

  export type ContactoUsuarioAvgAggregateOutputType = {
    contacto: number | null
  }

  export type ContactoUsuarioSumAggregateOutputType = {
    contacto: number | null
  }

  export type ContactoUsuarioMinAggregateOutputType = {
    id: string | null
    contacto: number | null
    usuarioID: string | null
  }

  export type ContactoUsuarioMaxAggregateOutputType = {
    id: string | null
    contacto: number | null
    usuarioID: string | null
  }

  export type ContactoUsuarioCountAggregateOutputType = {
    id: number
    contacto: number
    usuarioID: number
    _all: number
  }


  export type ContactoUsuarioAvgAggregateInputType = {
    contacto?: true
  }

  export type ContactoUsuarioSumAggregateInputType = {
    contacto?: true
  }

  export type ContactoUsuarioMinAggregateInputType = {
    id?: true
    contacto?: true
    usuarioID?: true
  }

  export type ContactoUsuarioMaxAggregateInputType = {
    id?: true
    contacto?: true
    usuarioID?: true
  }

  export type ContactoUsuarioCountAggregateInputType = {
    id?: true
    contacto?: true
    usuarioID?: true
    _all?: true
  }

  export type ContactoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactoUsuario to aggregate.
     */
    where?: ContactoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoUsuarios to fetch.
     */
    orderBy?: ContactoUsuarioOrderByWithRelationInput | ContactoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactoUsuarios
    **/
    _count?: true | ContactoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactoUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactoUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoUsuarioMaxAggregateInputType
  }

  export type GetContactoUsuarioAggregateType<T extends ContactoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateContactoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactoUsuario[P]>
      : GetScalarType<T[P], AggregateContactoUsuario[P]>
  }




  export type ContactoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoUsuarioWhereInput
    orderBy?: ContactoUsuarioOrderByWithAggregationInput | ContactoUsuarioOrderByWithAggregationInput[]
    by: ContactoUsuarioScalarFieldEnum[] | ContactoUsuarioScalarFieldEnum
    having?: ContactoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoUsuarioCountAggregateInputType | true
    _avg?: ContactoUsuarioAvgAggregateInputType
    _sum?: ContactoUsuarioSumAggregateInputType
    _min?: ContactoUsuarioMinAggregateInputType
    _max?: ContactoUsuarioMaxAggregateInputType
  }

  export type ContactoUsuarioGroupByOutputType = {
    id: string
    contacto: number
    usuarioID: string
    _count: ContactoUsuarioCountAggregateOutputType | null
    _avg: ContactoUsuarioAvgAggregateOutputType | null
    _sum: ContactoUsuarioSumAggregateOutputType | null
    _min: ContactoUsuarioMinAggregateOutputType | null
    _max: ContactoUsuarioMaxAggregateOutputType | null
  }

  type GetContactoUsuarioGroupByPayload<T extends ContactoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type ContactoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contacto?: boolean
    usuarioID?: boolean
    usuarioContacto?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactoUsuario"]>

  export type ContactoUsuarioSelectScalar = {
    id?: boolean
    contacto?: boolean
    usuarioID?: boolean
  }

  export type ContactoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioContacto?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $ContactoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactoUsuario"
    objects: {
      usuarioContacto: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contacto: number
      usuarioID: string
    }, ExtArgs["result"]["contactoUsuario"]>
    composites: {}
  }


  type ContactoUsuarioGetPayload<S extends boolean | null | undefined | ContactoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$ContactoUsuarioPayload, S>

  type ContactoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactoUsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactoUsuarioCountAggregateInputType | true
    }

  export interface ContactoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactoUsuario'], meta: { name: 'ContactoUsuario' } }
    /**
     * Find zero or one ContactoUsuario that matches the filter.
     * @param {ContactoUsuarioFindUniqueArgs} args - Arguments to find a ContactoUsuario
     * @example
     * // Get one ContactoUsuario
     * const contactoUsuario = await prisma.contactoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactoUsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoUsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactoUsuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a ContactoUsuario
     * @example
     * // Get one ContactoUsuario
     * const contactoUsuario = await prisma.contactoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactoUsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoUsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUsuarioFindFirstArgs} args - Arguments to find a ContactoUsuario
     * @example
     * // Get one ContactoUsuario
     * const contactoUsuario = await prisma.contactoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactoUsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoUsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUsuarioFindFirstOrThrowArgs} args - Arguments to find a ContactoUsuario
     * @example
     * // Get one ContactoUsuario
     * const contactoUsuario = await prisma.contactoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactoUsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoUsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactoUsuarios
     * const contactoUsuarios = await prisma.contactoUsuario.findMany()
     * 
     * // Get first 10 ContactoUsuarios
     * const contactoUsuarios = await prisma.contactoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoUsuarioWithIdOnly = await prisma.contactoUsuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactoUsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoUsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactoUsuario.
     * @param {ContactoUsuarioCreateArgs} args - Arguments to create a ContactoUsuario.
     * @example
     * // Create one ContactoUsuario
     * const ContactoUsuario = await prisma.contactoUsuario.create({
     *   data: {
     *     // ... data to create a ContactoUsuario
     *   }
     * })
     * 
    **/
    create<T extends ContactoUsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoUsuarioCreateArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactoUsuarios.
     *     @param {ContactoUsuarioCreateManyArgs} args - Arguments to create many ContactoUsuarios.
     *     @example
     *     // Create many ContactoUsuarios
     *     const contactoUsuario = await prisma.contactoUsuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactoUsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoUsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactoUsuario.
     * @param {ContactoUsuarioDeleteArgs} args - Arguments to delete one ContactoUsuario.
     * @example
     * // Delete one ContactoUsuario
     * const ContactoUsuario = await prisma.contactoUsuario.delete({
     *   where: {
     *     // ... filter to delete one ContactoUsuario
     *   }
     * })
     * 
    **/
    delete<T extends ContactoUsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoUsuarioDeleteArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactoUsuario.
     * @param {ContactoUsuarioUpdateArgs} args - Arguments to update one ContactoUsuario.
     * @example
     * // Update one ContactoUsuario
     * const contactoUsuario = await prisma.contactoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactoUsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoUsuarioUpdateArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactoUsuarios.
     * @param {ContactoUsuarioDeleteManyArgs} args - Arguments to filter ContactoUsuarios to delete.
     * @example
     * // Delete a few ContactoUsuarios
     * const { count } = await prisma.contactoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactoUsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactoUsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactoUsuarios
     * const contactoUsuario = await prisma.contactoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactoUsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoUsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactoUsuario.
     * @param {ContactoUsuarioUpsertArgs} args - Arguments to update or create a ContactoUsuario.
     * @example
     * // Update or create a ContactoUsuario
     * const contactoUsuario = await prisma.contactoUsuario.upsert({
     *   create: {
     *     // ... data to create a ContactoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactoUsuario we want to update
     *   }
     * })
    **/
    upsert<T extends ContactoUsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactoUsuarioUpsertArgs<ExtArgs>>
    ): Prisma__ContactoUsuarioClient<$Result.GetResult<Prisma.$ContactoUsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContactoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUsuarioCountArgs} args - Arguments to filter ContactoUsuarios to count.
     * @example
     * // Count the number of ContactoUsuarios
     * const count = await prisma.contactoUsuario.count({
     *   where: {
     *     // ... the filter for the ContactoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends ContactoUsuarioCountArgs>(
      args?: Subset<T, ContactoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactoUsuarioAggregateArgs>(args: Subset<T, ContactoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetContactoUsuarioAggregateType<T>>

    /**
     * Group by ContactoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: ContactoUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactoUsuario model
   */
  readonly fields: ContactoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuarioContacto<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactoUsuario model
   */ 
  interface ContactoUsuarioFieldRefs {
    readonly id: FieldRef<"ContactoUsuario", 'String'>
    readonly contacto: FieldRef<"ContactoUsuario", 'Int'>
    readonly usuarioID: FieldRef<"ContactoUsuario", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ContactoUsuario findUnique
   */
  export type ContactoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ContactoUsuario to fetch.
     */
    where: ContactoUsuarioWhereUniqueInput
  }


  /**
   * ContactoUsuario findUniqueOrThrow
   */
  export type ContactoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ContactoUsuario to fetch.
     */
    where: ContactoUsuarioWhereUniqueInput
  }


  /**
   * ContactoUsuario findFirst
   */
  export type ContactoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ContactoUsuario to fetch.
     */
    where?: ContactoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoUsuarios to fetch.
     */
    orderBy?: ContactoUsuarioOrderByWithRelationInput | ContactoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactoUsuarios.
     */
    cursor?: ContactoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactoUsuarios.
     */
    distinct?: ContactoUsuarioScalarFieldEnum | ContactoUsuarioScalarFieldEnum[]
  }


  /**
   * ContactoUsuario findFirstOrThrow
   */
  export type ContactoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ContactoUsuario to fetch.
     */
    where?: ContactoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoUsuarios to fetch.
     */
    orderBy?: ContactoUsuarioOrderByWithRelationInput | ContactoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactoUsuarios.
     */
    cursor?: ContactoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactoUsuarios.
     */
    distinct?: ContactoUsuarioScalarFieldEnum | ContactoUsuarioScalarFieldEnum[]
  }


  /**
   * ContactoUsuario findMany
   */
  export type ContactoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ContactoUsuarios to fetch.
     */
    where?: ContactoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoUsuarios to fetch.
     */
    orderBy?: ContactoUsuarioOrderByWithRelationInput | ContactoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactoUsuarios.
     */
    cursor?: ContactoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoUsuarios.
     */
    skip?: number
    distinct?: ContactoUsuarioScalarFieldEnum | ContactoUsuarioScalarFieldEnum[]
  }


  /**
   * ContactoUsuario create
   */
  export type ContactoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactoUsuario.
     */
    data: XOR<ContactoUsuarioCreateInput, ContactoUsuarioUncheckedCreateInput>
  }


  /**
   * ContactoUsuario createMany
   */
  export type ContactoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactoUsuarios.
     */
    data: ContactoUsuarioCreateManyInput | ContactoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContactoUsuario update
   */
  export type ContactoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactoUsuario.
     */
    data: XOR<ContactoUsuarioUpdateInput, ContactoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which ContactoUsuario to update.
     */
    where: ContactoUsuarioWhereUniqueInput
  }


  /**
   * ContactoUsuario updateMany
   */
  export type ContactoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactoUsuarios.
     */
    data: XOR<ContactoUsuarioUpdateManyMutationInput, ContactoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ContactoUsuarios to update
     */
    where?: ContactoUsuarioWhereInput
  }


  /**
   * ContactoUsuario upsert
   */
  export type ContactoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactoUsuario to update in case it exists.
     */
    where: ContactoUsuarioWhereUniqueInput
    /**
     * In case the ContactoUsuario found by the `where` argument doesn't exist, create a new ContactoUsuario with this data.
     */
    create: XOR<ContactoUsuarioCreateInput, ContactoUsuarioUncheckedCreateInput>
    /**
     * In case the ContactoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactoUsuarioUpdateInput, ContactoUsuarioUncheckedUpdateInput>
  }


  /**
   * ContactoUsuario delete
   */
  export type ContactoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which ContactoUsuario to delete.
     */
    where: ContactoUsuarioWhereUniqueInput
  }


  /**
   * ContactoUsuario deleteMany
   */
  export type ContactoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactoUsuarios to delete
     */
    where?: ContactoUsuarioWhereInput
  }


  /**
   * ContactoUsuario without action
   */
  export type ContactoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoUsuario
     */
    select?: ContactoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactoUsuarioInclude<ExtArgs> | null
  }



  /**
   * Model Publicacoes
   */

  export type AggregatePublicacoes = {
    _count: PublicacoesCountAggregateOutputType | null
    _min: PublicacoesMinAggregateOutputType | null
    _max: PublicacoesMaxAggregateOutputType | null
  }

  export type PublicacoesMinAggregateOutputType = {
    id: string | null
    conteudo: string | null
    foto: string | null
    video: string | null
    data: Date | null
    usuarioID: string | null
  }

  export type PublicacoesMaxAggregateOutputType = {
    id: string | null
    conteudo: string | null
    foto: string | null
    video: string | null
    data: Date | null
    usuarioID: string | null
  }

  export type PublicacoesCountAggregateOutputType = {
    id: number
    conteudo: number
    foto: number
    video: number
    data: number
    usuarioID: number
    _all: number
  }


  export type PublicacoesMinAggregateInputType = {
    id?: true
    conteudo?: true
    foto?: true
    video?: true
    data?: true
    usuarioID?: true
  }

  export type PublicacoesMaxAggregateInputType = {
    id?: true
    conteudo?: true
    foto?: true
    video?: true
    data?: true
    usuarioID?: true
  }

  export type PublicacoesCountAggregateInputType = {
    id?: true
    conteudo?: true
    foto?: true
    video?: true
    data?: true
    usuarioID?: true
    _all?: true
  }

  export type PublicacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacoes to aggregate.
     */
    where?: PublicacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacoes to fetch.
     */
    orderBy?: PublicacoesOrderByWithRelationInput | PublicacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicacoes
    **/
    _count?: true | PublicacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacoesMaxAggregateInputType
  }

  export type GetPublicacoesAggregateType<T extends PublicacoesAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicacoes[P]>
      : GetScalarType<T[P], AggregatePublicacoes[P]>
  }




  export type PublicacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacoesWhereInput
    orderBy?: PublicacoesOrderByWithAggregationInput | PublicacoesOrderByWithAggregationInput[]
    by: PublicacoesScalarFieldEnum[] | PublicacoesScalarFieldEnum
    having?: PublicacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacoesCountAggregateInputType | true
    _min?: PublicacoesMinAggregateInputType
    _max?: PublicacoesMaxAggregateInputType
  }

  export type PublicacoesGroupByOutputType = {
    id: string
    conteudo: string
    foto: string | null
    video: string | null
    data: Date
    usuarioID: string
    _count: PublicacoesCountAggregateOutputType | null
    _min: PublicacoesMinAggregateOutputType | null
    _max: PublicacoesMaxAggregateOutputType | null
  }

  type GetPublicacoesGroupByPayload<T extends PublicacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacoesGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacoesGroupByOutputType[P]>
        }
      >
    >


  export type PublicacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    foto?: boolean
    video?: boolean
    data?: boolean
    usuarioID?: boolean
    usuarioPub?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacoes"]>

  export type PublicacoesSelectScalar = {
    id?: boolean
    conteudo?: boolean
    foto?: boolean
    video?: boolean
    data?: boolean
    usuarioID?: boolean
  }

  export type PublicacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioPub?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $PublicacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publicacoes"
    objects: {
      usuarioPub: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conteudo: string
      foto: string | null
      video: string | null
      data: Date
      usuarioID: string
    }, ExtArgs["result"]["publicacoes"]>
    composites: {}
  }


  type PublicacoesGetPayload<S extends boolean | null | undefined | PublicacoesDefaultArgs> = $Result.GetResult<Prisma.$PublicacoesPayload, S>

  type PublicacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublicacoesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublicacoesCountAggregateInputType | true
    }

  export interface PublicacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicacoes'], meta: { name: 'Publicacoes' } }
    /**
     * Find zero or one Publicacoes that matches the filter.
     * @param {PublicacoesFindUniqueArgs} args - Arguments to find a Publicacoes
     * @example
     * // Get one Publicacoes
     * const publicacoes = await prisma.publicacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicacoesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PublicacoesFindUniqueArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Publicacoes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicacoesFindUniqueOrThrowArgs} args - Arguments to find a Publicacoes
     * @example
     * // Get one Publicacoes
     * const publicacoes = await prisma.publicacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicacoesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicacoesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Publicacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacoesFindFirstArgs} args - Arguments to find a Publicacoes
     * @example
     * // Get one Publicacoes
     * const publicacoes = await prisma.publicacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicacoesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicacoesFindFirstArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Publicacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacoesFindFirstOrThrowArgs} args - Arguments to find a Publicacoes
     * @example
     * // Get one Publicacoes
     * const publicacoes = await prisma.publicacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicacoesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicacoesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Publicacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacoesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicacoes
     * const publicacoes = await prisma.publicacoes.findMany()
     * 
     * // Get first 10 Publicacoes
     * const publicacoes = await prisma.publicacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicacoesWithIdOnly = await prisma.publicacoes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublicacoesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicacoesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Publicacoes.
     * @param {PublicacoesCreateArgs} args - Arguments to create a Publicacoes.
     * @example
     * // Create one Publicacoes
     * const Publicacoes = await prisma.publicacoes.create({
     *   data: {
     *     // ... data to create a Publicacoes
     *   }
     * })
     * 
    **/
    create<T extends PublicacoesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicacoesCreateArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Publicacoes.
     *     @param {PublicacoesCreateManyArgs} args - Arguments to create many Publicacoes.
     *     @example
     *     // Create many Publicacoes
     *     const publicacoes = await prisma.publicacoes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublicacoesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicacoesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Publicacoes.
     * @param {PublicacoesDeleteArgs} args - Arguments to delete one Publicacoes.
     * @example
     * // Delete one Publicacoes
     * const Publicacoes = await prisma.publicacoes.delete({
     *   where: {
     *     // ... filter to delete one Publicacoes
     *   }
     * })
     * 
    **/
    delete<T extends PublicacoesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PublicacoesDeleteArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Publicacoes.
     * @param {PublicacoesUpdateArgs} args - Arguments to update one Publicacoes.
     * @example
     * // Update one Publicacoes
     * const publicacoes = await prisma.publicacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicacoesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicacoesUpdateArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Publicacoes.
     * @param {PublicacoesDeleteManyArgs} args - Arguments to filter Publicacoes to delete.
     * @example
     * // Delete a few Publicacoes
     * const { count } = await prisma.publicacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicacoesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicacoesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicacoes
     * const publicacoes = await prisma.publicacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicacoesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PublicacoesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publicacoes.
     * @param {PublicacoesUpsertArgs} args - Arguments to update or create a Publicacoes.
     * @example
     * // Update or create a Publicacoes
     * const publicacoes = await prisma.publicacoes.upsert({
     *   create: {
     *     // ... data to create a Publicacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicacoes we want to update
     *   }
     * })
    **/
    upsert<T extends PublicacoesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PublicacoesUpsertArgs<ExtArgs>>
    ): Prisma__PublicacoesClient<$Result.GetResult<Prisma.$PublicacoesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Publicacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacoesCountArgs} args - Arguments to filter Publicacoes to count.
     * @example
     * // Count the number of Publicacoes
     * const count = await prisma.publicacoes.count({
     *   where: {
     *     // ... the filter for the Publicacoes we want to count
     *   }
     * })
    **/
    count<T extends PublicacoesCountArgs>(
      args?: Subset<T, PublicacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicacoesAggregateArgs>(args: Subset<T, PublicacoesAggregateArgs>): Prisma.PrismaPromise<GetPublicacoesAggregateType<T>>

    /**
     * Group by Publicacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacoesGroupByArgs['orderBy'] }
        : { orderBy?: PublicacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicacoes model
   */
  readonly fields: PublicacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuarioPub<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Publicacoes model
   */ 
  interface PublicacoesFieldRefs {
    readonly id: FieldRef<"Publicacoes", 'String'>
    readonly conteudo: FieldRef<"Publicacoes", 'String'>
    readonly foto: FieldRef<"Publicacoes", 'String'>
    readonly video: FieldRef<"Publicacoes", 'String'>
    readonly data: FieldRef<"Publicacoes", 'DateTime'>
    readonly usuarioID: FieldRef<"Publicacoes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Publicacoes findUnique
   */
  export type PublicacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * Filter, which Publicacoes to fetch.
     */
    where: PublicacoesWhereUniqueInput
  }


  /**
   * Publicacoes findUniqueOrThrow
   */
  export type PublicacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * Filter, which Publicacoes to fetch.
     */
    where: PublicacoesWhereUniqueInput
  }


  /**
   * Publicacoes findFirst
   */
  export type PublicacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * Filter, which Publicacoes to fetch.
     */
    where?: PublicacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacoes to fetch.
     */
    orderBy?: PublicacoesOrderByWithRelationInput | PublicacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacoes.
     */
    cursor?: PublicacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacoes.
     */
    distinct?: PublicacoesScalarFieldEnum | PublicacoesScalarFieldEnum[]
  }


  /**
   * Publicacoes findFirstOrThrow
   */
  export type PublicacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * Filter, which Publicacoes to fetch.
     */
    where?: PublicacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacoes to fetch.
     */
    orderBy?: PublicacoesOrderByWithRelationInput | PublicacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacoes.
     */
    cursor?: PublicacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacoes.
     */
    distinct?: PublicacoesScalarFieldEnum | PublicacoesScalarFieldEnum[]
  }


  /**
   * Publicacoes findMany
   */
  export type PublicacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * Filter, which Publicacoes to fetch.
     */
    where?: PublicacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacoes to fetch.
     */
    orderBy?: PublicacoesOrderByWithRelationInput | PublicacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicacoes.
     */
    cursor?: PublicacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacoes.
     */
    skip?: number
    distinct?: PublicacoesScalarFieldEnum | PublicacoesScalarFieldEnum[]
  }


  /**
   * Publicacoes create
   */
  export type PublicacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicacoes.
     */
    data: XOR<PublicacoesCreateInput, PublicacoesUncheckedCreateInput>
  }


  /**
   * Publicacoes createMany
   */
  export type PublicacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicacoes.
     */
    data: PublicacoesCreateManyInput | PublicacoesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Publicacoes update
   */
  export type PublicacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicacoes.
     */
    data: XOR<PublicacoesUpdateInput, PublicacoesUncheckedUpdateInput>
    /**
     * Choose, which Publicacoes to update.
     */
    where: PublicacoesWhereUniqueInput
  }


  /**
   * Publicacoes updateMany
   */
  export type PublicacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicacoes.
     */
    data: XOR<PublicacoesUpdateManyMutationInput, PublicacoesUncheckedUpdateManyInput>
    /**
     * Filter which Publicacoes to update
     */
    where?: PublicacoesWhereInput
  }


  /**
   * Publicacoes upsert
   */
  export type PublicacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicacoes to update in case it exists.
     */
    where: PublicacoesWhereUniqueInput
    /**
     * In case the Publicacoes found by the `where` argument doesn't exist, create a new Publicacoes with this data.
     */
    create: XOR<PublicacoesCreateInput, PublicacoesUncheckedCreateInput>
    /**
     * In case the Publicacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacoesUpdateInput, PublicacoesUncheckedUpdateInput>
  }


  /**
   * Publicacoes delete
   */
  export type PublicacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
    /**
     * Filter which Publicacoes to delete.
     */
    where: PublicacoesWhereUniqueInput
  }


  /**
   * Publicacoes deleteMany
   */
  export type PublicacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacoes to delete
     */
    where?: PublicacoesWhereInput
  }


  /**
   * Publicacoes without action
   */
  export type PublicacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacoes
     */
    select?: PublicacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicacoesInclude<ExtArgs> | null
  }



  /**
   * Model Notificacoes
   */

  export type AggregateNotificacoes = {
    _count: NotificacoesCountAggregateOutputType | null
    _min: NotificacoesMinAggregateOutputType | null
    _max: NotificacoesMaxAggregateOutputType | null
  }

  export type NotificacoesMinAggregateOutputType = {
    id: string | null
    data: Date | null
    conteudo: string | null
    usuarioID: string | null
  }

  export type NotificacoesMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    conteudo: string | null
    usuarioID: string | null
  }

  export type NotificacoesCountAggregateOutputType = {
    id: number
    data: number
    conteudo: number
    usuarioID: number
    _all: number
  }


  export type NotificacoesMinAggregateInputType = {
    id?: true
    data?: true
    conteudo?: true
    usuarioID?: true
  }

  export type NotificacoesMaxAggregateInputType = {
    id?: true
    data?: true
    conteudo?: true
    usuarioID?: true
  }

  export type NotificacoesCountAggregateInputType = {
    id?: true
    data?: true
    conteudo?: true
    usuarioID?: true
    _all?: true
  }

  export type NotificacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacoes to aggregate.
     */
    where?: NotificacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacoes to fetch.
     */
    orderBy?: NotificacoesOrderByWithRelationInput | NotificacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacoes
    **/
    _count?: true | NotificacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacoesMaxAggregateInputType
  }

  export type GetNotificacoesAggregateType<T extends NotificacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacoes[P]>
      : GetScalarType<T[P], AggregateNotificacoes[P]>
  }




  export type NotificacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacoesWhereInput
    orderBy?: NotificacoesOrderByWithAggregationInput | NotificacoesOrderByWithAggregationInput[]
    by: NotificacoesScalarFieldEnum[] | NotificacoesScalarFieldEnum
    having?: NotificacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacoesCountAggregateInputType | true
    _min?: NotificacoesMinAggregateInputType
    _max?: NotificacoesMaxAggregateInputType
  }

  export type NotificacoesGroupByOutputType = {
    id: string
    data: Date
    conteudo: string
    usuarioID: string
    _count: NotificacoesCountAggregateOutputType | null
    _min: NotificacoesMinAggregateOutputType | null
    _max: NotificacoesMaxAggregateOutputType | null
  }

  type GetNotificacoesGroupByPayload<T extends NotificacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacoesGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacoesGroupByOutputType[P]>
        }
      >
    >


  export type NotificacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    conteudo?: boolean
    usuarioID?: boolean
    usuarioNotificacao?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacoes"]>

  export type NotificacoesSelectScalar = {
    id?: boolean
    data?: boolean
    conteudo?: boolean
    usuarioID?: boolean
  }

  export type NotificacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioNotificacao?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $NotificacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacoes"
    objects: {
      usuarioNotificacao: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      conteudo: string
      usuarioID: string
    }, ExtArgs["result"]["notificacoes"]>
    composites: {}
  }


  type NotificacoesGetPayload<S extends boolean | null | undefined | NotificacoesDefaultArgs> = $Result.GetResult<Prisma.$NotificacoesPayload, S>

  type NotificacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificacoesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificacoesCountAggregateInputType | true
    }

  export interface NotificacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacoes'], meta: { name: 'Notificacoes' } }
    /**
     * Find zero or one Notificacoes that matches the filter.
     * @param {NotificacoesFindUniqueArgs} args - Arguments to find a Notificacoes
     * @example
     * // Get one Notificacoes
     * const notificacoes = await prisma.notificacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificacoesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificacoesFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notificacoes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificacoesFindUniqueOrThrowArgs} args - Arguments to find a Notificacoes
     * @example
     * // Get one Notificacoes
     * const notificacoes = await prisma.notificacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificacoesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificacoesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notificacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacoesFindFirstArgs} args - Arguments to find a Notificacoes
     * @example
     * // Get one Notificacoes
     * const notificacoes = await prisma.notificacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificacoesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificacoesFindFirstArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notificacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacoesFindFirstOrThrowArgs} args - Arguments to find a Notificacoes
     * @example
     * // Get one Notificacoes
     * const notificacoes = await prisma.notificacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificacoesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificacoesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notificacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacoesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacoes
     * const notificacoes = await prisma.notificacoes.findMany()
     * 
     * // Get first 10 Notificacoes
     * const notificacoes = await prisma.notificacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacoesWithIdOnly = await prisma.notificacoes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificacoesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificacoesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notificacoes.
     * @param {NotificacoesCreateArgs} args - Arguments to create a Notificacoes.
     * @example
     * // Create one Notificacoes
     * const Notificacoes = await prisma.notificacoes.create({
     *   data: {
     *     // ... data to create a Notificacoes
     *   }
     * })
     * 
    **/
    create<T extends NotificacoesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificacoesCreateArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notificacoes.
     *     @param {NotificacoesCreateManyArgs} args - Arguments to create many Notificacoes.
     *     @example
     *     // Create many Notificacoes
     *     const notificacoes = await prisma.notificacoes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificacoesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificacoesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notificacoes.
     * @param {NotificacoesDeleteArgs} args - Arguments to delete one Notificacoes.
     * @example
     * // Delete one Notificacoes
     * const Notificacoes = await prisma.notificacoes.delete({
     *   where: {
     *     // ... filter to delete one Notificacoes
     *   }
     * })
     * 
    **/
    delete<T extends NotificacoesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificacoesDeleteArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notificacoes.
     * @param {NotificacoesUpdateArgs} args - Arguments to update one Notificacoes.
     * @example
     * // Update one Notificacoes
     * const notificacoes = await prisma.notificacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificacoesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificacoesUpdateArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notificacoes.
     * @param {NotificacoesDeleteManyArgs} args - Arguments to filter Notificacoes to delete.
     * @example
     * // Delete a few Notificacoes
     * const { count } = await prisma.notificacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificacoesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificacoesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacoes
     * const notificacoes = await prisma.notificacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificacoesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificacoesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacoes.
     * @param {NotificacoesUpsertArgs} args - Arguments to update or create a Notificacoes.
     * @example
     * // Update or create a Notificacoes
     * const notificacoes = await prisma.notificacoes.upsert({
     *   create: {
     *     // ... data to create a Notificacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacoes we want to update
     *   }
     * })
    **/
    upsert<T extends NotificacoesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificacoesUpsertArgs<ExtArgs>>
    ): Prisma__NotificacoesClient<$Result.GetResult<Prisma.$NotificacoesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notificacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacoesCountArgs} args - Arguments to filter Notificacoes to count.
     * @example
     * // Count the number of Notificacoes
     * const count = await prisma.notificacoes.count({
     *   where: {
     *     // ... the filter for the Notificacoes we want to count
     *   }
     * })
    **/
    count<T extends NotificacoesCountArgs>(
      args?: Subset<T, NotificacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacoesAggregateArgs>(args: Subset<T, NotificacoesAggregateArgs>): Prisma.PrismaPromise<GetNotificacoesAggregateType<T>>

    /**
     * Group by Notificacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacoesGroupByArgs['orderBy'] }
        : { orderBy?: NotificacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacoes model
   */
  readonly fields: NotificacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuarioNotificacao<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Notificacoes model
   */ 
  interface NotificacoesFieldRefs {
    readonly id: FieldRef<"Notificacoes", 'String'>
    readonly data: FieldRef<"Notificacoes", 'DateTime'>
    readonly conteudo: FieldRef<"Notificacoes", 'String'>
    readonly usuarioID: FieldRef<"Notificacoes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Notificacoes findUnique
   */
  export type NotificacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * Filter, which Notificacoes to fetch.
     */
    where: NotificacoesWhereUniqueInput
  }


  /**
   * Notificacoes findUniqueOrThrow
   */
  export type NotificacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * Filter, which Notificacoes to fetch.
     */
    where: NotificacoesWhereUniqueInput
  }


  /**
   * Notificacoes findFirst
   */
  export type NotificacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * Filter, which Notificacoes to fetch.
     */
    where?: NotificacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacoes to fetch.
     */
    orderBy?: NotificacoesOrderByWithRelationInput | NotificacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacoes.
     */
    cursor?: NotificacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacoes.
     */
    distinct?: NotificacoesScalarFieldEnum | NotificacoesScalarFieldEnum[]
  }


  /**
   * Notificacoes findFirstOrThrow
   */
  export type NotificacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * Filter, which Notificacoes to fetch.
     */
    where?: NotificacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacoes to fetch.
     */
    orderBy?: NotificacoesOrderByWithRelationInput | NotificacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacoes.
     */
    cursor?: NotificacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacoes.
     */
    distinct?: NotificacoesScalarFieldEnum | NotificacoesScalarFieldEnum[]
  }


  /**
   * Notificacoes findMany
   */
  export type NotificacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * Filter, which Notificacoes to fetch.
     */
    where?: NotificacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacoes to fetch.
     */
    orderBy?: NotificacoesOrderByWithRelationInput | NotificacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacoes.
     */
    cursor?: NotificacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacoes.
     */
    skip?: number
    distinct?: NotificacoesScalarFieldEnum | NotificacoesScalarFieldEnum[]
  }


  /**
   * Notificacoes create
   */
  export type NotificacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacoes.
     */
    data: XOR<NotificacoesCreateInput, NotificacoesUncheckedCreateInput>
  }


  /**
   * Notificacoes createMany
   */
  export type NotificacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacoes.
     */
    data: NotificacoesCreateManyInput | NotificacoesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Notificacoes update
   */
  export type NotificacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacoes.
     */
    data: XOR<NotificacoesUpdateInput, NotificacoesUncheckedUpdateInput>
    /**
     * Choose, which Notificacoes to update.
     */
    where: NotificacoesWhereUniqueInput
  }


  /**
   * Notificacoes updateMany
   */
  export type NotificacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacoes.
     */
    data: XOR<NotificacoesUpdateManyMutationInput, NotificacoesUncheckedUpdateManyInput>
    /**
     * Filter which Notificacoes to update
     */
    where?: NotificacoesWhereInput
  }


  /**
   * Notificacoes upsert
   */
  export type NotificacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacoes to update in case it exists.
     */
    where: NotificacoesWhereUniqueInput
    /**
     * In case the Notificacoes found by the `where` argument doesn't exist, create a new Notificacoes with this data.
     */
    create: XOR<NotificacoesCreateInput, NotificacoesUncheckedCreateInput>
    /**
     * In case the Notificacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacoesUpdateInput, NotificacoesUncheckedUpdateInput>
  }


  /**
   * Notificacoes delete
   */
  export type NotificacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
    /**
     * Filter which Notificacoes to delete.
     */
    where: NotificacoesWhereUniqueInput
  }


  /**
   * Notificacoes deleteMany
   */
  export type NotificacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacoes to delete
     */
    where?: NotificacoesWhereInput
  }


  /**
   * Notificacoes without action
   */
  export type NotificacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacoes
     */
    select?: NotificacoesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificacoesInclude<ExtArgs> | null
  }



  /**
   * Model Mensagens
   */

  export type AggregateMensagens = {
    _count: MensagensCountAggregateOutputType | null
    _min: MensagensMinAggregateOutputType | null
    _max: MensagensMaxAggregateOutputType | null
  }

  export type MensagensMinAggregateOutputType = {
    id: string | null
    conteudo: string | null
    data: Date | null
    usuarioID: string | null
  }

  export type MensagensMaxAggregateOutputType = {
    id: string | null
    conteudo: string | null
    data: Date | null
    usuarioID: string | null
  }

  export type MensagensCountAggregateOutputType = {
    id: number
    conteudo: number
    data: number
    usuarioID: number
    _all: number
  }


  export type MensagensMinAggregateInputType = {
    id?: true
    conteudo?: true
    data?: true
    usuarioID?: true
  }

  export type MensagensMaxAggregateInputType = {
    id?: true
    conteudo?: true
    data?: true
    usuarioID?: true
  }

  export type MensagensCountAggregateInputType = {
    id?: true
    conteudo?: true
    data?: true
    usuarioID?: true
    _all?: true
  }

  export type MensagensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagens to aggregate.
     */
    where?: MensagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagens to fetch.
     */
    orderBy?: MensagensOrderByWithRelationInput | MensagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagens
    **/
    _count?: true | MensagensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagensMaxAggregateInputType
  }

  export type GetMensagensAggregateType<T extends MensagensAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagens[P]>
      : GetScalarType<T[P], AggregateMensagens[P]>
  }




  export type MensagensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagensWhereInput
    orderBy?: MensagensOrderByWithAggregationInput | MensagensOrderByWithAggregationInput[]
    by: MensagensScalarFieldEnum[] | MensagensScalarFieldEnum
    having?: MensagensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagensCountAggregateInputType | true
    _min?: MensagensMinAggregateInputType
    _max?: MensagensMaxAggregateInputType
  }

  export type MensagensGroupByOutputType = {
    id: string
    conteudo: string
    data: Date
    usuarioID: string
    _count: MensagensCountAggregateOutputType | null
    _min: MensagensMinAggregateOutputType | null
    _max: MensagensMaxAggregateOutputType | null
  }

  type GetMensagensGroupByPayload<T extends MensagensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagensGroupByOutputType[P]>
            : GetScalarType<T[P], MensagensGroupByOutputType[P]>
        }
      >
    >


  export type MensagensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    data?: boolean
    usuarioID?: boolean
    mensagemRecebida?: boolean | Mensagens$mensagemRecebidaArgs<ExtArgs>
    mensagemEnviada?: boolean | Mensagens$mensagemEnviadaArgs<ExtArgs>
    usuarioMensagens?: boolean | UsuariosDefaultArgs<ExtArgs>
    _count?: boolean | MensagensCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagens"]>

  export type MensagensSelectScalar = {
    id?: boolean
    conteudo?: boolean
    data?: boolean
    usuarioID?: boolean
  }

  export type MensagensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagemRecebida?: boolean | Mensagens$mensagemRecebidaArgs<ExtArgs>
    mensagemEnviada?: boolean | Mensagens$mensagemEnviadaArgs<ExtArgs>
    usuarioMensagens?: boolean | UsuariosDefaultArgs<ExtArgs>
    _count?: boolean | MensagensCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MensagensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagens"
    objects: {
      mensagemRecebida: Prisma.$MensagemRecebidaPayload<ExtArgs>[]
      mensagemEnviada: Prisma.$MensagemEnviadaPayload<ExtArgs>[]
      usuarioMensagens: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conteudo: string
      data: Date
      usuarioID: string
    }, ExtArgs["result"]["mensagens"]>
    composites: {}
  }


  type MensagensGetPayload<S extends boolean | null | undefined | MensagensDefaultArgs> = $Result.GetResult<Prisma.$MensagensPayload, S>

  type MensagensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MensagensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensagensCountAggregateInputType | true
    }

  export interface MensagensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagens'], meta: { name: 'Mensagens' } }
    /**
     * Find zero or one Mensagens that matches the filter.
     * @param {MensagensFindUniqueArgs} args - Arguments to find a Mensagens
     * @example
     * // Get one Mensagens
     * const mensagens = await prisma.mensagens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MensagensFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MensagensFindUniqueArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mensagens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MensagensFindUniqueOrThrowArgs} args - Arguments to find a Mensagens
     * @example
     * // Get one Mensagens
     * const mensagens = await prisma.mensagens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MensagensFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagensFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mensagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagensFindFirstArgs} args - Arguments to find a Mensagens
     * @example
     * // Get one Mensagens
     * const mensagens = await prisma.mensagens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MensagensFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagensFindFirstArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mensagens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagensFindFirstOrThrowArgs} args - Arguments to find a Mensagens
     * @example
     * // Get one Mensagens
     * const mensagens = await prisma.mensagens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MensagensFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagensFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Mensagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagens
     * const mensagens = await prisma.mensagens.findMany()
     * 
     * // Get first 10 Mensagens
     * const mensagens = await prisma.mensagens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagensWithIdOnly = await prisma.mensagens.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MensagensFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagensFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mensagens.
     * @param {MensagensCreateArgs} args - Arguments to create a Mensagens.
     * @example
     * // Create one Mensagens
     * const Mensagens = await prisma.mensagens.create({
     *   data: {
     *     // ... data to create a Mensagens
     *   }
     * })
     * 
    **/
    create<T extends MensagensCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MensagensCreateArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Mensagens.
     *     @param {MensagensCreateManyArgs} args - Arguments to create many Mensagens.
     *     @example
     *     // Create many Mensagens
     *     const mensagens = await prisma.mensagens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MensagensCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagensCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mensagens.
     * @param {MensagensDeleteArgs} args - Arguments to delete one Mensagens.
     * @example
     * // Delete one Mensagens
     * const Mensagens = await prisma.mensagens.delete({
     *   where: {
     *     // ... filter to delete one Mensagens
     *   }
     * })
     * 
    **/
    delete<T extends MensagensDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MensagensDeleteArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mensagens.
     * @param {MensagensUpdateArgs} args - Arguments to update one Mensagens.
     * @example
     * // Update one Mensagens
     * const mensagens = await prisma.mensagens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MensagensUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MensagensUpdateArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Mensagens.
     * @param {MensagensDeleteManyArgs} args - Arguments to filter Mensagens to delete.
     * @example
     * // Delete a few Mensagens
     * const { count } = await prisma.mensagens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MensagensDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagensDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagens
     * const mensagens = await prisma.mensagens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MensagensUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MensagensUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mensagens.
     * @param {MensagensUpsertArgs} args - Arguments to update or create a Mensagens.
     * @example
     * // Update or create a Mensagens
     * const mensagens = await prisma.mensagens.upsert({
     *   create: {
     *     // ... data to create a Mensagens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagens we want to update
     *   }
     * })
    **/
    upsert<T extends MensagensUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MensagensUpsertArgs<ExtArgs>>
    ): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Mensagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagensCountArgs} args - Arguments to filter Mensagens to count.
     * @example
     * // Count the number of Mensagens
     * const count = await prisma.mensagens.count({
     *   where: {
     *     // ... the filter for the Mensagens we want to count
     *   }
     * })
    **/
    count<T extends MensagensCountArgs>(
      args?: Subset<T, MensagensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagensAggregateArgs>(args: Subset<T, MensagensAggregateArgs>): Prisma.PrismaPromise<GetMensagensAggregateType<T>>

    /**
     * Group by Mensagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensagensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagensGroupByArgs['orderBy'] }
        : { orderBy?: MensagensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensagensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagens model
   */
  readonly fields: MensagensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mensagemRecebida<T extends Mensagens$mensagemRecebidaArgs<ExtArgs> = {}>(args?: Subset<T, Mensagens$mensagemRecebidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'findMany'> | Null>;

    mensagemEnviada<T extends Mensagens$mensagemEnviadaArgs<ExtArgs> = {}>(args?: Subset<T, Mensagens$mensagemEnviadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuarioMensagens<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Mensagens model
   */ 
  interface MensagensFieldRefs {
    readonly id: FieldRef<"Mensagens", 'String'>
    readonly conteudo: FieldRef<"Mensagens", 'String'>
    readonly data: FieldRef<"Mensagens", 'DateTime'>
    readonly usuarioID: FieldRef<"Mensagens", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Mensagens findUnique
   */
  export type MensagensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * Filter, which Mensagens to fetch.
     */
    where: MensagensWhereUniqueInput
  }


  /**
   * Mensagens findUniqueOrThrow
   */
  export type MensagensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * Filter, which Mensagens to fetch.
     */
    where: MensagensWhereUniqueInput
  }


  /**
   * Mensagens findFirst
   */
  export type MensagensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * Filter, which Mensagens to fetch.
     */
    where?: MensagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagens to fetch.
     */
    orderBy?: MensagensOrderByWithRelationInput | MensagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagens.
     */
    cursor?: MensagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagens.
     */
    distinct?: MensagensScalarFieldEnum | MensagensScalarFieldEnum[]
  }


  /**
   * Mensagens findFirstOrThrow
   */
  export type MensagensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * Filter, which Mensagens to fetch.
     */
    where?: MensagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagens to fetch.
     */
    orderBy?: MensagensOrderByWithRelationInput | MensagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagens.
     */
    cursor?: MensagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagens.
     */
    distinct?: MensagensScalarFieldEnum | MensagensScalarFieldEnum[]
  }


  /**
   * Mensagens findMany
   */
  export type MensagensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * Filter, which Mensagens to fetch.
     */
    where?: MensagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagens to fetch.
     */
    orderBy?: MensagensOrderByWithRelationInput | MensagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagens.
     */
    cursor?: MensagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagens.
     */
    skip?: number
    distinct?: MensagensScalarFieldEnum | MensagensScalarFieldEnum[]
  }


  /**
   * Mensagens create
   */
  export type MensagensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagens.
     */
    data: XOR<MensagensCreateInput, MensagensUncheckedCreateInput>
  }


  /**
   * Mensagens createMany
   */
  export type MensagensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagens.
     */
    data: MensagensCreateManyInput | MensagensCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Mensagens update
   */
  export type MensagensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagens.
     */
    data: XOR<MensagensUpdateInput, MensagensUncheckedUpdateInput>
    /**
     * Choose, which Mensagens to update.
     */
    where: MensagensWhereUniqueInput
  }


  /**
   * Mensagens updateMany
   */
  export type MensagensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagens.
     */
    data: XOR<MensagensUpdateManyMutationInput, MensagensUncheckedUpdateManyInput>
    /**
     * Filter which Mensagens to update
     */
    where?: MensagensWhereInput
  }


  /**
   * Mensagens upsert
   */
  export type MensagensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagens to update in case it exists.
     */
    where: MensagensWhereUniqueInput
    /**
     * In case the Mensagens found by the `where` argument doesn't exist, create a new Mensagens with this data.
     */
    create: XOR<MensagensCreateInput, MensagensUncheckedCreateInput>
    /**
     * In case the Mensagens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagensUpdateInput, MensagensUncheckedUpdateInput>
  }


  /**
   * Mensagens delete
   */
  export type MensagensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
    /**
     * Filter which Mensagens to delete.
     */
    where: MensagensWhereUniqueInput
  }


  /**
   * Mensagens deleteMany
   */
  export type MensagensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagens to delete
     */
    where?: MensagensWhereInput
  }


  /**
   * Mensagens.mensagemRecebida
   */
  export type Mensagens$mensagemRecebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    where?: MensagemRecebidaWhereInput
    orderBy?: MensagemRecebidaOrderByWithRelationInput | MensagemRecebidaOrderByWithRelationInput[]
    cursor?: MensagemRecebidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemRecebidaScalarFieldEnum | MensagemRecebidaScalarFieldEnum[]
  }


  /**
   * Mensagens.mensagemEnviada
   */
  export type Mensagens$mensagemEnviadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    where?: MensagemEnviadaWhereInput
    orderBy?: MensagemEnviadaOrderByWithRelationInput | MensagemEnviadaOrderByWithRelationInput[]
    cursor?: MensagemEnviadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemEnviadaScalarFieldEnum | MensagemEnviadaScalarFieldEnum[]
  }


  /**
   * Mensagens without action
   */
  export type MensagensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagens
     */
    select?: MensagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagensInclude<ExtArgs> | null
  }



  /**
   * Model MensagemRecebida
   */

  export type AggregateMensagemRecebida = {
    _count: MensagemRecebidaCountAggregateOutputType | null
    _min: MensagemRecebidaMinAggregateOutputType | null
    _max: MensagemRecebidaMaxAggregateOutputType | null
  }

  export type MensagemRecebidaMinAggregateOutputType = {
    id: string | null
    leitura: boolean | null
    data: Date | null
    mensagemId: string | null
    usuarioID: string | null
  }

  export type MensagemRecebidaMaxAggregateOutputType = {
    id: string | null
    leitura: boolean | null
    data: Date | null
    mensagemId: string | null
    usuarioID: string | null
  }

  export type MensagemRecebidaCountAggregateOutputType = {
    id: number
    leitura: number
    data: number
    mensagemId: number
    usuarioID: number
    _all: number
  }


  export type MensagemRecebidaMinAggregateInputType = {
    id?: true
    leitura?: true
    data?: true
    mensagemId?: true
    usuarioID?: true
  }

  export type MensagemRecebidaMaxAggregateInputType = {
    id?: true
    leitura?: true
    data?: true
    mensagemId?: true
    usuarioID?: true
  }

  export type MensagemRecebidaCountAggregateInputType = {
    id?: true
    leitura?: true
    data?: true
    mensagemId?: true
    usuarioID?: true
    _all?: true
  }

  export type MensagemRecebidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemRecebida to aggregate.
     */
    where?: MensagemRecebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemRecebidas to fetch.
     */
    orderBy?: MensagemRecebidaOrderByWithRelationInput | MensagemRecebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemRecebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemRecebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemRecebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MensagemRecebidas
    **/
    _count?: true | MensagemRecebidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemRecebidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemRecebidaMaxAggregateInputType
  }

  export type GetMensagemRecebidaAggregateType<T extends MensagemRecebidaAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagemRecebida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagemRecebida[P]>
      : GetScalarType<T[P], AggregateMensagemRecebida[P]>
  }




  export type MensagemRecebidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemRecebidaWhereInput
    orderBy?: MensagemRecebidaOrderByWithAggregationInput | MensagemRecebidaOrderByWithAggregationInput[]
    by: MensagemRecebidaScalarFieldEnum[] | MensagemRecebidaScalarFieldEnum
    having?: MensagemRecebidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemRecebidaCountAggregateInputType | true
    _min?: MensagemRecebidaMinAggregateInputType
    _max?: MensagemRecebidaMaxAggregateInputType
  }

  export type MensagemRecebidaGroupByOutputType = {
    id: string
    leitura: boolean
    data: Date
    mensagemId: string
    usuarioID: string
    _count: MensagemRecebidaCountAggregateOutputType | null
    _min: MensagemRecebidaMinAggregateOutputType | null
    _max: MensagemRecebidaMaxAggregateOutputType | null
  }

  type GetMensagemRecebidaGroupByPayload<T extends MensagemRecebidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemRecebidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemRecebidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemRecebidaGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemRecebidaGroupByOutputType[P]>
        }
      >
    >


  export type MensagemRecebidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leitura?: boolean
    data?: boolean
    mensagemId?: boolean
    usuarioID?: boolean
    mensagemRecebida?: boolean | MensagensDefaultArgs<ExtArgs>
    usuarioSMSrecebida?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagemRecebida"]>

  export type MensagemRecebidaSelectScalar = {
    id?: boolean
    leitura?: boolean
    data?: boolean
    mensagemId?: boolean
    usuarioID?: boolean
  }

  export type MensagemRecebidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagemRecebida?: boolean | MensagensDefaultArgs<ExtArgs>
    usuarioSMSrecebida?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $MensagemRecebidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MensagemRecebida"
    objects: {
      mensagemRecebida: Prisma.$MensagensPayload<ExtArgs>
      usuarioSMSrecebida: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leitura: boolean
      data: Date
      mensagemId: string
      usuarioID: string
    }, ExtArgs["result"]["mensagemRecebida"]>
    composites: {}
  }


  type MensagemRecebidaGetPayload<S extends boolean | null | undefined | MensagemRecebidaDefaultArgs> = $Result.GetResult<Prisma.$MensagemRecebidaPayload, S>

  type MensagemRecebidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MensagemRecebidaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensagemRecebidaCountAggregateInputType | true
    }

  export interface MensagemRecebidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MensagemRecebida'], meta: { name: 'MensagemRecebida' } }
    /**
     * Find zero or one MensagemRecebida that matches the filter.
     * @param {MensagemRecebidaFindUniqueArgs} args - Arguments to find a MensagemRecebida
     * @example
     * // Get one MensagemRecebida
     * const mensagemRecebida = await prisma.mensagemRecebida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MensagemRecebidaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemRecebidaFindUniqueArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MensagemRecebida that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MensagemRecebidaFindUniqueOrThrowArgs} args - Arguments to find a MensagemRecebida
     * @example
     * // Get one MensagemRecebida
     * const mensagemRecebida = await prisma.mensagemRecebida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MensagemRecebidaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemRecebidaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MensagemRecebida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemRecebidaFindFirstArgs} args - Arguments to find a MensagemRecebida
     * @example
     * // Get one MensagemRecebida
     * const mensagemRecebida = await prisma.mensagemRecebida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MensagemRecebidaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemRecebidaFindFirstArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MensagemRecebida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemRecebidaFindFirstOrThrowArgs} args - Arguments to find a MensagemRecebida
     * @example
     * // Get one MensagemRecebida
     * const mensagemRecebida = await prisma.mensagemRecebida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MensagemRecebidaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemRecebidaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MensagemRecebidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemRecebidaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MensagemRecebidas
     * const mensagemRecebidas = await prisma.mensagemRecebida.findMany()
     * 
     * // Get first 10 MensagemRecebidas
     * const mensagemRecebidas = await prisma.mensagemRecebida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemRecebidaWithIdOnly = await prisma.mensagemRecebida.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MensagemRecebidaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemRecebidaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MensagemRecebida.
     * @param {MensagemRecebidaCreateArgs} args - Arguments to create a MensagemRecebida.
     * @example
     * // Create one MensagemRecebida
     * const MensagemRecebida = await prisma.mensagemRecebida.create({
     *   data: {
     *     // ... data to create a MensagemRecebida
     *   }
     * })
     * 
    **/
    create<T extends MensagemRecebidaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemRecebidaCreateArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MensagemRecebidas.
     *     @param {MensagemRecebidaCreateManyArgs} args - Arguments to create many MensagemRecebidas.
     *     @example
     *     // Create many MensagemRecebidas
     *     const mensagemRecebida = await prisma.mensagemRecebida.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MensagemRecebidaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemRecebidaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MensagemRecebida.
     * @param {MensagemRecebidaDeleteArgs} args - Arguments to delete one MensagemRecebida.
     * @example
     * // Delete one MensagemRecebida
     * const MensagemRecebida = await prisma.mensagemRecebida.delete({
     *   where: {
     *     // ... filter to delete one MensagemRecebida
     *   }
     * })
     * 
    **/
    delete<T extends MensagemRecebidaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemRecebidaDeleteArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MensagemRecebida.
     * @param {MensagemRecebidaUpdateArgs} args - Arguments to update one MensagemRecebida.
     * @example
     * // Update one MensagemRecebida
     * const mensagemRecebida = await prisma.mensagemRecebida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MensagemRecebidaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemRecebidaUpdateArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MensagemRecebidas.
     * @param {MensagemRecebidaDeleteManyArgs} args - Arguments to filter MensagemRecebidas to delete.
     * @example
     * // Delete a few MensagemRecebidas
     * const { count } = await prisma.mensagemRecebida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MensagemRecebidaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemRecebidaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensagemRecebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemRecebidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MensagemRecebidas
     * const mensagemRecebida = await prisma.mensagemRecebida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MensagemRecebidaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemRecebidaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MensagemRecebida.
     * @param {MensagemRecebidaUpsertArgs} args - Arguments to update or create a MensagemRecebida.
     * @example
     * // Update or create a MensagemRecebida
     * const mensagemRecebida = await prisma.mensagemRecebida.upsert({
     *   create: {
     *     // ... data to create a MensagemRecebida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MensagemRecebida we want to update
     *   }
     * })
    **/
    upsert<T extends MensagemRecebidaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemRecebidaUpsertArgs<ExtArgs>>
    ): Prisma__MensagemRecebidaClient<$Result.GetResult<Prisma.$MensagemRecebidaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MensagemRecebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemRecebidaCountArgs} args - Arguments to filter MensagemRecebidas to count.
     * @example
     * // Count the number of MensagemRecebidas
     * const count = await prisma.mensagemRecebida.count({
     *   where: {
     *     // ... the filter for the MensagemRecebidas we want to count
     *   }
     * })
    **/
    count<T extends MensagemRecebidaCountArgs>(
      args?: Subset<T, MensagemRecebidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemRecebidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MensagemRecebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemRecebidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagemRecebidaAggregateArgs>(args: Subset<T, MensagemRecebidaAggregateArgs>): Prisma.PrismaPromise<GetMensagemRecebidaAggregateType<T>>

    /**
     * Group by MensagemRecebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemRecebidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensagemRecebidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemRecebidaGroupByArgs['orderBy'] }
        : { orderBy?: MensagemRecebidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensagemRecebidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemRecebidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MensagemRecebida model
   */
  readonly fields: MensagemRecebidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MensagemRecebida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemRecebidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mensagemRecebida<T extends MensagensDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MensagensDefaultArgs<ExtArgs>>): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    usuarioSMSrecebida<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MensagemRecebida model
   */ 
  interface MensagemRecebidaFieldRefs {
    readonly id: FieldRef<"MensagemRecebida", 'String'>
    readonly leitura: FieldRef<"MensagemRecebida", 'Boolean'>
    readonly data: FieldRef<"MensagemRecebida", 'DateTime'>
    readonly mensagemId: FieldRef<"MensagemRecebida", 'String'>
    readonly usuarioID: FieldRef<"MensagemRecebida", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MensagemRecebida findUnique
   */
  export type MensagemRecebidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemRecebida to fetch.
     */
    where: MensagemRecebidaWhereUniqueInput
  }


  /**
   * MensagemRecebida findUniqueOrThrow
   */
  export type MensagemRecebidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemRecebida to fetch.
     */
    where: MensagemRecebidaWhereUniqueInput
  }


  /**
   * MensagemRecebida findFirst
   */
  export type MensagemRecebidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemRecebida to fetch.
     */
    where?: MensagemRecebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemRecebidas to fetch.
     */
    orderBy?: MensagemRecebidaOrderByWithRelationInput | MensagemRecebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemRecebidas.
     */
    cursor?: MensagemRecebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemRecebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemRecebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemRecebidas.
     */
    distinct?: MensagemRecebidaScalarFieldEnum | MensagemRecebidaScalarFieldEnum[]
  }


  /**
   * MensagemRecebida findFirstOrThrow
   */
  export type MensagemRecebidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemRecebida to fetch.
     */
    where?: MensagemRecebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemRecebidas to fetch.
     */
    orderBy?: MensagemRecebidaOrderByWithRelationInput | MensagemRecebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemRecebidas.
     */
    cursor?: MensagemRecebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemRecebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemRecebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemRecebidas.
     */
    distinct?: MensagemRecebidaScalarFieldEnum | MensagemRecebidaScalarFieldEnum[]
  }


  /**
   * MensagemRecebida findMany
   */
  export type MensagemRecebidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemRecebidas to fetch.
     */
    where?: MensagemRecebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemRecebidas to fetch.
     */
    orderBy?: MensagemRecebidaOrderByWithRelationInput | MensagemRecebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MensagemRecebidas.
     */
    cursor?: MensagemRecebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemRecebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemRecebidas.
     */
    skip?: number
    distinct?: MensagemRecebidaScalarFieldEnum | MensagemRecebidaScalarFieldEnum[]
  }


  /**
   * MensagemRecebida create
   */
  export type MensagemRecebidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * The data needed to create a MensagemRecebida.
     */
    data: XOR<MensagemRecebidaCreateInput, MensagemRecebidaUncheckedCreateInput>
  }


  /**
   * MensagemRecebida createMany
   */
  export type MensagemRecebidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MensagemRecebidas.
     */
    data: MensagemRecebidaCreateManyInput | MensagemRecebidaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MensagemRecebida update
   */
  export type MensagemRecebidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * The data needed to update a MensagemRecebida.
     */
    data: XOR<MensagemRecebidaUpdateInput, MensagemRecebidaUncheckedUpdateInput>
    /**
     * Choose, which MensagemRecebida to update.
     */
    where: MensagemRecebidaWhereUniqueInput
  }


  /**
   * MensagemRecebida updateMany
   */
  export type MensagemRecebidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MensagemRecebidas.
     */
    data: XOR<MensagemRecebidaUpdateManyMutationInput, MensagemRecebidaUncheckedUpdateManyInput>
    /**
     * Filter which MensagemRecebidas to update
     */
    where?: MensagemRecebidaWhereInput
  }


  /**
   * MensagemRecebida upsert
   */
  export type MensagemRecebidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * The filter to search for the MensagemRecebida to update in case it exists.
     */
    where: MensagemRecebidaWhereUniqueInput
    /**
     * In case the MensagemRecebida found by the `where` argument doesn't exist, create a new MensagemRecebida with this data.
     */
    create: XOR<MensagemRecebidaCreateInput, MensagemRecebidaUncheckedCreateInput>
    /**
     * In case the MensagemRecebida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemRecebidaUpdateInput, MensagemRecebidaUncheckedUpdateInput>
  }


  /**
   * MensagemRecebida delete
   */
  export type MensagemRecebidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
    /**
     * Filter which MensagemRecebida to delete.
     */
    where: MensagemRecebidaWhereUniqueInput
  }


  /**
   * MensagemRecebida deleteMany
   */
  export type MensagemRecebidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemRecebidas to delete
     */
    where?: MensagemRecebidaWhereInput
  }


  /**
   * MensagemRecebida without action
   */
  export type MensagemRecebidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemRecebida
     */
    select?: MensagemRecebidaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemRecebidaInclude<ExtArgs> | null
  }



  /**
   * Model MensagemEnviada
   */

  export type AggregateMensagemEnviada = {
    _count: MensagemEnviadaCountAggregateOutputType | null
    _min: MensagemEnviadaMinAggregateOutputType | null
    _max: MensagemEnviadaMaxAggregateOutputType | null
  }

  export type MensagemEnviadaMinAggregateOutputType = {
    id: string | null
    mensagemId: string | null
    usuarioID: string | null
  }

  export type MensagemEnviadaMaxAggregateOutputType = {
    id: string | null
    mensagemId: string | null
    usuarioID: string | null
  }

  export type MensagemEnviadaCountAggregateOutputType = {
    id: number
    mensagemId: number
    usuarioID: number
    _all: number
  }


  export type MensagemEnviadaMinAggregateInputType = {
    id?: true
    mensagemId?: true
    usuarioID?: true
  }

  export type MensagemEnviadaMaxAggregateInputType = {
    id?: true
    mensagemId?: true
    usuarioID?: true
  }

  export type MensagemEnviadaCountAggregateInputType = {
    id?: true
    mensagemId?: true
    usuarioID?: true
    _all?: true
  }

  export type MensagemEnviadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemEnviada to aggregate.
     */
    where?: MensagemEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemEnviadas to fetch.
     */
    orderBy?: MensagemEnviadaOrderByWithRelationInput | MensagemEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemEnviadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MensagemEnviadas
    **/
    _count?: true | MensagemEnviadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemEnviadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemEnviadaMaxAggregateInputType
  }

  export type GetMensagemEnviadaAggregateType<T extends MensagemEnviadaAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagemEnviada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagemEnviada[P]>
      : GetScalarType<T[P], AggregateMensagemEnviada[P]>
  }




  export type MensagemEnviadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemEnviadaWhereInput
    orderBy?: MensagemEnviadaOrderByWithAggregationInput | MensagemEnviadaOrderByWithAggregationInput[]
    by: MensagemEnviadaScalarFieldEnum[] | MensagemEnviadaScalarFieldEnum
    having?: MensagemEnviadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemEnviadaCountAggregateInputType | true
    _min?: MensagemEnviadaMinAggregateInputType
    _max?: MensagemEnviadaMaxAggregateInputType
  }

  export type MensagemEnviadaGroupByOutputType = {
    id: string
    mensagemId: string
    usuarioID: string
    _count: MensagemEnviadaCountAggregateOutputType | null
    _min: MensagemEnviadaMinAggregateOutputType | null
    _max: MensagemEnviadaMaxAggregateOutputType | null
  }

  type GetMensagemEnviadaGroupByPayload<T extends MensagemEnviadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemEnviadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemEnviadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemEnviadaGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemEnviadaGroupByOutputType[P]>
        }
      >
    >


  export type MensagemEnviadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagemId?: boolean
    usuarioID?: boolean
    mensagemEnviada?: boolean | MensagensDefaultArgs<ExtArgs>
    usuarioSMSenviada?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagemEnviada"]>

  export type MensagemEnviadaSelectScalar = {
    id?: boolean
    mensagemId?: boolean
    usuarioID?: boolean
  }

  export type MensagemEnviadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagemEnviada?: boolean | MensagensDefaultArgs<ExtArgs>
    usuarioSMSenviada?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $MensagemEnviadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MensagemEnviada"
    objects: {
      mensagemEnviada: Prisma.$MensagensPayload<ExtArgs>
      usuarioSMSenviada: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mensagemId: string
      usuarioID: string
    }, ExtArgs["result"]["mensagemEnviada"]>
    composites: {}
  }


  type MensagemEnviadaGetPayload<S extends boolean | null | undefined | MensagemEnviadaDefaultArgs> = $Result.GetResult<Prisma.$MensagemEnviadaPayload, S>

  type MensagemEnviadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MensagemEnviadaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensagemEnviadaCountAggregateInputType | true
    }

  export interface MensagemEnviadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MensagemEnviada'], meta: { name: 'MensagemEnviada' } }
    /**
     * Find zero or one MensagemEnviada that matches the filter.
     * @param {MensagemEnviadaFindUniqueArgs} args - Arguments to find a MensagemEnviada
     * @example
     * // Get one MensagemEnviada
     * const mensagemEnviada = await prisma.mensagemEnviada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MensagemEnviadaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemEnviadaFindUniqueArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MensagemEnviada that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MensagemEnviadaFindUniqueOrThrowArgs} args - Arguments to find a MensagemEnviada
     * @example
     * // Get one MensagemEnviada
     * const mensagemEnviada = await prisma.mensagemEnviada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MensagemEnviadaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemEnviadaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MensagemEnviada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemEnviadaFindFirstArgs} args - Arguments to find a MensagemEnviada
     * @example
     * // Get one MensagemEnviada
     * const mensagemEnviada = await prisma.mensagemEnviada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MensagemEnviadaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemEnviadaFindFirstArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MensagemEnviada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemEnviadaFindFirstOrThrowArgs} args - Arguments to find a MensagemEnviada
     * @example
     * // Get one MensagemEnviada
     * const mensagemEnviada = await prisma.mensagemEnviada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MensagemEnviadaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemEnviadaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MensagemEnviadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemEnviadaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MensagemEnviadas
     * const mensagemEnviadas = await prisma.mensagemEnviada.findMany()
     * 
     * // Get first 10 MensagemEnviadas
     * const mensagemEnviadas = await prisma.mensagemEnviada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemEnviadaWithIdOnly = await prisma.mensagemEnviada.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MensagemEnviadaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemEnviadaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MensagemEnviada.
     * @param {MensagemEnviadaCreateArgs} args - Arguments to create a MensagemEnviada.
     * @example
     * // Create one MensagemEnviada
     * const MensagemEnviada = await prisma.mensagemEnviada.create({
     *   data: {
     *     // ... data to create a MensagemEnviada
     *   }
     * })
     * 
    **/
    create<T extends MensagemEnviadaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemEnviadaCreateArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MensagemEnviadas.
     *     @param {MensagemEnviadaCreateManyArgs} args - Arguments to create many MensagemEnviadas.
     *     @example
     *     // Create many MensagemEnviadas
     *     const mensagemEnviada = await prisma.mensagemEnviada.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MensagemEnviadaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemEnviadaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MensagemEnviada.
     * @param {MensagemEnviadaDeleteArgs} args - Arguments to delete one MensagemEnviada.
     * @example
     * // Delete one MensagemEnviada
     * const MensagemEnviada = await prisma.mensagemEnviada.delete({
     *   where: {
     *     // ... filter to delete one MensagemEnviada
     *   }
     * })
     * 
    **/
    delete<T extends MensagemEnviadaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemEnviadaDeleteArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MensagemEnviada.
     * @param {MensagemEnviadaUpdateArgs} args - Arguments to update one MensagemEnviada.
     * @example
     * // Update one MensagemEnviada
     * const mensagemEnviada = await prisma.mensagemEnviada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MensagemEnviadaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemEnviadaUpdateArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MensagemEnviadas.
     * @param {MensagemEnviadaDeleteManyArgs} args - Arguments to filter MensagemEnviadas to delete.
     * @example
     * // Delete a few MensagemEnviadas
     * const { count } = await prisma.mensagemEnviada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MensagemEnviadaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensagemEnviadaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensagemEnviadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemEnviadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MensagemEnviadas
     * const mensagemEnviada = await prisma.mensagemEnviada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MensagemEnviadaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemEnviadaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MensagemEnviada.
     * @param {MensagemEnviadaUpsertArgs} args - Arguments to update or create a MensagemEnviada.
     * @example
     * // Update or create a MensagemEnviada
     * const mensagemEnviada = await prisma.mensagemEnviada.upsert({
     *   create: {
     *     // ... data to create a MensagemEnviada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MensagemEnviada we want to update
     *   }
     * })
    **/
    upsert<T extends MensagemEnviadaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MensagemEnviadaUpsertArgs<ExtArgs>>
    ): Prisma__MensagemEnviadaClient<$Result.GetResult<Prisma.$MensagemEnviadaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MensagemEnviadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemEnviadaCountArgs} args - Arguments to filter MensagemEnviadas to count.
     * @example
     * // Count the number of MensagemEnviadas
     * const count = await prisma.mensagemEnviada.count({
     *   where: {
     *     // ... the filter for the MensagemEnviadas we want to count
     *   }
     * })
    **/
    count<T extends MensagemEnviadaCountArgs>(
      args?: Subset<T, MensagemEnviadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemEnviadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MensagemEnviada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemEnviadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagemEnviadaAggregateArgs>(args: Subset<T, MensagemEnviadaAggregateArgs>): Prisma.PrismaPromise<GetMensagemEnviadaAggregateType<T>>

    /**
     * Group by MensagemEnviada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemEnviadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensagemEnviadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemEnviadaGroupByArgs['orderBy'] }
        : { orderBy?: MensagemEnviadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensagemEnviadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemEnviadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MensagemEnviada model
   */
  readonly fields: MensagemEnviadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MensagemEnviada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemEnviadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mensagemEnviada<T extends MensagensDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MensagensDefaultArgs<ExtArgs>>): Prisma__MensagensClient<$Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    usuarioSMSenviada<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MensagemEnviada model
   */ 
  interface MensagemEnviadaFieldRefs {
    readonly id: FieldRef<"MensagemEnviada", 'String'>
    readonly mensagemId: FieldRef<"MensagemEnviada", 'String'>
    readonly usuarioID: FieldRef<"MensagemEnviada", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MensagemEnviada findUnique
   */
  export type MensagemEnviadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemEnviada to fetch.
     */
    where: MensagemEnviadaWhereUniqueInput
  }


  /**
   * MensagemEnviada findUniqueOrThrow
   */
  export type MensagemEnviadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemEnviada to fetch.
     */
    where: MensagemEnviadaWhereUniqueInput
  }


  /**
   * MensagemEnviada findFirst
   */
  export type MensagemEnviadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemEnviada to fetch.
     */
    where?: MensagemEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemEnviadas to fetch.
     */
    orderBy?: MensagemEnviadaOrderByWithRelationInput | MensagemEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemEnviadas.
     */
    cursor?: MensagemEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemEnviadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemEnviadas.
     */
    distinct?: MensagemEnviadaScalarFieldEnum | MensagemEnviadaScalarFieldEnum[]
  }


  /**
   * MensagemEnviada findFirstOrThrow
   */
  export type MensagemEnviadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemEnviada to fetch.
     */
    where?: MensagemEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemEnviadas to fetch.
     */
    orderBy?: MensagemEnviadaOrderByWithRelationInput | MensagemEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemEnviadas.
     */
    cursor?: MensagemEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemEnviadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemEnviadas.
     */
    distinct?: MensagemEnviadaScalarFieldEnum | MensagemEnviadaScalarFieldEnum[]
  }


  /**
   * MensagemEnviada findMany
   */
  export type MensagemEnviadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which MensagemEnviadas to fetch.
     */
    where?: MensagemEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemEnviadas to fetch.
     */
    orderBy?: MensagemEnviadaOrderByWithRelationInput | MensagemEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MensagemEnviadas.
     */
    cursor?: MensagemEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemEnviadas.
     */
    skip?: number
    distinct?: MensagemEnviadaScalarFieldEnum | MensagemEnviadaScalarFieldEnum[]
  }


  /**
   * MensagemEnviada create
   */
  export type MensagemEnviadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * The data needed to create a MensagemEnviada.
     */
    data: XOR<MensagemEnviadaCreateInput, MensagemEnviadaUncheckedCreateInput>
  }


  /**
   * MensagemEnviada createMany
   */
  export type MensagemEnviadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MensagemEnviadas.
     */
    data: MensagemEnviadaCreateManyInput | MensagemEnviadaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MensagemEnviada update
   */
  export type MensagemEnviadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * The data needed to update a MensagemEnviada.
     */
    data: XOR<MensagemEnviadaUpdateInput, MensagemEnviadaUncheckedUpdateInput>
    /**
     * Choose, which MensagemEnviada to update.
     */
    where: MensagemEnviadaWhereUniqueInput
  }


  /**
   * MensagemEnviada updateMany
   */
  export type MensagemEnviadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MensagemEnviadas.
     */
    data: XOR<MensagemEnviadaUpdateManyMutationInput, MensagemEnviadaUncheckedUpdateManyInput>
    /**
     * Filter which MensagemEnviadas to update
     */
    where?: MensagemEnviadaWhereInput
  }


  /**
   * MensagemEnviada upsert
   */
  export type MensagemEnviadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * The filter to search for the MensagemEnviada to update in case it exists.
     */
    where: MensagemEnviadaWhereUniqueInput
    /**
     * In case the MensagemEnviada found by the `where` argument doesn't exist, create a new MensagemEnviada with this data.
     */
    create: XOR<MensagemEnviadaCreateInput, MensagemEnviadaUncheckedCreateInput>
    /**
     * In case the MensagemEnviada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemEnviadaUpdateInput, MensagemEnviadaUncheckedUpdateInput>
  }


  /**
   * MensagemEnviada delete
   */
  export type MensagemEnviadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
    /**
     * Filter which MensagemEnviada to delete.
     */
    where: MensagemEnviadaWhereUniqueInput
  }


  /**
   * MensagemEnviada deleteMany
   */
  export type MensagemEnviadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemEnviadas to delete
     */
    where?: MensagemEnviadaWhereInput
  }


  /**
   * MensagemEnviada without action
   */
  export type MensagemEnviadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemEnviada
     */
    select?: MensagemEnviadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MensagemEnviadaInclude<ExtArgs> | null
  }



  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensMinAggregateOutputType = {
    id: string | null
    token: string | null
  }

  export type TokensMaxAggregateOutputType = {
    id: string | null
    token: string | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    token: number
    _all: number
  }


  export type TokensMinAggregateInputType = {
    id?: true
    token?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    token?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    token?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: string
    token: string
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    id?: boolean
    token?: boolean
  }


  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }


  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokensFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tokens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokensFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TokensFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
    **/
    create<T extends TokensCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TokensCreateArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tokens.
     *     @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const tokens = await prisma.tokens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokensCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
    **/
    delete<T extends TokensDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokensUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokensDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokensUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
    **/
    upsert<T extends TokensUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>
    ): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tokens model
   */ 
  interface TokensFieldRefs {
    readonly id: FieldRef<"Tokens", 'String'>
    readonly token: FieldRef<"Tokens", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }


  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }


  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }


  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }


  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }


  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }


  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }


  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
  }


  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }


  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }


  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
  }


  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
  }



  /**
   * Model UserLogged
   */

  export type AggregateUserLogged = {
    _count: UserLoggedCountAggregateOutputType | null
    _min: UserLoggedMinAggregateOutputType | null
    _max: UserLoggedMaxAggregateOutputType | null
  }

  export type UserLoggedMinAggregateOutputType = {
    id: string | null
    UserID: string | null
  }

  export type UserLoggedMaxAggregateOutputType = {
    id: string | null
    UserID: string | null
  }

  export type UserLoggedCountAggregateOutputType = {
    id: number
    UserID: number
    _all: number
  }


  export type UserLoggedMinAggregateInputType = {
    id?: true
    UserID?: true
  }

  export type UserLoggedMaxAggregateInputType = {
    id?: true
    UserID?: true
  }

  export type UserLoggedCountAggregateInputType = {
    id?: true
    UserID?: true
    _all?: true
  }

  export type UserLoggedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogged to aggregate.
     */
    where?: UserLoggedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoggeds to fetch.
     */
    orderBy?: UserLoggedOrderByWithRelationInput | UserLoggedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLoggedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoggeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoggeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLoggeds
    **/
    _count?: true | UserLoggedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLoggedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLoggedMaxAggregateInputType
  }

  export type GetUserLoggedAggregateType<T extends UserLoggedAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLogged]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLogged[P]>
      : GetScalarType<T[P], AggregateUserLogged[P]>
  }




  export type UserLoggedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLoggedWhereInput
    orderBy?: UserLoggedOrderByWithAggregationInput | UserLoggedOrderByWithAggregationInput[]
    by: UserLoggedScalarFieldEnum[] | UserLoggedScalarFieldEnum
    having?: UserLoggedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLoggedCountAggregateInputType | true
    _min?: UserLoggedMinAggregateInputType
    _max?: UserLoggedMaxAggregateInputType
  }

  export type UserLoggedGroupByOutputType = {
    id: string
    UserID: string
    _count: UserLoggedCountAggregateOutputType | null
    _min: UserLoggedMinAggregateOutputType | null
    _max: UserLoggedMaxAggregateOutputType | null
  }

  type GetUserLoggedGroupByPayload<T extends UserLoggedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLoggedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLoggedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLoggedGroupByOutputType[P]>
            : GetScalarType<T[P], UserLoggedGroupByOutputType[P]>
        }
      >
    >


  export type UserLoggedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserID?: boolean
    user?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLogged"]>

  export type UserLoggedSelectScalar = {
    id?: boolean
    UserID?: boolean
  }

  export type UserLoggedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $UserLoggedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLogged"
    objects: {
      user: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      UserID: string
    }, ExtArgs["result"]["userLogged"]>
    composites: {}
  }


  type UserLoggedGetPayload<S extends boolean | null | undefined | UserLoggedDefaultArgs> = $Result.GetResult<Prisma.$UserLoggedPayload, S>

  type UserLoggedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLoggedFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLoggedCountAggregateInputType | true
    }

  export interface UserLoggedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLogged'], meta: { name: 'UserLogged' } }
    /**
     * Find zero or one UserLogged that matches the filter.
     * @param {UserLoggedFindUniqueArgs} args - Arguments to find a UserLogged
     * @example
     * // Get one UserLogged
     * const userLogged = await prisma.userLogged.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserLoggedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoggedFindUniqueArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserLogged that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserLoggedFindUniqueOrThrowArgs} args - Arguments to find a UserLogged
     * @example
     * // Get one UserLogged
     * const userLogged = await prisma.userLogged.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserLoggedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoggedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserLogged that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoggedFindFirstArgs} args - Arguments to find a UserLogged
     * @example
     * // Get one UserLogged
     * const userLogged = await prisma.userLogged.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserLoggedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoggedFindFirstArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserLogged that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoggedFindFirstOrThrowArgs} args - Arguments to find a UserLogged
     * @example
     * // Get one UserLogged
     * const userLogged = await prisma.userLogged.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserLoggedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoggedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserLoggeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoggedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLoggeds
     * const userLoggeds = await prisma.userLogged.findMany()
     * 
     * // Get first 10 UserLoggeds
     * const userLoggeds = await prisma.userLogged.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLoggedWithIdOnly = await prisma.userLogged.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserLoggedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoggedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserLogged.
     * @param {UserLoggedCreateArgs} args - Arguments to create a UserLogged.
     * @example
     * // Create one UserLogged
     * const UserLogged = await prisma.userLogged.create({
     *   data: {
     *     // ... data to create a UserLogged
     *   }
     * })
     * 
    **/
    create<T extends UserLoggedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoggedCreateArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserLoggeds.
     *     @param {UserLoggedCreateManyArgs} args - Arguments to create many UserLoggeds.
     *     @example
     *     // Create many UserLoggeds
     *     const userLogged = await prisma.userLogged.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserLoggedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoggedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLogged.
     * @param {UserLoggedDeleteArgs} args - Arguments to delete one UserLogged.
     * @example
     * // Delete one UserLogged
     * const UserLogged = await prisma.userLogged.delete({
     *   where: {
     *     // ... filter to delete one UserLogged
     *   }
     * })
     * 
    **/
    delete<T extends UserLoggedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoggedDeleteArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserLogged.
     * @param {UserLoggedUpdateArgs} args - Arguments to update one UserLogged.
     * @example
     * // Update one UserLogged
     * const userLogged = await prisma.userLogged.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserLoggedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoggedUpdateArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserLoggeds.
     * @param {UserLoggedDeleteManyArgs} args - Arguments to filter UserLoggeds to delete.
     * @example
     * // Delete a few UserLoggeds
     * const { count } = await prisma.userLogged.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserLoggedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoggedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLoggeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoggedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLoggeds
     * const userLogged = await prisma.userLogged.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserLoggedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoggedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLogged.
     * @param {UserLoggedUpsertArgs} args - Arguments to update or create a UserLogged.
     * @example
     * // Update or create a UserLogged
     * const userLogged = await prisma.userLogged.upsert({
     *   create: {
     *     // ... data to create a UserLogged
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLogged we want to update
     *   }
     * })
    **/
    upsert<T extends UserLoggedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoggedUpsertArgs<ExtArgs>>
    ): Prisma__UserLoggedClient<$Result.GetResult<Prisma.$UserLoggedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserLoggeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoggedCountArgs} args - Arguments to filter UserLoggeds to count.
     * @example
     * // Count the number of UserLoggeds
     * const count = await prisma.userLogged.count({
     *   where: {
     *     // ... the filter for the UserLoggeds we want to count
     *   }
     * })
    **/
    count<T extends UserLoggedCountArgs>(
      args?: Subset<T, UserLoggedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLoggedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLogged.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoggedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLoggedAggregateArgs>(args: Subset<T, UserLoggedAggregateArgs>): Prisma.PrismaPromise<GetUserLoggedAggregateType<T>>

    /**
     * Group by UserLogged.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoggedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLoggedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLoggedGroupByArgs['orderBy'] }
        : { orderBy?: UserLoggedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLoggedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLoggedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLogged model
   */
  readonly fields: UserLoggedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLogged.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLoggedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserLogged model
   */ 
  interface UserLoggedFieldRefs {
    readonly id: FieldRef<"UserLogged", 'String'>
    readonly UserID: FieldRef<"UserLogged", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserLogged findUnique
   */
  export type UserLoggedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * Filter, which UserLogged to fetch.
     */
    where: UserLoggedWhereUniqueInput
  }


  /**
   * UserLogged findUniqueOrThrow
   */
  export type UserLoggedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * Filter, which UserLogged to fetch.
     */
    where: UserLoggedWhereUniqueInput
  }


  /**
   * UserLogged findFirst
   */
  export type UserLoggedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * Filter, which UserLogged to fetch.
     */
    where?: UserLoggedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoggeds to fetch.
     */
    orderBy?: UserLoggedOrderByWithRelationInput | UserLoggedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLoggeds.
     */
    cursor?: UserLoggedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoggeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoggeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLoggeds.
     */
    distinct?: UserLoggedScalarFieldEnum | UserLoggedScalarFieldEnum[]
  }


  /**
   * UserLogged findFirstOrThrow
   */
  export type UserLoggedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * Filter, which UserLogged to fetch.
     */
    where?: UserLoggedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoggeds to fetch.
     */
    orderBy?: UserLoggedOrderByWithRelationInput | UserLoggedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLoggeds.
     */
    cursor?: UserLoggedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoggeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoggeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLoggeds.
     */
    distinct?: UserLoggedScalarFieldEnum | UserLoggedScalarFieldEnum[]
  }


  /**
   * UserLogged findMany
   */
  export type UserLoggedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * Filter, which UserLoggeds to fetch.
     */
    where?: UserLoggedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoggeds to fetch.
     */
    orderBy?: UserLoggedOrderByWithRelationInput | UserLoggedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLoggeds.
     */
    cursor?: UserLoggedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoggeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoggeds.
     */
    skip?: number
    distinct?: UserLoggedScalarFieldEnum | UserLoggedScalarFieldEnum[]
  }


  /**
   * UserLogged create
   */
  export type UserLoggedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLogged.
     */
    data: XOR<UserLoggedCreateInput, UserLoggedUncheckedCreateInput>
  }


  /**
   * UserLogged createMany
   */
  export type UserLoggedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLoggeds.
     */
    data: UserLoggedCreateManyInput | UserLoggedCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserLogged update
   */
  export type UserLoggedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLogged.
     */
    data: XOR<UserLoggedUpdateInput, UserLoggedUncheckedUpdateInput>
    /**
     * Choose, which UserLogged to update.
     */
    where: UserLoggedWhereUniqueInput
  }


  /**
   * UserLogged updateMany
   */
  export type UserLoggedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLoggeds.
     */
    data: XOR<UserLoggedUpdateManyMutationInput, UserLoggedUncheckedUpdateManyInput>
    /**
     * Filter which UserLoggeds to update
     */
    where?: UserLoggedWhereInput
  }


  /**
   * UserLogged upsert
   */
  export type UserLoggedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLogged to update in case it exists.
     */
    where: UserLoggedWhereUniqueInput
    /**
     * In case the UserLogged found by the `where` argument doesn't exist, create a new UserLogged with this data.
     */
    create: XOR<UserLoggedCreateInput, UserLoggedUncheckedCreateInput>
    /**
     * In case the UserLogged was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLoggedUpdateInput, UserLoggedUncheckedUpdateInput>
  }


  /**
   * UserLogged delete
   */
  export type UserLoggedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
    /**
     * Filter which UserLogged to delete.
     */
    where: UserLoggedWhereUniqueInput
  }


  /**
   * UserLogged deleteMany
   */
  export type UserLoggedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLoggeds to delete
     */
    where?: UserLoggedWhereInput
  }


  /**
   * UserLogged without action
   */
  export type UserLoggedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogged
     */
    select?: UserLoggedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLoggedInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EntidadesSistemaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj',
    tipo_entidade: 'tipo_entidade',
    email: 'email',
    endereco: 'endereco'
  };

  export type EntidadesSistemaScalarFieldEnum = (typeof EntidadesSistemaScalarFieldEnum)[keyof typeof EntidadesSistemaScalarFieldEnum]


  export const ContactoEntidadeScalarFieldEnum: {
    id: 'id',
    contacto: 'contacto',
    entidadeID: 'entidadeID'
  };

  export type ContactoEntidadeScalarFieldEnum = (typeof ContactoEntidadeScalarFieldEnum)[keyof typeof ContactoEntidadeScalarFieldEnum]


  export const EspecialistasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    especialidade: 'especialidade',
    crm: 'crm',
    entidadeID: 'entidadeID',
    sexo: 'sexo'
  };

  export type EspecialistasScalarFieldEnum = (typeof EspecialistasScalarFieldEnum)[keyof typeof EspecialistasScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
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

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const ContactoUsuarioScalarFieldEnum: {
    id: 'id',
    contacto: 'contacto',
    usuarioID: 'usuarioID'
  };

  export type ContactoUsuarioScalarFieldEnum = (typeof ContactoUsuarioScalarFieldEnum)[keyof typeof ContactoUsuarioScalarFieldEnum]


  export const PublicacoesScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    foto: 'foto',
    video: 'video',
    data: 'data',
    usuarioID: 'usuarioID'
  };

  export type PublicacoesScalarFieldEnum = (typeof PublicacoesScalarFieldEnum)[keyof typeof PublicacoesScalarFieldEnum]


  export const NotificacoesScalarFieldEnum: {
    id: 'id',
    data: 'data',
    conteudo: 'conteudo',
    usuarioID: 'usuarioID'
  };

  export type NotificacoesScalarFieldEnum = (typeof NotificacoesScalarFieldEnum)[keyof typeof NotificacoesScalarFieldEnum]


  export const MensagensScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    data: 'data',
    usuarioID: 'usuarioID'
  };

  export type MensagensScalarFieldEnum = (typeof MensagensScalarFieldEnum)[keyof typeof MensagensScalarFieldEnum]


  export const MensagemRecebidaScalarFieldEnum: {
    id: 'id',
    leitura: 'leitura',
    data: 'data',
    mensagemId: 'mensagemId',
    usuarioID: 'usuarioID'
  };

  export type MensagemRecebidaScalarFieldEnum = (typeof MensagemRecebidaScalarFieldEnum)[keyof typeof MensagemRecebidaScalarFieldEnum]


  export const MensagemEnviadaScalarFieldEnum: {
    id: 'id',
    mensagemId: 'mensagemId',
    usuarioID: 'usuarioID'
  };

  export type MensagemEnviadaScalarFieldEnum = (typeof MensagemEnviadaScalarFieldEnum)[keyof typeof MensagemEnviadaScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    token: 'token'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const UserLoggedScalarFieldEnum: {
    id: 'id',
    UserID: 'UserID'
  };

  export type UserLoggedScalarFieldEnum = (typeof UserLoggedScalarFieldEnum)[keyof typeof UserLoggedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Sexo'
   */
  export type EnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EntidadesSistemaWhereInput = {
    AND?: EntidadesSistemaWhereInput | EntidadesSistemaWhereInput[]
    OR?: EntidadesSistemaWhereInput[]
    NOT?: EntidadesSistemaWhereInput | EntidadesSistemaWhereInput[]
    id?: StringFilter<"EntidadesSistema"> | string
    name?: StringFilter<"EntidadesSistema"> | string
    cnpj?: StringFilter<"EntidadesSistema"> | string
    tipo_entidade?: StringFilter<"EntidadesSistema"> | string
    email?: StringFilter<"EntidadesSistema"> | string
    endereco?: StringFilter<"EntidadesSistema"> | string
    contactos?: ContactoEntidadeListRelationFilter
    especialista?: EspecialistasListRelationFilter
  }

  export type EntidadesSistemaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    tipo_entidade?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    contactos?: ContactoEntidadeOrderByRelationAggregateInput
    especialista?: EspecialistasOrderByRelationAggregateInput
  }

  export type EntidadesSistemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    email?: string
    AND?: EntidadesSistemaWhereInput | EntidadesSistemaWhereInput[]
    OR?: EntidadesSistemaWhereInput[]
    NOT?: EntidadesSistemaWhereInput | EntidadesSistemaWhereInput[]
    name?: StringFilter<"EntidadesSistema"> | string
    tipo_entidade?: StringFilter<"EntidadesSistema"> | string
    endereco?: StringFilter<"EntidadesSistema"> | string
    contactos?: ContactoEntidadeListRelationFilter
    especialista?: EspecialistasListRelationFilter
  }, "id" | "cnpj" | "email">

  export type EntidadesSistemaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    tipo_entidade?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    _count?: EntidadesSistemaCountOrderByAggregateInput
    _max?: EntidadesSistemaMaxOrderByAggregateInput
    _min?: EntidadesSistemaMinOrderByAggregateInput
  }

  export type EntidadesSistemaScalarWhereWithAggregatesInput = {
    AND?: EntidadesSistemaScalarWhereWithAggregatesInput | EntidadesSistemaScalarWhereWithAggregatesInput[]
    OR?: EntidadesSistemaScalarWhereWithAggregatesInput[]
    NOT?: EntidadesSistemaScalarWhereWithAggregatesInput | EntidadesSistemaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EntidadesSistema"> | string
    name?: StringWithAggregatesFilter<"EntidadesSistema"> | string
    cnpj?: StringWithAggregatesFilter<"EntidadesSistema"> | string
    tipo_entidade?: StringWithAggregatesFilter<"EntidadesSistema"> | string
    email?: StringWithAggregatesFilter<"EntidadesSistema"> | string
    endereco?: StringWithAggregatesFilter<"EntidadesSistema"> | string
  }

  export type ContactoEntidadeWhereInput = {
    AND?: ContactoEntidadeWhereInput | ContactoEntidadeWhereInput[]
    OR?: ContactoEntidadeWhereInput[]
    NOT?: ContactoEntidadeWhereInput | ContactoEntidadeWhereInput[]
    id?: StringFilter<"ContactoEntidade"> | string
    contacto?: IntFilter<"ContactoEntidade"> | number
    entidadeID?: StringFilter<"ContactoEntidade"> | string
    entidade?: XOR<EntidadesSistemaRelationFilter, EntidadesSistemaWhereInput>
  }

  export type ContactoEntidadeOrderByWithRelationInput = {
    id?: SortOrder
    contacto?: SortOrder
    entidadeID?: SortOrder
    entidade?: EntidadesSistemaOrderByWithRelationInput
  }

  export type ContactoEntidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactoEntidadeWhereInput | ContactoEntidadeWhereInput[]
    OR?: ContactoEntidadeWhereInput[]
    NOT?: ContactoEntidadeWhereInput | ContactoEntidadeWhereInput[]
    contacto?: IntFilter<"ContactoEntidade"> | number
    entidadeID?: StringFilter<"ContactoEntidade"> | string
    entidade?: XOR<EntidadesSistemaRelationFilter, EntidadesSistemaWhereInput>
  }, "id">

  export type ContactoEntidadeOrderByWithAggregationInput = {
    id?: SortOrder
    contacto?: SortOrder
    entidadeID?: SortOrder
    _count?: ContactoEntidadeCountOrderByAggregateInput
    _avg?: ContactoEntidadeAvgOrderByAggregateInput
    _max?: ContactoEntidadeMaxOrderByAggregateInput
    _min?: ContactoEntidadeMinOrderByAggregateInput
    _sum?: ContactoEntidadeSumOrderByAggregateInput
  }

  export type ContactoEntidadeScalarWhereWithAggregatesInput = {
    AND?: ContactoEntidadeScalarWhereWithAggregatesInput | ContactoEntidadeScalarWhereWithAggregatesInput[]
    OR?: ContactoEntidadeScalarWhereWithAggregatesInput[]
    NOT?: ContactoEntidadeScalarWhereWithAggregatesInput | ContactoEntidadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactoEntidade"> | string
    contacto?: IntWithAggregatesFilter<"ContactoEntidade"> | number
    entidadeID?: StringWithAggregatesFilter<"ContactoEntidade"> | string
  }

  export type EspecialistasWhereInput = {
    AND?: EspecialistasWhereInput | EspecialistasWhereInput[]
    OR?: EspecialistasWhereInput[]
    NOT?: EspecialistasWhereInput | EspecialistasWhereInput[]
    id?: StringFilter<"Especialistas"> | string
    name?: StringFilter<"Especialistas"> | string
    especialidade?: StringFilter<"Especialistas"> | string
    crm?: IntFilter<"Especialistas"> | number
    entidadeID?: StringFilter<"Especialistas"> | string
    sexo?: EnumSexoFilter<"Especialistas"> | $Enums.Sexo
    entidade?: XOR<EntidadesSistemaRelationFilter, EntidadesSistemaWhereInput>
  }

  export type EspecialistasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    especialidade?: SortOrder
    crm?: SortOrder
    entidadeID?: SortOrder
    sexo?: SortOrder
    entidade?: EntidadesSistemaOrderByWithRelationInput
  }

  export type EspecialistasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EspecialistasWhereInput | EspecialistasWhereInput[]
    OR?: EspecialistasWhereInput[]
    NOT?: EspecialistasWhereInput | EspecialistasWhereInput[]
    name?: StringFilter<"Especialistas"> | string
    especialidade?: StringFilter<"Especialistas"> | string
    crm?: IntFilter<"Especialistas"> | number
    entidadeID?: StringFilter<"Especialistas"> | string
    sexo?: EnumSexoFilter<"Especialistas"> | $Enums.Sexo
    entidade?: XOR<EntidadesSistemaRelationFilter, EntidadesSistemaWhereInput>
  }, "id">

  export type EspecialistasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    especialidade?: SortOrder
    crm?: SortOrder
    entidadeID?: SortOrder
    sexo?: SortOrder
    _count?: EspecialistasCountOrderByAggregateInput
    _avg?: EspecialistasAvgOrderByAggregateInput
    _max?: EspecialistasMaxOrderByAggregateInput
    _min?: EspecialistasMinOrderByAggregateInput
    _sum?: EspecialistasSumOrderByAggregateInput
  }

  export type EspecialistasScalarWhereWithAggregatesInput = {
    AND?: EspecialistasScalarWhereWithAggregatesInput | EspecialistasScalarWhereWithAggregatesInput[]
    OR?: EspecialistasScalarWhereWithAggregatesInput[]
    NOT?: EspecialistasScalarWhereWithAggregatesInput | EspecialistasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especialistas"> | string
    name?: StringWithAggregatesFilter<"Especialistas"> | string
    especialidade?: StringWithAggregatesFilter<"Especialistas"> | string
    crm?: IntWithAggregatesFilter<"Especialistas"> | number
    entidadeID?: StringWithAggregatesFilter<"Especialistas"> | string
    sexo?: EnumSexoWithAggregatesFilter<"Especialistas"> | $Enums.Sexo
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: StringFilter<"Usuarios"> | string
    name?: StringFilter<"Usuarios"> | string
    email?: StringFilter<"Usuarios"> | string
    senha?: StringFilter<"Usuarios"> | string
    sexo?: EnumSexoFilter<"Usuarios"> | $Enums.Sexo
    foto?: StringNullableFilter<"Usuarios"> | string | null
    crm?: IntNullableFilter<"Usuarios"> | number | null
    cnpj?: IntNullableFilter<"Usuarios"> | number | null
    nascimento?: DateTimeFilter<"Usuarios"> | Date | string
    userPub?: PublicacoesListRelationFilter
    usuarioNotificacao?: NotificacoesListRelationFilter
    usuarioSMSrecebida?: MensagemRecebidaListRelationFilter
    usuarioSMSenviada?: MensagemEnviadaListRelationFilter
    usuarioMensagens?: MensagensListRelationFilter
    usuarioContacto?: ContactoUsuarioListRelationFilter
    userLogged?: UserLoggedListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    foto?: SortOrderInput | SortOrder
    crm?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    nascimento?: SortOrder
    userPub?: PublicacoesOrderByRelationAggregateInput
    usuarioNotificacao?: NotificacoesOrderByRelationAggregateInput
    usuarioSMSrecebida?: MensagemRecebidaOrderByRelationAggregateInput
    usuarioSMSenviada?: MensagemEnviadaOrderByRelationAggregateInput
    usuarioMensagens?: MensagensOrderByRelationAggregateInput
    usuarioContacto?: ContactoUsuarioOrderByRelationAggregateInput
    userLogged?: UserLoggedOrderByRelationAggregateInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    crm?: number
    cnpj?: number
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    name?: StringFilter<"Usuarios"> | string
    senha?: StringFilter<"Usuarios"> | string
    sexo?: EnumSexoFilter<"Usuarios"> | $Enums.Sexo
    foto?: StringNullableFilter<"Usuarios"> | string | null
    nascimento?: DateTimeFilter<"Usuarios"> | Date | string
    userPub?: PublicacoesListRelationFilter
    usuarioNotificacao?: NotificacoesListRelationFilter
    usuarioSMSrecebida?: MensagemRecebidaListRelationFilter
    usuarioSMSenviada?: MensagemEnviadaListRelationFilter
    usuarioMensagens?: MensagensListRelationFilter
    usuarioContacto?: ContactoUsuarioListRelationFilter
    userLogged?: UserLoggedListRelationFilter
  }, "id" | "email" | "crm" | "cnpj">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    foto?: SortOrderInput | SortOrder
    crm?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    nascimento?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuarios"> | string
    name?: StringWithAggregatesFilter<"Usuarios"> | string
    email?: StringWithAggregatesFilter<"Usuarios"> | string
    senha?: StringWithAggregatesFilter<"Usuarios"> | string
    sexo?: EnumSexoWithAggregatesFilter<"Usuarios"> | $Enums.Sexo
    foto?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    crm?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    cnpj?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
    nascimento?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
  }

  export type ContactoUsuarioWhereInput = {
    AND?: ContactoUsuarioWhereInput | ContactoUsuarioWhereInput[]
    OR?: ContactoUsuarioWhereInput[]
    NOT?: ContactoUsuarioWhereInput | ContactoUsuarioWhereInput[]
    id?: StringFilter<"ContactoUsuario"> | string
    contacto?: IntFilter<"ContactoUsuario"> | number
    usuarioID?: StringFilter<"ContactoUsuario"> | string
    usuarioContacto?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type ContactoUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    contacto?: SortOrder
    usuarioID?: SortOrder
    usuarioContacto?: UsuariosOrderByWithRelationInput
  }

  export type ContactoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contacto?: number
    AND?: ContactoUsuarioWhereInput | ContactoUsuarioWhereInput[]
    OR?: ContactoUsuarioWhereInput[]
    NOT?: ContactoUsuarioWhereInput | ContactoUsuarioWhereInput[]
    usuarioID?: StringFilter<"ContactoUsuario"> | string
    usuarioContacto?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "id" | "contacto">

  export type ContactoUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    contacto?: SortOrder
    usuarioID?: SortOrder
    _count?: ContactoUsuarioCountOrderByAggregateInput
    _avg?: ContactoUsuarioAvgOrderByAggregateInput
    _max?: ContactoUsuarioMaxOrderByAggregateInput
    _min?: ContactoUsuarioMinOrderByAggregateInput
    _sum?: ContactoUsuarioSumOrderByAggregateInput
  }

  export type ContactoUsuarioScalarWhereWithAggregatesInput = {
    AND?: ContactoUsuarioScalarWhereWithAggregatesInput | ContactoUsuarioScalarWhereWithAggregatesInput[]
    OR?: ContactoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: ContactoUsuarioScalarWhereWithAggregatesInput | ContactoUsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactoUsuario"> | string
    contacto?: IntWithAggregatesFilter<"ContactoUsuario"> | number
    usuarioID?: StringWithAggregatesFilter<"ContactoUsuario"> | string
  }

  export type PublicacoesWhereInput = {
    AND?: PublicacoesWhereInput | PublicacoesWhereInput[]
    OR?: PublicacoesWhereInput[]
    NOT?: PublicacoesWhereInput | PublicacoesWhereInput[]
    id?: StringFilter<"Publicacoes"> | string
    conteudo?: StringFilter<"Publicacoes"> | string
    foto?: StringNullableFilter<"Publicacoes"> | string | null
    video?: StringNullableFilter<"Publicacoes"> | string | null
    data?: DateTimeFilter<"Publicacoes"> | Date | string
    usuarioID?: StringFilter<"Publicacoes"> | string
    usuarioPub?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type PublicacoesOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    foto?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
    usuarioPub?: UsuariosOrderByWithRelationInput
  }

  export type PublicacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicacoesWhereInput | PublicacoesWhereInput[]
    OR?: PublicacoesWhereInput[]
    NOT?: PublicacoesWhereInput | PublicacoesWhereInput[]
    conteudo?: StringFilter<"Publicacoes"> | string
    foto?: StringNullableFilter<"Publicacoes"> | string | null
    video?: StringNullableFilter<"Publicacoes"> | string | null
    data?: DateTimeFilter<"Publicacoes"> | Date | string
    usuarioID?: StringFilter<"Publicacoes"> | string
    usuarioPub?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "id">

  export type PublicacoesOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    foto?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
    _count?: PublicacoesCountOrderByAggregateInput
    _max?: PublicacoesMaxOrderByAggregateInput
    _min?: PublicacoesMinOrderByAggregateInput
  }

  export type PublicacoesScalarWhereWithAggregatesInput = {
    AND?: PublicacoesScalarWhereWithAggregatesInput | PublicacoesScalarWhereWithAggregatesInput[]
    OR?: PublicacoesScalarWhereWithAggregatesInput[]
    NOT?: PublicacoesScalarWhereWithAggregatesInput | PublicacoesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publicacoes"> | string
    conteudo?: StringWithAggregatesFilter<"Publicacoes"> | string
    foto?: StringNullableWithAggregatesFilter<"Publicacoes"> | string | null
    video?: StringNullableWithAggregatesFilter<"Publicacoes"> | string | null
    data?: DateTimeWithAggregatesFilter<"Publicacoes"> | Date | string
    usuarioID?: StringWithAggregatesFilter<"Publicacoes"> | string
  }

  export type NotificacoesWhereInput = {
    AND?: NotificacoesWhereInput | NotificacoesWhereInput[]
    OR?: NotificacoesWhereInput[]
    NOT?: NotificacoesWhereInput | NotificacoesWhereInput[]
    id?: StringFilter<"Notificacoes"> | string
    data?: DateTimeFilter<"Notificacoes"> | Date | string
    conteudo?: StringFilter<"Notificacoes"> | string
    usuarioID?: StringFilter<"Notificacoes"> | string
    usuarioNotificacao?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type NotificacoesOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    usuarioID?: SortOrder
    usuarioNotificacao?: UsuariosOrderByWithRelationInput
  }

  export type NotificacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacoesWhereInput | NotificacoesWhereInput[]
    OR?: NotificacoesWhereInput[]
    NOT?: NotificacoesWhereInput | NotificacoesWhereInput[]
    data?: DateTimeFilter<"Notificacoes"> | Date | string
    conteudo?: StringFilter<"Notificacoes"> | string
    usuarioID?: StringFilter<"Notificacoes"> | string
    usuarioNotificacao?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "id">

  export type NotificacoesOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    usuarioID?: SortOrder
    _count?: NotificacoesCountOrderByAggregateInput
    _max?: NotificacoesMaxOrderByAggregateInput
    _min?: NotificacoesMinOrderByAggregateInput
  }

  export type NotificacoesScalarWhereWithAggregatesInput = {
    AND?: NotificacoesScalarWhereWithAggregatesInput | NotificacoesScalarWhereWithAggregatesInput[]
    OR?: NotificacoesScalarWhereWithAggregatesInput[]
    NOT?: NotificacoesScalarWhereWithAggregatesInput | NotificacoesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacoes"> | string
    data?: DateTimeWithAggregatesFilter<"Notificacoes"> | Date | string
    conteudo?: StringWithAggregatesFilter<"Notificacoes"> | string
    usuarioID?: StringWithAggregatesFilter<"Notificacoes"> | string
  }

  export type MensagensWhereInput = {
    AND?: MensagensWhereInput | MensagensWhereInput[]
    OR?: MensagensWhereInput[]
    NOT?: MensagensWhereInput | MensagensWhereInput[]
    id?: StringFilter<"Mensagens"> | string
    conteudo?: StringFilter<"Mensagens"> | string
    data?: DateTimeFilter<"Mensagens"> | Date | string
    usuarioID?: StringFilter<"Mensagens"> | string
    mensagemRecebida?: MensagemRecebidaListRelationFilter
    mensagemEnviada?: MensagemEnviadaListRelationFilter
    usuarioMensagens?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type MensagensOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
    mensagemRecebida?: MensagemRecebidaOrderByRelationAggregateInput
    mensagemEnviada?: MensagemEnviadaOrderByRelationAggregateInput
    usuarioMensagens?: UsuariosOrderByWithRelationInput
  }

  export type MensagensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensagensWhereInput | MensagensWhereInput[]
    OR?: MensagensWhereInput[]
    NOT?: MensagensWhereInput | MensagensWhereInput[]
    conteudo?: StringFilter<"Mensagens"> | string
    data?: DateTimeFilter<"Mensagens"> | Date | string
    usuarioID?: StringFilter<"Mensagens"> | string
    mensagemRecebida?: MensagemRecebidaListRelationFilter
    mensagemEnviada?: MensagemEnviadaListRelationFilter
    usuarioMensagens?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "id">

  export type MensagensOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
    _count?: MensagensCountOrderByAggregateInput
    _max?: MensagensMaxOrderByAggregateInput
    _min?: MensagensMinOrderByAggregateInput
  }

  export type MensagensScalarWhereWithAggregatesInput = {
    AND?: MensagensScalarWhereWithAggregatesInput | MensagensScalarWhereWithAggregatesInput[]
    OR?: MensagensScalarWhereWithAggregatesInput[]
    NOT?: MensagensScalarWhereWithAggregatesInput | MensagensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mensagens"> | string
    conteudo?: StringWithAggregatesFilter<"Mensagens"> | string
    data?: DateTimeWithAggregatesFilter<"Mensagens"> | Date | string
    usuarioID?: StringWithAggregatesFilter<"Mensagens"> | string
  }

  export type MensagemRecebidaWhereInput = {
    AND?: MensagemRecebidaWhereInput | MensagemRecebidaWhereInput[]
    OR?: MensagemRecebidaWhereInput[]
    NOT?: MensagemRecebidaWhereInput | MensagemRecebidaWhereInput[]
    id?: StringFilter<"MensagemRecebida"> | string
    leitura?: BoolFilter<"MensagemRecebida"> | boolean
    data?: DateTimeFilter<"MensagemRecebida"> | Date | string
    mensagemId?: StringFilter<"MensagemRecebida"> | string
    usuarioID?: StringFilter<"MensagemRecebida"> | string
    mensagemRecebida?: XOR<MensagensRelationFilter, MensagensWhereInput>
    usuarioSMSrecebida?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type MensagemRecebidaOrderByWithRelationInput = {
    id?: SortOrder
    leitura?: SortOrder
    data?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
    mensagemRecebida?: MensagensOrderByWithRelationInput
    usuarioSMSrecebida?: UsuariosOrderByWithRelationInput
  }

  export type MensagemRecebidaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensagemRecebidaWhereInput | MensagemRecebidaWhereInput[]
    OR?: MensagemRecebidaWhereInput[]
    NOT?: MensagemRecebidaWhereInput | MensagemRecebidaWhereInput[]
    leitura?: BoolFilter<"MensagemRecebida"> | boolean
    data?: DateTimeFilter<"MensagemRecebida"> | Date | string
    mensagemId?: StringFilter<"MensagemRecebida"> | string
    usuarioID?: StringFilter<"MensagemRecebida"> | string
    mensagemRecebida?: XOR<MensagensRelationFilter, MensagensWhereInput>
    usuarioSMSrecebida?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "id">

  export type MensagemRecebidaOrderByWithAggregationInput = {
    id?: SortOrder
    leitura?: SortOrder
    data?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
    _count?: MensagemRecebidaCountOrderByAggregateInput
    _max?: MensagemRecebidaMaxOrderByAggregateInput
    _min?: MensagemRecebidaMinOrderByAggregateInput
  }

  export type MensagemRecebidaScalarWhereWithAggregatesInput = {
    AND?: MensagemRecebidaScalarWhereWithAggregatesInput | MensagemRecebidaScalarWhereWithAggregatesInput[]
    OR?: MensagemRecebidaScalarWhereWithAggregatesInput[]
    NOT?: MensagemRecebidaScalarWhereWithAggregatesInput | MensagemRecebidaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MensagemRecebida"> | string
    leitura?: BoolWithAggregatesFilter<"MensagemRecebida"> | boolean
    data?: DateTimeWithAggregatesFilter<"MensagemRecebida"> | Date | string
    mensagemId?: StringWithAggregatesFilter<"MensagemRecebida"> | string
    usuarioID?: StringWithAggregatesFilter<"MensagemRecebida"> | string
  }

  export type MensagemEnviadaWhereInput = {
    AND?: MensagemEnviadaWhereInput | MensagemEnviadaWhereInput[]
    OR?: MensagemEnviadaWhereInput[]
    NOT?: MensagemEnviadaWhereInput | MensagemEnviadaWhereInput[]
    id?: StringFilter<"MensagemEnviada"> | string
    mensagemId?: StringFilter<"MensagemEnviada"> | string
    usuarioID?: StringFilter<"MensagemEnviada"> | string
    mensagemEnviada?: XOR<MensagensRelationFilter, MensagensWhereInput>
    usuarioSMSenviada?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type MensagemEnviadaOrderByWithRelationInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
    mensagemEnviada?: MensagensOrderByWithRelationInput
    usuarioSMSenviada?: UsuariosOrderByWithRelationInput
  }

  export type MensagemEnviadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensagemEnviadaWhereInput | MensagemEnviadaWhereInput[]
    OR?: MensagemEnviadaWhereInput[]
    NOT?: MensagemEnviadaWhereInput | MensagemEnviadaWhereInput[]
    mensagemId?: StringFilter<"MensagemEnviada"> | string
    usuarioID?: StringFilter<"MensagemEnviada"> | string
    mensagemEnviada?: XOR<MensagensRelationFilter, MensagensWhereInput>
    usuarioSMSenviada?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "id">

  export type MensagemEnviadaOrderByWithAggregationInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
    _count?: MensagemEnviadaCountOrderByAggregateInput
    _max?: MensagemEnviadaMaxOrderByAggregateInput
    _min?: MensagemEnviadaMinOrderByAggregateInput
  }

  export type MensagemEnviadaScalarWhereWithAggregatesInput = {
    AND?: MensagemEnviadaScalarWhereWithAggregatesInput | MensagemEnviadaScalarWhereWithAggregatesInput[]
    OR?: MensagemEnviadaScalarWhereWithAggregatesInput[]
    NOT?: MensagemEnviadaScalarWhereWithAggregatesInput | MensagemEnviadaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MensagemEnviada"> | string
    mensagemId?: StringWithAggregatesFilter<"MensagemEnviada"> | string
    usuarioID?: StringWithAggregatesFilter<"MensagemEnviada"> | string
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id?: StringFilter<"Tokens"> | string
    token?: StringFilter<"Tokens"> | string
  }

  export type TokensOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
  }, "id" | "token">

  export type TokensOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tokens"> | string
    token?: StringWithAggregatesFilter<"Tokens"> | string
  }

  export type UserLoggedWhereInput = {
    AND?: UserLoggedWhereInput | UserLoggedWhereInput[]
    OR?: UserLoggedWhereInput[]
    NOT?: UserLoggedWhereInput | UserLoggedWhereInput[]
    id?: StringFilter<"UserLogged"> | string
    UserID?: StringFilter<"UserLogged"> | string
    user?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type UserLoggedOrderByWithRelationInput = {
    id?: SortOrder
    UserID?: SortOrder
    user?: UsuariosOrderByWithRelationInput
  }

  export type UserLoggedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserLoggedWhereInput | UserLoggedWhereInput[]
    OR?: UserLoggedWhereInput[]
    NOT?: UserLoggedWhereInput | UserLoggedWhereInput[]
    UserID?: StringFilter<"UserLogged"> | string
    user?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "id">

  export type UserLoggedOrderByWithAggregationInput = {
    id?: SortOrder
    UserID?: SortOrder
    _count?: UserLoggedCountOrderByAggregateInput
    _max?: UserLoggedMaxOrderByAggregateInput
    _min?: UserLoggedMinOrderByAggregateInput
  }

  export type UserLoggedScalarWhereWithAggregatesInput = {
    AND?: UserLoggedScalarWhereWithAggregatesInput | UserLoggedScalarWhereWithAggregatesInput[]
    OR?: UserLoggedScalarWhereWithAggregatesInput[]
    NOT?: UserLoggedScalarWhereWithAggregatesInput | UserLoggedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLogged"> | string
    UserID?: StringWithAggregatesFilter<"UserLogged"> | string
  }

  export type EntidadesSistemaCreateInput = {
    id?: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
    contactos?: ContactoEntidadeCreateNestedManyWithoutEntidadeInput
    especialista?: EspecialistasCreateNestedManyWithoutEntidadeInput
  }

  export type EntidadesSistemaUncheckedCreateInput = {
    id?: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
    contactos?: ContactoEntidadeUncheckedCreateNestedManyWithoutEntidadeInput
    especialista?: EspecialistasUncheckedCreateNestedManyWithoutEntidadeInput
  }

  export type EntidadesSistemaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    contactos?: ContactoEntidadeUpdateManyWithoutEntidadeNestedInput
    especialista?: EspecialistasUpdateManyWithoutEntidadeNestedInput
  }

  export type EntidadesSistemaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    contactos?: ContactoEntidadeUncheckedUpdateManyWithoutEntidadeNestedInput
    especialista?: EspecialistasUncheckedUpdateManyWithoutEntidadeNestedInput
  }

  export type EntidadesSistemaCreateManyInput = {
    id?: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
  }

  export type EntidadesSistemaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type EntidadesSistemaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type ContactoEntidadeCreateInput = {
    id?: string
    contacto: number
    entidade: EntidadesSistemaCreateNestedOneWithoutContactosInput
  }

  export type ContactoEntidadeUncheckedCreateInput = {
    id?: string
    contacto: number
    entidadeID: string
  }

  export type ContactoEntidadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
    entidade?: EntidadesSistemaUpdateOneRequiredWithoutContactosNestedInput
  }

  export type ContactoEntidadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
    entidadeID?: StringFieldUpdateOperationsInput | string
  }

  export type ContactoEntidadeCreateManyInput = {
    id?: string
    contacto: number
    entidadeID: string
  }

  export type ContactoEntidadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type ContactoEntidadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
    entidadeID?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialistasCreateInput = {
    id?: string
    name: string
    especialidade: string
    crm: number
    sexo: $Enums.Sexo
    entidade: EntidadesSistemaCreateNestedOneWithoutEspecialistaInput
  }

  export type EspecialistasUncheckedCreateInput = {
    id?: string
    name: string
    especialidade: string
    crm: number
    entidadeID: string
    sexo: $Enums.Sexo
  }

  export type EspecialistasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    crm?: IntFieldUpdateOperationsInput | number
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    entidade?: EntidadesSistemaUpdateOneRequiredWithoutEspecialistaNestedInput
  }

  export type EspecialistasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    crm?: IntFieldUpdateOperationsInput | number
    entidadeID?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EspecialistasCreateManyInput = {
    id?: string
    name: string
    especialidade: string
    crm: number
    entidadeID: string
    sexo: $Enums.Sexo
  }

  export type EspecialistasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    crm?: IntFieldUpdateOperationsInput | number
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EspecialistasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    crm?: IntFieldUpdateOperationsInput | number
    entidadeID?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type UsuariosCreateInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosCreateManyInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
  }

  export type UsuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoUsuarioCreateInput = {
    id?: string
    contacto: number
    usuarioContacto: UsuariosCreateNestedOneWithoutUsuarioContactoInput
  }

  export type ContactoUsuarioUncheckedCreateInput = {
    id?: string
    contacto: number
    usuarioID: string
  }

  export type ContactoUsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
    usuarioContacto?: UsuariosUpdateOneRequiredWithoutUsuarioContactoNestedInput
  }

  export type ContactoUsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type ContactoUsuarioCreateManyInput = {
    id?: string
    contacto: number
    usuarioID: string
  }

  export type ContactoUsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type ContactoUsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type PublicacoesCreateInput = {
    id?: string
    conteudo: string
    foto?: string | null
    video?: string | null
    data?: Date | string
    usuarioPub: UsuariosCreateNestedOneWithoutUserPubInput
  }

  export type PublicacoesUncheckedCreateInput = {
    id?: string
    conteudo: string
    foto?: string | null
    video?: string | null
    data?: Date | string
    usuarioID: string
  }

  export type PublicacoesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioPub?: UsuariosUpdateOneRequiredWithoutUserPubNestedInput
  }

  export type PublicacoesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type PublicacoesCreateManyInput = {
    id?: string
    conteudo: string
    foto?: string | null
    video?: string | null
    data?: Date | string
    usuarioID: string
  }

  export type PublicacoesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacoesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacoesCreateInput = {
    id?: string
    data?: Date | string
    conteudo: string
    usuarioNotificacao: UsuariosCreateNestedOneWithoutUsuarioNotificacaoInput
  }

  export type NotificacoesUncheckedCreateInput = {
    id?: string
    data?: Date | string
    conteudo: string
    usuarioID: string
  }

  export type NotificacoesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioNotificacao?: UsuariosUpdateOneRequiredWithoutUsuarioNotificacaoNestedInput
  }

  export type NotificacoesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacoesCreateManyInput = {
    id?: string
    data?: Date | string
    conteudo: string
    usuarioID: string
  }

  export type NotificacoesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacoesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagensCreateInput = {
    id?: string
    conteudo: string
    data?: Date | string
    mensagemRecebida?: MensagemRecebidaCreateNestedManyWithoutMensagemRecebidaInput
    mensagemEnviada?: MensagemEnviadaCreateNestedManyWithoutMensagemEnviadaInput
    usuarioMensagens: UsuariosCreateNestedOneWithoutUsuarioMensagensInput
  }

  export type MensagensUncheckedCreateInput = {
    id?: string
    conteudo: string
    data?: Date | string
    usuarioID: string
    mensagemRecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutMensagemRecebidaInput
    mensagemEnviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutMensagemEnviadaInput
  }

  export type MensagensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemRecebida?: MensagemRecebidaUpdateManyWithoutMensagemRecebidaNestedInput
    mensagemEnviada?: MensagemEnviadaUpdateManyWithoutMensagemEnviadaNestedInput
    usuarioMensagens?: UsuariosUpdateOneRequiredWithoutUsuarioMensagensNestedInput
  }

  export type MensagensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
    mensagemRecebida?: MensagemRecebidaUncheckedUpdateManyWithoutMensagemRecebidaNestedInput
    mensagemEnviada?: MensagemEnviadaUncheckedUpdateManyWithoutMensagemEnviadaNestedInput
  }

  export type MensagensCreateManyInput = {
    id?: string
    conteudo: string
    data?: Date | string
    usuarioID: string
  }

  export type MensagensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemRecebidaCreateInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    mensagemRecebida: MensagensCreateNestedOneWithoutMensagemRecebidaInput
    usuarioSMSrecebida: UsuariosCreateNestedOneWithoutUsuarioSMSrecebidaInput
  }

  export type MensagemRecebidaUncheckedCreateInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    mensagemId: string
    usuarioID: string
  }

  export type MensagemRecebidaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemRecebida?: MensagensUpdateOneRequiredWithoutMensagemRecebidaNestedInput
    usuarioSMSrecebida?: UsuariosUpdateOneRequiredWithoutUsuarioSMSrecebidaNestedInput
  }

  export type MensagemRecebidaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemId?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemRecebidaCreateManyInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    mensagemId: string
    usuarioID: string
  }

  export type MensagemRecebidaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemRecebidaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemId?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemEnviadaCreateInput = {
    id?: string
    mensagemEnviada: MensagensCreateNestedOneWithoutMensagemEnviadaInput
    usuarioSMSenviada: UsuariosCreateNestedOneWithoutUsuarioSMSenviadaInput
  }

  export type MensagemEnviadaUncheckedCreateInput = {
    id?: string
    mensagemId: string
    usuarioID: string
  }

  export type MensagemEnviadaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemEnviada?: MensagensUpdateOneRequiredWithoutMensagemEnviadaNestedInput
    usuarioSMSenviada?: UsuariosUpdateOneRequiredWithoutUsuarioSMSenviadaNestedInput
  }

  export type MensagemEnviadaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemId?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemEnviadaCreateManyInput = {
    id?: string
    mensagemId: string
    usuarioID: string
  }

  export type MensagemEnviadaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemEnviadaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemId?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type TokensCreateInput = {
    id?: string
    token: string
  }

  export type TokensUncheckedCreateInput = {
    id?: string
    token: string
  }

  export type TokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TokensCreateManyInput = {
    id?: string
    token: string
  }

  export type TokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoggedCreateInput = {
    id?: string
    user: UsuariosCreateNestedOneWithoutUserLoggedInput
  }

  export type UserLoggedUncheckedCreateInput = {
    id?: string
    UserID: string
  }

  export type UserLoggedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsuariosUpdateOneRequiredWithoutUserLoggedNestedInput
  }

  export type UserLoggedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoggedCreateManyInput = {
    id?: string
    UserID: string
  }

  export type UserLoggedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoggedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ContactoEntidadeListRelationFilter = {
    every?: ContactoEntidadeWhereInput
    some?: ContactoEntidadeWhereInput
    none?: ContactoEntidadeWhereInput
  }

  export type EspecialistasListRelationFilter = {
    every?: EspecialistasWhereInput
    some?: EspecialistasWhereInput
    none?: EspecialistasWhereInput
  }

  export type ContactoEntidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialistasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntidadesSistemaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    tipo_entidade?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
  }

  export type EntidadesSistemaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    tipo_entidade?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
  }

  export type EntidadesSistemaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    tipo_entidade?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EntidadesSistemaRelationFilter = {
    is?: EntidadesSistemaWhereInput
    isNot?: EntidadesSistemaWhereInput
  }

  export type ContactoEntidadeCountOrderByAggregateInput = {
    id?: SortOrder
    contacto?: SortOrder
    entidadeID?: SortOrder
  }

  export type ContactoEntidadeAvgOrderByAggregateInput = {
    contacto?: SortOrder
  }

  export type ContactoEntidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    contacto?: SortOrder
    entidadeID?: SortOrder
  }

  export type ContactoEntidadeMinOrderByAggregateInput = {
    id?: SortOrder
    contacto?: SortOrder
    entidadeID?: SortOrder
  }

  export type ContactoEntidadeSumOrderByAggregateInput = {
    contacto?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[]
    notIn?: $Enums.Sexo[]
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type EspecialistasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    especialidade?: SortOrder
    crm?: SortOrder
    entidadeID?: SortOrder
    sexo?: SortOrder
  }

  export type EspecialistasAvgOrderByAggregateInput = {
    crm?: SortOrder
  }

  export type EspecialistasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    especialidade?: SortOrder
    crm?: SortOrder
    entidadeID?: SortOrder
    sexo?: SortOrder
  }

  export type EspecialistasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    especialidade?: SortOrder
    crm?: SortOrder
    entidadeID?: SortOrder
    sexo?: SortOrder
  }

  export type EspecialistasSumOrderByAggregateInput = {
    crm?: SortOrder
  }

  export type EnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[]
    notIn?: $Enums.Sexo[]
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PublicacoesListRelationFilter = {
    every?: PublicacoesWhereInput
    some?: PublicacoesWhereInput
    none?: PublicacoesWhereInput
  }

  export type NotificacoesListRelationFilter = {
    every?: NotificacoesWhereInput
    some?: NotificacoesWhereInput
    none?: NotificacoesWhereInput
  }

  export type MensagemRecebidaListRelationFilter = {
    every?: MensagemRecebidaWhereInput
    some?: MensagemRecebidaWhereInput
    none?: MensagemRecebidaWhereInput
  }

  export type MensagemEnviadaListRelationFilter = {
    every?: MensagemEnviadaWhereInput
    some?: MensagemEnviadaWhereInput
    none?: MensagemEnviadaWhereInput
  }

  export type MensagensListRelationFilter = {
    every?: MensagensWhereInput
    some?: MensagensWhereInput
    none?: MensagensWhereInput
  }

  export type ContactoUsuarioListRelationFilter = {
    every?: ContactoUsuarioWhereInput
    some?: ContactoUsuarioWhereInput
    none?: ContactoUsuarioWhereInput
  }

  export type UserLoggedListRelationFilter = {
    every?: UserLoggedWhereInput
    some?: UserLoggedWhereInput
    none?: UserLoggedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PublicacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensagemRecebidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensagemEnviadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensagensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactoUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLoggedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    foto?: SortOrder
    crm?: SortOrder
    cnpj?: SortOrder
    nascimento?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    crm?: SortOrder
    cnpj?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    foto?: SortOrder
    crm?: SortOrder
    cnpj?: SortOrder
    nascimento?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    foto?: SortOrder
    crm?: SortOrder
    cnpj?: SortOrder
    nascimento?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    crm?: SortOrder
    cnpj?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuariosRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type ContactoUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    contacto?: SortOrder
    usuarioID?: SortOrder
  }

  export type ContactoUsuarioAvgOrderByAggregateInput = {
    contacto?: SortOrder
  }

  export type ContactoUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    contacto?: SortOrder
    usuarioID?: SortOrder
  }

  export type ContactoUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    contacto?: SortOrder
    usuarioID?: SortOrder
  }

  export type ContactoUsuarioSumOrderByAggregateInput = {
    contacto?: SortOrder
  }

  export type PublicacoesCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    foto?: SortOrder
    video?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
  }

  export type PublicacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    foto?: SortOrder
    video?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
  }

  export type PublicacoesMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    foto?: SortOrder
    video?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
  }

  export type NotificacoesCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    usuarioID?: SortOrder
  }

  export type NotificacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    usuarioID?: SortOrder
  }

  export type NotificacoesMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    usuarioID?: SortOrder
  }

  export type MensagensCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
  }

  export type MensagensMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
  }

  export type MensagensMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    data?: SortOrder
    usuarioID?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MensagensRelationFilter = {
    is?: MensagensWhereInput
    isNot?: MensagensWhereInput
  }

  export type MensagemRecebidaCountOrderByAggregateInput = {
    id?: SortOrder
    leitura?: SortOrder
    data?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
  }

  export type MensagemRecebidaMaxOrderByAggregateInput = {
    id?: SortOrder
    leitura?: SortOrder
    data?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
  }

  export type MensagemRecebidaMinOrderByAggregateInput = {
    id?: SortOrder
    leitura?: SortOrder
    data?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MensagemEnviadaCountOrderByAggregateInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
  }

  export type MensagemEnviadaMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
  }

  export type MensagemEnviadaMinOrderByAggregateInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    usuarioID?: SortOrder
  }

  export type TokensCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type UserLoggedCountOrderByAggregateInput = {
    id?: SortOrder
    UserID?: SortOrder
  }

  export type UserLoggedMaxOrderByAggregateInput = {
    id?: SortOrder
    UserID?: SortOrder
  }

  export type UserLoggedMinOrderByAggregateInput = {
    id?: SortOrder
    UserID?: SortOrder
  }

  export type ContactoEntidadeCreateNestedManyWithoutEntidadeInput = {
    create?: XOR<ContactoEntidadeCreateWithoutEntidadeInput, ContactoEntidadeUncheckedCreateWithoutEntidadeInput> | ContactoEntidadeCreateWithoutEntidadeInput[] | ContactoEntidadeUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: ContactoEntidadeCreateOrConnectWithoutEntidadeInput | ContactoEntidadeCreateOrConnectWithoutEntidadeInput[]
    createMany?: ContactoEntidadeCreateManyEntidadeInputEnvelope
    connect?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
  }

  export type EspecialistasCreateNestedManyWithoutEntidadeInput = {
    create?: XOR<EspecialistasCreateWithoutEntidadeInput, EspecialistasUncheckedCreateWithoutEntidadeInput> | EspecialistasCreateWithoutEntidadeInput[] | EspecialistasUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntidadeInput | EspecialistasCreateOrConnectWithoutEntidadeInput[]
    createMany?: EspecialistasCreateManyEntidadeInputEnvelope
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
  }

  export type ContactoEntidadeUncheckedCreateNestedManyWithoutEntidadeInput = {
    create?: XOR<ContactoEntidadeCreateWithoutEntidadeInput, ContactoEntidadeUncheckedCreateWithoutEntidadeInput> | ContactoEntidadeCreateWithoutEntidadeInput[] | ContactoEntidadeUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: ContactoEntidadeCreateOrConnectWithoutEntidadeInput | ContactoEntidadeCreateOrConnectWithoutEntidadeInput[]
    createMany?: ContactoEntidadeCreateManyEntidadeInputEnvelope
    connect?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
  }

  export type EspecialistasUncheckedCreateNestedManyWithoutEntidadeInput = {
    create?: XOR<EspecialistasCreateWithoutEntidadeInput, EspecialistasUncheckedCreateWithoutEntidadeInput> | EspecialistasCreateWithoutEntidadeInput[] | EspecialistasUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntidadeInput | EspecialistasCreateOrConnectWithoutEntidadeInput[]
    createMany?: EspecialistasCreateManyEntidadeInputEnvelope
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ContactoEntidadeUpdateManyWithoutEntidadeNestedInput = {
    create?: XOR<ContactoEntidadeCreateWithoutEntidadeInput, ContactoEntidadeUncheckedCreateWithoutEntidadeInput> | ContactoEntidadeCreateWithoutEntidadeInput[] | ContactoEntidadeUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: ContactoEntidadeCreateOrConnectWithoutEntidadeInput | ContactoEntidadeCreateOrConnectWithoutEntidadeInput[]
    upsert?: ContactoEntidadeUpsertWithWhereUniqueWithoutEntidadeInput | ContactoEntidadeUpsertWithWhereUniqueWithoutEntidadeInput[]
    createMany?: ContactoEntidadeCreateManyEntidadeInputEnvelope
    set?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    disconnect?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    delete?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    connect?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    update?: ContactoEntidadeUpdateWithWhereUniqueWithoutEntidadeInput | ContactoEntidadeUpdateWithWhereUniqueWithoutEntidadeInput[]
    updateMany?: ContactoEntidadeUpdateManyWithWhereWithoutEntidadeInput | ContactoEntidadeUpdateManyWithWhereWithoutEntidadeInput[]
    deleteMany?: ContactoEntidadeScalarWhereInput | ContactoEntidadeScalarWhereInput[]
  }

  export type EspecialistasUpdateManyWithoutEntidadeNestedInput = {
    create?: XOR<EspecialistasCreateWithoutEntidadeInput, EspecialistasUncheckedCreateWithoutEntidadeInput> | EspecialistasCreateWithoutEntidadeInput[] | EspecialistasUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntidadeInput | EspecialistasCreateOrConnectWithoutEntidadeInput[]
    upsert?: EspecialistasUpsertWithWhereUniqueWithoutEntidadeInput | EspecialistasUpsertWithWhereUniqueWithoutEntidadeInput[]
    createMany?: EspecialistasCreateManyEntidadeInputEnvelope
    set?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    disconnect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    delete?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    update?: EspecialistasUpdateWithWhereUniqueWithoutEntidadeInput | EspecialistasUpdateWithWhereUniqueWithoutEntidadeInput[]
    updateMany?: EspecialistasUpdateManyWithWhereWithoutEntidadeInput | EspecialistasUpdateManyWithWhereWithoutEntidadeInput[]
    deleteMany?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
  }

  export type ContactoEntidadeUncheckedUpdateManyWithoutEntidadeNestedInput = {
    create?: XOR<ContactoEntidadeCreateWithoutEntidadeInput, ContactoEntidadeUncheckedCreateWithoutEntidadeInput> | ContactoEntidadeCreateWithoutEntidadeInput[] | ContactoEntidadeUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: ContactoEntidadeCreateOrConnectWithoutEntidadeInput | ContactoEntidadeCreateOrConnectWithoutEntidadeInput[]
    upsert?: ContactoEntidadeUpsertWithWhereUniqueWithoutEntidadeInput | ContactoEntidadeUpsertWithWhereUniqueWithoutEntidadeInput[]
    createMany?: ContactoEntidadeCreateManyEntidadeInputEnvelope
    set?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    disconnect?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    delete?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    connect?: ContactoEntidadeWhereUniqueInput | ContactoEntidadeWhereUniqueInput[]
    update?: ContactoEntidadeUpdateWithWhereUniqueWithoutEntidadeInput | ContactoEntidadeUpdateWithWhereUniqueWithoutEntidadeInput[]
    updateMany?: ContactoEntidadeUpdateManyWithWhereWithoutEntidadeInput | ContactoEntidadeUpdateManyWithWhereWithoutEntidadeInput[]
    deleteMany?: ContactoEntidadeScalarWhereInput | ContactoEntidadeScalarWhereInput[]
  }

  export type EspecialistasUncheckedUpdateManyWithoutEntidadeNestedInput = {
    create?: XOR<EspecialistasCreateWithoutEntidadeInput, EspecialistasUncheckedCreateWithoutEntidadeInput> | EspecialistasCreateWithoutEntidadeInput[] | EspecialistasUncheckedCreateWithoutEntidadeInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntidadeInput | EspecialistasCreateOrConnectWithoutEntidadeInput[]
    upsert?: EspecialistasUpsertWithWhereUniqueWithoutEntidadeInput | EspecialistasUpsertWithWhereUniqueWithoutEntidadeInput[]
    createMany?: EspecialistasCreateManyEntidadeInputEnvelope
    set?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    disconnect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    delete?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    update?: EspecialistasUpdateWithWhereUniqueWithoutEntidadeInput | EspecialistasUpdateWithWhereUniqueWithoutEntidadeInput[]
    updateMany?: EspecialistasUpdateManyWithWhereWithoutEntidadeInput | EspecialistasUpdateManyWithWhereWithoutEntidadeInput[]
    deleteMany?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
  }

  export type EntidadesSistemaCreateNestedOneWithoutContactosInput = {
    create?: XOR<EntidadesSistemaCreateWithoutContactosInput, EntidadesSistemaUncheckedCreateWithoutContactosInput>
    connectOrCreate?: EntidadesSistemaCreateOrConnectWithoutContactosInput
    connect?: EntidadesSistemaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntidadesSistemaUpdateOneRequiredWithoutContactosNestedInput = {
    create?: XOR<EntidadesSistemaCreateWithoutContactosInput, EntidadesSistemaUncheckedCreateWithoutContactosInput>
    connectOrCreate?: EntidadesSistemaCreateOrConnectWithoutContactosInput
    upsert?: EntidadesSistemaUpsertWithoutContactosInput
    connect?: EntidadesSistemaWhereUniqueInput
    update?: XOR<XOR<EntidadesSistemaUpdateToOneWithWhereWithoutContactosInput, EntidadesSistemaUpdateWithoutContactosInput>, EntidadesSistemaUncheckedUpdateWithoutContactosInput>
  }

  export type EntidadesSistemaCreateNestedOneWithoutEspecialistaInput = {
    create?: XOR<EntidadesSistemaCreateWithoutEspecialistaInput, EntidadesSistemaUncheckedCreateWithoutEspecialistaInput>
    connectOrCreate?: EntidadesSistemaCreateOrConnectWithoutEspecialistaInput
    connect?: EntidadesSistemaWhereUniqueInput
  }

  export type EnumSexoFieldUpdateOperationsInput = {
    set?: $Enums.Sexo
  }

  export type EntidadesSistemaUpdateOneRequiredWithoutEspecialistaNestedInput = {
    create?: XOR<EntidadesSistemaCreateWithoutEspecialistaInput, EntidadesSistemaUncheckedCreateWithoutEspecialistaInput>
    connectOrCreate?: EntidadesSistemaCreateOrConnectWithoutEspecialistaInput
    upsert?: EntidadesSistemaUpsertWithoutEspecialistaInput
    connect?: EntidadesSistemaWhereUniqueInput
    update?: XOR<XOR<EntidadesSistemaUpdateToOneWithWhereWithoutEspecialistaInput, EntidadesSistemaUpdateWithoutEspecialistaInput>, EntidadesSistemaUncheckedUpdateWithoutEspecialistaInput>
  }

  export type PublicacoesCreateNestedManyWithoutUsuarioPubInput = {
    create?: XOR<PublicacoesCreateWithoutUsuarioPubInput, PublicacoesUncheckedCreateWithoutUsuarioPubInput> | PublicacoesCreateWithoutUsuarioPubInput[] | PublicacoesUncheckedCreateWithoutUsuarioPubInput[]
    connectOrCreate?: PublicacoesCreateOrConnectWithoutUsuarioPubInput | PublicacoesCreateOrConnectWithoutUsuarioPubInput[]
    createMany?: PublicacoesCreateManyUsuarioPubInputEnvelope
    connect?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
  }

  export type NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput = {
    create?: XOR<NotificacoesCreateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput> | NotificacoesCreateWithoutUsuarioNotificacaoInput[] | NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput[]
    connectOrCreate?: NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput | NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput[]
    createMany?: NotificacoesCreateManyUsuarioNotificacaoInputEnvelope
    connect?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
  }

  export type MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput = {
    create?: XOR<MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput> | MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput | MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput[]
    createMany?: MensagemRecebidaCreateManyUsuarioSMSrecebidaInputEnvelope
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
  }

  export type MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput = {
    create?: XOR<MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput> | MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput[] | MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput | MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput[]
    createMany?: MensagemEnviadaCreateManyUsuarioSMSenviadaInputEnvelope
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
  }

  export type MensagensCreateNestedManyWithoutUsuarioMensagensInput = {
    create?: XOR<MensagensCreateWithoutUsuarioMensagensInput, MensagensUncheckedCreateWithoutUsuarioMensagensInput> | MensagensCreateWithoutUsuarioMensagensInput[] | MensagensUncheckedCreateWithoutUsuarioMensagensInput[]
    connectOrCreate?: MensagensCreateOrConnectWithoutUsuarioMensagensInput | MensagensCreateOrConnectWithoutUsuarioMensagensInput[]
    createMany?: MensagensCreateManyUsuarioMensagensInputEnvelope
    connect?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
  }

  export type ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput = {
    create?: XOR<ContactoUsuarioCreateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput> | ContactoUsuarioCreateWithoutUsuarioContactoInput[] | ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput[]
    connectOrCreate?: ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput | ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput[]
    createMany?: ContactoUsuarioCreateManyUsuarioContactoInputEnvelope
    connect?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
  }

  export type UserLoggedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLoggedCreateWithoutUserInput, UserLoggedUncheckedCreateWithoutUserInput> | UserLoggedCreateWithoutUserInput[] | UserLoggedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoggedCreateOrConnectWithoutUserInput | UserLoggedCreateOrConnectWithoutUserInput[]
    createMany?: UserLoggedCreateManyUserInputEnvelope
    connect?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
  }

  export type PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput = {
    create?: XOR<PublicacoesCreateWithoutUsuarioPubInput, PublicacoesUncheckedCreateWithoutUsuarioPubInput> | PublicacoesCreateWithoutUsuarioPubInput[] | PublicacoesUncheckedCreateWithoutUsuarioPubInput[]
    connectOrCreate?: PublicacoesCreateOrConnectWithoutUsuarioPubInput | PublicacoesCreateOrConnectWithoutUsuarioPubInput[]
    createMany?: PublicacoesCreateManyUsuarioPubInputEnvelope
    connect?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
  }

  export type NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput = {
    create?: XOR<NotificacoesCreateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput> | NotificacoesCreateWithoutUsuarioNotificacaoInput[] | NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput[]
    connectOrCreate?: NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput | NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput[]
    createMany?: NotificacoesCreateManyUsuarioNotificacaoInputEnvelope
    connect?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
  }

  export type MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput = {
    create?: XOR<MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput> | MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput | MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput[]
    createMany?: MensagemRecebidaCreateManyUsuarioSMSrecebidaInputEnvelope
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
  }

  export type MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput = {
    create?: XOR<MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput> | MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput[] | MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput | MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput[]
    createMany?: MensagemEnviadaCreateManyUsuarioSMSenviadaInputEnvelope
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
  }

  export type MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput = {
    create?: XOR<MensagensCreateWithoutUsuarioMensagensInput, MensagensUncheckedCreateWithoutUsuarioMensagensInput> | MensagensCreateWithoutUsuarioMensagensInput[] | MensagensUncheckedCreateWithoutUsuarioMensagensInput[]
    connectOrCreate?: MensagensCreateOrConnectWithoutUsuarioMensagensInput | MensagensCreateOrConnectWithoutUsuarioMensagensInput[]
    createMany?: MensagensCreateManyUsuarioMensagensInputEnvelope
    connect?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
  }

  export type ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput = {
    create?: XOR<ContactoUsuarioCreateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput> | ContactoUsuarioCreateWithoutUsuarioContactoInput[] | ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput[]
    connectOrCreate?: ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput | ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput[]
    createMany?: ContactoUsuarioCreateManyUsuarioContactoInputEnvelope
    connect?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
  }

  export type UserLoggedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLoggedCreateWithoutUserInput, UserLoggedUncheckedCreateWithoutUserInput> | UserLoggedCreateWithoutUserInput[] | UserLoggedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoggedCreateOrConnectWithoutUserInput | UserLoggedCreateOrConnectWithoutUserInput[]
    createMany?: UserLoggedCreateManyUserInputEnvelope
    connect?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PublicacoesUpdateManyWithoutUsuarioPubNestedInput = {
    create?: XOR<PublicacoesCreateWithoutUsuarioPubInput, PublicacoesUncheckedCreateWithoutUsuarioPubInput> | PublicacoesCreateWithoutUsuarioPubInput[] | PublicacoesUncheckedCreateWithoutUsuarioPubInput[]
    connectOrCreate?: PublicacoesCreateOrConnectWithoutUsuarioPubInput | PublicacoesCreateOrConnectWithoutUsuarioPubInput[]
    upsert?: PublicacoesUpsertWithWhereUniqueWithoutUsuarioPubInput | PublicacoesUpsertWithWhereUniqueWithoutUsuarioPubInput[]
    createMany?: PublicacoesCreateManyUsuarioPubInputEnvelope
    set?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    disconnect?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    delete?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    connect?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    update?: PublicacoesUpdateWithWhereUniqueWithoutUsuarioPubInput | PublicacoesUpdateWithWhereUniqueWithoutUsuarioPubInput[]
    updateMany?: PublicacoesUpdateManyWithWhereWithoutUsuarioPubInput | PublicacoesUpdateManyWithWhereWithoutUsuarioPubInput[]
    deleteMany?: PublicacoesScalarWhereInput | PublicacoesScalarWhereInput[]
  }

  export type NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput = {
    create?: XOR<NotificacoesCreateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput> | NotificacoesCreateWithoutUsuarioNotificacaoInput[] | NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput[]
    connectOrCreate?: NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput | NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput[]
    upsert?: NotificacoesUpsertWithWhereUniqueWithoutUsuarioNotificacaoInput | NotificacoesUpsertWithWhereUniqueWithoutUsuarioNotificacaoInput[]
    createMany?: NotificacoesCreateManyUsuarioNotificacaoInputEnvelope
    set?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    disconnect?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    delete?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    connect?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    update?: NotificacoesUpdateWithWhereUniqueWithoutUsuarioNotificacaoInput | NotificacoesUpdateWithWhereUniqueWithoutUsuarioNotificacaoInput[]
    updateMany?: NotificacoesUpdateManyWithWhereWithoutUsuarioNotificacaoInput | NotificacoesUpdateManyWithWhereWithoutUsuarioNotificacaoInput[]
    deleteMany?: NotificacoesScalarWhereInput | NotificacoesScalarWhereInput[]
  }

  export type MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput = {
    create?: XOR<MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput> | MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput | MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput[]
    upsert?: MensagemRecebidaUpsertWithWhereUniqueWithoutUsuarioSMSrecebidaInput | MensagemRecebidaUpsertWithWhereUniqueWithoutUsuarioSMSrecebidaInput[]
    createMany?: MensagemRecebidaCreateManyUsuarioSMSrecebidaInputEnvelope
    set?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    disconnect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    delete?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    update?: MensagemRecebidaUpdateWithWhereUniqueWithoutUsuarioSMSrecebidaInput | MensagemRecebidaUpdateWithWhereUniqueWithoutUsuarioSMSrecebidaInput[]
    updateMany?: MensagemRecebidaUpdateManyWithWhereWithoutUsuarioSMSrecebidaInput | MensagemRecebidaUpdateManyWithWhereWithoutUsuarioSMSrecebidaInput[]
    deleteMany?: MensagemRecebidaScalarWhereInput | MensagemRecebidaScalarWhereInput[]
  }

  export type MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput = {
    create?: XOR<MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput> | MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput[] | MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput | MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput[]
    upsert?: MensagemEnviadaUpsertWithWhereUniqueWithoutUsuarioSMSenviadaInput | MensagemEnviadaUpsertWithWhereUniqueWithoutUsuarioSMSenviadaInput[]
    createMany?: MensagemEnviadaCreateManyUsuarioSMSenviadaInputEnvelope
    set?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    disconnect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    delete?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    update?: MensagemEnviadaUpdateWithWhereUniqueWithoutUsuarioSMSenviadaInput | MensagemEnviadaUpdateWithWhereUniqueWithoutUsuarioSMSenviadaInput[]
    updateMany?: MensagemEnviadaUpdateManyWithWhereWithoutUsuarioSMSenviadaInput | MensagemEnviadaUpdateManyWithWhereWithoutUsuarioSMSenviadaInput[]
    deleteMany?: MensagemEnviadaScalarWhereInput | MensagemEnviadaScalarWhereInput[]
  }

  export type MensagensUpdateManyWithoutUsuarioMensagensNestedInput = {
    create?: XOR<MensagensCreateWithoutUsuarioMensagensInput, MensagensUncheckedCreateWithoutUsuarioMensagensInput> | MensagensCreateWithoutUsuarioMensagensInput[] | MensagensUncheckedCreateWithoutUsuarioMensagensInput[]
    connectOrCreate?: MensagensCreateOrConnectWithoutUsuarioMensagensInput | MensagensCreateOrConnectWithoutUsuarioMensagensInput[]
    upsert?: MensagensUpsertWithWhereUniqueWithoutUsuarioMensagensInput | MensagensUpsertWithWhereUniqueWithoutUsuarioMensagensInput[]
    createMany?: MensagensCreateManyUsuarioMensagensInputEnvelope
    set?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    disconnect?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    delete?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    connect?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    update?: MensagensUpdateWithWhereUniqueWithoutUsuarioMensagensInput | MensagensUpdateWithWhereUniqueWithoutUsuarioMensagensInput[]
    updateMany?: MensagensUpdateManyWithWhereWithoutUsuarioMensagensInput | MensagensUpdateManyWithWhereWithoutUsuarioMensagensInput[]
    deleteMany?: MensagensScalarWhereInput | MensagensScalarWhereInput[]
  }

  export type ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput = {
    create?: XOR<ContactoUsuarioCreateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput> | ContactoUsuarioCreateWithoutUsuarioContactoInput[] | ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput[]
    connectOrCreate?: ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput | ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput[]
    upsert?: ContactoUsuarioUpsertWithWhereUniqueWithoutUsuarioContactoInput | ContactoUsuarioUpsertWithWhereUniqueWithoutUsuarioContactoInput[]
    createMany?: ContactoUsuarioCreateManyUsuarioContactoInputEnvelope
    set?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    disconnect?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    delete?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    connect?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    update?: ContactoUsuarioUpdateWithWhereUniqueWithoutUsuarioContactoInput | ContactoUsuarioUpdateWithWhereUniqueWithoutUsuarioContactoInput[]
    updateMany?: ContactoUsuarioUpdateManyWithWhereWithoutUsuarioContactoInput | ContactoUsuarioUpdateManyWithWhereWithoutUsuarioContactoInput[]
    deleteMany?: ContactoUsuarioScalarWhereInput | ContactoUsuarioScalarWhereInput[]
  }

  export type UserLoggedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLoggedCreateWithoutUserInput, UserLoggedUncheckedCreateWithoutUserInput> | UserLoggedCreateWithoutUserInput[] | UserLoggedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoggedCreateOrConnectWithoutUserInput | UserLoggedCreateOrConnectWithoutUserInput[]
    upsert?: UserLoggedUpsertWithWhereUniqueWithoutUserInput | UserLoggedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLoggedCreateManyUserInputEnvelope
    set?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    disconnect?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    delete?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    connect?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    update?: UserLoggedUpdateWithWhereUniqueWithoutUserInput | UserLoggedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLoggedUpdateManyWithWhereWithoutUserInput | UserLoggedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLoggedScalarWhereInput | UserLoggedScalarWhereInput[]
  }

  export type PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput = {
    create?: XOR<PublicacoesCreateWithoutUsuarioPubInput, PublicacoesUncheckedCreateWithoutUsuarioPubInput> | PublicacoesCreateWithoutUsuarioPubInput[] | PublicacoesUncheckedCreateWithoutUsuarioPubInput[]
    connectOrCreate?: PublicacoesCreateOrConnectWithoutUsuarioPubInput | PublicacoesCreateOrConnectWithoutUsuarioPubInput[]
    upsert?: PublicacoesUpsertWithWhereUniqueWithoutUsuarioPubInput | PublicacoesUpsertWithWhereUniqueWithoutUsuarioPubInput[]
    createMany?: PublicacoesCreateManyUsuarioPubInputEnvelope
    set?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    disconnect?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    delete?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    connect?: PublicacoesWhereUniqueInput | PublicacoesWhereUniqueInput[]
    update?: PublicacoesUpdateWithWhereUniqueWithoutUsuarioPubInput | PublicacoesUpdateWithWhereUniqueWithoutUsuarioPubInput[]
    updateMany?: PublicacoesUpdateManyWithWhereWithoutUsuarioPubInput | PublicacoesUpdateManyWithWhereWithoutUsuarioPubInput[]
    deleteMany?: PublicacoesScalarWhereInput | PublicacoesScalarWhereInput[]
  }

  export type NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput = {
    create?: XOR<NotificacoesCreateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput> | NotificacoesCreateWithoutUsuarioNotificacaoInput[] | NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput[]
    connectOrCreate?: NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput | NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput[]
    upsert?: NotificacoesUpsertWithWhereUniqueWithoutUsuarioNotificacaoInput | NotificacoesUpsertWithWhereUniqueWithoutUsuarioNotificacaoInput[]
    createMany?: NotificacoesCreateManyUsuarioNotificacaoInputEnvelope
    set?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    disconnect?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    delete?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    connect?: NotificacoesWhereUniqueInput | NotificacoesWhereUniqueInput[]
    update?: NotificacoesUpdateWithWhereUniqueWithoutUsuarioNotificacaoInput | NotificacoesUpdateWithWhereUniqueWithoutUsuarioNotificacaoInput[]
    updateMany?: NotificacoesUpdateManyWithWhereWithoutUsuarioNotificacaoInput | NotificacoesUpdateManyWithWhereWithoutUsuarioNotificacaoInput[]
    deleteMany?: NotificacoesScalarWhereInput | NotificacoesScalarWhereInput[]
  }

  export type MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput = {
    create?: XOR<MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput> | MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput | MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput[]
    upsert?: MensagemRecebidaUpsertWithWhereUniqueWithoutUsuarioSMSrecebidaInput | MensagemRecebidaUpsertWithWhereUniqueWithoutUsuarioSMSrecebidaInput[]
    createMany?: MensagemRecebidaCreateManyUsuarioSMSrecebidaInputEnvelope
    set?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    disconnect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    delete?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    update?: MensagemRecebidaUpdateWithWhereUniqueWithoutUsuarioSMSrecebidaInput | MensagemRecebidaUpdateWithWhereUniqueWithoutUsuarioSMSrecebidaInput[]
    updateMany?: MensagemRecebidaUpdateManyWithWhereWithoutUsuarioSMSrecebidaInput | MensagemRecebidaUpdateManyWithWhereWithoutUsuarioSMSrecebidaInput[]
    deleteMany?: MensagemRecebidaScalarWhereInput | MensagemRecebidaScalarWhereInput[]
  }

  export type MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput = {
    create?: XOR<MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput> | MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput[] | MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput | MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput[]
    upsert?: MensagemEnviadaUpsertWithWhereUniqueWithoutUsuarioSMSenviadaInput | MensagemEnviadaUpsertWithWhereUniqueWithoutUsuarioSMSenviadaInput[]
    createMany?: MensagemEnviadaCreateManyUsuarioSMSenviadaInputEnvelope
    set?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    disconnect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    delete?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    update?: MensagemEnviadaUpdateWithWhereUniqueWithoutUsuarioSMSenviadaInput | MensagemEnviadaUpdateWithWhereUniqueWithoutUsuarioSMSenviadaInput[]
    updateMany?: MensagemEnviadaUpdateManyWithWhereWithoutUsuarioSMSenviadaInput | MensagemEnviadaUpdateManyWithWhereWithoutUsuarioSMSenviadaInput[]
    deleteMany?: MensagemEnviadaScalarWhereInput | MensagemEnviadaScalarWhereInput[]
  }

  export type MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput = {
    create?: XOR<MensagensCreateWithoutUsuarioMensagensInput, MensagensUncheckedCreateWithoutUsuarioMensagensInput> | MensagensCreateWithoutUsuarioMensagensInput[] | MensagensUncheckedCreateWithoutUsuarioMensagensInput[]
    connectOrCreate?: MensagensCreateOrConnectWithoutUsuarioMensagensInput | MensagensCreateOrConnectWithoutUsuarioMensagensInput[]
    upsert?: MensagensUpsertWithWhereUniqueWithoutUsuarioMensagensInput | MensagensUpsertWithWhereUniqueWithoutUsuarioMensagensInput[]
    createMany?: MensagensCreateManyUsuarioMensagensInputEnvelope
    set?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    disconnect?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    delete?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    connect?: MensagensWhereUniqueInput | MensagensWhereUniqueInput[]
    update?: MensagensUpdateWithWhereUniqueWithoutUsuarioMensagensInput | MensagensUpdateWithWhereUniqueWithoutUsuarioMensagensInput[]
    updateMany?: MensagensUpdateManyWithWhereWithoutUsuarioMensagensInput | MensagensUpdateManyWithWhereWithoutUsuarioMensagensInput[]
    deleteMany?: MensagensScalarWhereInput | MensagensScalarWhereInput[]
  }

  export type ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput = {
    create?: XOR<ContactoUsuarioCreateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput> | ContactoUsuarioCreateWithoutUsuarioContactoInput[] | ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput[]
    connectOrCreate?: ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput | ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput[]
    upsert?: ContactoUsuarioUpsertWithWhereUniqueWithoutUsuarioContactoInput | ContactoUsuarioUpsertWithWhereUniqueWithoutUsuarioContactoInput[]
    createMany?: ContactoUsuarioCreateManyUsuarioContactoInputEnvelope
    set?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    disconnect?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    delete?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    connect?: ContactoUsuarioWhereUniqueInput | ContactoUsuarioWhereUniqueInput[]
    update?: ContactoUsuarioUpdateWithWhereUniqueWithoutUsuarioContactoInput | ContactoUsuarioUpdateWithWhereUniqueWithoutUsuarioContactoInput[]
    updateMany?: ContactoUsuarioUpdateManyWithWhereWithoutUsuarioContactoInput | ContactoUsuarioUpdateManyWithWhereWithoutUsuarioContactoInput[]
    deleteMany?: ContactoUsuarioScalarWhereInput | ContactoUsuarioScalarWhereInput[]
  }

  export type UserLoggedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLoggedCreateWithoutUserInput, UserLoggedUncheckedCreateWithoutUserInput> | UserLoggedCreateWithoutUserInput[] | UserLoggedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoggedCreateOrConnectWithoutUserInput | UserLoggedCreateOrConnectWithoutUserInput[]
    upsert?: UserLoggedUpsertWithWhereUniqueWithoutUserInput | UserLoggedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLoggedCreateManyUserInputEnvelope
    set?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    disconnect?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    delete?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    connect?: UserLoggedWhereUniqueInput | UserLoggedWhereUniqueInput[]
    update?: UserLoggedUpdateWithWhereUniqueWithoutUserInput | UserLoggedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLoggedUpdateManyWithWhereWithoutUserInput | UserLoggedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLoggedScalarWhereInput | UserLoggedScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutUsuarioContactoInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioContactoInput, UsuariosUncheckedCreateWithoutUsuarioContactoInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioContactoInput
    connect?: UsuariosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutUsuarioContactoNestedInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioContactoInput, UsuariosUncheckedCreateWithoutUsuarioContactoInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioContactoInput
    upsert?: UsuariosUpsertWithoutUsuarioContactoInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUsuarioContactoInput, UsuariosUpdateWithoutUsuarioContactoInput>, UsuariosUncheckedUpdateWithoutUsuarioContactoInput>
  }

  export type UsuariosCreateNestedOneWithoutUserPubInput = {
    create?: XOR<UsuariosCreateWithoutUserPubInput, UsuariosUncheckedCreateWithoutUserPubInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUserPubInput
    connect?: UsuariosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutUserPubNestedInput = {
    create?: XOR<UsuariosCreateWithoutUserPubInput, UsuariosUncheckedCreateWithoutUserPubInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUserPubInput
    upsert?: UsuariosUpsertWithoutUserPubInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUserPubInput, UsuariosUpdateWithoutUserPubInput>, UsuariosUncheckedUpdateWithoutUserPubInput>
  }

  export type UsuariosCreateNestedOneWithoutUsuarioNotificacaoInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioNotificacaoInput, UsuariosUncheckedCreateWithoutUsuarioNotificacaoInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioNotificacaoInput
    connect?: UsuariosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutUsuarioNotificacaoNestedInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioNotificacaoInput, UsuariosUncheckedCreateWithoutUsuarioNotificacaoInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioNotificacaoInput
    upsert?: UsuariosUpsertWithoutUsuarioNotificacaoInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUsuarioNotificacaoInput, UsuariosUpdateWithoutUsuarioNotificacaoInput>, UsuariosUncheckedUpdateWithoutUsuarioNotificacaoInput>
  }

  export type MensagemRecebidaCreateNestedManyWithoutMensagemRecebidaInput = {
    create?: XOR<MensagemRecebidaCreateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput> | MensagemRecebidaCreateWithoutMensagemRecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput | MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput[]
    createMany?: MensagemRecebidaCreateManyMensagemRecebidaInputEnvelope
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
  }

  export type MensagemEnviadaCreateNestedManyWithoutMensagemEnviadaInput = {
    create?: XOR<MensagemEnviadaCreateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput> | MensagemEnviadaCreateWithoutMensagemEnviadaInput[] | MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput | MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput[]
    createMany?: MensagemEnviadaCreateManyMensagemEnviadaInputEnvelope
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
  }

  export type UsuariosCreateNestedOneWithoutUsuarioMensagensInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioMensagensInput, UsuariosUncheckedCreateWithoutUsuarioMensagensInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioMensagensInput
    connect?: UsuariosWhereUniqueInput
  }

  export type MensagemRecebidaUncheckedCreateNestedManyWithoutMensagemRecebidaInput = {
    create?: XOR<MensagemRecebidaCreateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput> | MensagemRecebidaCreateWithoutMensagemRecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput | MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput[]
    createMany?: MensagemRecebidaCreateManyMensagemRecebidaInputEnvelope
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
  }

  export type MensagemEnviadaUncheckedCreateNestedManyWithoutMensagemEnviadaInput = {
    create?: XOR<MensagemEnviadaCreateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput> | MensagemEnviadaCreateWithoutMensagemEnviadaInput[] | MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput | MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput[]
    createMany?: MensagemEnviadaCreateManyMensagemEnviadaInputEnvelope
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
  }

  export type MensagemRecebidaUpdateManyWithoutMensagemRecebidaNestedInput = {
    create?: XOR<MensagemRecebidaCreateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput> | MensagemRecebidaCreateWithoutMensagemRecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput | MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput[]
    upsert?: MensagemRecebidaUpsertWithWhereUniqueWithoutMensagemRecebidaInput | MensagemRecebidaUpsertWithWhereUniqueWithoutMensagemRecebidaInput[]
    createMany?: MensagemRecebidaCreateManyMensagemRecebidaInputEnvelope
    set?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    disconnect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    delete?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    update?: MensagemRecebidaUpdateWithWhereUniqueWithoutMensagemRecebidaInput | MensagemRecebidaUpdateWithWhereUniqueWithoutMensagemRecebidaInput[]
    updateMany?: MensagemRecebidaUpdateManyWithWhereWithoutMensagemRecebidaInput | MensagemRecebidaUpdateManyWithWhereWithoutMensagemRecebidaInput[]
    deleteMany?: MensagemRecebidaScalarWhereInput | MensagemRecebidaScalarWhereInput[]
  }

  export type MensagemEnviadaUpdateManyWithoutMensagemEnviadaNestedInput = {
    create?: XOR<MensagemEnviadaCreateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput> | MensagemEnviadaCreateWithoutMensagemEnviadaInput[] | MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput | MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput[]
    upsert?: MensagemEnviadaUpsertWithWhereUniqueWithoutMensagemEnviadaInput | MensagemEnviadaUpsertWithWhereUniqueWithoutMensagemEnviadaInput[]
    createMany?: MensagemEnviadaCreateManyMensagemEnviadaInputEnvelope
    set?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    disconnect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    delete?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    update?: MensagemEnviadaUpdateWithWhereUniqueWithoutMensagemEnviadaInput | MensagemEnviadaUpdateWithWhereUniqueWithoutMensagemEnviadaInput[]
    updateMany?: MensagemEnviadaUpdateManyWithWhereWithoutMensagemEnviadaInput | MensagemEnviadaUpdateManyWithWhereWithoutMensagemEnviadaInput[]
    deleteMany?: MensagemEnviadaScalarWhereInput | MensagemEnviadaScalarWhereInput[]
  }

  export type UsuariosUpdateOneRequiredWithoutUsuarioMensagensNestedInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioMensagensInput, UsuariosUncheckedCreateWithoutUsuarioMensagensInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioMensagensInput
    upsert?: UsuariosUpsertWithoutUsuarioMensagensInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUsuarioMensagensInput, UsuariosUpdateWithoutUsuarioMensagensInput>, UsuariosUncheckedUpdateWithoutUsuarioMensagensInput>
  }

  export type MensagemRecebidaUncheckedUpdateManyWithoutMensagemRecebidaNestedInput = {
    create?: XOR<MensagemRecebidaCreateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput> | MensagemRecebidaCreateWithoutMensagemRecebidaInput[] | MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput[]
    connectOrCreate?: MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput | MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput[]
    upsert?: MensagemRecebidaUpsertWithWhereUniqueWithoutMensagemRecebidaInput | MensagemRecebidaUpsertWithWhereUniqueWithoutMensagemRecebidaInput[]
    createMany?: MensagemRecebidaCreateManyMensagemRecebidaInputEnvelope
    set?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    disconnect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    delete?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    connect?: MensagemRecebidaWhereUniqueInput | MensagemRecebidaWhereUniqueInput[]
    update?: MensagemRecebidaUpdateWithWhereUniqueWithoutMensagemRecebidaInput | MensagemRecebidaUpdateWithWhereUniqueWithoutMensagemRecebidaInput[]
    updateMany?: MensagemRecebidaUpdateManyWithWhereWithoutMensagemRecebidaInput | MensagemRecebidaUpdateManyWithWhereWithoutMensagemRecebidaInput[]
    deleteMany?: MensagemRecebidaScalarWhereInput | MensagemRecebidaScalarWhereInput[]
  }

  export type MensagemEnviadaUncheckedUpdateManyWithoutMensagemEnviadaNestedInput = {
    create?: XOR<MensagemEnviadaCreateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput> | MensagemEnviadaCreateWithoutMensagemEnviadaInput[] | MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput[]
    connectOrCreate?: MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput | MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput[]
    upsert?: MensagemEnviadaUpsertWithWhereUniqueWithoutMensagemEnviadaInput | MensagemEnviadaUpsertWithWhereUniqueWithoutMensagemEnviadaInput[]
    createMany?: MensagemEnviadaCreateManyMensagemEnviadaInputEnvelope
    set?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    disconnect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    delete?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    connect?: MensagemEnviadaWhereUniqueInput | MensagemEnviadaWhereUniqueInput[]
    update?: MensagemEnviadaUpdateWithWhereUniqueWithoutMensagemEnviadaInput | MensagemEnviadaUpdateWithWhereUniqueWithoutMensagemEnviadaInput[]
    updateMany?: MensagemEnviadaUpdateManyWithWhereWithoutMensagemEnviadaInput | MensagemEnviadaUpdateManyWithWhereWithoutMensagemEnviadaInput[]
    deleteMany?: MensagemEnviadaScalarWhereInput | MensagemEnviadaScalarWhereInput[]
  }

  export type MensagensCreateNestedOneWithoutMensagemRecebidaInput = {
    create?: XOR<MensagensCreateWithoutMensagemRecebidaInput, MensagensUncheckedCreateWithoutMensagemRecebidaInput>
    connectOrCreate?: MensagensCreateOrConnectWithoutMensagemRecebidaInput
    connect?: MensagensWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutUsuarioSMSrecebidaInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioSMSrecebidaInput, UsuariosUncheckedCreateWithoutUsuarioSMSrecebidaInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioSMSrecebidaInput
    connect?: UsuariosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MensagensUpdateOneRequiredWithoutMensagemRecebidaNestedInput = {
    create?: XOR<MensagensCreateWithoutMensagemRecebidaInput, MensagensUncheckedCreateWithoutMensagemRecebidaInput>
    connectOrCreate?: MensagensCreateOrConnectWithoutMensagemRecebidaInput
    upsert?: MensagensUpsertWithoutMensagemRecebidaInput
    connect?: MensagensWhereUniqueInput
    update?: XOR<XOR<MensagensUpdateToOneWithWhereWithoutMensagemRecebidaInput, MensagensUpdateWithoutMensagemRecebidaInput>, MensagensUncheckedUpdateWithoutMensagemRecebidaInput>
  }

  export type UsuariosUpdateOneRequiredWithoutUsuarioSMSrecebidaNestedInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioSMSrecebidaInput, UsuariosUncheckedCreateWithoutUsuarioSMSrecebidaInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioSMSrecebidaInput
    upsert?: UsuariosUpsertWithoutUsuarioSMSrecebidaInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUsuarioSMSrecebidaInput, UsuariosUpdateWithoutUsuarioSMSrecebidaInput>, UsuariosUncheckedUpdateWithoutUsuarioSMSrecebidaInput>
  }

  export type MensagensCreateNestedOneWithoutMensagemEnviadaInput = {
    create?: XOR<MensagensCreateWithoutMensagemEnviadaInput, MensagensUncheckedCreateWithoutMensagemEnviadaInput>
    connectOrCreate?: MensagensCreateOrConnectWithoutMensagemEnviadaInput
    connect?: MensagensWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutUsuarioSMSenviadaInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioSMSenviadaInput, UsuariosUncheckedCreateWithoutUsuarioSMSenviadaInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioSMSenviadaInput
    connect?: UsuariosWhereUniqueInput
  }

  export type MensagensUpdateOneRequiredWithoutMensagemEnviadaNestedInput = {
    create?: XOR<MensagensCreateWithoutMensagemEnviadaInput, MensagensUncheckedCreateWithoutMensagemEnviadaInput>
    connectOrCreate?: MensagensCreateOrConnectWithoutMensagemEnviadaInput
    upsert?: MensagensUpsertWithoutMensagemEnviadaInput
    connect?: MensagensWhereUniqueInput
    update?: XOR<XOR<MensagensUpdateToOneWithWhereWithoutMensagemEnviadaInput, MensagensUpdateWithoutMensagemEnviadaInput>, MensagensUncheckedUpdateWithoutMensagemEnviadaInput>
  }

  export type UsuariosUpdateOneRequiredWithoutUsuarioSMSenviadaNestedInput = {
    create?: XOR<UsuariosCreateWithoutUsuarioSMSenviadaInput, UsuariosUncheckedCreateWithoutUsuarioSMSenviadaInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUsuarioSMSenviadaInput
    upsert?: UsuariosUpsertWithoutUsuarioSMSenviadaInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUsuarioSMSenviadaInput, UsuariosUpdateWithoutUsuarioSMSenviadaInput>, UsuariosUncheckedUpdateWithoutUsuarioSMSenviadaInput>
  }

  export type UsuariosCreateNestedOneWithoutUserLoggedInput = {
    create?: XOR<UsuariosCreateWithoutUserLoggedInput, UsuariosUncheckedCreateWithoutUserLoggedInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUserLoggedInput
    connect?: UsuariosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutUserLoggedNestedInput = {
    create?: XOR<UsuariosCreateWithoutUserLoggedInput, UsuariosUncheckedCreateWithoutUserLoggedInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutUserLoggedInput
    upsert?: UsuariosUpsertWithoutUserLoggedInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutUserLoggedInput, UsuariosUpdateWithoutUserLoggedInput>, UsuariosUncheckedUpdateWithoutUserLoggedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[]
    notIn?: $Enums.Sexo[]
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type NestedEnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[]
    notIn?: $Enums.Sexo[]
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactoEntidadeCreateWithoutEntidadeInput = {
    id?: string
    contacto: number
  }

  export type ContactoEntidadeUncheckedCreateWithoutEntidadeInput = {
    id?: string
    contacto: number
  }

  export type ContactoEntidadeCreateOrConnectWithoutEntidadeInput = {
    where: ContactoEntidadeWhereUniqueInput
    create: XOR<ContactoEntidadeCreateWithoutEntidadeInput, ContactoEntidadeUncheckedCreateWithoutEntidadeInput>
  }

  export type ContactoEntidadeCreateManyEntidadeInputEnvelope = {
    data: ContactoEntidadeCreateManyEntidadeInput | ContactoEntidadeCreateManyEntidadeInput[]
    skipDuplicates?: boolean
  }

  export type EspecialistasCreateWithoutEntidadeInput = {
    id?: string
    name: string
    especialidade: string
    crm: number
    sexo: $Enums.Sexo
  }

  export type EspecialistasUncheckedCreateWithoutEntidadeInput = {
    id?: string
    name: string
    especialidade: string
    crm: number
    sexo: $Enums.Sexo
  }

  export type EspecialistasCreateOrConnectWithoutEntidadeInput = {
    where: EspecialistasWhereUniqueInput
    create: XOR<EspecialistasCreateWithoutEntidadeInput, EspecialistasUncheckedCreateWithoutEntidadeInput>
  }

  export type EspecialistasCreateManyEntidadeInputEnvelope = {
    data: EspecialistasCreateManyEntidadeInput | EspecialistasCreateManyEntidadeInput[]
    skipDuplicates?: boolean
  }

  export type ContactoEntidadeUpsertWithWhereUniqueWithoutEntidadeInput = {
    where: ContactoEntidadeWhereUniqueInput
    update: XOR<ContactoEntidadeUpdateWithoutEntidadeInput, ContactoEntidadeUncheckedUpdateWithoutEntidadeInput>
    create: XOR<ContactoEntidadeCreateWithoutEntidadeInput, ContactoEntidadeUncheckedCreateWithoutEntidadeInput>
  }

  export type ContactoEntidadeUpdateWithWhereUniqueWithoutEntidadeInput = {
    where: ContactoEntidadeWhereUniqueInput
    data: XOR<ContactoEntidadeUpdateWithoutEntidadeInput, ContactoEntidadeUncheckedUpdateWithoutEntidadeInput>
  }

  export type ContactoEntidadeUpdateManyWithWhereWithoutEntidadeInput = {
    where: ContactoEntidadeScalarWhereInput
    data: XOR<ContactoEntidadeUpdateManyMutationInput, ContactoEntidadeUncheckedUpdateManyWithoutEntidadeInput>
  }

  export type ContactoEntidadeScalarWhereInput = {
    AND?: ContactoEntidadeScalarWhereInput | ContactoEntidadeScalarWhereInput[]
    OR?: ContactoEntidadeScalarWhereInput[]
    NOT?: ContactoEntidadeScalarWhereInput | ContactoEntidadeScalarWhereInput[]
    id?: StringFilter<"ContactoEntidade"> | string
    contacto?: IntFilter<"ContactoEntidade"> | number
    entidadeID?: StringFilter<"ContactoEntidade"> | string
  }

  export type EspecialistasUpsertWithWhereUniqueWithoutEntidadeInput = {
    where: EspecialistasWhereUniqueInput
    update: XOR<EspecialistasUpdateWithoutEntidadeInput, EspecialistasUncheckedUpdateWithoutEntidadeInput>
    create: XOR<EspecialistasCreateWithoutEntidadeInput, EspecialistasUncheckedCreateWithoutEntidadeInput>
  }

  export type EspecialistasUpdateWithWhereUniqueWithoutEntidadeInput = {
    where: EspecialistasWhereUniqueInput
    data: XOR<EspecialistasUpdateWithoutEntidadeInput, EspecialistasUncheckedUpdateWithoutEntidadeInput>
  }

  export type EspecialistasUpdateManyWithWhereWithoutEntidadeInput = {
    where: EspecialistasScalarWhereInput
    data: XOR<EspecialistasUpdateManyMutationInput, EspecialistasUncheckedUpdateManyWithoutEntidadeInput>
  }

  export type EspecialistasScalarWhereInput = {
    AND?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
    OR?: EspecialistasScalarWhereInput[]
    NOT?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
    id?: StringFilter<"Especialistas"> | string
    name?: StringFilter<"Especialistas"> | string
    especialidade?: StringFilter<"Especialistas"> | string
    crm?: IntFilter<"Especialistas"> | number
    entidadeID?: StringFilter<"Especialistas"> | string
    sexo?: EnumSexoFilter<"Especialistas"> | $Enums.Sexo
  }

  export type EntidadesSistemaCreateWithoutContactosInput = {
    id?: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
    especialista?: EspecialistasCreateNestedManyWithoutEntidadeInput
  }

  export type EntidadesSistemaUncheckedCreateWithoutContactosInput = {
    id?: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
    especialista?: EspecialistasUncheckedCreateNestedManyWithoutEntidadeInput
  }

  export type EntidadesSistemaCreateOrConnectWithoutContactosInput = {
    where: EntidadesSistemaWhereUniqueInput
    create: XOR<EntidadesSistemaCreateWithoutContactosInput, EntidadesSistemaUncheckedCreateWithoutContactosInput>
  }

  export type EntidadesSistemaUpsertWithoutContactosInput = {
    update: XOR<EntidadesSistemaUpdateWithoutContactosInput, EntidadesSistemaUncheckedUpdateWithoutContactosInput>
    create: XOR<EntidadesSistemaCreateWithoutContactosInput, EntidadesSistemaUncheckedCreateWithoutContactosInput>
    where?: EntidadesSistemaWhereInput
  }

  export type EntidadesSistemaUpdateToOneWithWhereWithoutContactosInput = {
    where?: EntidadesSistemaWhereInput
    data: XOR<EntidadesSistemaUpdateWithoutContactosInput, EntidadesSistemaUncheckedUpdateWithoutContactosInput>
  }

  export type EntidadesSistemaUpdateWithoutContactosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    especialista?: EspecialistasUpdateManyWithoutEntidadeNestedInput
  }

  export type EntidadesSistemaUncheckedUpdateWithoutContactosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    especialista?: EspecialistasUncheckedUpdateManyWithoutEntidadeNestedInput
  }

  export type EntidadesSistemaCreateWithoutEspecialistaInput = {
    id?: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
    contactos?: ContactoEntidadeCreateNestedManyWithoutEntidadeInput
  }

  export type EntidadesSistemaUncheckedCreateWithoutEspecialistaInput = {
    id?: string
    name: string
    cnpj: string
    tipo_entidade: string
    email: string
    endereco: string
    contactos?: ContactoEntidadeUncheckedCreateNestedManyWithoutEntidadeInput
  }

  export type EntidadesSistemaCreateOrConnectWithoutEspecialistaInput = {
    where: EntidadesSistemaWhereUniqueInput
    create: XOR<EntidadesSistemaCreateWithoutEspecialistaInput, EntidadesSistemaUncheckedCreateWithoutEspecialistaInput>
  }

  export type EntidadesSistemaUpsertWithoutEspecialistaInput = {
    update: XOR<EntidadesSistemaUpdateWithoutEspecialistaInput, EntidadesSistemaUncheckedUpdateWithoutEspecialistaInput>
    create: XOR<EntidadesSistemaCreateWithoutEspecialistaInput, EntidadesSistemaUncheckedCreateWithoutEspecialistaInput>
    where?: EntidadesSistemaWhereInput
  }

  export type EntidadesSistemaUpdateToOneWithWhereWithoutEspecialistaInput = {
    where?: EntidadesSistemaWhereInput
    data: XOR<EntidadesSistemaUpdateWithoutEspecialistaInput, EntidadesSistemaUncheckedUpdateWithoutEspecialistaInput>
  }

  export type EntidadesSistemaUpdateWithoutEspecialistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    contactos?: ContactoEntidadeUpdateManyWithoutEntidadeNestedInput
  }

  export type EntidadesSistemaUncheckedUpdateWithoutEspecialistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tipo_entidade?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    contactos?: ContactoEntidadeUncheckedUpdateManyWithoutEntidadeNestedInput
  }

  export type PublicacoesCreateWithoutUsuarioPubInput = {
    id?: string
    conteudo: string
    foto?: string | null
    video?: string | null
    data?: Date | string
  }

  export type PublicacoesUncheckedCreateWithoutUsuarioPubInput = {
    id?: string
    conteudo: string
    foto?: string | null
    video?: string | null
    data?: Date | string
  }

  export type PublicacoesCreateOrConnectWithoutUsuarioPubInput = {
    where: PublicacoesWhereUniqueInput
    create: XOR<PublicacoesCreateWithoutUsuarioPubInput, PublicacoesUncheckedCreateWithoutUsuarioPubInput>
  }

  export type PublicacoesCreateManyUsuarioPubInputEnvelope = {
    data: PublicacoesCreateManyUsuarioPubInput | PublicacoesCreateManyUsuarioPubInput[]
    skipDuplicates?: boolean
  }

  export type NotificacoesCreateWithoutUsuarioNotificacaoInput = {
    id?: string
    data?: Date | string
    conteudo: string
  }

  export type NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput = {
    id?: string
    data?: Date | string
    conteudo: string
  }

  export type NotificacoesCreateOrConnectWithoutUsuarioNotificacaoInput = {
    where: NotificacoesWhereUniqueInput
    create: XOR<NotificacoesCreateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput>
  }

  export type NotificacoesCreateManyUsuarioNotificacaoInputEnvelope = {
    data: NotificacoesCreateManyUsuarioNotificacaoInput | NotificacoesCreateManyUsuarioNotificacaoInput[]
    skipDuplicates?: boolean
  }

  export type MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    mensagemRecebida: MensagensCreateNestedOneWithoutMensagemRecebidaInput
  }

  export type MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    mensagemId: string
  }

  export type MensagemRecebidaCreateOrConnectWithoutUsuarioSMSrecebidaInput = {
    where: MensagemRecebidaWhereUniqueInput
    create: XOR<MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput>
  }

  export type MensagemRecebidaCreateManyUsuarioSMSrecebidaInputEnvelope = {
    data: MensagemRecebidaCreateManyUsuarioSMSrecebidaInput | MensagemRecebidaCreateManyUsuarioSMSrecebidaInput[]
    skipDuplicates?: boolean
  }

  export type MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput = {
    id?: string
    mensagemEnviada: MensagensCreateNestedOneWithoutMensagemEnviadaInput
  }

  export type MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput = {
    id?: string
    mensagemId: string
  }

  export type MensagemEnviadaCreateOrConnectWithoutUsuarioSMSenviadaInput = {
    where: MensagemEnviadaWhereUniqueInput
    create: XOR<MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput>
  }

  export type MensagemEnviadaCreateManyUsuarioSMSenviadaInputEnvelope = {
    data: MensagemEnviadaCreateManyUsuarioSMSenviadaInput | MensagemEnviadaCreateManyUsuarioSMSenviadaInput[]
    skipDuplicates?: boolean
  }

  export type MensagensCreateWithoutUsuarioMensagensInput = {
    id?: string
    conteudo: string
    data?: Date | string
    mensagemRecebida?: MensagemRecebidaCreateNestedManyWithoutMensagemRecebidaInput
    mensagemEnviada?: MensagemEnviadaCreateNestedManyWithoutMensagemEnviadaInput
  }

  export type MensagensUncheckedCreateWithoutUsuarioMensagensInput = {
    id?: string
    conteudo: string
    data?: Date | string
    mensagemRecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutMensagemRecebidaInput
    mensagemEnviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutMensagemEnviadaInput
  }

  export type MensagensCreateOrConnectWithoutUsuarioMensagensInput = {
    where: MensagensWhereUniqueInput
    create: XOR<MensagensCreateWithoutUsuarioMensagensInput, MensagensUncheckedCreateWithoutUsuarioMensagensInput>
  }

  export type MensagensCreateManyUsuarioMensagensInputEnvelope = {
    data: MensagensCreateManyUsuarioMensagensInput | MensagensCreateManyUsuarioMensagensInput[]
    skipDuplicates?: boolean
  }

  export type ContactoUsuarioCreateWithoutUsuarioContactoInput = {
    id?: string
    contacto: number
  }

  export type ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput = {
    id?: string
    contacto: number
  }

  export type ContactoUsuarioCreateOrConnectWithoutUsuarioContactoInput = {
    where: ContactoUsuarioWhereUniqueInput
    create: XOR<ContactoUsuarioCreateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput>
  }

  export type ContactoUsuarioCreateManyUsuarioContactoInputEnvelope = {
    data: ContactoUsuarioCreateManyUsuarioContactoInput | ContactoUsuarioCreateManyUsuarioContactoInput[]
    skipDuplicates?: boolean
  }

  export type UserLoggedCreateWithoutUserInput = {
    id?: string
  }

  export type UserLoggedUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type UserLoggedCreateOrConnectWithoutUserInput = {
    where: UserLoggedWhereUniqueInput
    create: XOR<UserLoggedCreateWithoutUserInput, UserLoggedUncheckedCreateWithoutUserInput>
  }

  export type UserLoggedCreateManyUserInputEnvelope = {
    data: UserLoggedCreateManyUserInput | UserLoggedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PublicacoesUpsertWithWhereUniqueWithoutUsuarioPubInput = {
    where: PublicacoesWhereUniqueInput
    update: XOR<PublicacoesUpdateWithoutUsuarioPubInput, PublicacoesUncheckedUpdateWithoutUsuarioPubInput>
    create: XOR<PublicacoesCreateWithoutUsuarioPubInput, PublicacoesUncheckedCreateWithoutUsuarioPubInput>
  }

  export type PublicacoesUpdateWithWhereUniqueWithoutUsuarioPubInput = {
    where: PublicacoesWhereUniqueInput
    data: XOR<PublicacoesUpdateWithoutUsuarioPubInput, PublicacoesUncheckedUpdateWithoutUsuarioPubInput>
  }

  export type PublicacoesUpdateManyWithWhereWithoutUsuarioPubInput = {
    where: PublicacoesScalarWhereInput
    data: XOR<PublicacoesUpdateManyMutationInput, PublicacoesUncheckedUpdateManyWithoutUsuarioPubInput>
  }

  export type PublicacoesScalarWhereInput = {
    AND?: PublicacoesScalarWhereInput | PublicacoesScalarWhereInput[]
    OR?: PublicacoesScalarWhereInput[]
    NOT?: PublicacoesScalarWhereInput | PublicacoesScalarWhereInput[]
    id?: StringFilter<"Publicacoes"> | string
    conteudo?: StringFilter<"Publicacoes"> | string
    foto?: StringNullableFilter<"Publicacoes"> | string | null
    video?: StringNullableFilter<"Publicacoes"> | string | null
    data?: DateTimeFilter<"Publicacoes"> | Date | string
    usuarioID?: StringFilter<"Publicacoes"> | string
  }

  export type NotificacoesUpsertWithWhereUniqueWithoutUsuarioNotificacaoInput = {
    where: NotificacoesWhereUniqueInput
    update: XOR<NotificacoesUpdateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedUpdateWithoutUsuarioNotificacaoInput>
    create: XOR<NotificacoesCreateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedCreateWithoutUsuarioNotificacaoInput>
  }

  export type NotificacoesUpdateWithWhereUniqueWithoutUsuarioNotificacaoInput = {
    where: NotificacoesWhereUniqueInput
    data: XOR<NotificacoesUpdateWithoutUsuarioNotificacaoInput, NotificacoesUncheckedUpdateWithoutUsuarioNotificacaoInput>
  }

  export type NotificacoesUpdateManyWithWhereWithoutUsuarioNotificacaoInput = {
    where: NotificacoesScalarWhereInput
    data: XOR<NotificacoesUpdateManyMutationInput, NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoInput>
  }

  export type NotificacoesScalarWhereInput = {
    AND?: NotificacoesScalarWhereInput | NotificacoesScalarWhereInput[]
    OR?: NotificacoesScalarWhereInput[]
    NOT?: NotificacoesScalarWhereInput | NotificacoesScalarWhereInput[]
    id?: StringFilter<"Notificacoes"> | string
    data?: DateTimeFilter<"Notificacoes"> | Date | string
    conteudo?: StringFilter<"Notificacoes"> | string
    usuarioID?: StringFilter<"Notificacoes"> | string
  }

  export type MensagemRecebidaUpsertWithWhereUniqueWithoutUsuarioSMSrecebidaInput = {
    where: MensagemRecebidaWhereUniqueInput
    update: XOR<MensagemRecebidaUpdateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedUpdateWithoutUsuarioSMSrecebidaInput>
    create: XOR<MensagemRecebidaCreateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedCreateWithoutUsuarioSMSrecebidaInput>
  }

  export type MensagemRecebidaUpdateWithWhereUniqueWithoutUsuarioSMSrecebidaInput = {
    where: MensagemRecebidaWhereUniqueInput
    data: XOR<MensagemRecebidaUpdateWithoutUsuarioSMSrecebidaInput, MensagemRecebidaUncheckedUpdateWithoutUsuarioSMSrecebidaInput>
  }

  export type MensagemRecebidaUpdateManyWithWhereWithoutUsuarioSMSrecebidaInput = {
    where: MensagemRecebidaScalarWhereInput
    data: XOR<MensagemRecebidaUpdateManyMutationInput, MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaInput>
  }

  export type MensagemRecebidaScalarWhereInput = {
    AND?: MensagemRecebidaScalarWhereInput | MensagemRecebidaScalarWhereInput[]
    OR?: MensagemRecebidaScalarWhereInput[]
    NOT?: MensagemRecebidaScalarWhereInput | MensagemRecebidaScalarWhereInput[]
    id?: StringFilter<"MensagemRecebida"> | string
    leitura?: BoolFilter<"MensagemRecebida"> | boolean
    data?: DateTimeFilter<"MensagemRecebida"> | Date | string
    mensagemId?: StringFilter<"MensagemRecebida"> | string
    usuarioID?: StringFilter<"MensagemRecebida"> | string
  }

  export type MensagemEnviadaUpsertWithWhereUniqueWithoutUsuarioSMSenviadaInput = {
    where: MensagemEnviadaWhereUniqueInput
    update: XOR<MensagemEnviadaUpdateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedUpdateWithoutUsuarioSMSenviadaInput>
    create: XOR<MensagemEnviadaCreateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedCreateWithoutUsuarioSMSenviadaInput>
  }

  export type MensagemEnviadaUpdateWithWhereUniqueWithoutUsuarioSMSenviadaInput = {
    where: MensagemEnviadaWhereUniqueInput
    data: XOR<MensagemEnviadaUpdateWithoutUsuarioSMSenviadaInput, MensagemEnviadaUncheckedUpdateWithoutUsuarioSMSenviadaInput>
  }

  export type MensagemEnviadaUpdateManyWithWhereWithoutUsuarioSMSenviadaInput = {
    where: MensagemEnviadaScalarWhereInput
    data: XOR<MensagemEnviadaUpdateManyMutationInput, MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaInput>
  }

  export type MensagemEnviadaScalarWhereInput = {
    AND?: MensagemEnviadaScalarWhereInput | MensagemEnviadaScalarWhereInput[]
    OR?: MensagemEnviadaScalarWhereInput[]
    NOT?: MensagemEnviadaScalarWhereInput | MensagemEnviadaScalarWhereInput[]
    id?: StringFilter<"MensagemEnviada"> | string
    mensagemId?: StringFilter<"MensagemEnviada"> | string
    usuarioID?: StringFilter<"MensagemEnviada"> | string
  }

  export type MensagensUpsertWithWhereUniqueWithoutUsuarioMensagensInput = {
    where: MensagensWhereUniqueInput
    update: XOR<MensagensUpdateWithoutUsuarioMensagensInput, MensagensUncheckedUpdateWithoutUsuarioMensagensInput>
    create: XOR<MensagensCreateWithoutUsuarioMensagensInput, MensagensUncheckedCreateWithoutUsuarioMensagensInput>
  }

  export type MensagensUpdateWithWhereUniqueWithoutUsuarioMensagensInput = {
    where: MensagensWhereUniqueInput
    data: XOR<MensagensUpdateWithoutUsuarioMensagensInput, MensagensUncheckedUpdateWithoutUsuarioMensagensInput>
  }

  export type MensagensUpdateManyWithWhereWithoutUsuarioMensagensInput = {
    where: MensagensScalarWhereInput
    data: XOR<MensagensUpdateManyMutationInput, MensagensUncheckedUpdateManyWithoutUsuarioMensagensInput>
  }

  export type MensagensScalarWhereInput = {
    AND?: MensagensScalarWhereInput | MensagensScalarWhereInput[]
    OR?: MensagensScalarWhereInput[]
    NOT?: MensagensScalarWhereInput | MensagensScalarWhereInput[]
    id?: StringFilter<"Mensagens"> | string
    conteudo?: StringFilter<"Mensagens"> | string
    data?: DateTimeFilter<"Mensagens"> | Date | string
    usuarioID?: StringFilter<"Mensagens"> | string
  }

  export type ContactoUsuarioUpsertWithWhereUniqueWithoutUsuarioContactoInput = {
    where: ContactoUsuarioWhereUniqueInput
    update: XOR<ContactoUsuarioUpdateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedUpdateWithoutUsuarioContactoInput>
    create: XOR<ContactoUsuarioCreateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedCreateWithoutUsuarioContactoInput>
  }

  export type ContactoUsuarioUpdateWithWhereUniqueWithoutUsuarioContactoInput = {
    where: ContactoUsuarioWhereUniqueInput
    data: XOR<ContactoUsuarioUpdateWithoutUsuarioContactoInput, ContactoUsuarioUncheckedUpdateWithoutUsuarioContactoInput>
  }

  export type ContactoUsuarioUpdateManyWithWhereWithoutUsuarioContactoInput = {
    where: ContactoUsuarioScalarWhereInput
    data: XOR<ContactoUsuarioUpdateManyMutationInput, ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoInput>
  }

  export type ContactoUsuarioScalarWhereInput = {
    AND?: ContactoUsuarioScalarWhereInput | ContactoUsuarioScalarWhereInput[]
    OR?: ContactoUsuarioScalarWhereInput[]
    NOT?: ContactoUsuarioScalarWhereInput | ContactoUsuarioScalarWhereInput[]
    id?: StringFilter<"ContactoUsuario"> | string
    contacto?: IntFilter<"ContactoUsuario"> | number
    usuarioID?: StringFilter<"ContactoUsuario"> | string
  }

  export type UserLoggedUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLoggedWhereUniqueInput
    update: XOR<UserLoggedUpdateWithoutUserInput, UserLoggedUncheckedUpdateWithoutUserInput>
    create: XOR<UserLoggedCreateWithoutUserInput, UserLoggedUncheckedCreateWithoutUserInput>
  }

  export type UserLoggedUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLoggedWhereUniqueInput
    data: XOR<UserLoggedUpdateWithoutUserInput, UserLoggedUncheckedUpdateWithoutUserInput>
  }

  export type UserLoggedUpdateManyWithWhereWithoutUserInput = {
    where: UserLoggedScalarWhereInput
    data: XOR<UserLoggedUpdateManyMutationInput, UserLoggedUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLoggedScalarWhereInput = {
    AND?: UserLoggedScalarWhereInput | UserLoggedScalarWhereInput[]
    OR?: UserLoggedScalarWhereInput[]
    NOT?: UserLoggedScalarWhereInput | UserLoggedScalarWhereInput[]
    id?: StringFilter<"UserLogged"> | string
    UserID?: StringFilter<"UserLogged"> | string
  }

  export type UsuariosCreateWithoutUsuarioContactoInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensCreateNestedManyWithoutUsuarioMensagensInput
    userLogged?: UserLoggedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUncheckedCreateWithoutUsuarioContactoInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput
    userLogged?: UserLoggedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuariosCreateOrConnectWithoutUsuarioContactoInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUsuarioContactoInput, UsuariosUncheckedCreateWithoutUsuarioContactoInput>
  }

  export type UsuariosUpsertWithoutUsuarioContactoInput = {
    update: XOR<UsuariosUpdateWithoutUsuarioContactoInput, UsuariosUncheckedUpdateWithoutUsuarioContactoInput>
    create: XOR<UsuariosCreateWithoutUsuarioContactoInput, UsuariosUncheckedCreateWithoutUsuarioContactoInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUsuarioContactoInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUsuarioContactoInput, UsuariosUncheckedUpdateWithoutUsuarioContactoInput>
  }

  export type UsuariosUpdateWithoutUsuarioContactoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUpdateManyWithoutUsuarioMensagensNestedInput
    userLogged?: UserLoggedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUsuarioContactoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput
    userLogged?: UserLoggedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosCreateWithoutUserPubInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    usuarioNotificacao?: NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUncheckedCreateWithoutUserPubInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    usuarioNotificacao?: NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuariosCreateOrConnectWithoutUserPubInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUserPubInput, UsuariosUncheckedCreateWithoutUserPubInput>
  }

  export type UsuariosUpsertWithoutUserPubInput = {
    update: XOR<UsuariosUpdateWithoutUserPubInput, UsuariosUncheckedUpdateWithoutUserPubInput>
    create: XOR<UsuariosCreateWithoutUserPubInput, UsuariosUncheckedCreateWithoutUserPubInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUserPubInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUserPubInput, UsuariosUncheckedUpdateWithoutUserPubInput>
  }

  export type UsuariosUpdateWithoutUserPubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioNotificacao?: NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUserPubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioNotificacao?: NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosCreateWithoutUsuarioNotificacaoInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesCreateNestedManyWithoutUsuarioPubInput
    usuarioSMSrecebida?: MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUncheckedCreateWithoutUsuarioNotificacaoInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuariosCreateOrConnectWithoutUsuarioNotificacaoInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUsuarioNotificacaoInput, UsuariosUncheckedCreateWithoutUsuarioNotificacaoInput>
  }

  export type UsuariosUpsertWithoutUsuarioNotificacaoInput = {
    update: XOR<UsuariosUpdateWithoutUsuarioNotificacaoInput, UsuariosUncheckedUpdateWithoutUsuarioNotificacaoInput>
    create: XOR<UsuariosCreateWithoutUsuarioNotificacaoInput, UsuariosUncheckedCreateWithoutUsuarioNotificacaoInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUsuarioNotificacaoInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUsuarioNotificacaoInput, UsuariosUncheckedUpdateWithoutUsuarioNotificacaoInput>
  }

  export type UsuariosUpdateWithoutUsuarioNotificacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUpdateManyWithoutUsuarioPubNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUsuarioNotificacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MensagemRecebidaCreateWithoutMensagemRecebidaInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    usuarioSMSrecebida: UsuariosCreateNestedOneWithoutUsuarioSMSrecebidaInput
  }

  export type MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    usuarioID: string
  }

  export type MensagemRecebidaCreateOrConnectWithoutMensagemRecebidaInput = {
    where: MensagemRecebidaWhereUniqueInput
    create: XOR<MensagemRecebidaCreateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput>
  }

  export type MensagemRecebidaCreateManyMensagemRecebidaInputEnvelope = {
    data: MensagemRecebidaCreateManyMensagemRecebidaInput | MensagemRecebidaCreateManyMensagemRecebidaInput[]
    skipDuplicates?: boolean
  }

  export type MensagemEnviadaCreateWithoutMensagemEnviadaInput = {
    id?: string
    usuarioSMSenviada: UsuariosCreateNestedOneWithoutUsuarioSMSenviadaInput
  }

  export type MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput = {
    id?: string
    usuarioID: string
  }

  export type MensagemEnviadaCreateOrConnectWithoutMensagemEnviadaInput = {
    where: MensagemEnviadaWhereUniqueInput
    create: XOR<MensagemEnviadaCreateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput>
  }

  export type MensagemEnviadaCreateManyMensagemEnviadaInputEnvelope = {
    data: MensagemEnviadaCreateManyMensagemEnviadaInput | MensagemEnviadaCreateManyMensagemEnviadaInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosCreateWithoutUsuarioMensagensInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioContacto?: ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUncheckedCreateWithoutUsuarioMensagensInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioContacto?: ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuariosCreateOrConnectWithoutUsuarioMensagensInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUsuarioMensagensInput, UsuariosUncheckedCreateWithoutUsuarioMensagensInput>
  }

  export type MensagemRecebidaUpsertWithWhereUniqueWithoutMensagemRecebidaInput = {
    where: MensagemRecebidaWhereUniqueInput
    update: XOR<MensagemRecebidaUpdateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedUpdateWithoutMensagemRecebidaInput>
    create: XOR<MensagemRecebidaCreateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedCreateWithoutMensagemRecebidaInput>
  }

  export type MensagemRecebidaUpdateWithWhereUniqueWithoutMensagemRecebidaInput = {
    where: MensagemRecebidaWhereUniqueInput
    data: XOR<MensagemRecebidaUpdateWithoutMensagemRecebidaInput, MensagemRecebidaUncheckedUpdateWithoutMensagemRecebidaInput>
  }

  export type MensagemRecebidaUpdateManyWithWhereWithoutMensagemRecebidaInput = {
    where: MensagemRecebidaScalarWhereInput
    data: XOR<MensagemRecebidaUpdateManyMutationInput, MensagemRecebidaUncheckedUpdateManyWithoutMensagemRecebidaInput>
  }

  export type MensagemEnviadaUpsertWithWhereUniqueWithoutMensagemEnviadaInput = {
    where: MensagemEnviadaWhereUniqueInput
    update: XOR<MensagemEnviadaUpdateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedUpdateWithoutMensagemEnviadaInput>
    create: XOR<MensagemEnviadaCreateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedCreateWithoutMensagemEnviadaInput>
  }

  export type MensagemEnviadaUpdateWithWhereUniqueWithoutMensagemEnviadaInput = {
    where: MensagemEnviadaWhereUniqueInput
    data: XOR<MensagemEnviadaUpdateWithoutMensagemEnviadaInput, MensagemEnviadaUncheckedUpdateWithoutMensagemEnviadaInput>
  }

  export type MensagemEnviadaUpdateManyWithWhereWithoutMensagemEnviadaInput = {
    where: MensagemEnviadaScalarWhereInput
    data: XOR<MensagemEnviadaUpdateManyMutationInput, MensagemEnviadaUncheckedUpdateManyWithoutMensagemEnviadaInput>
  }

  export type UsuariosUpsertWithoutUsuarioMensagensInput = {
    update: XOR<UsuariosUpdateWithoutUsuarioMensagensInput, UsuariosUncheckedUpdateWithoutUsuarioMensagensInput>
    create: XOR<UsuariosCreateWithoutUsuarioMensagensInput, UsuariosUncheckedCreateWithoutUsuarioMensagensInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUsuarioMensagensInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUsuarioMensagensInput, UsuariosUncheckedUpdateWithoutUsuarioMensagensInput>
  }

  export type UsuariosUpdateWithoutUsuarioMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioContacto?: ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUsuarioMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioContacto?: ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MensagensCreateWithoutMensagemRecebidaInput = {
    id?: string
    conteudo: string
    data?: Date | string
    mensagemEnviada?: MensagemEnviadaCreateNestedManyWithoutMensagemEnviadaInput
    usuarioMensagens: UsuariosCreateNestedOneWithoutUsuarioMensagensInput
  }

  export type MensagensUncheckedCreateWithoutMensagemRecebidaInput = {
    id?: string
    conteudo: string
    data?: Date | string
    usuarioID: string
    mensagemEnviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutMensagemEnviadaInput
  }

  export type MensagensCreateOrConnectWithoutMensagemRecebidaInput = {
    where: MensagensWhereUniqueInput
    create: XOR<MensagensCreateWithoutMensagemRecebidaInput, MensagensUncheckedCreateWithoutMensagemRecebidaInput>
  }

  export type UsuariosCreateWithoutUsuarioSMSrecebidaInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSenviada?: MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUncheckedCreateWithoutUsuarioSMSrecebidaInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuariosCreateOrConnectWithoutUsuarioSMSrecebidaInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUsuarioSMSrecebidaInput, UsuariosUncheckedCreateWithoutUsuarioSMSrecebidaInput>
  }

  export type MensagensUpsertWithoutMensagemRecebidaInput = {
    update: XOR<MensagensUpdateWithoutMensagemRecebidaInput, MensagensUncheckedUpdateWithoutMensagemRecebidaInput>
    create: XOR<MensagensCreateWithoutMensagemRecebidaInput, MensagensUncheckedCreateWithoutMensagemRecebidaInput>
    where?: MensagensWhereInput
  }

  export type MensagensUpdateToOneWithWhereWithoutMensagemRecebidaInput = {
    where?: MensagensWhereInput
    data: XOR<MensagensUpdateWithoutMensagemRecebidaInput, MensagensUncheckedUpdateWithoutMensagemRecebidaInput>
  }

  export type MensagensUpdateWithoutMensagemRecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemEnviada?: MensagemEnviadaUpdateManyWithoutMensagemEnviadaNestedInput
    usuarioMensagens?: UsuariosUpdateOneRequiredWithoutUsuarioMensagensNestedInput
  }

  export type MensagensUncheckedUpdateWithoutMensagemRecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
    mensagemEnviada?: MensagemEnviadaUncheckedUpdateManyWithoutMensagemEnviadaNestedInput
  }

  export type UsuariosUpsertWithoutUsuarioSMSrecebidaInput = {
    update: XOR<UsuariosUpdateWithoutUsuarioSMSrecebidaInput, UsuariosUncheckedUpdateWithoutUsuarioSMSrecebidaInput>
    create: XOR<UsuariosCreateWithoutUsuarioSMSrecebidaInput, UsuariosUncheckedCreateWithoutUsuarioSMSrecebidaInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUsuarioSMSrecebidaInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUsuarioSMSrecebidaInput, UsuariosUncheckedUpdateWithoutUsuarioSMSrecebidaInput>
  }

  export type UsuariosUpdateWithoutUsuarioSMSrecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSenviada?: MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUsuarioSMSrecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MensagensCreateWithoutMensagemEnviadaInput = {
    id?: string
    conteudo: string
    data?: Date | string
    mensagemRecebida?: MensagemRecebidaCreateNestedManyWithoutMensagemRecebidaInput
    usuarioMensagens: UsuariosCreateNestedOneWithoutUsuarioMensagensInput
  }

  export type MensagensUncheckedCreateWithoutMensagemEnviadaInput = {
    id?: string
    conteudo: string
    data?: Date | string
    usuarioID: string
    mensagemRecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutMensagemRecebidaInput
  }

  export type MensagensCreateOrConnectWithoutMensagemEnviadaInput = {
    where: MensagensWhereUniqueInput
    create: XOR<MensagensCreateWithoutMensagemEnviadaInput, MensagensUncheckedCreateWithoutMensagemEnviadaInput>
  }

  export type UsuariosCreateWithoutUsuarioSMSenviadaInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioMensagens?: MensagensCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedCreateNestedManyWithoutUserInput
  }

  export type UsuariosUncheckedCreateWithoutUsuarioSMSenviadaInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioMensagens?: MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput
    userLogged?: UserLoggedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuariosCreateOrConnectWithoutUsuarioSMSenviadaInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUsuarioSMSenviadaInput, UsuariosUncheckedCreateWithoutUsuarioSMSenviadaInput>
  }

  export type MensagensUpsertWithoutMensagemEnviadaInput = {
    update: XOR<MensagensUpdateWithoutMensagemEnviadaInput, MensagensUncheckedUpdateWithoutMensagemEnviadaInput>
    create: XOR<MensagensCreateWithoutMensagemEnviadaInput, MensagensUncheckedCreateWithoutMensagemEnviadaInput>
    where?: MensagensWhereInput
  }

  export type MensagensUpdateToOneWithWhereWithoutMensagemEnviadaInput = {
    where?: MensagensWhereInput
    data: XOR<MensagensUpdateWithoutMensagemEnviadaInput, MensagensUncheckedUpdateWithoutMensagemEnviadaInput>
  }

  export type MensagensUpdateWithoutMensagemEnviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemRecebida?: MensagemRecebidaUpdateManyWithoutMensagemRecebidaNestedInput
    usuarioMensagens?: UsuariosUpdateOneRequiredWithoutUsuarioMensagensNestedInput
  }

  export type MensagensUncheckedUpdateWithoutMensagemEnviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
    mensagemRecebida?: MensagemRecebidaUncheckedUpdateManyWithoutMensagemRecebidaNestedInput
  }

  export type UsuariosUpsertWithoutUsuarioSMSenviadaInput = {
    update: XOR<UsuariosUpdateWithoutUsuarioSMSenviadaInput, UsuariosUncheckedUpdateWithoutUsuarioSMSenviadaInput>
    create: XOR<UsuariosCreateWithoutUsuarioSMSenviadaInput, UsuariosUncheckedCreateWithoutUsuarioSMSenviadaInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUsuarioSMSenviadaInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUsuarioSMSenviadaInput, UsuariosUncheckedUpdateWithoutUsuarioSMSenviadaInput>
  }

  export type UsuariosUpdateWithoutUsuarioSMSenviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioMensagens?: MensagensUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUsuarioSMSenviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioMensagens?: MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput
    userLogged?: UserLoggedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuariosCreateWithoutUserLoggedInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioCreateNestedManyWithoutUsuarioContactoInput
  }

  export type UsuariosUncheckedCreateWithoutUserLoggedInput = {
    id?: string
    name: string
    email: string
    senha: string
    sexo: $Enums.Sexo
    foto?: string | null
    crm?: number | null
    cnpj?: number | null
    nascimento: Date | string
    userPub?: PublicacoesUncheckedCreateNestedManyWithoutUsuarioPubInput
    usuarioNotificacao?: NotificacoesUncheckedCreateNestedManyWithoutUsuarioNotificacaoInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedCreateNestedManyWithoutUsuarioSMSrecebidaInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedCreateNestedManyWithoutUsuarioSMSenviadaInput
    usuarioMensagens?: MensagensUncheckedCreateNestedManyWithoutUsuarioMensagensInput
    usuarioContacto?: ContactoUsuarioUncheckedCreateNestedManyWithoutUsuarioContactoInput
  }

  export type UsuariosCreateOrConnectWithoutUserLoggedInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutUserLoggedInput, UsuariosUncheckedCreateWithoutUserLoggedInput>
  }

  export type UsuariosUpsertWithoutUserLoggedInput = {
    update: XOR<UsuariosUpdateWithoutUserLoggedInput, UsuariosUncheckedUpdateWithoutUserLoggedInput>
    create: XOR<UsuariosCreateWithoutUserLoggedInput, UsuariosUncheckedCreateWithoutUserLoggedInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutUserLoggedInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutUserLoggedInput, UsuariosUncheckedUpdateWithoutUserLoggedInput>
  }

  export type UsuariosUpdateWithoutUserLoggedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUpdateManyWithoutUsuarioContactoNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutUserLoggedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    crm?: NullableIntFieldUpdateOperationsInput | number | null
    cnpj?: NullableIntFieldUpdateOperationsInput | number | null
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    userPub?: PublicacoesUncheckedUpdateManyWithoutUsuarioPubNestedInput
    usuarioNotificacao?: NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoNestedInput
    usuarioSMSrecebida?: MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaNestedInput
    usuarioSMSenviada?: MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaNestedInput
    usuarioMensagens?: MensagensUncheckedUpdateManyWithoutUsuarioMensagensNestedInput
    usuarioContacto?: ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoNestedInput
  }

  export type ContactoEntidadeCreateManyEntidadeInput = {
    id?: string
    contacto: number
  }

  export type EspecialistasCreateManyEntidadeInput = {
    id?: string
    name: string
    especialidade: string
    crm: number
    sexo: $Enums.Sexo
  }

  export type ContactoEntidadeUpdateWithoutEntidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type ContactoEntidadeUncheckedUpdateWithoutEntidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type ContactoEntidadeUncheckedUpdateManyWithoutEntidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type EspecialistasUpdateWithoutEntidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    crm?: IntFieldUpdateOperationsInput | number
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EspecialistasUncheckedUpdateWithoutEntidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    crm?: IntFieldUpdateOperationsInput | number
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EspecialistasUncheckedUpdateManyWithoutEntidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    crm?: IntFieldUpdateOperationsInput | number
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type PublicacoesCreateManyUsuarioPubInput = {
    id?: string
    conteudo: string
    foto?: string | null
    video?: string | null
    data?: Date | string
  }

  export type NotificacoesCreateManyUsuarioNotificacaoInput = {
    id?: string
    data?: Date | string
    conteudo: string
  }

  export type MensagemRecebidaCreateManyUsuarioSMSrecebidaInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    mensagemId: string
  }

  export type MensagemEnviadaCreateManyUsuarioSMSenviadaInput = {
    id?: string
    mensagemId: string
  }

  export type MensagensCreateManyUsuarioMensagensInput = {
    id?: string
    conteudo: string
    data?: Date | string
  }

  export type ContactoUsuarioCreateManyUsuarioContactoInput = {
    id?: string
    contacto: number
  }

  export type UserLoggedCreateManyUserInput = {
    id?: string
  }

  export type PublicacoesUpdateWithoutUsuarioPubInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacoesUncheckedUpdateWithoutUsuarioPubInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacoesUncheckedUpdateManyWithoutUsuarioPubInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacoesUpdateWithoutUsuarioNotificacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacoesUncheckedUpdateWithoutUsuarioNotificacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacoesUncheckedUpdateManyWithoutUsuarioNotificacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemRecebidaUpdateWithoutUsuarioSMSrecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemRecebida?: MensagensUpdateOneRequiredWithoutMensagemRecebidaNestedInput
  }

  export type MensagemRecebidaUncheckedUpdateWithoutUsuarioSMSrecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemId?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemRecebidaUncheckedUpdateManyWithoutUsuarioSMSrecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemId?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemEnviadaUpdateWithoutUsuarioSMSenviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemEnviada?: MensagensUpdateOneRequiredWithoutMensagemEnviadaNestedInput
  }

  export type MensagemEnviadaUncheckedUpdateWithoutUsuarioSMSenviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemId?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemEnviadaUncheckedUpdateManyWithoutUsuarioSMSenviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemId?: StringFieldUpdateOperationsInput | string
  }

  export type MensagensUpdateWithoutUsuarioMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemRecebida?: MensagemRecebidaUpdateManyWithoutMensagemRecebidaNestedInput
    mensagemEnviada?: MensagemEnviadaUpdateManyWithoutMensagemEnviadaNestedInput
  }

  export type MensagensUncheckedUpdateWithoutUsuarioMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagemRecebida?: MensagemRecebidaUncheckedUpdateManyWithoutMensagemRecebidaNestedInput
    mensagemEnviada?: MensagemEnviadaUncheckedUpdateManyWithoutMensagemEnviadaNestedInput
  }

  export type MensagensUncheckedUpdateManyWithoutUsuarioMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoUsuarioUpdateWithoutUsuarioContactoInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type ContactoUsuarioUncheckedUpdateWithoutUsuarioContactoInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type ContactoUsuarioUncheckedUpdateManyWithoutUsuarioContactoInput = {
    id?: StringFieldUpdateOperationsInput | string
    contacto?: IntFieldUpdateOperationsInput | number
  }

  export type UserLoggedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoggedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoggedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemRecebidaCreateManyMensagemRecebidaInput = {
    id?: string
    leitura?: boolean
    data?: Date | string
    usuarioID: string
  }

  export type MensagemEnviadaCreateManyMensagemEnviadaInput = {
    id?: string
    usuarioID: string
  }

  export type MensagemRecebidaUpdateWithoutMensagemRecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioSMSrecebida?: UsuariosUpdateOneRequiredWithoutUsuarioSMSrecebidaNestedInput
  }

  export type MensagemRecebidaUncheckedUpdateWithoutMensagemRecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemRecebidaUncheckedUpdateManyWithoutMensagemRecebidaInput = {
    id?: StringFieldUpdateOperationsInput | string
    leitura?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemEnviadaUpdateWithoutMensagemEnviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioSMSenviada?: UsuariosUpdateOneRequiredWithoutUsuarioSMSenviadaNestedInput
  }

  export type MensagemEnviadaUncheckedUpdateWithoutMensagemEnviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemEnviadaUncheckedUpdateManyWithoutMensagemEnviadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioID?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EntidadesSistemaCountOutputTypeDefaultArgs instead
     */
    export type EntidadesSistemaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntidadesSistemaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariosCountOutputTypeDefaultArgs instead
     */
    export type UsuariosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensagensCountOutputTypeDefaultArgs instead
     */
    export type MensagensCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensagensCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntidadesSistemaDefaultArgs instead
     */
    export type EntidadesSistemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntidadesSistemaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactoEntidadeDefaultArgs instead
     */
    export type ContactoEntidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactoEntidadeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EspecialistasDefaultArgs instead
     */
    export type EspecialistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EspecialistasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariosDefaultArgs instead
     */
    export type UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactoUsuarioDefaultArgs instead
     */
    export type ContactoUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactoUsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicacoesDefaultArgs instead
     */
    export type PublicacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicacoesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificacoesDefaultArgs instead
     */
    export type NotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificacoesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensagensDefaultArgs instead
     */
    export type MensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensagensDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensagemRecebidaDefaultArgs instead
     */
    export type MensagemRecebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensagemRecebidaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensagemEnviadaDefaultArgs instead
     */
    export type MensagemEnviadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensagemEnviadaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokensDefaultArgs instead
     */
    export type TokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokensDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLoggedDefaultArgs instead
     */
    export type UserLoggedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLoggedDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}