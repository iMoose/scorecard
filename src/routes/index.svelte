<script lang="ts">
	import Player from '$root/components/player.svelte';
	import { playerA, scoreA, playerB, scoreB, winner } from '$root/stores';

	export function reset() {
		scoreA.set(0);
		scoreB.set(0);
	}
</script>

<h1 class="card-title text-center w-screen object-center block text-6xl p-4 mt-4">Scorecard</h1>

<div class="flex flex-col place-items-center pb-8" style="height: 90vh; justify-content: space-around;">
	<div class="flex flex-col w-full lg:flex-row h-4/6 justify-center items-center">
		<div class="grid flex-grow h-full card bg-base-300 rounded-box place-items-center" style="max-width: 45vw;">
			<Player name={playerA} score={scoreA} placeholder="A" />
		</div>
		<div class="divider lg:divider-horizontal">OR</div>
		<div class="grid flex-grow h-full card bg-base-300 rounded-box place-items-center" style="max-width: 45vw;">
			<Player name={playerB} score={scoreB} placeholder="B" />
		</div>
	</div>

	<div class="h-fit justify-center flex flex-col items-center">
		{#if $winner != null}
			<h1 class="card-title text-center p-6 object-center block text-6xl w-auto">{$winner} WINS!!!</h1>
		{/if}

		<button class="btn btn-error uppercase" on:click={reset}>reset</button>
	</div>
</div>
