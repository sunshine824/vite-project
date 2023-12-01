<template>
	<p :class="style.header">This is Header</p>
	<VueSvg></VueSvg>
	<img style="width: 100px" src="@/assets/wallhaven1.jpg" />
</template>

<script setup lang="ts">
import VueSvg from '@/assets/vue.svg';
import { useCssModule } from 'vue';

const style = useCssModule();
</script>

<style module lang="less">
@import './index.module.less';
</style>
