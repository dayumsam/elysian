function titleCase(str:string) {
    let newStr = str.toLowerCase()
        .split(' ')
        .map(function(word){
            return word.replace(word[0], word[0].toUpperCase())
        });

   return newStr.join(' '); 
  }

export default {titleCase}