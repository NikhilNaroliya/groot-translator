// // console.log("iam working");
// // alert("this script ");
// var naem=prompt("your name ");
// alert("your name is "+naem);
var btn=document.querySelector("#click1");
var textinput=document.querySelector("#text-input");
var outputdiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/groot.json"

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorhandler(error)
{
    console.log("error occured",error);
    alert("something is wrong with server try agin")
}
// in order to write something we use innertext property
// outputdiv.innerText="nikhil";

 // function to response on clicking a button
 function clickhandler(){
    // outputdiv.innerText="helelelel" + textinput.value;
    var inputtext=textinput.value;
    //calling server for processing
    fetch(getTranslationURL(inputtext)).then(response=>response.json()).then(json=>
        {
            var translatedtext=json.contents.translated;
            outputdiv.innerText=translatedtext;
        })
    //cathcing the error
    .catch(errorhandler)
     
 };
 btn.addEventListener("click",clickhandler);
