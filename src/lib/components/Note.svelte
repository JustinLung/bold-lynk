<script lang="ts">
	import BoxIcon from './icons/BoxIcon.svelte';
	export let noteText: string;
</script>

<div class="bg-color-darkgrey flex items-center py-2 px-6  gap-6 w-fit rounded-lg">
	<BoxIcon />
	<p>{noteText}</p>
</div>
