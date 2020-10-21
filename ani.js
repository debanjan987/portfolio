const output=document.querySelector(".output")
	 const allSentences=document.querySelector(".sentences").children;
	 const banner=document.querySelector(".banner")
	  var sentenceIndex=0;
	  var characterIndex=0;
	  var txtArray;

     function start(){
     	const innerText=allSentences[sentenceIndex].innerHTML;
     	 txtArray=innerText.split("");
     	 banner.classList.remove("open")
     	 banner.classList.add("close")
     	 setTimeout(function(){
     	 typingText();	
     	},1000);
          
     }
     function typingText(){
     	banner.classList.remove("close")
     	banner.classList.add("open")
     	 

     	if(characterIndex!=txtArray.length){
     		output.innerHTML+=txtArray[characterIndex];
     		characterIndex++;
     		setTimeout(typingText,150);
     	}
     	else{
     		  if(sentenceIndex==allSentences.length-1){
     		  	sentenceIndex=0
     		  }
     		  else{
     		  	sentenceIndex++;
     		  }
     		setTimeout(function(){
     			characterIndex=0;
     			output.innerHTML="";
     			start();
     		},3000);
     	}
	 }

  window.onload=start();