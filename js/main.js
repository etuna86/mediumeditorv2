
  var text='';
  

  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })

 
  if(!localStorage.getItem('text')){
    text="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> ";
  
  }else{
    text=localStorage.getItem('text');





  
    
    document.addEventListener("DOMContentLoaded", function(e) {
   // var tag = document.createElement("div");
   var tag = document.getElementById("editabletext");
   //var tags= [];
   var tags=tag.getElementsByTagName("comment");

   var arr = Array.from(tags); 
   //tags = [...tag.getElementsByTagName("comment")];
   console.warn("tags12312321312; ", tags);
   
   console.warn("tags12312321312; ", tag.getElementsByTagName("comment").length);
   //tags=Array.from(tag.getElementsByTagName("comment"));


   for (let i = 0; i < tags.length; i++) {
    console.warn("tags; ", tags[i]);
    tag.getElementsByTagName("comment")[i].ondblclick = function(ev) { seeComment(ev);}

    var attr = document.createAttribute("data-comment234");       // Create a "class" attribute
    attr.value = "comment2123";   
    //this.button.createAttribute('data-comment');
    //tags[i].setAttributeNode(attr);
    //tag.innerHTML=
    console.warn("attr; ",);
    tag.getElementsByTagName("comment")[i].setAttributeNode(attr);

    
  } 
    })

    // var myJsonString = JSON.stringify(arr);
      /*console.warn("myJsonString; ",tags.item);

    for (let i = 0; i < tags.length; i++) {
      console.warn("tags; ", tags[i]);
      tag.getElementsByTagName("comment")[i].ondblclick = function(ev) { seeComment(ev);}

      var attr = document.createAttribute("data-comment234");       // Create a "class" attribute
      attr.value = "comment2123";   
      //this.button.createAttribute('data-comment');
      //tags[i].setAttributeNode(attr);
      //tag.innerHTML=
      console.warn("attr; ",);
      tag.getElementsByTagName("comment")[i].setAttributeNode(attr);

      
    }  */

    //var nodeEl=
    //nodeEl.ondblclick = function(ev) { seeComment(ev);}
    /*tags.forEach(element => {
        console.warn("element;",element);
    }); */

    /*
    Array.from(document.getElementById("editabletext")).forEach(function(item) {
      console.warn("item.id= ",item);
   });
*/
  /*
      for (key in tags) {
        console.warn(key);
        console.warn("kyess ;",key.namedItem);
    } */
    /*
    for (let i = 0; i < tags.length; i++) {
      console.warn("tags; ", tags[i]);
      tag.getElementsByTagName("comment")[i].ondblclick = function(ev) { seeComment(ev);}

      var attr = document.createAttribute("data-comment234");       // Create a "class" attribute
      attr.value = "comment2123";   
      //this.button.createAttribute('data-comment');
      //tags[i].setAttributeNode(attr);
      //tag.innerHTML=
      console.warn("attr; ",);
      tag.getElementsByTagName("comment")[i].setAttributeNode(attr);

      
    }
    */
    //tags

    /*
    console.warn("tag; ",tags);
    tag.innerHTML = text;

      var t = tag.getElementsByTagName("comment");
      var ele = [];
      for (var i = 0; i < t.length; i++) {
        ele.push(t[i].tagName);
      }

     console.log(ele); */
  }

  getAllText('editabletext',text);

  function getAllText(getElementID,text){
     var el= document.getElementById(getElementID);
     el.innerHTML=text;
  }

  var HighlighterButton = MediumEditor.Extension.extend({
    name: 'highlighter',
  
    init: function () {
      this.button = this.document.createElement('button');
      this.button.classList.add('medium-editor-action');
      var commentEl=document.createElement('comment');
      var attr = document.createAttribute("data-comment");       // Create a "class" attribute
      attr.value = "comment1";   
      //this.button.createAttribute('data-comment');
      commentEl.setAttributeNode(attr);
      commentEl.appendChild(document.createTextNode('Comment'));
      this.button.appendChild(commentEl);

      //this.on(this.button, 'click', replaceSelectedText());  bu kısım tekrar incelenecek
    },
  
    getButton: function () {
      return this.button;
    }
  });

  var editor = new MediumEditor('.editable', {
    toolbar: {
        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'highlighter'],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,
        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
    },
    extensions: {
      'highlighter': new HighlighterButton()
    }
   // buttonLabels: 'fontawesome', // use font-awesome icons for other buttons
 
  });


  addEventListener('click',function(e){
   // console.warn("target: ",e.target.dataset.comment);

   if(!document.getElementById('editabletext') !=undefined){
    var editableText=document.getElementById('editabletext');
    var currentText=editableText.innerHTML;
     var currentCom=e.target.dataset.comment;
     var currentClass=e.target.classList;
     console.warn("currentClass 1; ",e.target);
     console.warn("currentClass; ",currentClass);
     localStorage.setItem("text",currentText);
 
     if(currentCom=="comment1"){
       replaceSelectedText();
     }
     else{
       return;
     }
   }



  });

//  selected fonksiyonumuz
function replaceSelectedText() {
  console.warn("tıklayınız");
  var sel, range,replacementText,newNode;
  if (window.getSelection) {
      sel = window.getSelection();

      console.warn("document.selection.createRange().htmlText: ",window.getSelection().getRangeAt(0));
      range=window.getSelection().getRangeAt(0);
      var content = range.extractContents();
      console.warn("content : ",content);

      console.warn("sel1: ",sel);
      console.warn("sel1.range: ",sel.getRangeAt(0));
      newNode = document.createElement("comment");
      var att = document.createAttribute("class"); 
      att.value = "highlight";   
      newNode.setAttributeNode(att);
      var att = document.createAttribute("data-commentid"); 
      var newCommentId=Date.now();
      //newNode.ondblclick = function() { alert('blah'); };
      newNode.ondblclick = function(ev) { seeComment(ev);}
      att.value = newCommentId;  
      newNode.setAttributeNode(att);
      newNode.appendChild(content);

      //newNode.appendChild(document.createTextNode(sel));
      /*if (sel.anchorNode && (sel.anchorNode == sel.extentNode)) {
        if (sel.toString() == sel.anchorNode.textContent) {
          sel = sel.anchorNode.parentElement.outerHTML;
        }
      }*/

      newNode.insertAdjacentHTML("beforeend", sel);
      //newNode.appendChild(document.createElementNode(sel));
      console.warn('sel', sel);
      //newNode.appendChild(sel.focusNode);

      //replacementText = '<b class="highlight">' + sel + '<b>';
      
      if (sel.rangeCount) {
          range = sel.getRangeAt(0);
          console.warn("range: ",range);
          range.deleteContents();
          //range.insertNode(document.createTextNode(replacementText));
          range.insertNode(newNode);

   
          //var myModal = document.getElementById('exampleModal') // relatedTarget
          myModal.show()

      }
  } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      range.text = replacementText;
  }

    var editableText=document.getElementById('editabletext');
    var currentText=editableText.innerHTML;

    console.warn("currentText: ",currentText);
    localStorage.setItem("text",JSON.stringify(currentText));
}


function seeComment(e){
  console.warn("seeComment element: ",e.target);
  console.warn("seeComment element dataset: ",e.target.dataset.commentid);
  myModal.show()

  getCommentID(e.target.dataset.commentid)
}

function removeElement(){

}



function getCommentID(getValue){
  var commentTextArea = document.getElementById('commenttextarea');
  var comments = document.getElementById('comments');
  var modalForm = document.getElementById('modalform');

  if(localStorage.getItem(getValue)){
    comments.innerHTML=localStorage.getItem(getValue);
  }
  else{
    localStorage.setItem(getValue,"")
  }


  console.warn("asdadad; ",commentTextArea.value);
  //localStorage.setItem(getValue,commentTextArea.value);


  var att = document.createAttribute("data-comid"); 
  var att2 = document.createAttribute("data-tcomid"); 
  var att3 = document.createAttribute("data-formid"); 

  //var newCommentId=Date.now();
  //newNode.ondblclick = function() { alert('blah'); };
  //newNode.ondblclick = function(ev) { seeComment(ev);}
  att.value = getValue;  
  att2.value = getValue;  
  att3.value = getValue;  
  comments.setAttributeNode(att);
  commentTextArea.setAttributeNode(att2);
  modalForm.setAttributeNode(att3);
  
  //comments.appendChild(content);
}


function saveComment(){
  var commentTextArea = document.getElementById('commenttextarea');
  var comments = document.getElementById('comments');
  var getComID=commentTextArea.dataset.tcomid;

  //var getTextValue=document.querySelector(`[data-foo="${getComID}"]`)
  var getTextValue=document.querySelector(`[data-tcomid="${getComID}"]`)

  console.warn("comments.dataset; ",commentTextArea.dataset.tcomid);
  console.warn("getTextValue; ",getTextValue.value);
  comments.innerHTML=getTextValue.value;
  localStorage.setItem(getComID,getTextValue.value);
  
  document.getElementById('modalform').reset();
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















         // Function to get the Selected Text 
         function getSelectedText() {
            var selectedText = '';

            // window.getSelection
            if (window.getSelection) {
                selectedText = window.getSelection();
            }
            // document.getSelection
            else if (document.getSelection) {
                selectedText = document.getSelection();
            }
            // document.selection
            else if (document.selection) {
                selectedText = 
                document.selection.createRange().text;
            } else return;
            // To write the selected text into the textarea
            console.warn("selectedText: ",selectedText);
            console.warn("selectedText: ",selectedText.baseNode.textContent);
            console.warn("selectedText: ",selectedText.baseNode.data);
           // document.testform.selectedtext.value = selectedText;
        }


        function getSelectedText2() {
            var selectedText = '';

            // window.getSelection
            if (window.getSelection) {
                selectedText = window.getSelection();
            }
            // document.getSelection
            else if (document.getSelection) {
                selectedText = document.getSelection();
            }
            // document.selection
            else if (document.selection) {
                selectedText = 
                document.selection.createRange().text;
            } else return;
            // To write the selected text into the textarea
            console.warn("selectedText: ",selectedText);
            console.warn("selectedText: ",selectedText.baseNode.textContent);
            console.warn("selectedText: ",selectedText.baseNode.data);



            var highLight = '<b style="font-weight:bold;">' + selectedText.baseNode.textContent + '</b>';

            document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), highLight);
           // document.testform.selectedtext.value = selectedText;
        }


        function makeBold(){
            var highlight = window.getSelection();  
            console.warn("highlight; ",highlight.textContent);
            //var span = '<b style="font-weight:bold;">' + highlight + '</b>';
        
            //document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
           // document.body.innerHTML = document.body.innerHTML.replace(new RegExp(highlight , 'g'), span);
        }




        //selected color 
       /* document.addEventListener('pointerup', e => {
            const selection = window.getSelection();
          
            if (selection.type === 'Range') {
              for (let i = 0; i < selection.rangeCount; i++) {
                const range = selection.getRangeAt(i);
                playAnimation(range.commonAncestorContainer);
              }
            }
          });
          
          function playAnimation(el) {
            if (el.nodeType === Node.TEXT_NODE) {
              el = el.parentNode;
            }
          console.warn("animation");
            el.classList.add('highlight2');
            /*setTimeout(() => {
              el.classList.add('highlight');
            }, 0);
          } */




          function changeSelectedText(){

          }








/*
          // code for IE
var textarea = document.getElementById("editabletext");
 
if (document.selection)
			{
				textarea.focus();
				var sel = document.selection.createRange();
                                // alert the selected text in textarea
				alert(sel.text);
 
                               // Finally replace the value of the selected text with this new replacement one
				sel.text = '<b>' + sel.text + '</b>';
			}
 
 
 */
 
// code for Mozilla
 


function getSelectedText3(){

  var textarea = document.getElementById("editabletext");
 console.warn("text textarea",textarea)
 
    var len = textarea.textContent;
    console.warn("text len", len.length)
   var start = textarea.selectionStart;
   console.warn("start", start)
   var end = textarea.selectionEnd;
   console.warn("end", end)
   var sel = textarea.textContent.substring(start, end);
 
   // This is the selected text and alert it
   alert(sel);
 
  var replace = '<b class="highlight">' + sel + '<b>';
 
  // Here we are replacing the selected text with this one
 textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
}

/*
var att = document.createAttribute("data-comment");       // Create a "class" attribute
att.value = "comment1";   
//this.button.createAttribute('data-comment');
this.button.setAttributeNode(att);
this.button.innerHTML = '<b>Comment</b>';  */




