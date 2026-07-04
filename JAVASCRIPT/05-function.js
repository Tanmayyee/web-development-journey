function supernatural()
{
    console.log('hello Sam and dean');
}

supernatural() 


//========================================== 2nd function

function characters(name1,name2,name3)
{
    for(i=0;i<3;i++)
    {
        console.log(`heya ${name1} and ${name2} ohh ass-tiel... I mean ${name3} is also here`);
    }
}

characters('sam','dean','castiel')


// ================================================= 3rd function 

function haha(str,times)
{
    let result='  ';
    for(let i=0;i<times;i++)
    {
       result+=str;
    }
    console.log(result);
}



function hi()
{
    let hello = 'hi1';
    hello='hi2';
    console.log(hello)               // print hi2 
}
hi()          