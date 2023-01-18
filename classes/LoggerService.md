[gc-json-logger-nestjs](../README.md) / [Exports](../modules.md) / LoggerService

# Class: LoggerService

## Implements

- `ILogger`

## Table of contents

### Methods

- [alert](LoggerService.md#alert)
- [critical](LoggerService.md#critical)
- [debug](LoggerService.md#debug)
- [default](LoggerService.md#default)
- [emergency](LoggerService.md#emergency)
- [error](LoggerService.md#error)
- [getLabels](LoggerService.md#getlabels)
- [info](LoggerService.md#info)
- [log](LoggerService.md#log)
- [notice](LoggerService.md#notice)
- [setLabels](LoggerService.md#setlabels)
- [warning](LoggerService.md#warning)

### Constructors

- [constructor](LoggerService.md#constructor)

## Methods

### alert

▸ **alert**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.alert

#### Defined in

[src/logger.service.ts:38](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L38)

___

### critical

▸ **critical**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.critical

#### Defined in

[src/logger.service.ts:34](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L34)

___

### debug

▸ **debug**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.debug

#### Defined in

[src/logger.service.ts:14](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L14)

___

### default

▸ **default**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.default

#### Defined in

[src/logger.service.ts:10](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L10)

___

### emergency

▸ **emergency**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.emergency

#### Defined in

[src/logger.service.ts:42](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L42)

___

### error

▸ **error**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.error

#### Defined in

[src/logger.service.ts:30](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L30)

___

### getLabels

▸ **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Implementation of

ILogger.getLabels

#### Defined in

[src/logger.service.ts:50](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L50)

___

### info

▸ **info**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.info

#### Defined in

[src/logger.service.ts:18](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L18)

___

### log

▸ **log**(`severity`, `message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `severity` | `Severity` |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.log

#### Defined in

[src/logger.service.ts:6](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L6)

___

### notice

▸ **notice**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.notice

#### Defined in

[src/logger.service.ts:22](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L22)

___

### setLabels

▸ **setLabels**(`labels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Returns

`void`

#### Implementation of

ILogger.setLabels

#### Defined in

[src/logger.service.ts:46](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L46)

___

### warning

▸ **warning**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | `LogEntryMetadata` |

#### Returns

`void`

#### Implementation of

ILogger.warning

#### Defined in

[src/logger.service.ts:26](https://github.com/igrek8/gc-json-logger-nestjs/blob/f89aa7f/src/logger.service.ts#L26)

## Constructors

### constructor

• **new LoggerService**()
