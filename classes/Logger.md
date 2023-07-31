[gc-json-logger-nestjs](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

## Implements

- `ILogger`

## Table of contents

### Methods

- [alert](Logger.md#alert)
- [critical](Logger.md#critical)
- [debug](Logger.md#debug)
- [default](Logger.md#default)
- [emergency](Logger.md#emergency)
- [error](Logger.md#error)
- [getLabels](Logger.md#getlabels)
- [getName](Logger.md#getname)
- [info](Logger.md#info)
- [log](Logger.md#log)
- [notice](Logger.md#notice)
- [setLabels](Logger.md#setlabels)
- [warning](Logger.md#warning)

### Constructors

- [constructor](Logger.md#constructor)

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

[src/logger.ts:75](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L75)

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

[src/logger.ts:67](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L67)

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

[src/logger.ts:27](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L27)

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

[src/logger.ts:19](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L19)

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

[src/logger.ts:83](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L83)

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

[src/logger.ts:59](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L59)

___

### getLabels

▸ **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Implementation of

ILogger.getLabels

#### Defined in

[src/logger.ts:95](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L95)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

ILogger.getName

#### Defined in

[src/logger.ts:99](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L99)

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

[src/logger.ts:35](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L35)

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

[src/logger.ts:11](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L11)

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

[src/logger.ts:43](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L43)

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

[src/logger.ts:91](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L91)

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

[src/logger.ts:51](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L51)

## Constructors

### constructor

• **new Logger**(`context?`, `labels?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `string` |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Defined in

[src/logger.ts:6](https://github.com/igrek8/gc-json-logger-nestjs/blob/2cea8d0/src/logger.ts#L6)
