function all(){return new Promise((e,t)=>{firebase.database().ref("/menu/").once("value",e=>{let t=[];e.forEach(e=>{let a=e.key;e.forEach(e=>{let l={name:e.key,description:e.val().description,image:e.val().image,price:e.val().price,category:a};t.push(l)})}),templates.getPage("menu",t),$(".common-footer").css("display","initial")})})}import{templates}from"templates";import"bootstrap";let menuController={all:all};export{menuController};