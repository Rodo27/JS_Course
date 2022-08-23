/*
    1.Make a function that count the charters of a text string.
    2.Make a function that return a substring (you indicate the length of the new text string).
    3.Make a function that return an array of string separate by a specific char
    4.Make a function who repet n times a text string

*/

//Exercise 1

    export function countCharters(myString){
        //First validate the param 

        if(typeof myString === 'string')
            return myString.length
        else
            return "param no is a text String, type of " +typeof myString

    }

    export function countCharters2(myString){
        //First validate the param 

        if(typeof myString === 'string'){
            
            let cont = 0
            
            for(let char in myString){
                cont ++  
            }

            return cont
        }
        else
            return "param is not a text String, type of " +typeof myString

    }


// Exercise 2

    export function getSubstring(myString, length){
        
        if(typeof myString === 'string'){
            
            let subString = ''
            let cont = 0
            
            for(let char in myString){
                if(cont < length)
                    subString += myString[char]
                cont++
            }
            
            return subString 
        }
        else
            return "param is not a text String, type of " +typeof myString



}
