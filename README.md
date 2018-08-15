# kwsak

## install 

> npm install kwsak --save

## use 

> const kw = require('kwsak');


### getRange

    kw.getRange(1,5)// 1 or 2 or3 or4 or 5


### getTimesTamp()

    kw.fixNumber(1,2);// '01'
    
    kw.fixNumber(1,3);// '001'
    
    kw.fixNumber(1,10);// '000000001'

### slice

    kwsak.slice('kwsak',1); // 'k...'
    kwsak.slice('kwsak',1,'###'); // 'k###'


### getStr

    kw.getStr();//2HG3SAK6S37XXOCS
    kw.getStr(5);//WQ89F
    
### inArray

    const arr = [1,2,3];
    kw.inArray(3,arr);//2 


### strimHtml

    const html = '<div>Hello world!</div>';
    kw.strimHtml(html);//Hello world!


### clear

    kw.clear();//clear sreen;


### constructor MyDate;

> MyDate === kw.MyDate;

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

> var date = new kw.MyDate({newDate:'2017-02-02'});

    date.toString();//"2017-02-02"
    date.toDateTimeString();//"2017-02-02 00:00:00"
    date.toTimeString();//"00:00:00"


### consloe

    kw.console.success();//color green 
    kw.console.error();//color red 
    kw.console.info();//color cyan 
    kw.console.warn();//color yellow 


#### time 

    kw.time.start('getUserInfo');
    run some code
    kw.time.end('getUserInfo');

    [The ID "getUserInfo" execution time ] 4849ms


### Events

    var ev = new kw.Events

    ev.on('click',function(){
        alert('click');
    });

    ev.emit('click');
