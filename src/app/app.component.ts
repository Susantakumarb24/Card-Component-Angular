import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myThirdAngular';
 
  // constructor(){
  //   let request=new XMLHttpRequest();
  //   request.open("GET","https://624d2af5d71863d7a8143760.mockapi.io/PricePage");
  //   request.send();
  //   request.onload=()=>{
  //       let jsonString=request.responseText;
  //       let priceCardList=JSON.parse(jsonString);
  //       console.log(priceCardList);
  //       for(let i=0;i<priceCardList.length;i++)
  //       {
  //           console.log(priceCardList[i].name);
  //       }
  //   };
  // } 

  priceCardList=[
    {
      id:"1",
      price :"0",
      name:"free",
      features:[
        {
          title:"Single User"
        },
        {
          title:"5GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        }
        
      ],
      features_muted:[
        
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        },
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    
    {
      id:"2",
      price:"9",
      name:"Plus",
      features:[
        {
          title:"𝟱 𝗨𝘀𝗲𝗿𝘀"
        },
        {
          title:"50GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        }
      ],
      features_muted:[
        
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    {
      id:"3",
      price:"49",
      name:"pro",
      features:[
        {
          title:"𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 𝗨𝘀𝗲𝗿𝘀"
        },
        {
          title:"150GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 Free Subdomains"
        },
        {
          title:"Monthly Status Reports"
        }
       ]
      
    },
    
  ]
}
