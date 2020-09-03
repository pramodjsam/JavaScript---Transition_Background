function bgChanger(){
	// const notes= document.getElementById("notes");
	// notes.innerHTML=`${this.scrollY} - ${this.innerHeight} - ${this.innerHeight/1.5}`
	// const notes2= document.getElementById("notes2");
	// notes2.innerHTML=`${this.scrollY} - ${this.innerHeight} - ${this.innerHeight/1.5}`
	if(this.scrollY > this.innerHeight / 1.5){
		document.body.classList.add("bgActive");		
	}
	else{
		document.body.classList.remove("bgActive")
	}
}

window.addEventListener("scroll",bgChanger)