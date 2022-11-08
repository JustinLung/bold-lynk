<script lang="ts">
	export let cardImage: string;
	export let cardTitle: string;
	export let cardText: string;
</script>

<article>
	<img src={cardImage} alt={cardTitle} />
	<h3 class="text-2xl font-xl font-futura max-w-sm">{cardTitle}</h3>
	<p class="max-w-xs opacity-70">{cardText}</p>
</article>
