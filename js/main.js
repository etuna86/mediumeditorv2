
  var text='';
  
/** modal  oluşturuluyor comment için **/
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })

 /** text  adında bir alan localstorage de oluşturuluyor var ise text değişkenine atanıyor (bu kısmları json datası olarak düşünebiliriz bu kısım html olarak gelmeli) **/
  if(!localStorage.getItem('text')){
    text="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> ";
  
  }else{
    text=localStorage.getItem('text');

    /*** document.ready fonksiyonu render işlemini gerçekleştiriyor ***/
    document.addEventListener("DOMContentLoaded", function(e) {

    /***   tagları çekiyoruz ***/
   var tag = document.getElementById("editabletext");

    /***  comment adlı tagları çekiyoruz ***/
   var tags=tag.getElementsByTagName("comment");

    /*** yorum yapılan cümleler burada yeniden oluşturuluyor */
    /***  sayfa yenilendiğinde js event'leri kaybolduğu için  fonksiyonu dom'da tekrar oluşturmamız gerekiyor  ***/
    for (let i = 0; i < tags.length; i++) {
        console.warn("tags; ", tags[i]);
        /*** ilgili elment için olusturulan yorum "penceresi acma" ( seeComment() ) fonksiyonu burada tekrar oluşturuluyor ***/
        tag.getElementsByTagName("comment")[i].ondblclick = function(ev) { seeComment(ev);}
        //tag.getElementsByTagName("comment")[i].setAttributeNode(attr);
      } 
    });

  }


  /***  text'ten gelen veriyi dom elementine ekliyoruz ***/
  getAllText('editabletext',text);

   /***  text'ten gelen veriyi dom elementine ekliyoruz ***/
  function getAllText(getElementID,text){
     var el= document.getElementById(getElementID);
     el.innerHTML=text;
  }

  /*** Medium editor'e harici bir button ekliyoruz  ***/
  var HighlighterButton = MediumEditor.Extension.extend({
    name: 'highlighter',
  
    init: function () {
      this.button = this.document.createElement('button');
      this.button.classList.add('medium-editor-action');
      var commentEl=document.createElement('comment');
      var attr = document.createAttribute("data-comment");
      attr.value = "comment1";   
      commentEl.setAttributeNode(attr);
      commentEl.appendChild(document.createTextNode('Comment'));
      this.button.appendChild(commentEl);

      //this.on(this.button, 'click', replaceSelectedText());  bu kısım tekrar incelenecek
    },
  
    getButton: function () {
      return this.button;
    }
  });

    /*** Bu kısım Medium editor'ü çalıştırıdığımız alan  ***/
/** medium-editor start **/
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
    },
    paste: {
      // This example includes the default options for paste, if nothing is passed this is what it used
      forcePlainText: false,
      cleanPastedHtml: false,
  }
   // buttonLabels: 'fontawesome', // use font-awesome icons for other buttons
 
  });
/** medium-editor start **/


/** comment kısımları kontrol ediliyor **/
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
      

 
      newNode.ondblclick = function(ev) { seeComment(ev);}
      //newNode.ondblclick = function() { alert('blah'); };
      att.value = newCommentId;  
      newNode.setAttributeNode(att);
      newNode.appendChild(content);
      newNode.insertAdjacentHTML("beforeend", sel);
      console.warn('sel', sel);
 
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


/** tıklanan elementin commentid sini alıp getCommentID  fonksiyonuna gönderiyor  **/
//ayrıca bu fonksiyon her sayfa yenilemede  ilgili comment elementlerine yeniden atanıyor(DOM'da  yeniden oluşturulmak zorunda )
function seeComment(e){
  console.warn("seeComment element: ",e.target);
  console.warn("seeComment element dataset: ",e.target.dataset.commentid);
  myModal.show()
  getCommentID(e.target.dataset.commentid)
}

function removeElement(){

}


/*** Tıklanan element içerisindeki elementlere ortak id  atanıyor ***/
function getCommentID(getValue){
  var commentTextArea = document.getElementById('commenttextarea');
  var comments = document.getElementById('comments');
  var modalForm = document.getElementById('modalform');
  var fixBtn = document.getElementById('fixbtn');

  console.warn("getcommentid: ",getValue);

  if(localStorage.getItem(getValue)){
    /***yayıncı tarafından yazılan yorumların kaydedilmesi (şimdilik bir yorum yazılabiliyor :D diğeri siliniyor) ***/
    comments.innerHTML=localStorage.getItem(getValue);
  }
  else{
    localStorage.setItem(getValue,"")
  }


  console.warn("asdadad; ",commentTextArea.value);
  //localStorage.setItem(getValue,commentTextArea.value);

 /*** bu kısım react ta daha az kod ile düzenlenebilir!!! ***/
  var att = document.createAttribute("data-comid"); 
  var att2 = document.createAttribute("data-tcomid"); 
  var att3 = document.createAttribute("data-formid"); 
  var att4 = document.createAttribute("data-fixbtnid"); 

  //var newCommentId=Date.now();
  //newNode.ondblclick = function() { alert('blah'); };
  //newNode.ondblclick = function(ev) { seeComment(ev);}
  att.value = getValue;  
  att2.value = getValue;  
  att3.value = getValue;  
  att4.value = getValue;  
  comments.setAttributeNode(att);
  commentTextArea.setAttributeNode(att2);
  modalForm.setAttributeNode(att3);
  fixBtn.setAttributeNode(att4);
  
  //comments.appendChild(content);
}

/** yayıncı yada yazar tarafından ilgili cümleye atanan yorumun    kaydet buttonu ile kaydedileceği  fonksiyon **/
function saveComment(){
  var commentTextArea = document.getElementById('commenttextarea');
  var comments = document.getElementById('comments');
  var getComID=commentTextArea.dataset.tcomid;

  var getTextValue=document.querySelector(`[data-tcomid="${getComID}"]`)

  console.warn("comments.dataset; ",commentTextArea.dataset.tcomid);
  console.warn("getTextValue; ",getTextValue.value);
  comments.innerHTML=getTextValue.value;
  localStorage.setItem(getComID,getTextValue.value);
  
  document.getElementById('modalform').reset();
  
}

/** yazı düzenlendikten sonra  yazarın  düzenlendi button'una tıkladığında calisacak fonksiyon **/
function fixedWord(e){
  console.warn("fixedWord; ",e.dataset.fixbtnid);
  var getComID = e.dataset.fixbtnid;
  console.warn("fixed btn: ",getComID);
  var getCommentEl=document.querySelector(`[data-commentid="${getComID}"]`);
  getCommentEl.className +=" success";
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






