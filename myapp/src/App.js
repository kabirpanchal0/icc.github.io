import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./components/home/Home";
import About from "./components/about/About";
import Logins from "./components/signup/Logins";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/Contact";
import C1 from "./components/services/courses/C1";
import C2 from "./components/services/courses/C2";
import C3 from "./components/services/courses/C3";
import C6 from "./components/services/courses/C6";
import C7 from "./components/services/courses/C7";
import C8 from "./components/services/courses/C8";
import C10 from "./components/services/courses/C10";
import C11 from "./components/services/courses/C11";

import Australia from "./components/services/countries/Australia/Australia";
import Canada from "./components/services/countries/Canada/Canada";
import Germany from "./components/services/countries/Germany/Germany";
import Uk from "../src/components/services/countries/Uk/Uk"
import Usa from "../src/components/services/countries/Usa/Usa"
import France from "./components/services/countries/France/France";
import Italy from "../src/components/services/countries/Italy/Italy"
import { Route, Routes } from "react-router-dom";
import Newzeeland from "./components/services/countries/Newzeeland/Newzeeland";
import Auscollages from "./components/services/collages/Australiacollages/Auscollages";
import Cancollages from "./components/services/collages/Canadacollages/Cancollages";
import Fracollages from "./components/services/collages/Francecollages/Fracollages";
import Gercollages from "./components/services/collages/Germany/Gercollages";
import Itacollages from "./components/services/collages/Italycollages/Itacollages";
import Newzcollages from "./components/services/collages/Newzeeland/Newzcollages";
import Ukcollages from "./components/services/collages/Ukcollages/Ukcollages";
import Usacollages from "./components/services/collages/Usacollages/Usacollages";
import Disciplinary from "./components/home/Disciplinary";
import Disciplinary2 from "./components/services/countries/Disciplinary/Disciplinary2";
import Confirmpassword from "./components/signup/Confirmpassword";
import Forgotpassword from "./components/signup/Forgotpassword";
import Allcountries from "./components/services/countries/Allcountries/Allcountries";
import Resetpasswrord from "./components/signup/Resetpasswrord";
import Adminsignin from "./components/admin/signin/Adminsignin";
import Adminsignup from "./components/admin/signup/Adminsignup";
import Feedback from "./components/about/Feedback";
import Allcollages from "./components/services/collages/Allcollages";
import Adminnavbar from "./components/admin/navbar/Adminnavbar";
import Addcourses from "./components/admin/Managecourses/Addcourses";
import India from "./components/services/countries/India";
import Manageuser from "./components/admin/ManageUser/Manageuser";

import Adminhome from "./components/admin/Adminhome";
import Addcollages from "./components/admin/ManageCollage/Editcollages";
import CollagesData from "./components/admin/ManageCollage/CollagesData";
import Countriesdata from "./components/admin/Managecountries/Countriesdata";
import Addcountries from "./components/admin/Managecountries/Addcountries";
import Coursesdata from "./components/admin/Managecourses/Coursesdata";
import Tipapply from "./components/apply/Tipapply";
import Applycourses from "./components/services/courses/Applycourses";
import Applyform from "./components/apply/Applyform/Applyform";
import C1colleges from "./components/services/coursecollages/C1colleges";
import C2colleges from "./components/services/coursecollages/C2colleges";
import C3colleges from "./components/services/coursecollages/C3colleges";
import C6colleges from "./components/services/coursecollages/C6colleges";
import C7colleges from "./components/services/coursecollages/C7colleges";
import C8colleges from "./components/services/coursecollages/C8colleges";
import C10colleges from "./components/services/coursecollages/C10colleges";
import C11colleges from "./components/services/coursecollages/C11colleges";
import Detailsexam from "./components/details/detailsexam/Detailsexam";
import IeltsAus from "./components/details/IeltsAustralia/IeltsAus";
import Ieltsger from "./components/details/Ieltsgermany/Ieltsger";
import Ieltsfra from "./components/details/Ieltsfrance/Ieltsfra";
import Ieltsita from "./components/details/IeltsItaly/Ieltsita";
import { Switch } from "@mui/material";
import Ieltsnew from "./components/details/Ieltsnew/Ieltsnew";
import Ieltsuk from "./components/details/Ieltsuk/Ieltsuk";
import Ieltsacanada from "./components/details/Ieltscanada/Ieltsacanada";
import Ieltsusa from "./components/details/Ieltsusa/Ieltsusa";

import Edituser from "./components/admin/ManageUser/Edituser";



function App() {

  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/c1" element={<C1 />} />
      <Route path="/c2" element={<C2 />} />
      <Route path="/c3" element={<C3 />} />


      <Route path="/c6" element={<C6 />} />
      <Route path="/c7" element={<C7 />} />
      <Route path="/c8" element={<C8 />} />

      <Route path="/c10" element={<C10 />} />
      <Route path="/c11" element={<C11 />} />

      <Route path="/countries/4" element={<Australia />} />
      <Route path="/countries/8" element={<Canada />} />
      <Route path="/countries/1" element={<Germany />} />
      <Route path="/countries/6" element={<Uk />} />
      <Route path="/countries/7" element={<Usa />} />
      <Route path="/countries/3" element={<Italy />} />
      <Route path="/countries/2" element={<France />} />
      <Route path="/countries/5" element={<Newzeeland />} />
      <Route path="/countries/9" element={<India />} />
      <Route path="/logins" element={<><Logins /></>} />
      <Route path="/disc" element={<Disciplinary />} />
      <Route path="/changepass" element={<Confirmpassword />} />
      <Route path="/disc2" element={<Disciplinary2 />} />


      <Route path="/gercolleges" element={<Gercollages />} />
      <Route path="/fracolleges" element={<Fracollages />} />
      <Route path="/auscolleges" element={<Auscollages />} />
      <Route path="/cancolleges" element={<Cancollages />} />


      <Route path="/itacolleges" element={<Itacollages />} />
      <Route path="/newcolleges" element={<Newzcollages />} />
      <Route path="/ukcolleges" element={<Ukcollages />} />
      <Route path="/usacolleges" element={<Usacollages />} />
      <Route path="/forgotpass" element={<Forgotpassword />} />
      <Route path="/allcon" element={<Allcountries />} />
      <Route path="/resetyourpasswordhere" element={<Resetpasswrord />} />
      <Route path="/adminsignin" element={<Adminsignin />} />
      <Route path="/adminsignup" element={<Adminsignup />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/allcollages" element={<Allcollages />} />
      <Route path="/adminhome" element={<Adminhome />} />
      <Route path="/adminnavbar" element={<Adminnavbar />} />
      <Route path="/manageuser" element={<Manageuser />} />
      <Route path="/collagesdata" element={<CollagesData />} />
      <Route path="/addcollages" element={<Addcollages />} />
      <Route path="/countriesdata" element={<Countriesdata />} />
      <Route path="/addcountries" element={<Addcountries />} />
      <Route path="/addcourses" element={<Addcourses />} />
      <Route path="/coursesdata" element={<Coursesdata />} />
      <Route path="/c1colleges" element={<C1colleges />} />
      <Route path="/c2colleges" element={<C2colleges />} />
      <Route path="/c3colleges" element={<C3colleges />} />
      <Route path="/c6colleges" element={<C6colleges />} />
      <Route path="/c7colleges" element={<C7colleges />} />
      <Route path="/c8colleges" element={<C8colleges />} />
      <Route path="/c10colleges" element={<C10colleges />} />
      <Route path="/c11colleges" element={<C11colleges />} />
      <Route path="/tipapply" element={<Tipapply />} />
      <Route path="/applycourses" element={<Applycourses />} />
      <Route path="/applyform" element={<Applyform />} />
      <Route path="/detailsexam" element={<Detailsexam />} />
      <Route path="/ieltsaus" element={<IeltsAus />} />
      <Route path="/ieltsger" element={<Ieltsger />} />
      <Route path="/ieltsfra" element={<Ieltsfra />} />
      <Route path="/ieltsita" element={<Ieltsita />} />
      <Route path="/ieltsnew" element={<Ieltsnew />} />
      <Route path="/ieltsuk" element={<Ieltsuk />} />
      <Route path="/ieltscan" element={<Ieltsacanada />} />
      <Route path="/ieltsusa" element={<Ieltsusa />} />

      <Route path="/manageuser/edit/:id" element={<Edituser />} />


    </Routes>

  );
}


export default App;



