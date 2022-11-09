/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
  entryPoints: ['./src/index.ts'],
  includes: ['./src'],
  hideGenerator: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  excludeExternals: true,
  theme: 'markdown',
  out: './docs',
  sort: ['alphabetical'],
  media: './media',
};
