import Vue from 'vue'
import { ToastPlugin } from 'vux';
Vue.use(ToastPlugin);
import Clipboard from 'clipboard'

function clipboardSuccess() {
  Vue.$vux.toast.show({
    type: 'text',
    position: 'middle',
    text: '复制成功'
  })
}

function clipboardError() {
  Vue.$vux.toast.show({
    type: 'text',
    position: 'middle',
    text: '复制失败'
  })
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
