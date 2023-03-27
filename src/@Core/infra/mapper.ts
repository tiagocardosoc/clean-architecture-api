import { ClassConstructor, ClassTransformOptions, instanceToPlain, plainToInstance } from 'class-transformer'

interface IMapper {
  map<T, V>(cls: ClassConstructor<T>, plain: V, options?: ClassTransformOptions): T
  mapArray<T, V>(cls: ClassConstructor<T>, plain: V[], options?: ClassTransformOptions): T[]
  instanceToInstance<T, V>(cls: ClassConstructor<T>, plain: V, options?: ClassTransformOptions): T
  instancesToInstances<T, V>(cls: ClassConstructor<T>, plain: V[], options?: ClassTransformOptions): T[]
  instanceToPlain<T>(object: T, options?: ClassTransformOptions): Record<string, any>
}

export const mapper: IMapper = {
  map: (cls, plain, options) => {
    return plainToInstance(cls, JSON.parse(JSON.stringify(plain)), options)
  },
  mapArray: (cls, plain) => {
    return plainToInstance(cls, JSON.parse(JSON.stringify(plain)) as typeof plain)
  },
  instanceToInstance: (cls, plain) => {
    return plainToInstance(cls, instanceToPlain(plain))
  },
  instancesToInstances: (cls, plain) => {
    return plainToInstance(cls, instanceToPlain(plain) as typeof plain[])
  },
  instanceToPlain
}
