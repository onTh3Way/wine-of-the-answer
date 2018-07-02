<template>
	<p :class="$style.link" @click="handleClick">
		<slot />
	</p>
</template>F

<style lang="less" module>
	.link {
		color: skyblue;
		cursor: pointer;
		transition: color 0.3s;
		
		&:hover {
			color: black;
		}
	}
</style>

<script>
	export default {
		name: 'route-link',
		props: {
			to: {
				type: String,
				required: true
			}
		},
		methods: {
			handleClick () {
				const oldHref = location.href
				history.pushState(null, '', this.$props.to)
				if (oldHref !== location.href) history.emit('pushstate')
			}
		}
	}
</script>
