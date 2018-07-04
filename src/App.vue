<template>
  <pre>
	  welcome to wota project
  </pre>
</template>


<script>
	import {GroupView, BBSView} from '@/router'

	export default {
		name: 'app',
		components: {GroupView, BBSView}
	}
</script>

<style lang="less" module>
  .test {
    width: 200px;
    
    .a {
      width: 1px;
    }
    
    .b {
      width: 2px;
    }
  }
</style>
