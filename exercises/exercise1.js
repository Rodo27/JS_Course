/*
    1.Make a function that count the charters of a text string.
    2.Make a function that return a substring (you indicate the length of the new text string).
    3. 

*/

//Exercise 1

export function countCharters($myString){
    //First validate the param 

    if(typeof $myString === 'string')
        return $myString.length
    else
        return "param no is a text String, type of " +typeof $myString

}

export function countCharters2($myString){
    //First validate the param 

    if(typeof $myString === 'string'){
        let cont = 0
        for(let char in $myString){
            cont ++  
        }

        return cont
    }
    else
        return "param is not a text String, type of " +typeof $myString

}
