import React from 'react'
import SearchforaluminiStyle from '../../Sectors/Deputy education and student/SearchforAluminiStyle.js'
import Header from '../../Home_Page/Header2'
import navLinks from '../../Home_Page/NavlinksObj'
export default function Examsresults() {
  const colleges = [
    {
      nameCollege: "Engineering",
      departments: [
        {
          depart: "electronic",
          nameStudents: [
            {
              name: "Mohamed Ehab",
              img: "",
            },
            {
              name: "Ahmed Hassan",
              img: "",
            },
          ],
        },
      ],
    },
    {
      nameCollege: "Arts",
      departments: [
        {
          depart: "History",
          nameStudents: [
            {
              name: "Hossam Hapip",
              img: "",
            },
            {
              name: "Ahmed Hassan",
              img: "",
            },
          ],
        },
      ],
    },
  ];
  let valueCollege="";
  let valueDepart="";
    
    return (
      <SearchforaluminiStyle>
        {colleges.map((item) => {
          if (item.name == "Engineering") {
            console.log(item.departments);
          }
        })}
        <Header navLinks={navLinks} />
  
        <div className="contentt">
          <div className="Title">
            <h1>Exams Resaults</h1>
          </div>
          <form>
            <label>Choose college</label>
            <select onChange={(event)=>{
              valueCollege=event.target.value;
              // console.log(valueCollege);
            }}>
              <option value="" disabled selected hidden className="placeholder">
                Choose college
              </option>
              {colleges.map((item) => {
                return <option id="collegename">{item.nameCollege}</option>;
              })}
            </select>
            <label>Choose Department</label>
            <select  onChange={(event)=>{
              valueDepart=event.target.value;
            }}>
              <option value="" disabled selected hidden className="placeholder" >
                Choose department
              </option>
              {colleges.map((item) => {
                return(
                  
                  item.departments.map((item) => {
                    return (<option>{item.depart}</option>);
                  })
                );
               
                }
              )}
            </select>
            
            <button type="button" onClick={()=>{
              // let select=document.getElementById('select');
              // let value = select.options[select.selectedIndex].value;
              console.log(valueCollege,valueDepart)
              
            }}>Search</button>
          </form>
        </div>
      </SearchforaluminiStyle>
    );
  }
  
