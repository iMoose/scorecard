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

<div class="flex flex-col place-items-center justify-start items-center ">
	<input
		bind:value={$name}
		type="text"
		class="rounded text-center bg-inherit border-none outline-none text-4xl placeholder:italic"
		placeholder="Player {placeholder}"
	/>

	<input
		class="text-center p-4 outline-none border-none bg-inherit appearance-none text-9xl w-full"
		bind:value={$score}
		type="number"
		min="0"
		step="1"
	/>

	<div class="flex flex-row w-full place-content-evenly justify-center">
		<button
			class="btn-square text-green-800 bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2"
			on:click={inc}>+</button
		>
		<button
			class="btn-square text-red-800 bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2"
			on:click={dec}>-</button
		>
	</div>
</div>
