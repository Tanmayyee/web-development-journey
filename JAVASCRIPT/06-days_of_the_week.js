function returnDay(day)
{
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
    if(day<1 || day>7)
    {
        return null;
    }
    else
    {
        return days[day-1];
    }
}