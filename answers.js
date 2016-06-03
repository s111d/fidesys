//1.
console.log('\nTask 1:\n');

    // Solution
    function RandomNumber(){
        this.value = function(){
            return Math.floor(Math.random()*100);
        };
    }

    RandomNumber.prototype.valueOf = function(){
        return this.value();
    };
    RandomNumber.prototype.toString = function(){
        return this.value();
    };

    // Tests
    var random = new RandomNumber;

//    alert(random);
//    alert(random);
//    alert('First value: ' + random + ', second value: ' + random);

//2.
console.log('\nTask 2:\n');

function bind(method, context) {
    // Looks like ES3-specific code, since no built-in bind() method there.
    // The string below is a substitution for an absent splice() method.
    // Take all the parameters except for the first two
    var args = Array.prototype.slice.call(arguments, 2);

    return function() {
        // ...add the bind's method arguments to this function arguments
        var a = args.concat(Array.prototype.slice.call(arguments, 0));
        // run the method in the context of the 'context' object, passing in all collected params
        return method.apply(context, a);
    }
}

// Example of usage

function describe(){
    console.log('This is', this.name);
    console.log('Its size is', this.size);
    console.log('And it has agruments (sometimes):', arguments);
    console.log('It says', this.says());
}

obj = {
    name: 'Godzilla',
    size: 'huge',
    says: function(){return 'Meow!!!'}
}

caller = bind(describe, obj, 1980);
caller(2021);
console.log("\nChanging arguments...\n");
caller(2032);

// 4.
console.log('\nTask 4:\n');

streams = [
    {name: 'Вести.Ру', type: 'tv'},
    {name: 'Итоги', type: 'smi'},
    {name: 'Вести.ФМ', type: 'radio'},
    {name: 'НТВ', type: 'tv'},
    {name: 'Огонёк', type: 'smi'},
    {name: 'Аргументы и факты', type: 'smi'},
    {name: 'ТВ Культура', type: 'tv'},
    {name: 'Коммерсант ФМ', type: 'radio'}
];

groupped = {};

for (var i = 0; i < streams.length; i++){
    group = streams[i].type;
    if (groupped.hasOwnProperty(group)){
        groupped[group].push(streams[i].name);
    }else{
        groupped[group]=[streams[i].name];
    }
}

console.log(groupped);

// 5.
console.log('\nTask 5:\n');

xml = '<a> \n\
    <b replace="true"> \n\
        <c test="test"> \n\
            testText \n\
            <b replace="true"> \n\
                <d> \n\
                    testText2 \n\
                    <b replace="true"> \n\
                        testText3 \n\
                    </b> \n\
                </d> \n\
            </b> \n\
            testText4 \n\
        </c> \n\
        testText5 \n\
    </b> \n\
</a>';

console.log('\nInput tree: \n\n', xml);

xml = xml.replace('<a>', '<a href="http://example.com" target="_blank">');
xml = xml.replace(/<b replace="true">/g, '<b class="b-bold">');
xml = xml.replace('<c test="test">', '<i class="b-test">');
xml = xml.replace('</c>', '</i>');
xml = xml.replace(/(<\/?d>)/g, '');

console.log('\nOutput tree: \n\n', xml);

