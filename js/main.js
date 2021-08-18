
  var HighlighterButton = MediumEditor.Extension.extend({
    name: 'highlighter',
  
    init: function () {
      this.button = this.document.createElement('button');
      this.button.classList.add('medium-editor-action');
      var att = document.createAttribute("data-comment");       // Create a "class" attribute
        att.value = "comment1";   
      //this.button.createAttribute('data-comment');
      this.button.setAttributeNode(att);
      this.button.innerHTML = '<b>Comment</b>';
    },
  
    getButton: function () {
      return this.button;
    }
  });


 addEventListener('click',function(){
    var myFunction = function() {
        var attribute = this.getAttribute("data-comment");
        alert(attribute);
    };
 })

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
        document.addEventListener('pointerup', e => {
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
            }, 0);*/
          }


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


var att = document.createAttribute("data-comment");       // Create a "class" attribute
att.value = "comment1";   
//this.button.createAttribute('data-comment');
this.button.setAttributeNode(att);
this.button.innerHTML = '<b>Comment</b>';






//  selected fonksiyonumuz
function replaceSelectedText() {
    var sel, range,replacementText,newNode;
    if (window.getSelection) {
        sel = window.getSelection();

        newNode = document.createElement("b");
        var att = document.createAttribute("class"); 
        att.value = "highlight";   
        newNode.setAttributeNode(att);
        newNode.appendChild(document.createTextNode(sel));

        //replacementText = '<b class="highlight">' + sel + '<b>';
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            //range.insertNode(document.createTextNode(replacementText));
            range.insertNode(newNode);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}