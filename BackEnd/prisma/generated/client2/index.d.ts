
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
 * Model Entidades
 * 
 */
export type Entidades = $Result.DefaultSelection<Prisma.$EntidadesPayload>
/**
 * Model Especialistas
 * 
 */
export type Especialistas = $Result.DefaultSelection<Prisma.$EspecialistasPayload>
/**
 * Model contacto
 * 
 */
export type contacto = $Result.DefaultSelection<Prisma.$contactoPayload>
/**
 * Model endereco
 * 
 */
export type endereco = $Result.DefaultSelection<Prisma.$enderecoPayload>

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
 * // Fetch zero or more Entidades
 * const entidades = await prisma.entidades.findMany()
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
   * // Fetch zero or more Entidades
   * const entidades = await prisma.entidades.findMany()
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
   * `prisma.entidades`: Exposes CRUD operations for the **Entidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entidades
    * const entidades = await prisma.entidades.findMany()
    * ```
    */
  get entidades(): Prisma.EntidadesDelegate<ExtArgs>;

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
   * `prisma.contacto`: Exposes CRUD operations for the **contacto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactos
    * const contactos = await prisma.contacto.findMany()
    * ```
    */
  get contacto(): Prisma.contactoDelegate<ExtArgs>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.enderecoDelegate<ExtArgs>;
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
    Entidades: 'Entidades',
    Especialistas: 'Especialistas',
    contacto: 'contacto',
    endereco: 'endereco'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db1?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'entidades' | 'especialistas' | 'contacto' | 'endereco'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Entidades: {
        payload: Prisma.$EntidadesPayload<ExtArgs>
        fields: Prisma.EntidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntidadesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntidadesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload>
          }
          findFirst: {
            args: Prisma.EntidadesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntidadesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload>
          }
          findMany: {
            args: Prisma.EntidadesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload>[]
          }
          create: {
            args: Prisma.EntidadesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload>
          }
          createMany: {
            args: Prisma.EntidadesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EntidadesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload>
          }
          update: {
            args: Prisma.EntidadesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload>
          }
          deleteMany: {
            args: Prisma.EntidadesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntidadesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntidadesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntidadesPayload>
          }
          aggregate: {
            args: Prisma.EntidadesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntidades>
          }
          groupBy: {
            args: Prisma.EntidadesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntidadesCountArgs<ExtArgs>,
            result: $Utils.Optional<EntidadesCountAggregateOutputType> | number
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
      contacto: {
        payload: Prisma.$contactoPayload<ExtArgs>
        fields: Prisma.contactoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          findFirst: {
            args: Prisma.contactoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          findMany: {
            args: Prisma.contactoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>[]
          }
          create: {
            args: Prisma.contactoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          createMany: {
            args: Prisma.contactoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.contactoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          update: {
            args: Prisma.contactoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          deleteMany: {
            args: Prisma.contactoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.contactoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.contactoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          aggregate: {
            args: Prisma.ContactoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContacto>
          }
          groupBy: {
            args: Prisma.contactoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactoGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactoCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactoCountAggregateOutputType> | number
          }
        }
      }
      endereco: {
        payload: Prisma.$enderecoPayload<ExtArgs>
        fields: Prisma.enderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findFirst: {
            args: Prisma.enderecoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findMany: {
            args: Prisma.enderecoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          create: {
            args: Prisma.enderecoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          createMany: {
            args: Prisma.enderecoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.enderecoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          update: {
            args: Prisma.enderecoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          deleteMany: {
            args: Prisma.enderecoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.enderecoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.enderecoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.enderecoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecoCountArgs<ExtArgs>,
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
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
   * Count Type EntidadesCountOutputType
   */

  export type EntidadesCountOutputType = {
    contacto: number
    especialistas: number
  }

  export type EntidadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacto?: boolean | EntidadesCountOutputTypeCountContactoArgs
    especialistas?: boolean | EntidadesCountOutputTypeCountEspecialistasArgs
  }

  // Custom InputTypes

  /**
   * EntidadesCountOutputType without action
   */
  export type EntidadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadesCountOutputType
     */
    select?: EntidadesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EntidadesCountOutputType without action
   */
  export type EntidadesCountOutputTypeCountContactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactoWhereInput
  }


  /**
   * EntidadesCountOutputType without action
   */
  export type EntidadesCountOutputTypeCountEspecialistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialistasWhereInput
  }



  /**
   * Count Type EnderecoCountOutputType
   */

  export type EnderecoCountOutputType = {
    entitie: number
  }

  export type EnderecoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entitie?: boolean | EnderecoCountOutputTypeCountEntitieArgs
  }

  // Custom InputTypes

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     */
    select?: EnderecoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountEntitieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Entidades
   */

  export type AggregateEntidades = {
    _count: EntidadesCountAggregateOutputType | null
    _min: EntidadesMinAggregateOutputType | null
    _max: EntidadesMaxAggregateOutputType | null
  }

  export type EntidadesMinAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    type: string | null
    id_endereco: string | null
  }

  export type EntidadesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    type: string | null
    id_endereco: string | null
  }

  export type EntidadesCountAggregateOutputType = {
    id: number
    name: number
    cnpj: number
    type: number
    id_endereco: number
    _all: number
  }


  export type EntidadesMinAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    type?: true
    id_endereco?: true
  }

  export type EntidadesMaxAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    type?: true
    id_endereco?: true
  }

  export type EntidadesCountAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    type?: true
    id_endereco?: true
    _all?: true
  }

  export type EntidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entidades to aggregate.
     */
    where?: EntidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidades to fetch.
     */
    orderBy?: EntidadesOrderByWithRelationInput | EntidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entidades
    **/
    _count?: true | EntidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntidadesMaxAggregateInputType
  }

  export type GetEntidadesAggregateType<T extends EntidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateEntidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntidades[P]>
      : GetScalarType<T[P], AggregateEntidades[P]>
  }




  export type EntidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadesWhereInput
    orderBy?: EntidadesOrderByWithAggregationInput | EntidadesOrderByWithAggregationInput[]
    by: EntidadesScalarFieldEnum[] | EntidadesScalarFieldEnum
    having?: EntidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntidadesCountAggregateInputType | true
    _min?: EntidadesMinAggregateInputType
    _max?: EntidadesMaxAggregateInputType
  }

  export type EntidadesGroupByOutputType = {
    id: string
    name: string
    cnpj: string
    type: string
    id_endereco: string
    _count: EntidadesCountAggregateOutputType | null
    _min: EntidadesMinAggregateOutputType | null
    _max: EntidadesMaxAggregateOutputType | null
  }

  type GetEntidadesGroupByPayload<T extends EntidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntidadesGroupByOutputType[P]>
            : GetScalarType<T[P], EntidadesGroupByOutputType[P]>
        }
      >
    >


  export type EntidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    type?: boolean
    id_endereco?: boolean
    endereco?: boolean | enderecoDefaultArgs<ExtArgs>
    contacto?: boolean | Entidades$contactoArgs<ExtArgs>
    especialistas?: boolean | Entidades$especialistasArgs<ExtArgs>
    _count?: boolean | EntidadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entidades"]>

  export type EntidadesSelectScalar = {
    id?: boolean
    name?: boolean
    cnpj?: boolean
    type?: boolean
    id_endereco?: boolean
  }

  export type EntidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | enderecoDefaultArgs<ExtArgs>
    contacto?: boolean | Entidades$contactoArgs<ExtArgs>
    especialistas?: boolean | Entidades$especialistasArgs<ExtArgs>
    _count?: boolean | EntidadesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EntidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entidades"
    objects: {
      endereco: Prisma.$enderecoPayload<ExtArgs>
      contacto: Prisma.$contactoPayload<ExtArgs>[]
      especialistas: Prisma.$EspecialistasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cnpj: string
      type: string
      id_endereco: string
    }, ExtArgs["result"]["entidades"]>
    composites: {}
  }


  type EntidadesGetPayload<S extends boolean | null | undefined | EntidadesDefaultArgs> = $Result.GetResult<Prisma.$EntidadesPayload, S>

  type EntidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntidadesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntidadesCountAggregateInputType | true
    }

  export interface EntidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entidades'], meta: { name: 'Entidades' } }
    /**
     * Find zero or one Entidades that matches the filter.
     * @param {EntidadesFindUniqueArgs} args - Arguments to find a Entidades
     * @example
     * // Get one Entidades
     * const entidades = await prisma.entidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntidadesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesFindUniqueArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Entidades that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EntidadesFindUniqueOrThrowArgs} args - Arguments to find a Entidades
     * @example
     * // Get one Entidades
     * const entidades = await prisma.entidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntidadesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Entidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesFindFirstArgs} args - Arguments to find a Entidades
     * @example
     * // Get one Entidades
     * const entidades = await prisma.entidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntidadesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesFindFirstArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Entidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesFindFirstOrThrowArgs} args - Arguments to find a Entidades
     * @example
     * // Get one Entidades
     * const entidades = await prisma.entidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntidadesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Entidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entidades
     * const entidades = await prisma.entidades.findMany()
     * 
     * // Get first 10 Entidades
     * const entidades = await prisma.entidades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entidadesWithIdOnly = await prisma.entidades.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntidadesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Entidades.
     * @param {EntidadesCreateArgs} args - Arguments to create a Entidades.
     * @example
     * // Create one Entidades
     * const Entidades = await prisma.entidades.create({
     *   data: {
     *     // ... data to create a Entidades
     *   }
     * })
     * 
    **/
    create<T extends EntidadesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesCreateArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Entidades.
     *     @param {EntidadesCreateManyArgs} args - Arguments to create many Entidades.
     *     @example
     *     // Create many Entidades
     *     const entidades = await prisma.entidades.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EntidadesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entidades.
     * @param {EntidadesDeleteArgs} args - Arguments to delete one Entidades.
     * @example
     * // Delete one Entidades
     * const Entidades = await prisma.entidades.delete({
     *   where: {
     *     // ... filter to delete one Entidades
     *   }
     * })
     * 
    **/
    delete<T extends EntidadesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesDeleteArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Entidades.
     * @param {EntidadesUpdateArgs} args - Arguments to update one Entidades.
     * @example
     * // Update one Entidades
     * const entidades = await prisma.entidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntidadesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesUpdateArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Entidades.
     * @param {EntidadesDeleteManyArgs} args - Arguments to filter Entidades to delete.
     * @example
     * // Delete a few Entidades
     * const { count } = await prisma.entidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntidadesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntidadesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entidades
     * const entidades = await prisma.entidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntidadesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entidades.
     * @param {EntidadesUpsertArgs} args - Arguments to update or create a Entidades.
     * @example
     * // Update or create a Entidades
     * const entidades = await prisma.entidades.upsert({
     *   create: {
     *     // ... data to create a Entidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entidades we want to update
     *   }
     * })
    **/
    upsert<T extends EntidadesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntidadesUpsertArgs<ExtArgs>>
    ): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Entidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesCountArgs} args - Arguments to filter Entidades to count.
     * @example
     * // Count the number of Entidades
     * const count = await prisma.entidades.count({
     *   where: {
     *     // ... the filter for the Entidades we want to count
     *   }
     * })
    **/
    count<T extends EntidadesCountArgs>(
      args?: Subset<T, EntidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntidadesAggregateArgs>(args: Subset<T, EntidadesAggregateArgs>): Prisma.PrismaPromise<GetEntidadesAggregateType<T>>

    /**
     * Group by Entidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadesGroupByArgs} args - Group by arguments.
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
      T extends EntidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntidadesGroupByArgs['orderBy'] }
        : { orderBy?: EntidadesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entidades model
   */
  readonly fields: EntidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    endereco<T extends enderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, enderecoDefaultArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    contacto<T extends Entidades$contactoArgs<ExtArgs> = {}>(args?: Subset<T, Entidades$contactoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'findMany'> | Null>;

    especialistas<T extends Entidades$especialistasArgs<ExtArgs> = {}>(args?: Subset<T, Entidades$especialistasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialistasPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Entidades model
   */ 
  interface EntidadesFieldRefs {
    readonly id: FieldRef<"Entidades", 'String'>
    readonly name: FieldRef<"Entidades", 'String'>
    readonly cnpj: FieldRef<"Entidades", 'String'>
    readonly type: FieldRef<"Entidades", 'String'>
    readonly id_endereco: FieldRef<"Entidades", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Entidades findUnique
   */
  export type EntidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * Filter, which Entidades to fetch.
     */
    where: EntidadesWhereUniqueInput
  }


  /**
   * Entidades findUniqueOrThrow
   */
  export type EntidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * Filter, which Entidades to fetch.
     */
    where: EntidadesWhereUniqueInput
  }


  /**
   * Entidades findFirst
   */
  export type EntidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * Filter, which Entidades to fetch.
     */
    where?: EntidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidades to fetch.
     */
    orderBy?: EntidadesOrderByWithRelationInput | EntidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entidades.
     */
    cursor?: EntidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entidades.
     */
    distinct?: EntidadesScalarFieldEnum | EntidadesScalarFieldEnum[]
  }


  /**
   * Entidades findFirstOrThrow
   */
  export type EntidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * Filter, which Entidades to fetch.
     */
    where?: EntidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidades to fetch.
     */
    orderBy?: EntidadesOrderByWithRelationInput | EntidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entidades.
     */
    cursor?: EntidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entidades.
     */
    distinct?: EntidadesScalarFieldEnum | EntidadesScalarFieldEnum[]
  }


  /**
   * Entidades findMany
   */
  export type EntidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * Filter, which Entidades to fetch.
     */
    where?: EntidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidades to fetch.
     */
    orderBy?: EntidadesOrderByWithRelationInput | EntidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entidades.
     */
    cursor?: EntidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidades.
     */
    skip?: number
    distinct?: EntidadesScalarFieldEnum | EntidadesScalarFieldEnum[]
  }


  /**
   * Entidades create
   */
  export type EntidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a Entidades.
     */
    data: XOR<EntidadesCreateInput, EntidadesUncheckedCreateInput>
  }


  /**
   * Entidades createMany
   */
  export type EntidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entidades.
     */
    data: EntidadesCreateManyInput | EntidadesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Entidades update
   */
  export type EntidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a Entidades.
     */
    data: XOR<EntidadesUpdateInput, EntidadesUncheckedUpdateInput>
    /**
     * Choose, which Entidades to update.
     */
    where: EntidadesWhereUniqueInput
  }


  /**
   * Entidades updateMany
   */
  export type EntidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entidades.
     */
    data: XOR<EntidadesUpdateManyMutationInput, EntidadesUncheckedUpdateManyInput>
    /**
     * Filter which Entidades to update
     */
    where?: EntidadesWhereInput
  }


  /**
   * Entidades upsert
   */
  export type EntidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the Entidades to update in case it exists.
     */
    where: EntidadesWhereUniqueInput
    /**
     * In case the Entidades found by the `where` argument doesn't exist, create a new Entidades with this data.
     */
    create: XOR<EntidadesCreateInput, EntidadesUncheckedCreateInput>
    /**
     * In case the Entidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntidadesUpdateInput, EntidadesUncheckedUpdateInput>
  }


  /**
   * Entidades delete
   */
  export type EntidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    /**
     * Filter which Entidades to delete.
     */
    where: EntidadesWhereUniqueInput
  }


  /**
   * Entidades deleteMany
   */
  export type EntidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entidades to delete
     */
    where?: EntidadesWhereInput
  }


  /**
   * Entidades.contacto
   */
  export type Entidades$contactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    where?: contactoWhereInput
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    cursor?: contactoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }


  /**
   * Entidades.especialistas
   */
  export type Entidades$especialistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Entidades without action
   */
  export type EntidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
  }



  /**
   * Model Especialistas
   */

  export type AggregateEspecialistas = {
    _count: EspecialistasCountAggregateOutputType | null
    _min: EspecialistasMinAggregateOutputType | null
    _max: EspecialistasMaxAggregateOutputType | null
  }

  export type EspecialistasMinAggregateOutputType = {
    id: string | null
    nome: string | null
    crm: string | null
    sexo: $Enums.Sexo | null
    entidadeID: string | null
  }

  export type EspecialistasMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    crm: string | null
    sexo: $Enums.Sexo | null
    entidadeID: string | null
  }

  export type EspecialistasCountAggregateOutputType = {
    id: number
    nome: number
    crm: number
    sexo: number
    entidadeID: number
    _all: number
  }


  export type EspecialistasMinAggregateInputType = {
    id?: true
    nome?: true
    crm?: true
    sexo?: true
    entidadeID?: true
  }

  export type EspecialistasMaxAggregateInputType = {
    id?: true
    nome?: true
    crm?: true
    sexo?: true
    entidadeID?: true
  }

  export type EspecialistasCountAggregateInputType = {
    id?: true
    nome?: true
    crm?: true
    sexo?: true
    entidadeID?: true
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
    _min?: EspecialistasMinAggregateInputType
    _max?: EspecialistasMaxAggregateInputType
  }

  export type EspecialistasGroupByOutputType = {
    id: string
    nome: string
    crm: string
    sexo: $Enums.Sexo
    entidadeID: string
    _count: EspecialistasCountAggregateOutputType | null
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
    nome?: boolean
    crm?: boolean
    sexo?: boolean
    entidadeID?: boolean
    entitie?: boolean | EntidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialistas"]>

  export type EspecialistasSelectScalar = {
    id?: boolean
    nome?: boolean
    crm?: boolean
    sexo?: boolean
    entidadeID?: boolean
  }

  export type EspecialistasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entitie?: boolean | EntidadesDefaultArgs<ExtArgs>
  }


  export type $EspecialistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialistas"
    objects: {
      entitie: Prisma.$EntidadesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      crm: string
      sexo: $Enums.Sexo
      entidadeID: string
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

    entitie<T extends EntidadesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntidadesDefaultArgs<ExtArgs>>): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly nome: FieldRef<"Especialistas", 'String'>
    readonly crm: FieldRef<"Especialistas", 'String'>
    readonly sexo: FieldRef<"Especialistas", 'Sexo'>
    readonly entidadeID: FieldRef<"Especialistas", 'String'>
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
   * Model contacto
   */

  export type AggregateContacto = {
    _count: ContactoCountAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  export type ContactoMinAggregateOutputType = {
    id: string | null
    numero: string | null
    id_entitie: string | null
  }

  export type ContactoMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    id_entitie: string | null
  }

  export type ContactoCountAggregateOutputType = {
    id: number
    numero: number
    id_entitie: number
    _all: number
  }


  export type ContactoMinAggregateInputType = {
    id?: true
    numero?: true
    id_entitie?: true
  }

  export type ContactoMaxAggregateInputType = {
    id?: true
    numero?: true
    id_entitie?: true
  }

  export type ContactoCountAggregateInputType = {
    id?: true
    numero?: true
    id_entitie?: true
    _all?: true
  }

  export type ContactoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacto to aggregate.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contactos
    **/
    _count?: true | ContactoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoMaxAggregateInputType
  }

  export type GetContactoAggregateType<T extends ContactoAggregateArgs> = {
        [P in keyof T & keyof AggregateContacto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacto[P]>
      : GetScalarType<T[P], AggregateContacto[P]>
  }




  export type contactoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactoWhereInput
    orderBy?: contactoOrderByWithAggregationInput | contactoOrderByWithAggregationInput[]
    by: ContactoScalarFieldEnum[] | ContactoScalarFieldEnum
    having?: contactoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoCountAggregateInputType | true
    _min?: ContactoMinAggregateInputType
    _max?: ContactoMaxAggregateInputType
  }

  export type ContactoGroupByOutputType = {
    id: string
    numero: string
    id_entitie: string
    _count: ContactoCountAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  type GetContactoGroupByPayload<T extends contactoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoGroupByOutputType[P]>
        }
      >
    >


  export type contactoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    id_entitie?: boolean
    entitie?: boolean | EntidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacto"]>

  export type contactoSelectScalar = {
    id?: boolean
    numero?: boolean
    id_entitie?: boolean
  }

  export type contactoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entitie?: boolean | EntidadesDefaultArgs<ExtArgs>
  }


  export type $contactoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contacto"
    objects: {
      entitie: Prisma.$EntidadesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      id_entitie: string
    }, ExtArgs["result"]["contacto"]>
    composites: {}
  }


  type contactoGetPayload<S extends boolean | null | undefined | contactoDefaultArgs> = $Result.GetResult<Prisma.$contactoPayload, S>

  type contactoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<contactoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactoCountAggregateInputType | true
    }

  export interface contactoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contacto'], meta: { name: 'contacto' } }
    /**
     * Find zero or one Contacto that matches the filter.
     * @param {contactoFindUniqueArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends contactoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contactoFindUniqueArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contacto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {contactoFindUniqueOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends contactoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contactoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contacto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoFindFirstArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends contactoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contactoFindFirstArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contacto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoFindFirstOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends contactoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contactoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactos
     * const contactos = await prisma.contacto.findMany()
     * 
     * // Get first 10 Contactos
     * const contactos = await prisma.contacto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoWithIdOnly = await prisma.contacto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends contactoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contacto.
     * @param {contactoCreateArgs} args - Arguments to create a Contacto.
     * @example
     * // Create one Contacto
     * const Contacto = await prisma.contacto.create({
     *   data: {
     *     // ... data to create a Contacto
     *   }
     * })
     * 
    **/
    create<T extends contactoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contactoCreateArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contactos.
     *     @param {contactoCreateManyArgs} args - Arguments to create many Contactos.
     *     @example
     *     // Create many Contactos
     *     const contacto = await prisma.contacto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends contactoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contacto.
     * @param {contactoDeleteArgs} args - Arguments to delete one Contacto.
     * @example
     * // Delete one Contacto
     * const Contacto = await prisma.contacto.delete({
     *   where: {
     *     // ... filter to delete one Contacto
     *   }
     * })
     * 
    **/
    delete<T extends contactoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contactoDeleteArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contacto.
     * @param {contactoUpdateArgs} args - Arguments to update one Contacto.
     * @example
     * // Update one Contacto
     * const contacto = await prisma.contacto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends contactoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contactoUpdateArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contactos.
     * @param {contactoDeleteManyArgs} args - Arguments to filter Contactos to delete.
     * @example
     * // Delete a few Contactos
     * const { count } = await prisma.contacto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends contactoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contactoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends contactoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contactoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contacto.
     * @param {contactoUpsertArgs} args - Arguments to update or create a Contacto.
     * @example
     * // Update or create a Contacto
     * const contacto = await prisma.contacto.upsert({
     *   create: {
     *     // ... data to create a Contacto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacto we want to update
     *   }
     * })
    **/
    upsert<T extends contactoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contactoUpsertArgs<ExtArgs>>
    ): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoCountArgs} args - Arguments to filter Contactos to count.
     * @example
     * // Count the number of Contactos
     * const count = await prisma.contacto.count({
     *   where: {
     *     // ... the filter for the Contactos we want to count
     *   }
     * })
    **/
    count<T extends contactoCountArgs>(
      args?: Subset<T, contactoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactoAggregateArgs>(args: Subset<T, ContactoAggregateArgs>): Prisma.PrismaPromise<GetContactoAggregateType<T>>

    /**
     * Group by Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoGroupByArgs} args - Group by arguments.
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
      T extends contactoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactoGroupByArgs['orderBy'] }
        : { orderBy?: contactoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contactoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contacto model
   */
  readonly fields: contactoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contacto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entitie<T extends EntidadesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntidadesDefaultArgs<ExtArgs>>): Prisma__EntidadesClient<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the contacto model
   */ 
  interface contactoFieldRefs {
    readonly id: FieldRef<"contacto", 'String'>
    readonly numero: FieldRef<"contacto", 'String'>
    readonly id_entitie: FieldRef<"contacto", 'String'>
  }
    

  // Custom InputTypes

  /**
   * contacto findUnique
   */
  export type contactoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where: contactoWhereUniqueInput
  }


  /**
   * contacto findUniqueOrThrow
   */
  export type contactoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where: contactoWhereUniqueInput
  }


  /**
   * contacto findFirst
   */
  export type contactoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactos.
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }


  /**
   * contacto findFirstOrThrow
   */
  export type contactoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactos.
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }


  /**
   * contacto findMany
   */
  export type contactoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * Filter, which contactos to fetch.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contactos.
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }


  /**
   * contacto create
   */
  export type contactoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * The data needed to create a contacto.
     */
    data: XOR<contactoCreateInput, contactoUncheckedCreateInput>
  }


  /**
   * contacto createMany
   */
  export type contactoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contactos.
     */
    data: contactoCreateManyInput | contactoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * contacto update
   */
  export type contactoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * The data needed to update a contacto.
     */
    data: XOR<contactoUpdateInput, contactoUncheckedUpdateInput>
    /**
     * Choose, which contacto to update.
     */
    where: contactoWhereUniqueInput
  }


  /**
   * contacto updateMany
   */
  export type contactoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contactos.
     */
    data: XOR<contactoUpdateManyMutationInput, contactoUncheckedUpdateManyInput>
    /**
     * Filter which contactos to update
     */
    where?: contactoWhereInput
  }


  /**
   * contacto upsert
   */
  export type contactoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * The filter to search for the contacto to update in case it exists.
     */
    where: contactoWhereUniqueInput
    /**
     * In case the contacto found by the `where` argument doesn't exist, create a new contacto with this data.
     */
    create: XOR<contactoCreateInput, contactoUncheckedCreateInput>
    /**
     * In case the contacto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactoUpdateInput, contactoUncheckedUpdateInput>
  }


  /**
   * contacto delete
   */
  export type contactoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
    /**
     * Filter which contacto to delete.
     */
    where: contactoWhereUniqueInput
  }


  /**
   * contacto deleteMany
   */
  export type contactoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactos to delete
     */
    where?: contactoWhereInput
  }


  /**
   * contacto without action
   */
  export type contactoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contactoInclude<ExtArgs> | null
  }



  /**
   * Model endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: string | null
    adress: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: string | null
    adress: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    adress: number
    _all: number
  }


  export type EnderecoMinAggregateInputType = {
    id?: true
    adress?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    adress?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    adress?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco to aggregate.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type enderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithAggregationInput | enderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: enderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: string
    adress: string
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends enderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type enderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adress?: boolean
    entitie?: boolean | endereco$entitieArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectScalar = {
    id?: boolean
    adress?: boolean
  }

  export type enderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entitie?: boolean | endereco$entitieArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $enderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco"
    objects: {
      entitie: Prisma.$EntidadesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adress: string
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }


  type enderecoGetPayload<S extends boolean | null | undefined | enderecoDefaultArgs> = $Result.GetResult<Prisma.$enderecoPayload, S>

  type enderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<enderecoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface enderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco'], meta: { name: 'endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {enderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends enderecoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, enderecoFindUniqueArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Endereco that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {enderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends enderecoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enderecoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends enderecoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, enderecoFindFirstArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends enderecoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enderecoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends enderecoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enderecoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Endereco.
     * @param {enderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
    **/
    create<T extends enderecoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, enderecoCreateArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Enderecos.
     *     @param {enderecoCreateManyArgs} args - Arguments to create many Enderecos.
     *     @example
     *     // Create many Enderecos
     *     const endereco = await prisma.endereco.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends enderecoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enderecoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {enderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
    **/
    delete<T extends enderecoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, enderecoDeleteArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Endereco.
     * @param {enderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends enderecoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, enderecoUpdateArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Enderecos.
     * @param {enderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends enderecoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enderecoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends enderecoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, enderecoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {enderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
    **/
    upsert<T extends enderecoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, enderecoUpsertArgs<ExtArgs>>
    ): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends enderecoCountArgs>(
      args?: Subset<T, enderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoGroupByArgs} args - Group by arguments.
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
      T extends enderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecoGroupByArgs['orderBy'] }
        : { orderBy?: enderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco model
   */
  readonly fields: enderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entitie<T extends endereco$entitieArgs<ExtArgs> = {}>(args?: Subset<T, endereco$entitieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadesPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the endereco model
   */ 
  interface enderecoFieldRefs {
    readonly id: FieldRef<"endereco", 'String'>
    readonly adress: FieldRef<"endereco", 'String'>
  }
    

  // Custom InputTypes

  /**
   * endereco findUnique
   */
  export type enderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }


  /**
   * endereco findUniqueOrThrow
   */
  export type enderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }


  /**
   * endereco findFirst
   */
  export type enderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }


  /**
   * endereco findFirstOrThrow
   */
  export type enderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }


  /**
   * endereco findMany
   */
  export type enderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }


  /**
   * endereco create
   */
  export type enderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco.
     */
    data: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
  }


  /**
   * endereco createMany
   */
  export type enderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * endereco update
   */
  export type enderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco.
     */
    data: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
    /**
     * Choose, which endereco to update.
     */
    where: enderecoWhereUniqueInput
  }


  /**
   * endereco updateMany
   */
  export type enderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
  }


  /**
   * endereco upsert
   */
  export type enderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco to update in case it exists.
     */
    where: enderecoWhereUniqueInput
    /**
     * In case the endereco found by the `where` argument doesn't exist, create a new endereco with this data.
     */
    create: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
    /**
     * In case the endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
  }


  /**
   * endereco delete
   */
  export type enderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter which endereco to delete.
     */
    where: enderecoWhereUniqueInput
  }


  /**
   * endereco deleteMany
   */
  export type enderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to delete
     */
    where?: enderecoWhereInput
  }


  /**
   * endereco.entitie
   */
  export type endereco$entitieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidades
     */
    select?: EntidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntidadesInclude<ExtArgs> | null
    where?: EntidadesWhereInput
    orderBy?: EntidadesOrderByWithRelationInput | EntidadesOrderByWithRelationInput[]
    cursor?: EntidadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntidadesScalarFieldEnum | EntidadesScalarFieldEnum[]
  }


  /**
   * endereco without action
   */
  export type enderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enderecoInclude<ExtArgs> | null
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


  export const EntidadesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj',
    type: 'type',
    id_endereco: 'id_endereco'
  };

  export type EntidadesScalarFieldEnum = (typeof EntidadesScalarFieldEnum)[keyof typeof EntidadesScalarFieldEnum]


  export const EspecialistasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    crm: 'crm',
    sexo: 'sexo',
    entidadeID: 'entidadeID'
  };

  export type EspecialistasScalarFieldEnum = (typeof EspecialistasScalarFieldEnum)[keyof typeof EspecialistasScalarFieldEnum]


  export const ContactoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    id_entitie: 'id_entitie'
  };

  export type ContactoScalarFieldEnum = (typeof ContactoScalarFieldEnum)[keyof typeof ContactoScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    adress: 'adress'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Sexo'
   */
  export type EnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type EntidadesWhereInput = {
    AND?: EntidadesWhereInput | EntidadesWhereInput[]
    OR?: EntidadesWhereInput[]
    NOT?: EntidadesWhereInput | EntidadesWhereInput[]
    id?: StringFilter<"Entidades"> | string
    name?: StringFilter<"Entidades"> | string
    cnpj?: StringFilter<"Entidades"> | string
    type?: StringFilter<"Entidades"> | string
    id_endereco?: StringFilter<"Entidades"> | string
    endereco?: XOR<EnderecoRelationFilter, enderecoWhereInput>
    contacto?: ContactoListRelationFilter
    especialistas?: EspecialistasListRelationFilter
  }

  export type EntidadesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    type?: SortOrder
    id_endereco?: SortOrder
    endereco?: enderecoOrderByWithRelationInput
    contacto?: contactoOrderByRelationAggregateInput
    especialistas?: EspecialistasOrderByRelationAggregateInput
  }

  export type EntidadesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    cnpj?: string
    AND?: EntidadesWhereInput | EntidadesWhereInput[]
    OR?: EntidadesWhereInput[]
    NOT?: EntidadesWhereInput | EntidadesWhereInput[]
    type?: StringFilter<"Entidades"> | string
    id_endereco?: StringFilter<"Entidades"> | string
    endereco?: XOR<EnderecoRelationFilter, enderecoWhereInput>
    contacto?: ContactoListRelationFilter
    especialistas?: EspecialistasListRelationFilter
  }, "id" | "name" | "cnpj">

  export type EntidadesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    type?: SortOrder
    id_endereco?: SortOrder
    _count?: EntidadesCountOrderByAggregateInput
    _max?: EntidadesMaxOrderByAggregateInput
    _min?: EntidadesMinOrderByAggregateInput
  }

  export type EntidadesScalarWhereWithAggregatesInput = {
    AND?: EntidadesScalarWhereWithAggregatesInput | EntidadesScalarWhereWithAggregatesInput[]
    OR?: EntidadesScalarWhereWithAggregatesInput[]
    NOT?: EntidadesScalarWhereWithAggregatesInput | EntidadesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entidades"> | string
    name?: StringWithAggregatesFilter<"Entidades"> | string
    cnpj?: StringWithAggregatesFilter<"Entidades"> | string
    type?: StringWithAggregatesFilter<"Entidades"> | string
    id_endereco?: StringWithAggregatesFilter<"Entidades"> | string
  }

  export type EspecialistasWhereInput = {
    AND?: EspecialistasWhereInput | EspecialistasWhereInput[]
    OR?: EspecialistasWhereInput[]
    NOT?: EspecialistasWhereInput | EspecialistasWhereInput[]
    id?: StringFilter<"Especialistas"> | string
    nome?: StringFilter<"Especialistas"> | string
    crm?: StringFilter<"Especialistas"> | string
    sexo?: EnumSexoFilter<"Especialistas"> | $Enums.Sexo
    entidadeID?: StringFilter<"Especialistas"> | string
    entitie?: XOR<EntidadesRelationFilter, EntidadesWhereInput>
  }

  export type EspecialistasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    crm?: SortOrder
    sexo?: SortOrder
    entidadeID?: SortOrder
    entitie?: EntidadesOrderByWithRelationInput
  }

  export type EspecialistasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    crm?: string
    AND?: EspecialistasWhereInput | EspecialistasWhereInput[]
    OR?: EspecialistasWhereInput[]
    NOT?: EspecialistasWhereInput | EspecialistasWhereInput[]
    nome?: StringFilter<"Especialistas"> | string
    sexo?: EnumSexoFilter<"Especialistas"> | $Enums.Sexo
    entidadeID?: StringFilter<"Especialistas"> | string
    entitie?: XOR<EntidadesRelationFilter, EntidadesWhereInput>
  }, "id" | "crm">

  export type EspecialistasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    crm?: SortOrder
    sexo?: SortOrder
    entidadeID?: SortOrder
    _count?: EspecialistasCountOrderByAggregateInput
    _max?: EspecialistasMaxOrderByAggregateInput
    _min?: EspecialistasMinOrderByAggregateInput
  }

  export type EspecialistasScalarWhereWithAggregatesInput = {
    AND?: EspecialistasScalarWhereWithAggregatesInput | EspecialistasScalarWhereWithAggregatesInput[]
    OR?: EspecialistasScalarWhereWithAggregatesInput[]
    NOT?: EspecialistasScalarWhereWithAggregatesInput | EspecialistasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especialistas"> | string
    nome?: StringWithAggregatesFilter<"Especialistas"> | string
    crm?: StringWithAggregatesFilter<"Especialistas"> | string
    sexo?: EnumSexoWithAggregatesFilter<"Especialistas"> | $Enums.Sexo
    entidadeID?: StringWithAggregatesFilter<"Especialistas"> | string
  }

  export type contactoWhereInput = {
    AND?: contactoWhereInput | contactoWhereInput[]
    OR?: contactoWhereInput[]
    NOT?: contactoWhereInput | contactoWhereInput[]
    id?: StringFilter<"contacto"> | string
    numero?: StringFilter<"contacto"> | string
    id_entitie?: StringFilter<"contacto"> | string
    entitie?: XOR<EntidadesRelationFilter, EntidadesWhereInput>
  }

  export type contactoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    id_entitie?: SortOrder
    entitie?: EntidadesOrderByWithRelationInput
  }

  export type contactoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero?: string
    AND?: contactoWhereInput | contactoWhereInput[]
    OR?: contactoWhereInput[]
    NOT?: contactoWhereInput | contactoWhereInput[]
    id_entitie?: StringFilter<"contacto"> | string
    entitie?: XOR<EntidadesRelationFilter, EntidadesWhereInput>
  }, "id" | "numero">

  export type contactoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    id_entitie?: SortOrder
    _count?: contactoCountOrderByAggregateInput
    _max?: contactoMaxOrderByAggregateInput
    _min?: contactoMinOrderByAggregateInput
  }

  export type contactoScalarWhereWithAggregatesInput = {
    AND?: contactoScalarWhereWithAggregatesInput | contactoScalarWhereWithAggregatesInput[]
    OR?: contactoScalarWhereWithAggregatesInput[]
    NOT?: contactoScalarWhereWithAggregatesInput | contactoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"contacto"> | string
    numero?: StringWithAggregatesFilter<"contacto"> | string
    id_entitie?: StringWithAggregatesFilter<"contacto"> | string
  }

  export type enderecoWhereInput = {
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    id?: StringFilter<"endereco"> | string
    adress?: StringFilter<"endereco"> | string
    entitie?: EntidadesListRelationFilter
  }

  export type enderecoOrderByWithRelationInput = {
    id?: SortOrder
    adress?: SortOrder
    entitie?: EntidadesOrderByRelationAggregateInput
  }

  export type enderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    adress?: StringFilter<"endereco"> | string
    entitie?: EntidadesListRelationFilter
  }, "id">

  export type enderecoOrderByWithAggregationInput = {
    id?: SortOrder
    adress?: SortOrder
    _count?: enderecoCountOrderByAggregateInput
    _max?: enderecoMaxOrderByAggregateInput
    _min?: enderecoMinOrderByAggregateInput
  }

  export type enderecoScalarWhereWithAggregatesInput = {
    AND?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    OR?: enderecoScalarWhereWithAggregatesInput[]
    NOT?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"endereco"> | string
    adress?: StringWithAggregatesFilter<"endereco"> | string
  }

  export type EntidadesCreateInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    endereco: enderecoCreateNestedOneWithoutEntitieInput
    contacto?: contactoCreateNestedManyWithoutEntitieInput
    especialistas?: EspecialistasCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesUncheckedCreateInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    id_endereco: string
    contacto?: contactoUncheckedCreateNestedManyWithoutEntitieInput
    especialistas?: EspecialistasUncheckedCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    endereco?: enderecoUpdateOneRequiredWithoutEntitieNestedInput
    contacto?: contactoUpdateManyWithoutEntitieNestedInput
    especialistas?: EspecialistasUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    id_endereco?: StringFieldUpdateOperationsInput | string
    contacto?: contactoUncheckedUpdateManyWithoutEntitieNestedInput
    especialistas?: EspecialistasUncheckedUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesCreateManyInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    id_endereco: string
  }

  export type EntidadesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type EntidadesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    id_endereco?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialistasCreateInput = {
    id?: string
    nome: string
    crm: string
    sexo: $Enums.Sexo
    entitie: EntidadesCreateNestedOneWithoutEspecialistasInput
  }

  export type EspecialistasUncheckedCreateInput = {
    id?: string
    nome: string
    crm: string
    sexo: $Enums.Sexo
    entidadeID: string
  }

  export type EspecialistasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    entitie?: EntidadesUpdateOneRequiredWithoutEspecialistasNestedInput
  }

  export type EspecialistasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    entidadeID?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialistasCreateManyInput = {
    id?: string
    nome: string
    crm: string
    sexo: $Enums.Sexo
    entidadeID: string
  }

  export type EspecialistasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EspecialistasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    entidadeID?: StringFieldUpdateOperationsInput | string
  }

  export type contactoCreateInput = {
    id?: string
    numero: string
    entitie: EntidadesCreateNestedOneWithoutContactoInput
  }

  export type contactoUncheckedCreateInput = {
    id?: string
    numero: string
    id_entitie: string
  }

  export type contactoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    entitie?: EntidadesUpdateOneRequiredWithoutContactoNestedInput
  }

  export type contactoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    id_entitie?: StringFieldUpdateOperationsInput | string
  }

  export type contactoCreateManyInput = {
    id?: string
    numero: string
    id_entitie: string
  }

  export type contactoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type contactoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    id_entitie?: StringFieldUpdateOperationsInput | string
  }

  export type enderecoCreateInput = {
    id?: string
    adress: string
    entitie?: EntidadesCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateInput = {
    id?: string
    adress: string
    entitie?: EntidadesUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    entitie?: EntidadesUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    entitie?: EntidadesUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoCreateManyInput = {
    id?: string
    adress: string
  }

  export type enderecoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
  }

  export type enderecoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
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

  export type EnderecoRelationFilter = {
    is?: enderecoWhereInput
    isNot?: enderecoWhereInput
  }

  export type ContactoListRelationFilter = {
    every?: contactoWhereInput
    some?: contactoWhereInput
    none?: contactoWhereInput
  }

  export type EspecialistasListRelationFilter = {
    every?: EspecialistasWhereInput
    some?: EspecialistasWhereInput
    none?: EspecialistasWhereInput
  }

  export type contactoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialistasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntidadesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    type?: SortOrder
    id_endereco?: SortOrder
  }

  export type EntidadesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    type?: SortOrder
    id_endereco?: SortOrder
  }

  export type EntidadesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    type?: SortOrder
    id_endereco?: SortOrder
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

  export type EnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[]
    notIn?: $Enums.Sexo[]
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type EntidadesRelationFilter = {
    is?: EntidadesWhereInput
    isNot?: EntidadesWhereInput
  }

  export type EspecialistasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    crm?: SortOrder
    sexo?: SortOrder
    entidadeID?: SortOrder
  }

  export type EspecialistasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    crm?: SortOrder
    sexo?: SortOrder
    entidadeID?: SortOrder
  }

  export type EspecialistasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    crm?: SortOrder
    sexo?: SortOrder
    entidadeID?: SortOrder
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

  export type contactoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    id_entitie?: SortOrder
  }

  export type contactoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    id_entitie?: SortOrder
  }

  export type contactoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    id_entitie?: SortOrder
  }

  export type EntidadesListRelationFilter = {
    every?: EntidadesWhereInput
    some?: EntidadesWhereInput
    none?: EntidadesWhereInput
  }

  export type EntidadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enderecoCountOrderByAggregateInput = {
    id?: SortOrder
    adress?: SortOrder
  }

  export type enderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    adress?: SortOrder
  }

  export type enderecoMinOrderByAggregateInput = {
    id?: SortOrder
    adress?: SortOrder
  }

  export type enderecoCreateNestedOneWithoutEntitieInput = {
    create?: XOR<enderecoCreateWithoutEntitieInput, enderecoUncheckedCreateWithoutEntitieInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutEntitieInput
    connect?: enderecoWhereUniqueInput
  }

  export type contactoCreateNestedManyWithoutEntitieInput = {
    create?: XOR<contactoCreateWithoutEntitieInput, contactoUncheckedCreateWithoutEntitieInput> | contactoCreateWithoutEntitieInput[] | contactoUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: contactoCreateOrConnectWithoutEntitieInput | contactoCreateOrConnectWithoutEntitieInput[]
    createMany?: contactoCreateManyEntitieInputEnvelope
    connect?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
  }

  export type EspecialistasCreateNestedManyWithoutEntitieInput = {
    create?: XOR<EspecialistasCreateWithoutEntitieInput, EspecialistasUncheckedCreateWithoutEntitieInput> | EspecialistasCreateWithoutEntitieInput[] | EspecialistasUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntitieInput | EspecialistasCreateOrConnectWithoutEntitieInput[]
    createMany?: EspecialistasCreateManyEntitieInputEnvelope
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
  }

  export type contactoUncheckedCreateNestedManyWithoutEntitieInput = {
    create?: XOR<contactoCreateWithoutEntitieInput, contactoUncheckedCreateWithoutEntitieInput> | contactoCreateWithoutEntitieInput[] | contactoUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: contactoCreateOrConnectWithoutEntitieInput | contactoCreateOrConnectWithoutEntitieInput[]
    createMany?: contactoCreateManyEntitieInputEnvelope
    connect?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
  }

  export type EspecialistasUncheckedCreateNestedManyWithoutEntitieInput = {
    create?: XOR<EspecialistasCreateWithoutEntitieInput, EspecialistasUncheckedCreateWithoutEntitieInput> | EspecialistasCreateWithoutEntitieInput[] | EspecialistasUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntitieInput | EspecialistasCreateOrConnectWithoutEntitieInput[]
    createMany?: EspecialistasCreateManyEntitieInputEnvelope
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type enderecoUpdateOneRequiredWithoutEntitieNestedInput = {
    create?: XOR<enderecoCreateWithoutEntitieInput, enderecoUncheckedCreateWithoutEntitieInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutEntitieInput
    upsert?: enderecoUpsertWithoutEntitieInput
    connect?: enderecoWhereUniqueInput
    update?: XOR<XOR<enderecoUpdateToOneWithWhereWithoutEntitieInput, enderecoUpdateWithoutEntitieInput>, enderecoUncheckedUpdateWithoutEntitieInput>
  }

  export type contactoUpdateManyWithoutEntitieNestedInput = {
    create?: XOR<contactoCreateWithoutEntitieInput, contactoUncheckedCreateWithoutEntitieInput> | contactoCreateWithoutEntitieInput[] | contactoUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: contactoCreateOrConnectWithoutEntitieInput | contactoCreateOrConnectWithoutEntitieInput[]
    upsert?: contactoUpsertWithWhereUniqueWithoutEntitieInput | contactoUpsertWithWhereUniqueWithoutEntitieInput[]
    createMany?: contactoCreateManyEntitieInputEnvelope
    set?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    disconnect?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    delete?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    connect?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    update?: contactoUpdateWithWhereUniqueWithoutEntitieInput | contactoUpdateWithWhereUniqueWithoutEntitieInput[]
    updateMany?: contactoUpdateManyWithWhereWithoutEntitieInput | contactoUpdateManyWithWhereWithoutEntitieInput[]
    deleteMany?: contactoScalarWhereInput | contactoScalarWhereInput[]
  }

  export type EspecialistasUpdateManyWithoutEntitieNestedInput = {
    create?: XOR<EspecialistasCreateWithoutEntitieInput, EspecialistasUncheckedCreateWithoutEntitieInput> | EspecialistasCreateWithoutEntitieInput[] | EspecialistasUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntitieInput | EspecialistasCreateOrConnectWithoutEntitieInput[]
    upsert?: EspecialistasUpsertWithWhereUniqueWithoutEntitieInput | EspecialistasUpsertWithWhereUniqueWithoutEntitieInput[]
    createMany?: EspecialistasCreateManyEntitieInputEnvelope
    set?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    disconnect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    delete?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    update?: EspecialistasUpdateWithWhereUniqueWithoutEntitieInput | EspecialistasUpdateWithWhereUniqueWithoutEntitieInput[]
    updateMany?: EspecialistasUpdateManyWithWhereWithoutEntitieInput | EspecialistasUpdateManyWithWhereWithoutEntitieInput[]
    deleteMany?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
  }

  export type contactoUncheckedUpdateManyWithoutEntitieNestedInput = {
    create?: XOR<contactoCreateWithoutEntitieInput, contactoUncheckedCreateWithoutEntitieInput> | contactoCreateWithoutEntitieInput[] | contactoUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: contactoCreateOrConnectWithoutEntitieInput | contactoCreateOrConnectWithoutEntitieInput[]
    upsert?: contactoUpsertWithWhereUniqueWithoutEntitieInput | contactoUpsertWithWhereUniqueWithoutEntitieInput[]
    createMany?: contactoCreateManyEntitieInputEnvelope
    set?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    disconnect?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    delete?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    connect?: contactoWhereUniqueInput | contactoWhereUniqueInput[]
    update?: contactoUpdateWithWhereUniqueWithoutEntitieInput | contactoUpdateWithWhereUniqueWithoutEntitieInput[]
    updateMany?: contactoUpdateManyWithWhereWithoutEntitieInput | contactoUpdateManyWithWhereWithoutEntitieInput[]
    deleteMany?: contactoScalarWhereInput | contactoScalarWhereInput[]
  }

  export type EspecialistasUncheckedUpdateManyWithoutEntitieNestedInput = {
    create?: XOR<EspecialistasCreateWithoutEntitieInput, EspecialistasUncheckedCreateWithoutEntitieInput> | EspecialistasCreateWithoutEntitieInput[] | EspecialistasUncheckedCreateWithoutEntitieInput[]
    connectOrCreate?: EspecialistasCreateOrConnectWithoutEntitieInput | EspecialistasCreateOrConnectWithoutEntitieInput[]
    upsert?: EspecialistasUpsertWithWhereUniqueWithoutEntitieInput | EspecialistasUpsertWithWhereUniqueWithoutEntitieInput[]
    createMany?: EspecialistasCreateManyEntitieInputEnvelope
    set?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    disconnect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    delete?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    connect?: EspecialistasWhereUniqueInput | EspecialistasWhereUniqueInput[]
    update?: EspecialistasUpdateWithWhereUniqueWithoutEntitieInput | EspecialistasUpdateWithWhereUniqueWithoutEntitieInput[]
    updateMany?: EspecialistasUpdateManyWithWhereWithoutEntitieInput | EspecialistasUpdateManyWithWhereWithoutEntitieInput[]
    deleteMany?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
  }

  export type EntidadesCreateNestedOneWithoutEspecialistasInput = {
    create?: XOR<EntidadesCreateWithoutEspecialistasInput, EntidadesUncheckedCreateWithoutEspecialistasInput>
    connectOrCreate?: EntidadesCreateOrConnectWithoutEspecialistasInput
    connect?: EntidadesWhereUniqueInput
  }

  export type EnumSexoFieldUpdateOperationsInput = {
    set?: $Enums.Sexo
  }

  export type EntidadesUpdateOneRequiredWithoutEspecialistasNestedInput = {
    create?: XOR<EntidadesCreateWithoutEspecialistasInput, EntidadesUncheckedCreateWithoutEspecialistasInput>
    connectOrCreate?: EntidadesCreateOrConnectWithoutEspecialistasInput
    upsert?: EntidadesUpsertWithoutEspecialistasInput
    connect?: EntidadesWhereUniqueInput
    update?: XOR<XOR<EntidadesUpdateToOneWithWhereWithoutEspecialistasInput, EntidadesUpdateWithoutEspecialistasInput>, EntidadesUncheckedUpdateWithoutEspecialistasInput>
  }

  export type EntidadesCreateNestedOneWithoutContactoInput = {
    create?: XOR<EntidadesCreateWithoutContactoInput, EntidadesUncheckedCreateWithoutContactoInput>
    connectOrCreate?: EntidadesCreateOrConnectWithoutContactoInput
    connect?: EntidadesWhereUniqueInput
  }

  export type EntidadesUpdateOneRequiredWithoutContactoNestedInput = {
    create?: XOR<EntidadesCreateWithoutContactoInput, EntidadesUncheckedCreateWithoutContactoInput>
    connectOrCreate?: EntidadesCreateOrConnectWithoutContactoInput
    upsert?: EntidadesUpsertWithoutContactoInput
    connect?: EntidadesWhereUniqueInput
    update?: XOR<XOR<EntidadesUpdateToOneWithWhereWithoutContactoInput, EntidadesUpdateWithoutContactoInput>, EntidadesUncheckedUpdateWithoutContactoInput>
  }

  export type EntidadesCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<EntidadesCreateWithoutEnderecoInput, EntidadesUncheckedCreateWithoutEnderecoInput> | EntidadesCreateWithoutEnderecoInput[] | EntidadesUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EntidadesCreateOrConnectWithoutEnderecoInput | EntidadesCreateOrConnectWithoutEnderecoInput[]
    createMany?: EntidadesCreateManyEnderecoInputEnvelope
    connect?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
  }

  export type EntidadesUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<EntidadesCreateWithoutEnderecoInput, EntidadesUncheckedCreateWithoutEnderecoInput> | EntidadesCreateWithoutEnderecoInput[] | EntidadesUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EntidadesCreateOrConnectWithoutEnderecoInput | EntidadesCreateOrConnectWithoutEnderecoInput[]
    createMany?: EntidadesCreateManyEnderecoInputEnvelope
    connect?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
  }

  export type EntidadesUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<EntidadesCreateWithoutEnderecoInput, EntidadesUncheckedCreateWithoutEnderecoInput> | EntidadesCreateWithoutEnderecoInput[] | EntidadesUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EntidadesCreateOrConnectWithoutEnderecoInput | EntidadesCreateOrConnectWithoutEnderecoInput[]
    upsert?: EntidadesUpsertWithWhereUniqueWithoutEnderecoInput | EntidadesUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: EntidadesCreateManyEnderecoInputEnvelope
    set?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    disconnect?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    delete?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    connect?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    update?: EntidadesUpdateWithWhereUniqueWithoutEnderecoInput | EntidadesUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: EntidadesUpdateManyWithWhereWithoutEnderecoInput | EntidadesUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: EntidadesScalarWhereInput | EntidadesScalarWhereInput[]
  }

  export type EntidadesUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<EntidadesCreateWithoutEnderecoInput, EntidadesUncheckedCreateWithoutEnderecoInput> | EntidadesCreateWithoutEnderecoInput[] | EntidadesUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EntidadesCreateOrConnectWithoutEnderecoInput | EntidadesCreateOrConnectWithoutEnderecoInput[]
    upsert?: EntidadesUpsertWithWhereUniqueWithoutEnderecoInput | EntidadesUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: EntidadesCreateManyEnderecoInputEnvelope
    set?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    disconnect?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    delete?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    connect?: EntidadesWhereUniqueInput | EntidadesWhereUniqueInput[]
    update?: EntidadesUpdateWithWhereUniqueWithoutEnderecoInput | EntidadesUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: EntidadesUpdateManyWithWhereWithoutEnderecoInput | EntidadesUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: EntidadesScalarWhereInput | EntidadesScalarWhereInput[]
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

  export type enderecoCreateWithoutEntitieInput = {
    id?: string
    adress: string
  }

  export type enderecoUncheckedCreateWithoutEntitieInput = {
    id?: string
    adress: string
  }

  export type enderecoCreateOrConnectWithoutEntitieInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutEntitieInput, enderecoUncheckedCreateWithoutEntitieInput>
  }

  export type contactoCreateWithoutEntitieInput = {
    id?: string
    numero: string
  }

  export type contactoUncheckedCreateWithoutEntitieInput = {
    id?: string
    numero: string
  }

  export type contactoCreateOrConnectWithoutEntitieInput = {
    where: contactoWhereUniqueInput
    create: XOR<contactoCreateWithoutEntitieInput, contactoUncheckedCreateWithoutEntitieInput>
  }

  export type contactoCreateManyEntitieInputEnvelope = {
    data: contactoCreateManyEntitieInput | contactoCreateManyEntitieInput[]
    skipDuplicates?: boolean
  }

  export type EspecialistasCreateWithoutEntitieInput = {
    id?: string
    nome: string
    crm: string
    sexo: $Enums.Sexo
  }

  export type EspecialistasUncheckedCreateWithoutEntitieInput = {
    id?: string
    nome: string
    crm: string
    sexo: $Enums.Sexo
  }

  export type EspecialistasCreateOrConnectWithoutEntitieInput = {
    where: EspecialistasWhereUniqueInput
    create: XOR<EspecialistasCreateWithoutEntitieInput, EspecialistasUncheckedCreateWithoutEntitieInput>
  }

  export type EspecialistasCreateManyEntitieInputEnvelope = {
    data: EspecialistasCreateManyEntitieInput | EspecialistasCreateManyEntitieInput[]
    skipDuplicates?: boolean
  }

  export type enderecoUpsertWithoutEntitieInput = {
    update: XOR<enderecoUpdateWithoutEntitieInput, enderecoUncheckedUpdateWithoutEntitieInput>
    create: XOR<enderecoCreateWithoutEntitieInput, enderecoUncheckedCreateWithoutEntitieInput>
    where?: enderecoWhereInput
  }

  export type enderecoUpdateToOneWithWhereWithoutEntitieInput = {
    where?: enderecoWhereInput
    data: XOR<enderecoUpdateWithoutEntitieInput, enderecoUncheckedUpdateWithoutEntitieInput>
  }

  export type enderecoUpdateWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
  }

  export type enderecoUncheckedUpdateWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
  }

  export type contactoUpsertWithWhereUniqueWithoutEntitieInput = {
    where: contactoWhereUniqueInput
    update: XOR<contactoUpdateWithoutEntitieInput, contactoUncheckedUpdateWithoutEntitieInput>
    create: XOR<contactoCreateWithoutEntitieInput, contactoUncheckedCreateWithoutEntitieInput>
  }

  export type contactoUpdateWithWhereUniqueWithoutEntitieInput = {
    where: contactoWhereUniqueInput
    data: XOR<contactoUpdateWithoutEntitieInput, contactoUncheckedUpdateWithoutEntitieInput>
  }

  export type contactoUpdateManyWithWhereWithoutEntitieInput = {
    where: contactoScalarWhereInput
    data: XOR<contactoUpdateManyMutationInput, contactoUncheckedUpdateManyWithoutEntitieInput>
  }

  export type contactoScalarWhereInput = {
    AND?: contactoScalarWhereInput | contactoScalarWhereInput[]
    OR?: contactoScalarWhereInput[]
    NOT?: contactoScalarWhereInput | contactoScalarWhereInput[]
    id?: StringFilter<"contacto"> | string
    numero?: StringFilter<"contacto"> | string
    id_entitie?: StringFilter<"contacto"> | string
  }

  export type EspecialistasUpsertWithWhereUniqueWithoutEntitieInput = {
    where: EspecialistasWhereUniqueInput
    update: XOR<EspecialistasUpdateWithoutEntitieInput, EspecialistasUncheckedUpdateWithoutEntitieInput>
    create: XOR<EspecialistasCreateWithoutEntitieInput, EspecialistasUncheckedCreateWithoutEntitieInput>
  }

  export type EspecialistasUpdateWithWhereUniqueWithoutEntitieInput = {
    where: EspecialistasWhereUniqueInput
    data: XOR<EspecialistasUpdateWithoutEntitieInput, EspecialistasUncheckedUpdateWithoutEntitieInput>
  }

  export type EspecialistasUpdateManyWithWhereWithoutEntitieInput = {
    where: EspecialistasScalarWhereInput
    data: XOR<EspecialistasUpdateManyMutationInput, EspecialistasUncheckedUpdateManyWithoutEntitieInput>
  }

  export type EspecialistasScalarWhereInput = {
    AND?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
    OR?: EspecialistasScalarWhereInput[]
    NOT?: EspecialistasScalarWhereInput | EspecialistasScalarWhereInput[]
    id?: StringFilter<"Especialistas"> | string
    nome?: StringFilter<"Especialistas"> | string
    crm?: StringFilter<"Especialistas"> | string
    sexo?: EnumSexoFilter<"Especialistas"> | $Enums.Sexo
    entidadeID?: StringFilter<"Especialistas"> | string
  }

  export type EntidadesCreateWithoutEspecialistasInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    endereco: enderecoCreateNestedOneWithoutEntitieInput
    contacto?: contactoCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesUncheckedCreateWithoutEspecialistasInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    id_endereco: string
    contacto?: contactoUncheckedCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesCreateOrConnectWithoutEspecialistasInput = {
    where: EntidadesWhereUniqueInput
    create: XOR<EntidadesCreateWithoutEspecialistasInput, EntidadesUncheckedCreateWithoutEspecialistasInput>
  }

  export type EntidadesUpsertWithoutEspecialistasInput = {
    update: XOR<EntidadesUpdateWithoutEspecialistasInput, EntidadesUncheckedUpdateWithoutEspecialistasInput>
    create: XOR<EntidadesCreateWithoutEspecialistasInput, EntidadesUncheckedCreateWithoutEspecialistasInput>
    where?: EntidadesWhereInput
  }

  export type EntidadesUpdateToOneWithWhereWithoutEspecialistasInput = {
    where?: EntidadesWhereInput
    data: XOR<EntidadesUpdateWithoutEspecialistasInput, EntidadesUncheckedUpdateWithoutEspecialistasInput>
  }

  export type EntidadesUpdateWithoutEspecialistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    endereco?: enderecoUpdateOneRequiredWithoutEntitieNestedInput
    contacto?: contactoUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesUncheckedUpdateWithoutEspecialistasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    id_endereco?: StringFieldUpdateOperationsInput | string
    contacto?: contactoUncheckedUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesCreateWithoutContactoInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    endereco: enderecoCreateNestedOneWithoutEntitieInput
    especialistas?: EspecialistasCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesUncheckedCreateWithoutContactoInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    id_endereco: string
    especialistas?: EspecialistasUncheckedCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesCreateOrConnectWithoutContactoInput = {
    where: EntidadesWhereUniqueInput
    create: XOR<EntidadesCreateWithoutContactoInput, EntidadesUncheckedCreateWithoutContactoInput>
  }

  export type EntidadesUpsertWithoutContactoInput = {
    update: XOR<EntidadesUpdateWithoutContactoInput, EntidadesUncheckedUpdateWithoutContactoInput>
    create: XOR<EntidadesCreateWithoutContactoInput, EntidadesUncheckedCreateWithoutContactoInput>
    where?: EntidadesWhereInput
  }

  export type EntidadesUpdateToOneWithWhereWithoutContactoInput = {
    where?: EntidadesWhereInput
    data: XOR<EntidadesUpdateWithoutContactoInput, EntidadesUncheckedUpdateWithoutContactoInput>
  }

  export type EntidadesUpdateWithoutContactoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    endereco?: enderecoUpdateOneRequiredWithoutEntitieNestedInput
    especialistas?: EspecialistasUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesUncheckedUpdateWithoutContactoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    id_endereco?: StringFieldUpdateOperationsInput | string
    especialistas?: EspecialistasUncheckedUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesCreateWithoutEnderecoInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    contacto?: contactoCreateNestedManyWithoutEntitieInput
    especialistas?: EspecialistasCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesUncheckedCreateWithoutEnderecoInput = {
    id?: string
    name: string
    cnpj: string
    type: string
    contacto?: contactoUncheckedCreateNestedManyWithoutEntitieInput
    especialistas?: EspecialistasUncheckedCreateNestedManyWithoutEntitieInput
  }

  export type EntidadesCreateOrConnectWithoutEnderecoInput = {
    where: EntidadesWhereUniqueInput
    create: XOR<EntidadesCreateWithoutEnderecoInput, EntidadesUncheckedCreateWithoutEnderecoInput>
  }

  export type EntidadesCreateManyEnderecoInputEnvelope = {
    data: EntidadesCreateManyEnderecoInput | EntidadesCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type EntidadesUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: EntidadesWhereUniqueInput
    update: XOR<EntidadesUpdateWithoutEnderecoInput, EntidadesUncheckedUpdateWithoutEnderecoInput>
    create: XOR<EntidadesCreateWithoutEnderecoInput, EntidadesUncheckedCreateWithoutEnderecoInput>
  }

  export type EntidadesUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: EntidadesWhereUniqueInput
    data: XOR<EntidadesUpdateWithoutEnderecoInput, EntidadesUncheckedUpdateWithoutEnderecoInput>
  }

  export type EntidadesUpdateManyWithWhereWithoutEnderecoInput = {
    where: EntidadesScalarWhereInput
    data: XOR<EntidadesUpdateManyMutationInput, EntidadesUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type EntidadesScalarWhereInput = {
    AND?: EntidadesScalarWhereInput | EntidadesScalarWhereInput[]
    OR?: EntidadesScalarWhereInput[]
    NOT?: EntidadesScalarWhereInput | EntidadesScalarWhereInput[]
    id?: StringFilter<"Entidades"> | string
    name?: StringFilter<"Entidades"> | string
    cnpj?: StringFilter<"Entidades"> | string
    type?: StringFilter<"Entidades"> | string
    id_endereco?: StringFilter<"Entidades"> | string
  }

  export type contactoCreateManyEntitieInput = {
    id?: string
    numero: string
  }

  export type EspecialistasCreateManyEntitieInput = {
    id?: string
    nome: string
    crm: string
    sexo: $Enums.Sexo
  }

  export type contactoUpdateWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type contactoUncheckedUpdateWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type contactoUncheckedUpdateManyWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialistasUpdateWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EspecialistasUncheckedUpdateWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EspecialistasUncheckedUpdateManyWithoutEntitieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
  }

  export type EntidadesCreateManyEnderecoInput = {
    id?: string
    name: string
    cnpj: string
    type: string
  }

  export type EntidadesUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contacto?: contactoUpdateManyWithoutEntitieNestedInput
    especialistas?: EspecialistasUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesUncheckedUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contacto?: contactoUncheckedUpdateManyWithoutEntitieNestedInput
    especialistas?: EspecialistasUncheckedUpdateManyWithoutEntitieNestedInput
  }

  export type EntidadesUncheckedUpdateManyWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EntidadesCountOutputTypeDefaultArgs instead
     */
    export type EntidadesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntidadesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnderecoCountOutputTypeDefaultArgs instead
     */
    export type EnderecoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnderecoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntidadesDefaultArgs instead
     */
    export type EntidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntidadesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EspecialistasDefaultArgs instead
     */
    export type EspecialistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EspecialistasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use contactoDefaultArgs instead
     */
    export type contactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = contactoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use enderecoDefaultArgs instead
     */
    export type enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = enderecoDefaultArgs<ExtArgs>

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