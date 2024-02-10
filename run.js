function generate(){
    l = document.getElementById("source").value
    l = l.split(",")
    c = document.getElementById("count").value
    if(c>l.length||c<1){
        alert("Please input a number between 1 and " + l.length)
    }else{
        t = []
        
        while(c != 0){
            temp=l[Math.floor(Math.random()*l.length)]
            if(t.includes(temp)){   
                
            } else {
                t.push(temp)
                c=c -1
            }
        }
        
        document.getElementById("gen").value = t
    }
    
}

function theme(){
    localStorage.setItem("theme",document.getElementById("nymode").checked)
    if(document.getElementById("nymode").checked){
        document.body.style.backgroundColor = "red";
        document.body.style.color = "gold";
        document.getElementById("b").style.backgroundColor = "red";
        document.getElementById("b").style.color = "gold";
        document.getElementById("l").style.backgroundColor = "red";
        document.getElementById("l").style.color = "gold";
        document.getElementById("r").style.backgroundColor = "red";
        document.getElementById("r").style.color = "gold";
        document.getElementById("save").style.backgroundColor = "red";
        document.getElementById("save").style.color = "gold";
        document.getElementById("count").style.backgroundColor = "red";
        document.getElementById("count").style.color = "gold";
        document.getElementById("gen").style.backgroundColor = "red";
        document.getElementById("gen").style.color = "gold";
        document.getElementById("source").style.backgroundColor = "red";
        document.getElementById("source").style.cXolor = "gold";
        document.getElementById("sep").style.color = "black";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("b").style.backgroundColor = "white";
        document.getElementById("b").style.color = "black";
        document.getElementById("l").style.backgroundColor = "white";
        document.getElementById("l").style.color = "black";
        document.getElementById("r").style.backgroundColor = "white";
        document.getElementById("r").style.color = "black";
        document.getElementById("save").style.backgroundColor = "white";
        document.getElementById("save").style.color = "black";
        document.getElementById("count").style.backgroundColor = "white";
        document.getElementById("count").style.color = "black";
        document.getElementById("gen").style.backgroundColor = "white";
        document.getElementById("gen").style.color = "black";
        document.getElementById("source").style.backgroundColor = "white";
        document.getElementById("source").style.color = "black";
        document.getElementById("sep").style.color = "black";
    }
}

function check(){
    if(localStorage.getItem("status")=="OK"){
        document.getElementById("source").disabled=false;
        document.getElementById("save").disabled=false;
    }
    if(localStorage.getItem("def")!==null&&localStorage.getItem("def")!==""){
        document.getElementById("source").value = localStorage.getItem("def")
    }
    
    if(localStorage.getItem("theme")=="true"){
        document.getElementById("nymode").checked = true
        theme()
    }

}

function reset(){
    document.getElementById("source").value = "吉祥如意,財運亨通,龍鳳呈祥,身心同康,金玉滿堂,門庭若市,萬壽無疆,六六大順,龍騰虎躍,福壽安康,心想事成,萬事順心,春回大地,年年有餘,平安健康,業有所成,新春愉快,吉星高照,五世其昌,步步高升,洋洋向上,萬事勝意,力爭上游,年年高升,飛黃騰達,一元復始,身體健康,前程似錦,事事如意,龍年賀喜,工作順利,開市大發,三陽開泰,馬到成功,身壯力健,花開富貴,雙星報喜,迎春納福,福壽雙全,發財好市,開春大吉,好事連連,龍鳳吉祥,和氣生財,八仙過海,龍年祥雲,四季平安,萬事大吉,如魚得水,一本萬利,龍躍新程,事業有成,龍瑞盈門,出入平安,千紅萬紫,九九同心,鴻圖大展,二龍騰飛,龍來運轉,青春永駐,神采奕奕,富貴有餘,大吉大利,笑口常開,福到眼前,招財進寶,開市大吉,松柏氣節,龍年大吉,旗開得勝,如鶴如松,五福臨門,一路發財,龍馬精神,前途無量,生意興隆,積金至斗,風調雨順,七星高照,十全十美,財源廣進,恭賀新禧,闔家安康,財源滾滾,八方來財,家宅平安,久久長長,福星高照,龍舞春風,金龍報喜,恭喜發財,飛龍在天,歲歲平安,人強馬壯,龍年吉祥,一帆風順,橫財就手,吉星呵護,開市大信,竹報平安,萬事如意,龍躍鳳鳴,億萬斯年,全家安康,四季進財,闔家平安,生龍活虎,福龍迎祥,開泰民安,七星報喜,龍飛雲翔,百戰百勝,團團圓圓,大展鴻圖"
}

function save(){
    localStorage.setItem("def",document.getElementById("source").value)
}