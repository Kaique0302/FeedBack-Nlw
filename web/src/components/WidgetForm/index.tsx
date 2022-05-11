
import { useState } from "react";


import { CloseButtom } from "../ClosseButtom";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStap";
import { FeedbackTypeStep } from "./Steps/FeedbackTypesStap";
import { FeedbackSucessStep } from "./Steps/FeedbacjSucessStap";


export const feedbackTypes ={
  BUG: {
title:'Problema',
image: {
  source: bugImageUrl,
  alt: 'Imagem de um inseto'
}
  },
  IDEA: {
title:'Ideia',
image: {
  source: ideaImageUrl,
  alt: 'Imagem de um Lâmpada'
}
  },
  OTHER:{
title:'Outro',
image: {
  source: thoughtImageUrl,
  alt: 'Imagem de um nuvem de pensamento'
}
  },
}


export type FeedbackType =  keyof typeof feedbackTypes;


export function WidgetForm() {

const [feedBackType, setFeedbackType] = useState<FeedbackType | null> (null)
const [feedbackSent, SetFeedbackSent] = useState(false);



function handleRestartFeedback () {
  SetFeedbackSent(false)
  setFeedbackType(null);
}

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadown-lg w-[calc(100vw-2rem)] md:w-auto">
      


    { feedbackSent ? (
      <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
    ) : (
      <>
      
      {!feedBackType ? (

<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/> 

) : (
 <FeedbackContentStep
  feedbackType = {feedBackType}
  onFeedbackRestartRequest={handleRestartFeedback}
  onFeedbackSent={() => SetFeedbackSent(true)}
  />
  
)}

      
      
      </>
    )
    
  }


      <footer className="text-cs text-neutral-400">

      Feito com ♥ pela <a className="underline-offset-2" href="https://rocketeseat.com.br">Rocketseat</a>

      </footer>
    </div>
  )
}