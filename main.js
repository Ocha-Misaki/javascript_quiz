{
  'use strict'

  const q1_AElement = document.getElementById('q1_A')
  const q1_BElement = document.getElementById('q1_B')
  const q1_CElement = document.getElementById('q1_C')
  const answer = q1_AElement

  const judge = (element) => {
    if(answer == element){
      element.className= 'right_answer'
    }else{
      element.className = 'wrong_answer'
    }
  }
  q1_AElement.addEventListener('click',() =>{
    judge(q1_AElement)
  })
  q1_BElement.addEventListener('click',()=>{
    judge(q1_BElement)
  })
  q1_CElement.addEventListener('click',()=>{
    judge(q1_CElement)
  })
}