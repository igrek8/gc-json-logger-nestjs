[gc-json-logger-nestjs](../README.md) / [Exports](../modules.md) / AdapterLoggerService

# Class: AdapterLoggerService

Nest.js compatible logger

## Implements

- `LoggerService`

## Table of contents

### Constructors

- [constructor](AdapterLoggerService.md#constructor)

### Methods

- [debug](AdapterLoggerService.md#debug)
- [error](AdapterLoggerService.md#error)
- [log](AdapterLoggerService.md#log)
- [setLogLevels](AdapterLoggerService.md#setloglevels)
- [verbose](AdapterLoggerService.md#verbose)
- [warn](AdapterLoggerService.md#warn)

## Constructors

### constructor

• **new AdapterLoggerService**(`logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `Logger` |

#### Defined in

[src/adapter-logger.service.ts:13](https://github.com/igrek8/gc-json-logger-nestjs/blob/a0380bd/src/adapter-logger.service.ts#L13)

## Methods

### debug

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.debug

#### Defined in

[src/adapter-logger.service.ts:58](https://github.com/igrek8/gc-json-logger-nestjs/blob/a0380bd/src/adapter-logger.service.ts#L58)

___

### error

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.error

#### Defined in

[src/adapter-logger.service.ts:40](https://github.com/igrek8/gc-json-logger-nestjs/blob/a0380bd/src/adapter-logger.service.ts#L40)

___

### log

▸ **log**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.log

#### Defined in

[src/adapter-logger.service.ts:46](https://github.com/igrek8/gc-json-logger-nestjs/blob/a0380bd/src/adapter-logger.service.ts#L46)

___

### setLogLevels

▸ **setLogLevels**(`levels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `levels` | `LogLevel`[] |

#### Returns

`void`

#### Implementation of

LoggerService.setLogLevels

#### Defined in

[src/adapter-logger.service.ts:70](https://github.com/igrek8/gc-json-logger-nestjs/blob/a0380bd/src/adapter-logger.service.ts#L70)

___

### verbose

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.verbose

#### Defined in

[src/adapter-logger.service.ts:64](https://github.com/igrek8/gc-json-logger-nestjs/blob/a0380bd/src/adapter-logger.service.ts#L64)

___

### warn

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

LoggerService.warn

#### Defined in

[src/adapter-logger.service.ts:52](https://github.com/igrek8/gc-json-logger-nestjs/blob/a0380bd/src/adapter-logger.service.ts#L52)
