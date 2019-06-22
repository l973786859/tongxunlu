$(function () {
    let arr = [
        {
            name:'张三',tell:13658945621,py:'zhangsan'
        },
        {
            name:'李三',tell:13658945621,py:'lisan'
        },
        {
            name:'王三',tell:13658945621,py:'wangsan'
        },
        {
            name:'刘三',tell:13658945621,py:'liusan'
        },
        {
            name:'牛三',tell:13658945621,py:'niusan'
        },
        {
            name:'钱三',tell:13658945621,py:'qiansan'
        },
        {
            name:'安三',tell:13658945621,py:'ansan'
        },
        {
            name:'罗三',tell:13658945621,py:'luosan'
        },
        {
            name:'牛四',tell:13562945622,py:'niusi'
        },
        {
            name:'三明',tell:13562945622,py:'sanming'
        },
        {
            name:'二名',tell:13562945622,py:'erming'
        },
        {
            name:'卫四',tell:13562945622,py:'weisi'
        },
        {
            name:'赵四',tell:13562945622,py:'zhaosi'
        },{
            name:'孙二',tell:13562945622,py:'suner'
        },
        
    ];
    let main = $('main');
    let aside = $('.aside');
    let input =$('input');
    input.on('input',function () {
        let val = $(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val));
        render(newarr);
        console.log(1);
    });
    render(arr);
    function render(arr){
        main.empty();
        aside.empty();
        let person = {
        };
        arr.forEach(ele=>{
            let firstChar = ele.py.charAt(0).toUpperCase();
            if(!person[firstChar]){
                person[firstChar] = [];
            }
            person[firstChar].push(ele);
        });
        let keysarr = Object.keys(person).sort();
        let html = '';
        let html1 = '';
        for(let i=0;i<keysarr.length;i++){
            let ele = keysarr[i];
            html1+=`<li>${ele}</li>`;
            html += `
                <section><h2>${ele}</h2>
            `;
            for(let j=0;j<person[ele].length;j++){
                let info = person[ele][j];
                html+=`
                    <div><a href="tel:${info.tell}"> ${info.name}</a></div>
                `
            }
            html +='</section>';
        }
        aside.html(html1);
        main.html(html)
    }
});