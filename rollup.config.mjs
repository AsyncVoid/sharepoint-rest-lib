import typescript from '@rollup/plugin-typescript';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from "@rollup/plugin-alias";
import keysTransformer from 'ts-transformer-keys/transformer.js';

export default [
    {
        input: 'src/index.ts',
        external: ["axios", "node:crypto"],
        output: [
            {
                file: './lib/index.js',
                // dir: './lib',
                // preserveModules: true,
                format: 'esm',
                sourcemap: true,
            },
            {
                file: './lib/index.cjs',
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins: [
            typescript({
                transformers: {
                    before: [
                        {
                            type: 'program',
                            factory: (program) => {
                                return keysTransformer.default(program);
                            }
                        }
                    ]
                }
            })
        ]
    },
    {
        input: 'src/index.ts',
        external: [],
        output: [
            {
                file: './lib/bundle.js',
                format: 'esm',
                sourcemap: true,
                plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })]
            },
            {
                file: './lib/bundle.min.js',
                format: 'esm',
                compact: true,
                sourcemap: true,
                plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] }), terser()]
            },
        ],
        plugins: [
            alias({
                entries: [
                    { find: './CryptoNode.js', replacement: './CryptoBrowser.js' },
                    { find: './UtilsNode.js', replacement: './UtilsBrowser.js' },
                ]
            }),
            typescript({
                transformers: {
                    before: [
                        {
                            type: 'program',
                            factory: (program) => {
                                return keysTransformer.default(program);
                            }
                        }
                    ]
                }
            }),
            nodeResolve({
                rootDir: "./src",
                browser: true,
            }),
        ]
    }
];