import { describe, it, expect, vi } from "vitest"
import App from './App.vue'
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

describe("the main page", ()=>{
	it("should not change (Snapshot Test)",async ()=>{
		const app = createApp(App);
		const date = new Date(2000, 1, 1, 18)
		vi.setSystemTime(date)
		
		expect(await renderToString(app)).toMatchSnapshot();
	})
})