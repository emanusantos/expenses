<script lang="ts">
	import { Navbar } from 'layout';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Expenses</title>
</svelte:head>

<Navbar />

{@render children()}
