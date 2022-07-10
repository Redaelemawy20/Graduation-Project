import React from 'react'
import TextPages from '../../Common/TextPagesTemplate'

export default function Departmentalcompetences() {
  const data={
    
      Title:'Departmental Competences',
    
    lines:[
      'Conducting organizational research for administrative units in the university administration, colleges and various units.',
      'Conduct studies to simplify work procedures and develop performance rates, models used, workplaces and tools.',
      'Preparing and following up the system of arranging jobs based on duties and responsibilities.',
      'Planning and providing needs from different categories of workers.',
      'Develop the plan for the development of the staff of the university administration and its various colleges and units as well as establish rules for the follow-up and evaluation of trainees in various fields related to their specialties.',
      'Contact regulators and workforce development authorities to benefit from their expertise.',
      'Preparing periodic reports related to the organizational position and the development of the workforce to be presented to the President of the University and to provide the relevant authorities with the terms of reference of the administration.'
    ],
  }
  return (
    <div>
      <TextPages text={data}/>
    </div>
  )
}
