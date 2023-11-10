<template>
	<button @click="countFun">Worker Button</button>
</template>

<script setup lang="ts">
import Worker from './calculationWorker.ts?worker';

const countFun = () => {
	const worker = new Worker();
	worker.postMessage({});
	worker.onmessage = function (event: any) {
		console.log(event.data);
		worker.terminate();
	};
};
</script>

<style scoped></style>
