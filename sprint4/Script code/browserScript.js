// function myFunction() { 
//     if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
//    {
//       console.log('Opera');
//    }
//    else if(navigator.userAgent.indexOf("Chrome") != -1 )
//    {
//        console.log('Chrome');
//    }
//    else if(navigator.userAgent.indexOf("Safari") != -1)
//    {
//        alert('Safari');
//    }
//    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
//    {
//         alert('Firefox');
//    }
//    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
//    {
//      alert('IE'); 
//    }  
//    else 
//    {
//       alert('unknown');
//    }
//    }

function myFunction() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    // return {
    //   name: M[0],
    //   version: M[1]
    // };
    
    console.log(M[0]+" "+M[1]);
    var d = Date(Date.now()); 
  
    // Converting the number of millisecond in date string 
     a = d.toString() 
    
    // Printing the current date                     
    console.log("The current date is: " + a);
 }