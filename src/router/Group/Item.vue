<template>
	<div :class="[$style.link, $style[mode]]">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'item',
		props: {
			mode: {
				type: String,
				default: 'pink'
			}
		}
	}
</script>

<style lang="less" module>
		.link {
			width: 100%;
			height: 40px;
			margin-bottom: 10px;
			line-height: 40px;
			text-align: center;
			border-radius: 4px;
			box-sizing: border-box;

			&.pink {
				color: black;
				background-color: pink;
			}

			&.black {
				border: 2px solid pink;
				color: pink;
				background-color: black;
			}
		}
</style>
