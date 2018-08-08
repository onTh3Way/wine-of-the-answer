<template>
  <div :class="$style.border">
    <icon :class="$style.agreement_icon" type="agreement" />
    <p :class="$style.agreement_word">45654</p>
    <icon :class="$style.comment_icon" type="comment" />
    <p :class="$style.comment_word">520</p>
    <icon :class="$style.disagreement" type="disagreement" />
    <div :class="$style.border" />
  </div>
</template>

<script>
  import icon from 'components/Icon'
  export default {
    name: 'border',
    components: {icon}
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .border{
    .agreement_icon,
    .comment_icon,
    .disagreement {
      width: 18/@rem;
      height: 18/@rem;
      margin-top: -95/@rem;
    }

    .agreement_icon {
      margin-left: 100/@rem;
    }

    .comment_icon {
      margin-left: 74/@rem;
    }

    .disagreement {
      margin-left: 438/@rem;
    }

    .agreement_word,
    .comment_word {
      font-size: 14/@rem;
      display: inline-block;
      float: left;
      color: pink;
      margin-top: -95/@rem;
      margin-left: 120/@rem;
    }

    .agreement_word {
      margin-left: 120/@rem;
    }

    .comment_word {
      margin-left: 214/@rem;
    }

    .border {
      float: right;
      display: inline-block;
      width: 366/@rem;
      height: 1px;
      margin-top: -75/@rem;
      margin-right: 20/@rem;
      background: #262626;
    }
  }
</style>
