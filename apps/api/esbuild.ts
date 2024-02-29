import * as esbuild from 'esbuild'

const build = async () => {
  await esbuild.build({
    entryPoints: ['src/bin/api.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/index.js',
    logLevel: 'info',
  })
}

build().catch(err => {
  console.error(err)
  process.exit(1)
})
