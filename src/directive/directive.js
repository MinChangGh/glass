
const Rclass={
  inserted: function (el) {
    el.addEventListener('focus',()=>{
      setTimeout(()=>{
        document.body.classList.remove('mui-focusin')
      },10)
    })
  }
}
export {Rclass}

