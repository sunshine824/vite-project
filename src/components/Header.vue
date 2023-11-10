<template>
	<p :class="style.header">This is Header</p>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

const style = useCssModule();
</script>

<style module lang="scss">
.header {
	color: $theme-color;
	text-decoration: dashed;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
}
</style>
