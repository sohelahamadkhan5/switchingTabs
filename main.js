/* for selected color --->tomato */

let switches = document.getElementsByClassName("switch");
let switchedDisplay = document.getElementById("display");

let selectedColor = "papayawhip";
let unselectedColor = "slategray";

for(let a=0 ; a<switches.length ; a+=1)
{
    switches[a].onclick =function(){

        let switchName = this.innerHTML;
        let switchValue = services[switchName];
        switchedDisplay.innerHTML = switchValue;
        
         for(let b = 0;b<switches.length;b++){
            switches[b].style.backgroundColor = unselectedColor;
            switches[b].style.fontWeight = 100;
            switches[b].style.color = "#fff";
            console.log("insideloop")
        }
        
        switches[a].style.backgroundColor = selectedColor;
        switches[a].style.fontWeight = "bolder";
        switches[a].style.color = "black";

    };
}










//Object For Swiched Dispaly

var services = {
    'Lorem':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias ratione voluptatibus sapiente. Esse fuga libero hic quod impedit, ipsum adipisci harum cupiditate, praesentium nulla rerum, repellat corporis ut pariatur?",
    'Ipsom':"sit amet consectetur adipisicing elit. Suscipit alias ratione voluptatibus sapiente. Esse fuga libero hic quod impedit, ipsum adipisci harum cupiditate, praesentium nulla rerum, repellat corporis ut pariatur?",
    'Dollar':"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
};