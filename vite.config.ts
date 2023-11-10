import { defineConfig, normalizePath } from 'vite';
import postcssConfig from './postcss.config';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';

const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), viteEslint()],
	server: {
		host: '0.0.0.0'
	},
	css: {
		postcss: postcssConfig,
		modules: {
			// css modules 类名生成规则
			generateScopedName: '[local]___[hash:base64:5]'
		},
		preprocessorOptions: {
			scss: {
				// additionalData 的内容会在每个 scss 文件的开头自动注入
				additionalData: `@import "${variablePath}";`
			}
		}
	}
});
