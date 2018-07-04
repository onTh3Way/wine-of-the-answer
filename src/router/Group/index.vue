<template>
	<div :class="$style.bg">
		<div :class="$style.wrapper">
			<div>
				<item>group link</item>
				<item mode="black">group link</item>
				<item>group link</item>
				<item mode="black">group link</item>
				<item>group link</item>
				<item mode="black">group link</item>
				<item>group link</item>
			</div>
		</div>
	</div>
</template>

<script>
	import Item from './Item'

	export default {
		name: 'group-view',
		components: {Item}
	}
</script>

<style lang="less" module>
		.bg {
			width: 100%;
			height: 100%;
			background-color: black;
		}

		.wrapper {
			padding: 0 10px;
		}
</style>
