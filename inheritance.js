//这里的ELF是精灵，当我们需要另一个职业的时候，我们可以复制粘贴class
//但同样存在着简单的方法
class ElfC{
    constructor(name,weapon){
        this.name=name;
        this.weapon=weapon;
    }
    attack(){
        return 'attack with '+ this.weapon
    }
    //if we take attack() to constructor{} it will take memory space
    //而现在我们只有一个attack（）function可以节约内存


    }

    //继承 把Elf 改成Character
class Character {

    constructor(name,weapon){
        this.name=name;
        this.weapon=weapon;
    }
    attack(){
        return 'attack with '+ this.weapon
    }
    //if we take attack() to constructor{} it will take memory space
    //而现在我们只有一个attack（）function可以节约内存


    }

class Elf extends Character{

    constructor(name,weapon,type){
        //need use super();
        super(name, weapon);
        //call your super class
        //what is Elf super class
        // Character
        //获取name和weapon
        this.type = type

    }


}

const dada = new Elf('jrd','AA','House')

console.log(dada)

class Ogre extends Character{
    constructor(name,weapon,color){
        super(name,weapon);
        this.color=color;
    }

    makeFort(){
        return 'strongest fort in the world made'
    }


}

const shrek = new Ogre('cma','22','white')

console.log(shrek)
console.log(shrek.makeFort())
