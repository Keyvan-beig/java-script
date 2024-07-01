class Animals {

    constructor(name, type) {
        this.name = name
        this.type = type
    }

    isFly() {

        return this.type === "birds" ? true : false
    }

    isCrawl() {

        return this.type === "Reptiles" ? true : false
    }
}

class Bird extends Animals {
    constructor(name,type,lifeSpan) {
        super(name,type)
        this.lifeSpan = lifeSpan
        this.flyOrCrawl = "fly"
    }

    lifeSpanFun(){

        return `life span is ${this.lifeSpan}`
    }
}

class Reptiles extends Animals{
    constructor(name,type,lifeSpan){
        super(name,type)
        this.lifeSpan = lifeSpan
        this.flyOrCrawl = "crawl"
    }

    
    lifeSpanFun(){

        return `life span is ${this.lifeSpan}`
    }
}




export {Animals,Bird,Reptiles}
