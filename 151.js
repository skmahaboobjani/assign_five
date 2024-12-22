var reverseWords = function(s)
 {
     let strs= s.split(" ").filter((x)=>
     {
         return x!=""
     })
     return strs.reverse().join(" ")
    
};
console.log(reverseWords("the sky is blue"))