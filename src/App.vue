<template>
	<div>
		<Header></Header>
		<button @click="countFun">开始计算</button>
		<WebWorker></WebWorker>
		<svg-icon iconName="icon-xinzeng" className="test" color="red"></svg-icon>
		<svg-icon iconName="icon-credit" className="test" color="#fff"></svg-icon>
	</div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import WebWorker from './components/WebWorker.vue';
import SvgIcon from './components/SvgIcon.vue';

const countFun = () => {
	let count = 0;
	for (let i = 0; i < 100e8; i++) {
		count += i;
	}
	console.log(count);
};
</script>

<style scoped lang="scss"></style>
