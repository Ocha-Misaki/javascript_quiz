{
  'use strict'

  const q1_AElement = document.getElementById('q1_A')
  q1_AElement.className = 'q1_A'
  const q1_BElement = document.getElementById('q1_B')
  q1_BElement.className = 'q1_B'
  const q1_CElement = document.getElementById('q1_C')
  q1_CElement.className = 'q1_C'

  const choices = [q1_AElement,q1_BElement,q1_CElement]
  const answer = choices[1]

  const judge = (element) => {
    if(answer == element){
      element.classList.add('right_answer')
    }else{
      element.classList.add('wrong_answer')
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