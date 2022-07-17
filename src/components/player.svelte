<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let name: Writable<string>;
	export let score: Writable<number>;
	export let placeholder: string;

	export function inc() {
		score.update((n) => (n >= 0 ? n + 1 : n));
	}

	export function dec() {
		score.update((n) => (n > 0 ? n - 1 : n));
	}
</script>

<div class="flex flex-col place-items-center justify-start items-center">
	<input
		bind:value={$name}
		type="text"
		class="rounded text-center bg-inherit border-none outline-none text-4xl placeholder:italic p-4"
		placeholder="Player {placeholder}"
	/>

	<input
		class="text-center p-4 outline-none border-none bg-inherit appearance-none text-9xl w-full"
		bind:value={$score}
		type="number"
		min="0"
		step="1"
	/>

	<div class="flex flex-row w-full place-content-evenly justify-center align-middle text-5xl p-4">
		<button
			class="btn-square btn-lg bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2 flex items-center justify-center"
			on:click={inc}
			><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path fill="#4ade80" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg
			>
		</button>
		<button
			class="btn-square btn-lg bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2 flex items-center justify-center"
			on:click={dec}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path fill="#f87171" d="M0 10h24v4h-24z" /></svg
			></button
		>
	</div>
</div>
