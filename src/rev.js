function rev(input){
    var arr=input.split("");

    arr=arr.reverse();
    var output="";
    for(var i=0;i<arr.length;i++){
    output=output+arr[i];
    }
    return output;

}
module.exports=rev;