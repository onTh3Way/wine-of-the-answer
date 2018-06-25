<template>
	<button :class="$style.btn">
		Text
		<img src="./favicon.ico">
	</button>
</template>

<style lang="less" module>
	.btn {
		color: skyblue;
	}
</style>

<script>
	import '../Link'

	export default {
		name: 'button'
	}
</script>
