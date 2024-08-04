function caeser(str,shift){

    var result="";
    var a;
    for(var i=0;i<str.length;i++){
        a=str.charCodeAt(i);
        
        if(a>=97 && a<=122){
        a=a+shift;
    
        if(a>122){
            a=a-26;
        }
        result=result+String.fromCharCode(a);
     
    }
    else if(a>=65 && a<=90){
        a=a+shift;

        if(a>90){
            a=a-26;
        }
        result=result+String.fromCharCode(a);
     


    }
    else{
        console.log(a);
        result=result+String.fromCharCode(a);

        

    }



    }
    return result;


}
module.exports=caeser;