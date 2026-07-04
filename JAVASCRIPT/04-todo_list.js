let input=prompt('Enter your choice!!! or enter q or quit to stop');
const todo=['apple juice'];
while(input !== 'quit' && input !=='q')
{
    if(input==='new')
    {
        const newTodo=prompt('Enter new todo');
        todo.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    }
    else if(input==='list')
    {
        console.log('**************');
        for(let i=0;i<todo.length;i++)
        {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('**************')
    }
    else if(input==='delete')
    {
        const index=parseInt(prompt('OK, enter the index of list you want to delete'));
        if(!Number.isNaN(index))
        {
          const deleted= todo.splice(index,1);
           console.log(`${deleted[0]} is deleted from the list`);
        }
        else
        {
            console.log('enter valid index!!!');
        }

    }
    input=prompt('Enter your choice!!! or enter q or quit to stop');
}

console.log('ok.You QUIT');