# kwsak

## install 

> npm install kwsak --save

## use 

> const kwsak = require('kwsak');


### kwsak.getRange(1,5)// 1 or 2 or3 or4 or 5


### getTimesTamp()

    kwask.fixNumber(1,2);// '01'
    
    kwask.fixNumber(1,3);// '001'
    
    kwask.fixNumber(1,10);// '000000001'

### slice

    kwsak.slice('kwsak',1); // 'k...'
    kwsak.slice('kwsak',1,'###'); // 'k###'


### getStr

    kwask.getStr();//2HG3SAK6S37XXOCS
    kwask.getStr(5);//WQ89F
    
### inArray

    const arr = [1,2,3];
    kwask.inArray(3,arr);//2 


### strimHtml

    const html = '<div>Hello world!</div>';
    kwask.strimHtml(html);//Hello world!


### clear

    kwsak.clear();//clear sreen;


### constructor MyDate;

> MyDate === kwask.MyDate;

#### options 

    format: 'yyyy-mm-dd',
    dateSeparator: '-',
    timeSeparator: ':',
    dateTimeSeparator: ' ',
    yearAfter: '', 
    monthAfter: '',
    dateAfter: '', 
    hourAfter: '', 
    minuteAfter: '',
    secondAfter: '',
    newDate: null,

> var date = new kwask.MyDate({newDate:'2017-02-02'});

    date.toString();//"2017-02-02"
    date.toDateTimeString();//"2017-02-02 00:00:00"
    date.toTimeString();//"00:00:00"


### consloe

    kwask.console.success();//color green 
    kwask.console.error();//color red 
    kwask.console.info();//color cyan 
    kwask.console.warn();//color yellow 


#### time 

    kwask.time.start('getUserInfo');
    run some code
    kw.time.end('getUserInfo');

    [The ID "getUserInfo" execution time ] 4849ms


### Events

    var ev = new kw.Events

    ev.on('click',function(){
        alert('click');
    });

    ev.emit('click');
