class Line{
	constructor(x1,y1,x2,y2,show=true){
		this.a={x:x1,y:y1}
		this.b={x:x2,y:y2}
		this.show=show
	}
	draw(){
		if (this.show==false){return}
		ctx.beginPath()
		ctx.lineWidth=3
		ctx.strokeStyle="#ffffff"
		ctx.moveTo(this.a.x,this.a.y)
		ctx.lineTo(this.b.x,this.b.y)
		ctx.stroke()
	}
}