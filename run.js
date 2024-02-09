function generate(){
    l = ["龍年大吉", "龍年賀喜", "飛龍在天", "龍馬精神", "龍鳳吉祥", "龍躍鳳鳴", "龍騰虎躍", "龍舞春風", "龍瑞盈門", "龍年祥雲", "福龍迎祥", "龍來運轉", "金龍報喜", "龍躍新程", "龍飛雲翔", "龍年吉祥", "恭喜發財", "身體健康", "萬事如意", "心想事成", "笑口常開", "萬壽無疆", "福壽安康", "福到眼前", "福壽雙全", "生龍活虎", "竹報平安", "身壯力健", "出入平安", "身心同康", "神采奕奕", "松柏氣節", "人強馬壯", "如鶴如松", "闔家安康", "平安健康", "年年高升", "花開富貴", "步步高升", "橫財就手", "事事如意", "富貴有餘", "招財進寶", "一路發財", "吉祥如意", "恭賀新禧", "金玉滿堂", "財源廣進", "財運亨通", "財源滾滾", "積金至斗", "大吉大利", "鴻圖大展", "馬到成功", "旗開得勝", "如魚得水", "飛黃騰達", "一帆風順", "事業有成", "前程似錦", "力爭上游", "工作順利", "業有所成", "洋洋向上", "開市大吉", "大展鴻圖", "生意興隆", "開市大發", "門庭若市", "龍鳳呈祥", "三陽開泰", "開市大信", "八方來財", "萬事勝意", "吉星高照", "和氣生財", "福星高照", "新春愉快", "家宅平安", "開泰民安", "年年有餘", "開春大吉", "迎春納福", "春回大地", "全家安康", "闔家平安", "一本萬利", "風調雨順", "吉星呵護", "青春永駐", "一元復始", "雙星報喜", "四季進財", "五福臨門", "歲歲平安", "六六大順", "七星報喜", "八仙過海", "久久長長", "十全十美", "發財好市", "五世其昌", "四季平安", "團團圓圓", "二龍騰飛", "七星高照", "九九同心", "百戰百勝", "千紅萬紫", "萬事順心", "億萬斯年", "萬事大吉", "好事連連", "前途無量"]
    c = document.getElementById("count").value
    if(c>114||c<1){
        alert("Please input a number between 1 and 114")
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
        document.getElementById("count").style.backgroundColor = "red";
        document.getElementById("count").style.color = "gold";
        document.getElementById("gen").style.backgroundColor = "red";
        document.getElementById("gen").style.color = "gold";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("b").style.backgroundColor = "white";
        document.getElementById("b").style.color = "black";
        document.getElementById("count").style.backgroundColor = "white";
        document.getElementById("count").style.color = "black";
        document.getElementById("gen").style.backgroundColor = "white";
        document.getElementById("gen").style.color = "black";
    }
}

function check(){
    if(localStorage.getItem("theme")=="true"){
        document.getElementById("nymode").checked = true
        theme()
    }
}