class Ray{
	constructor(x,y,x2,y2){
		this.pos={x,y}
		this.end={x:x2,y:y2}
		this.pos2={x:x2,y:y2}
	}
	update(){
		var minDist=Infinity
		var b=0.00000001
		for (var l of lines){
			var t=((this.pos.x-l.a.x)*(l.a.y-l.b.y)-(this.pos.y-l.a.y)*(l.a.x-l.b.x))/((this.pos.x-this.pos2.x)*(l.a.y-l.b.y)-(this.pos.y-this.pos2.y)*(l.a.x-l.b.x))
			var u=-((this.pos.x-this.pos2.x)*(this.pos.y-l.a.y)-(this.pos.y-this.pos2.y)*(this.pos.x-l.a.x))/((this.pos.x-this.pos2.x)*(l.a.y-l.b.y)-(this.pos.y-this.pos2.y)*(l.a.x-l.b.x))
			if (-b<t&&-b<u&&u<1+b){
				var px=this.pos.x+t*(this.pos2.x-this.pos.x)
				var py=this.pos.y+t*(this.pos2.y-this.pos.y)
				var d=Math.sqrt((px-this.pos.x)*(px-this.pos.x)+(py-this.pos.y)*(py-this.pos.y))
				if (d<minDist){
					minDist=d
					this.end={x:px,y:py}
				}
			}
		}
	}
	draw(){
		ctx.beginPath()
		ctx.lineWidth=1
		ctx.globalAlpha=0.2
		ctx.strokeStyle="#990000"
		ctx.moveTo(this.pos.x,this.pos.y)
		ctx.lineTo(this.pos2.x,this.pos2.y)
		ctx.stroke()
		ctx.globalAlpha=1
		ctx.beginPath()
		ctx.fillStyle="#ff0000"
		ctx.arc(this.end.x,this.end.y,5,0,Math.PI*2)
		ctx.fill()
	}
}