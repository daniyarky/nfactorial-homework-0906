$('document').ready(function(){
    $('document').on('change',function(){
        // console.log($this)  //select
        // console.log(this.val())
       
        
        // $('result').text($(this).val')()+$(this).find(':selected').data('price'))
    });
    $('button').click(function(){
    
        $('h2').empty();
        // $('h2').append(getBitDepth());
        $('h2').append('File size is '+indexedFileSize()+' kB');
        if(indexedFileSize()<=50){
            $('h2').append(' which is ok');
        }   else if(indexedFileSize()>50){
            $('h2').append(' which is not ok');
        }   else{
            $('h2').empty();
            $('h2').append('smth went wrong, make sure you entered correct number values');

        }   

    });

    
    

    // $('h2').append( getBitDepth($('#Colors').val()));




});

function getBitDepth() {
    var x=Math.log($('#nc').val()) / Math.log(2);
    return x;
}

function indexedFileSize() {
    var y=($('#h').val()*$('#w').val()*(Math.log($('#nc').val()) / Math.log(2)))/8/1000;
    return y;
      
}
