import { FaHome } from "react-icons/fa";
export default [
  {
    name: "Home",
    icon: <FaHome />,
    url: "/",
    active: true,
    dropDown: false,
  },
  {
    name: "Higher Management",
    icon: <FaHome />,
    dropDown: true,
    menu: [
      {
        name: "Organizational Structure",
        url: "/OrganizationalStructure",
      },
      {
        name: "Sub-departments",

        dropDown: true,
        menu: [
          {
            name: "Office Addminstration",
            url: "/SubDepartments",
          },
          {
            name: "Secretariat Department",
            url: "/secretariedepartment",
          },
          {
            name: "Citizens Service Department",
            url: "/citizensservicedepartment",
          },
          {
            name: "Translation Department",
            url: "/translitiondepartment",
          },
          {
            name: "Advisor Department",
            url: "/advisordepartment",
          },
          {
            name: "Central Statistics",
            url: "/centralstatistics",
          },
          {
            name: "Management of quality assurance development ande valuation",
            url: "/managementofqualityassurancedevelopmentandevaluation",
          },
        ],
      },
      {
        name: "Vision and Message",
        url: "/VisionandMessage",
      },
    ],
  },
  {
    name: "Affiliate Departments",
    icon: <FaHome />,
    dropDown: true,
    menu: [
      {
        name: "Data Center",
        url: "http://mu.menofia.edu.eg/infor/infoHome/ar",
      },
      {
        name: "Legal Affairs",
        dropDown: true,
        menu: [
          {
            name: "Vission and Message",
            url: "/LegalAffairs",
          },
          {
            name: "sub departments",
            // dropDown:true,
            // menu:[
            //   {
            //     name:'Alaa'
            //   }
            // ]
          },
          {
            name: "اهم الاعمال ",
          },
          {
            name: "البوم الصور",
          },
          {
            name: "Call us",
            url: "/CalluslegalAffairs",
          },
        ],
      },
      {
        name: "Organization and Management",
        url: "/OrganizationandManagement",
        dropDown: true,
        menu: [
          {
            name: "Administration issues",
            url: "/Administrationissues",
          },
          {
            name: "Organizational Strucure",
            url: "/OSManagementandorganizing",
          },
          {
            name: "Departmental competences",
            url: "/Departmentalcompetences",
          },
          {
            name: "Vission and Message",
            url: "/vissionandmessagemanageandorganize",
          },
          {
            name: "ادارات فرعيه",
            url: "/",
          },
          {
            name: "اهم الاعمال",
            url: "/",
          },
          {
            name: "البوم الصور",
            url: "/",
          },
          {
            name: "Call us",
            url: "/CallusOrganizeandManage",
          },
        ],
      },
      {
        name: "Public relations and media",
        dropDown: true,
        menu: [
          {
            name: "Organizational Structure",
            url: "/osrelationandmedia",
          },
          {
            name: "Management competences",
            url: "/managementcompetance",
          },
          {
            name: "Vission and Message",
            url: "/vmrelationandmedia",
          },
          {
            name: "ادارات فرعيه",
          },
          {
            name: "Most important business",
            url: "/mostimportantandbusiness",
          },
          {
            name: "البوم الصور",
          },
          {
            name: "Call us",
            url: "/callusrationalmedia",
          },
        ],
      },

      {
        name: "Technical Inspection",
        dropDown: true,
        menu: [
          {
            name: "Organizitional Structure",
            url: "/TechnicalInspection",
          },
          {
            name:"Management Competance",
            url:"/managementcompetanceTech"
          },
          {
            name:'ادارات فرعيه'
          },
          {
            name:'Vission and Message',
            url:'/VissionandMessageTech'
          },
          {
            name:'Most important Works',
            url:'/ImportantworksTech'
          },
          {
            name:'البوم الصور'
          },
          {
            name:'تواصل معنا',
            url:'/CallusTech'
          }
        ],
      },
      {
        name: "Planning",
        url: "/Planning",
      },
      {
        name: "Security",
        url: "/Security",
      },
      {
        name: "Projects Management",
        url: "/ProjectsManagement",
      },
      {
        name: "Quality Assurance",
        url: "/QualityAssurance",
      },
    ],
  },
  {
    name: "President",
  },
];
