function array(input){
    var max=0;
    var min=input[0];
    var l;
    var avg=0;
    for(var i=0;i<input.length;i++){
        avg=avg+input[i];
        max=Math.max(max,input[i]);
        min=Math.min(min,input[i]);

    }
    l=input.length;
    avg=avg/l;
    const obj={
        average:avg,
        min:min,
        max:max,
        length:l,
        
        
        

    }
    return obj;

    
}
module.exports=array;