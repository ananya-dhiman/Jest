function capitalize(input){
        var str=input[0].toUpperCase();
        str=str.slice(0,1)+input.slice(1,100);
        return str;


}
module.exports=capitalize;
