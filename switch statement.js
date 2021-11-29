var currentDay= 'Mon';
if(currentDay== 'Mon'){
    console.log('Timmings: 10:00-01:00')
}
else if(currentDay=='Tue'){
    console.log('Timmings:09:00-05:00')
}
else if(currentDay=='wed'){
    console.log('Timmings:12:00-02:00')
}
else if(currentDay=='Thu'){
    console.log('Timmings:08:00-12:00')
}
else if(currentDay=='Fri'){
    console.log('Timmings:07:00-09:00')
}
else if(currentDay=='Sat'){
    console.log('Timmings:11:00-06:00')
}
else if(currentDay=='Sun'){
    console.log('Timmings:09:00-10:00')
}
else{
    console.log('No Timming Shown here:')
}





switch(currentDay){
    case 'Mon':
        console.log('Timming: 10:00-06:00')
        break;
        case 'Tue':
            console.log('Timming: 11:00-05:00')
            break;
        case 'Wed':
            console.log('Timming: 07:00-01:00')
            break;
        case 'Thu':
            console.log('Timming: 08:00-02:00')
            break;
        case 'Fri':
            console.log('Timming: 12:00-05:00')
            break;
        case 'Sat':
            console.log('Timming: 09:00-04:00')
            break;
        case 'Sun':
            console.log('Timming: 11:30-07:00')
            break;
        
}