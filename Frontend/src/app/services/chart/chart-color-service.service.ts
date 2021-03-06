import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class ChartColorServiceService {
    
  private colorArray = {
    "blue-50" : "#f4fafe",
    "blue-100" : "#cae6fc", 
    "blue-200" : "#a0d2fa",
    "blue-300" : "#75bef8",
    "blue-400" : "#4baaf5", 
    "blue-500" : "#2196f3", 
    "blue-600" : "#1c80cf", 
    "blue-700" : "#1769aa", 
    "blue-800" : "#125386", 
    "blue-900" : "#0d3c61", 
    "green-50" : "#f6fbf6",
    "green-100" : " #d4ecd5",  
    "green-200" : " #b2ddb4",
    "green-300" : " #90cd93",
    "green-400" : " #6ebe71",
    "green-500" : " #4caf50",
    "green-600" : " #419544",
    "green-700" : " #357b38",
    "green-800" : " #2a602c",
    "green-900" : " #1e4620",
    "yellow-50" : "#fffcf5",    
    "yellow-100" : "#fef0cd",
    "yellow-200" : "#fde4a5",
    "yellow-300" : "#fdd87d",
    "yellow-400" : "#fccc55",
    "yellow-500" : "#fbc02d",
    "yellow-600" : "#d5a326",
    "yellow-700" : "#b08620",
    "yellow-800" : "#8a6a19",
    "yellow-900" : "#644d12",
  // .cyan - 50{ background - color:  #f2fcfd; }
  // .cyan - 100{ background - color:  #c2eff5; }
  // .cyan - 200{ background - color:  #91e2ed; }
  // .cyan - 300{ background - color:  #61d5e4; }
  // .cyan - 400{ background - color:  #30c9dc; }
  // .cyan - 500{ background - color:  #00bcd4; }
  // .cyan - 600{ background - color:  #00a0b4; }
  // .cyan - 700{ background - color:  #008494; }
  // .cyan - 800{ background - color:  #006775; }
  // .cyan - 900{ background - color:  #004b55; }
  // .pink - 50{ background - color:  #fef4f7; }
  // .pink - 100{ background - color:  #fac9da; }
  // .pink - 200{ background - color:  #f69ebc; }
  // .pink - 300{ background - color:  #f1749e; }
  // .pink - 400{ background - color:  #ed4981; }
  // .pink - 500{ background - color:  #e91e63; }
  // .pink - 600{ background - color:  #c61a54; }
  // .pink - 700{ background - color:  #a31545; }
  // .pink - 800{ background - color:  #801136; }
  // .pink - 900{ background - color:  #5d0c28; }
  // .indigo - 50{ background - color:  #f5f6fb; }
  // .indigo - 100{ background - color:  #d1d5ed; }
  // .indigo - 200{ background - color:  #acb4df; }
  // .indigo - 300{ background - color:  #8893d1; }
  // .indigo - 400{ background - color:  #6372c3; }
  // .indigo - 500{ background - color:  #3f51b5; }
  // .indigo - 600{ background - color:  #36459a; }
  // .indigo - 700{ background - color:  #2c397f; }
  // .indigo - 800{ background - color:  #232d64; }
  // .indigo - 900{ background - color:  #192048; }
  // .teal - 50{ background - color:  #f2faf9; }
  // .teal - 100{ background - color:  #c2e6e2; }
  // .teal - 200{ background - color:  #91d2cc; }
  // .teal - 300{ background - color:  #61beb5; }
  // .teal - 400{ background - color:  #30aa9f; }
  // .teal - 500{ background - color:  #009688; }
  // .teal - 600{ background - color:  #008074; }
  // .teal - 700{ background - color:  #00695f; }
  // .teal - 800{ background - color:  #00534b; }
  // .teal - 900{ background - color:  #003c36; }
  // .orange - 50{ background - color:  #fff8f2; }
  // .orange - 100{ background - color:  #fde0c2; }
  // .orange - 200{ background - color:  #fbc791; }
  // .orange - 300{ background - color:  #f9ae61; }
  // .orange - 400{ background - color:  #f79530; }
  // .orange - 500{ background - color:  #f57c00; }
  // .orange - 600{ background - color:  #d06900; }
  // .orange - 700{ background - color:  #ac5700; }
  // .orange - 800{ background - color:  #874400; }
  // .orange - 900{ background - color:  #623200; }
  // "bluery -" : "50{ backgron - color:  #f7f9"f; }
  // "bluery -" : "100{ backgrud - color:  #d9e"03; }
  // "bluery -" : "200{ backgrud - color:  #bbc"7d; }
  // "bluery -" : "300{ backgrud - color:  #9ca"e7; }
  // "bluery -" : "400{ backgrud - color:  #7e9"61; }
  // "bluery -" : "500{ backgrud - color:  #607"db; }
  // "bluery -" : "600{ backgrud - color:  #526"a6; }
  // "bluery -" : "700{ backgrud - color:  #435"81; }
  // "bluery -" : "800{ backgrud - color:  #354"5c; }
  // "bluery -" : "900{ backgrud - color:  #263"28; }
  // .purple - 50{ background - color:  #faf4fb; }
  // .purple - 100{ background - color:  #e7cbec; }
  // .purple - 200{ background - color:  #d4a2dd; }
  // .purple - 300{ background - color:  #c279ce; }
  // .purple - 400{ background - color:  #af50bf; }
  // .purple - 500{ background - color:  #9c27b0; }
  // .purple - 600{ background - color:  #852196; }
  // .purple - 700{ background - color:  #6d1b7b; }
  // .purple - 900{ background - color:  #3e1046; }
  // .purple - 800{ background - color:  #561561 };
  };

  //configuration color map
  private colorConfigMap = new Map<string, string>(Object.entries(this.colorArray));

  constructor() { }
  
  getColor(name : string): string{
    return this.colorConfigMap.get(name);
  }

  getMapColorPalette(name: string) : any{
    return this.colorArray;
  }
}
  