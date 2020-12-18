import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {NavBar} from "./component/NavBar";
import {Main} from "./component/Main";
import {Projects} from "./component/Projects";
import {Experiences} from "./component/Experiences";
import {Experience, ExperienceProps} from "./component/Experience";
import AOS from 'aos';
import $ from 'jquery';
import {Info} from "./component/Info";
import {Footer} from "./component/Footer";

const projects = [{name:"3D Snake Game",link:"VideoPlayer.php?link=videos\/SnakeGameIntro.mov",description:"In this 3D Sanake Game, user need to control a snake to move on a surface of a rotating cube and collect \"food\" for points. The more food snake consumes, the longer it will be.",status:"Academic",image:"images\/Snake.png",category:"Java"},
    {name:"AMZ Park",link:"https:\/\/github.com\/ZijiaZhang\/AmzPark",description:"A sample management website for an amusement park. Functions like register ,login and make reservation are available on the customer side. Searching and manage status of the entertainment are available on the manager side.",status:"Academic",image:"images\/AMZPark.PNG",category:"PHP SQL Database JavaScript"},
    {name:"AISpace2",link:"https:\/\/aispace2.github.io\/AISpace2\/",description:"AISpace2 is a set of notebooks and an extension for Jupyter, a web application that combines code, text, and visualizations into a single, rich document. These notebooks teach and demonstrate AI concepts by providing detailed explanations alongside Python code implementations, and the accompanying extension brings these concepts to life by providing interactive visualizations driven directly by the code you see.",status:"Volunteer",image:"images\/AISpace2.png",category:"Python TypeScript AI"},
    {name:"ChatSim",link:"http:\/\/eml.ubc.ca\/projects\/language-chatsim\/",description:"Language Chatsim is an ongoing collaboration between EML, UBC IT, a faculty member from the Department of Central, Eastern and Northern European Studies and a faculty member from the English Language Institute with a focus on developing a language learning application using virtual reality. The current version of Language Chatsim allows users to pick between English or German to practice speaking with an avatar in virtual reality. This avatar is connected to a chatbot built using Google's DialogFlow to allow for natural response to the users input. This process allows for students to naturally practice without the need to go out and find a practice partner.",status:"Volunteer",image:"images\/LanguageChatSim.PNG",category:"Unity VR Azure"},
    {name:"Webgl",link:"http:\/\/zijiazhang.com\/webgl",description:"Learning Webgl and Some Samples Here.",status:"Demo",image:"images\/webgl.png",category:"Rendering Webgl"},
    {name:"HForm",link:"http:\/\/protein.ict.ac.cn\/HForm\/",description:"A Website that receive a DNA sequence from the user, and match it with recalculated data base to present the potential known secondary structure.",status:"Work",image:"images\/HForm.png",category:"Database, Python, PHP"},
    {name:"ScifiRunner",link:"https:\/\/github.com\/ZijiaZhang\/ScifiRunner",description:"An endless runner game that is currently under development using Unreal Engine 4. Targeting mobile and desktop Platforms.",status:"Personal",image:"images\/No_image_3x4.svg",category:"Unreal C++ Android iOS"},
    {name:"3D Tetris",link:"files\/public\/3DTetris\/",description:"A 3D Teris Game Available on Android and iOS in which user can customize the size of the board. ",status:"Personal",image:"images\/Tetris.png",category:"Unreal C++ Mobile"},
 //   {name:"Simple Neural Net",link:".\/SimpleNN\/index.html",description:"A Simple Neural Network",status:"Finished",image:"images\/No_image_3x4.svg",category:"Personal"}
    {name:"UBC Tantan", link: "https:\/\/github.com\/ZijiaZhang\/CPSC436_Project", description: "UBC TANTAN is a full-stack social networking web application, which allows new students to UBC to edit their profiles, share posts, add new friends, and chat with them. It also supports group chats, backend monitoring, and friend recommendations.", status: "Academic",image:"images\/UBCTanTan.PNG",category:"Node.js React"},
    {name:"Van Exposure", link: "https:\/\/van-exposure.duckdns.org", description: "A website provide visualization of possible COVID exposure based on BCCDC data and user reports.", status: "Hackathon",image:"images\/VanExposure.PNG",category:"Node.js React"}

];

const experiences = [{color: "green", icon: "fa-search", title:"Intern Student",
    location:"Institute of Computing Technology Chinese Academy of Sciences",
    body:"I learned basics of machine learning algorithms and also tried challenges on Kaggle with seniors. I also created a website that checks the primary structure of DNA and matches the segments with the database indicating a known secondary structure.",
    date:"May-June 2018", link:"http://protein.ict.ac.cn/HForm/"},
    {color: "yellow", icon: "fa-chalkboard-teacher", title:"Teaching Assistant of CPSC 121",
        location:"University of British Columbia",
        body:"I help students debug their circuit design and answer questions about course materials, and also work with team on marking assignments and exams.",
        date:"September 2018- May 2019", link:null},
    {color: "red", icon: "fa-vr-cardboard", title:"Volunteer Programmer",
        location:"UBC Emerging Media Lab (EML)",
        body:"I colaborated with my team at EML and also the team from UBC IT and worked on the Language Chatsim projects. I combined Unity VR with windows speech to text service to recognize user input and also used microsoft azure web service to perform text to speech.",
        date:"April - August 2019", link:"https://eml.ubc.ca/projects/language-chatsim/"},
    {color: "red", icon: "fa-laptop", title:"Volunteer Programmer",
        location:"UBC Computer Science Research",
        body:"I worked on the AISpace2 Project together with my team lead by professor David Pool. We not only improved the user experience by providing graphical builder for each kind of problem, but also provide converter that can easyly convert the problem from AISpace to AISpace2.",
        date:"April - September2019", link:"https://aispace2.github.io/AISpace2/index.html"},
    {color: "yellow", icon: "fa-chalkboard-teacher", title:"Teaching Assistant of CPSC 221",
        location:"University of British Columbia",
        body:"I helped students debug their code and answer their questions about C++.",
        date:"September-December 2019", link:null},
    {color: "yellow", icon: "fa-briefcase", title:"Software Development Intern",
        location:"Demonware",
        body:"I worked as part of Application Platform Team, supports the launch of Call of Duty.",
        date:"January-December 2020", link:null},
] as ExperienceProps[];

export class App extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <NavBar/>
                <Main/>
                <Projects projects={projects}/>
                <Experiences experiences={experiences}/>
                <Info/>
                <Footer/>
            </div>
        )
    }

    componentDidMount(): void {
        AOS.init({disable: 'mobile' });

        const fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
        const prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        function ua() {
            return navigator.userAgent || navigator.vendor || '';
        }
        function mobile() {
            const a = ua();
            return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.substr(0, 4)));
        }

        $('.post-module').hover(function() {
            $(this).find('.description').stop().animate({
                height: "toggle",
                opacity: "toggle"
            }, 300);
        });

    }
}
