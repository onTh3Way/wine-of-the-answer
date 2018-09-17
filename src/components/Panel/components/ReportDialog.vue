<template>
  <bottom-dialog
    ref="bottomDialog"
    :dialogClass="$style.dialog"
  >
    <template slot="title">请选择违规事项</template>
    <template slot="dialog">
      <div :class="$style.wrapper">
        <checkbox-group ref="checkboxGroup">
          <checkbox
            v-for="(value, index) of reportOptions"
            :key="index"
            :value="value"
          >
            {{ value }}
          </checkbox>
        </checkbox-group>
        <p :class="$style.other_reason">其他原因(可选):</p>
        <textarea ref="textarea" :class="$style.input" placeholder="请填写举报原因" />
        <button
          :class="[$style.btn, $style.primary]"
          @click="report"
        >
          举报
        </button>
      </div>
    </template>
  </bottom-dialog>
</template>

<script>
  import { BottomDialog, CheckboxGroup, Checkbox } from 'components'
  import { message } from 'utils'
  import upperFirst from 'lodash/upperFirst'

  const reportOptions = [
    '语言辱骂',
    '地域歧视',
    '不当言论'
  ]

  export default {
    name: 'report-dialog',
    inject: ['id', 'type'],
    components: {
      BottomDialog,
      CheckboxGroup,
      Checkbox
    },
    props: {
      onBeforeReport: {
        type: Function,
        default: () => void 0
      },
      onReportFailed: {
        type: Function,
        default: () => void 0
      },
      onReportSucceed: {
        type: Function,
        default: () => void 0
      }
    },
    data: () => ({
      reportOptions
    }),
    methods: {
      show () {
        this.$refs.bottomDialog.show()
      },
      hide () {
        this.$refs.bottomDialog.hide()
      },
      report () {
        let reason = this
          .$refs
          .checkboxGroup
          .getCheckedList()
          .map(item => item.value)
          .join('\r\n')
        reason = reason
          ? reason + `\r\n其他原因:${this.$refs.textarea.value}`
          : `其他原因:${this.$refs.textarea.value}`

        if (!reason) return

        this.onBeforeReport()

        this
          .$service['report' + upperFirst(this.type)]({id: this.id, reason})
          .allOk(() => {
            this.onReportSucceed()
            this.hide()
            message.success('举报成功')
          })
          .clientError(() => {
            this.onReportFailed()
            message.error('举报失败')
          })
      }
    }
  }
</script>

<style lang="less" module>
  .dialog {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  
  .wrapper {
    padding: 0 1rem;
  }
  
  .other_reason {
    font-size: 0.6rem;
    font-weight: 900;
  }
  
  .input {
    margin: 0.2rem 0;
    width: 100%;
    height: 3rem;
    font-size: 0.6rem;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .btn {
    padding: 0.2rem 0;
    width: 100%;
    font-size: 0.6rem;
    font-weight: 900;
    border-radius: 0.1rem;
  }
  
  .primary {
    color: white;
    background-color: #0084ff;
  }
</style>
