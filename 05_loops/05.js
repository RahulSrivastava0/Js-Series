const coding=["js","cpp","java","python","ruby"]
coding.forEach(function(i)
    {
        // console.log(i);
    }      
)

// using arrow function

coding.forEach((i)=>{
    // console.log(i);
} )

const programming = [
    {
        LanguageName:"Javascript",
        LanguageFileName:"js"
    },
    {
        LanguageName:"C++",
        LanguageFileName:"cpp"
    },
    {
        LanguageName:"Ruby",
        LanguageFileName:"rb"
    }
]

programming.forEach((i)=>{
    console.log(`${i.LanguageFileName} stands for ${i.LanguageName}`);
})