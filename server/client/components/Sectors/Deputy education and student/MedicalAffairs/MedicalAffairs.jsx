import React from 'react'
import Digitaltransformation from '../../../Home_Page/Digitaltransformation.jsx'
import bb from '../../Images/MedicalAffairs.jpg'


import {IoIosConstruct}from 'react-icons/io'
import {RiUserSettingsFill} from 'react-icons/ri'
import {MdSubtitles} from 'react-icons/md'
import {IoCall} from 'react-icons/io5'
import { Link } from 'react-router-dom'
//import {IoCall}from 'react-icons/io'
//import  {FaCodeBranch} from 'react-icons/fa'
export default function MedicalAffairs() {
    let MedicalAffairs={
        backgroundImage:bb,
        firstIcon:<Link to='/organizationalstrucure'><IoIosConstruct/></Link>,
        secondIcon:<Link to='/aboutaddminstration'><RiUserSettingsFill/></Link>,
        thirdIcon:<Link to='/subdepartments'><MdSubtitles/></Link>,
        fourthIcon:<Link to='/callusmedical'><IoCall/></Link>,
        title:'Medical Affairs',
        firstLink:<Link to='/organizationalstrucure'>Organizational Structure</Link>,
        secondLink:<Link to='/aboutaddminstration'>About Adminstration</Link>,
        thirdLink:<Link to='/subdepartments'>Sub-Department of Medical Affairs</Link>,
        fourthLink:<Link to='/callusmedical'>Call us</Link>,
        firstHight:1300,
        secondHight:1400,
      }
  return (
    <>
        <Digitaltransformation text={MedicalAffairs}/>
    </>
  )
}
