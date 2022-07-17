import { derived, writable } from 'svelte/store';

export const playerA = writable('');
export const playerB = writable('');

export const scoreA = writable(0);
export const scoreB = writable(0);

export const winner = derived([scoreA, scoreB, playerA, playerB], ([$scoreA, $scoreB, $playerA, $playerB]) => {
	if ($scoreA >= 21 && $scoreA - $scoreB > 1) {
		return $playerA.length > 0 ? $playerA : 'Player A';
	}

	if ($scoreB >= 21 && $scoreB - $scoreA > 1) {
		return $playerB.length > 0 ? $playerB : 'Player B';
	}

	return null;
});
