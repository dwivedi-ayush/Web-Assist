
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) 
{
  var everything = document.getElementsByTagName('*');
  console.log('hello');
  for(var j = 0;j < everything.length; j++)
  {
        if(message.txt!="")
        {
          if(everything[j].getAttribute('aria-label')==message.txt)
          {
            everything[j].style.cssText="border: 5px solid red; background-color: #FFD700";
            everything[j].scrollIntoView(true);
          }
          if(everything[j].title==message.txt)
          {
            everything[j].style.cssText="border: 5px solid red; background-color: #FFD700";
            everything[j].scrollIntoView(true);
            
          }
          if(everything[j].innerHTML==message.txt)
          {
            everything[j].style.cssText="background-color: #98FB98";
            everything[j].scrollIntoView(true);
            
          }
        }
  }
} 
                        //WORK IN PROGRESS PWD

                /*for (var i = 0; i < everything.length; i++) 
                {
                  var txt = everything[i].innerHTML;
                  var tokens = txt.split(/(<.*?>)/);
                  for (var j = 0; j < tokens.length; j++) 
                  {
                    if (tokens[j].charAt(0) !== '<') 
                    {
                      tokens[j] = tokens[j].replace(/\bAnnouncements\b/gi,'<span class="redact">Click Here</span>');
                    }
                  }
                  everything[i].innerHTML = tokens.join('');
                


                  var noteverything = document.getElementsByTagName('a');
                  for(m=0;m<noteverything.length;m++)
                  {
                    everything[m].style.cssText="border: 5px solid red; background-color: #FF0000";
                  }*/


