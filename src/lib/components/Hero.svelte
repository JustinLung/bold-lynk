<script lang="ts">
	export let heroSubtitle: string;
	export let heroTitle: string;
	export let heroText: string;
</script>

<section>
	<p class="text-md opacity-60">{heroSubtitle}</p>
	<h1 class="font-futura text-5xl max-w-lg">{heroTitle}</h1>
	<p class="text-lg max-w-lg opacity-60">{heroText}</p>
</section>	
