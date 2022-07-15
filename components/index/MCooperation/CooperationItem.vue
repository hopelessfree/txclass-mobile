<template>
	<div class="cooperation-item">
		<a :href="data.link" class="item-lk" target="_blank">
			<img :src="IMG_BASE + data.logoUrl" :alt="data.title" class="logo-img">
			<p class="tt">{{ data.title }}</p>
		</a>
	</div>
</template>

<script>
import { URL } from "@/config/config"

export default {
	props: {
		data: Object,
	},

	data() {
		return { ...URL }
	}
}
</script>

<style lang="scss" scoped>
.cooperation-item {
	display: flex;
	flex: 1;
	padding: .15rem 0;

	.item-lk {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.logo-img {
		width: .4rem;
		height: .4rem;
	}

	.tt {
		font-size: .12rem;
		margin-top: .1rem;
	}
}
</style>