$('document').ready(function(){
    $('document').on('change',function(){
        // console.log($this)  //select
        // console.log(this.val())
       
        
        // $('result').text($(this).val')()+$(this).find(':selected').data('price'))
    });
    $('button').click(function(){
        var x= $('#fname').val();
        var y=$('#cname').val();
        var z=$('#adverb').val();
        var v=$('#adjective').val();


        $('h2').append('One sunny day your little pig and '+x +' have been reaching the top of the mountain Shymbulak. On their way they met BIG BAD '+y+', who have been rushing down and reaching '+v+ ' speed as he climbed down from top. He hardly stopped in front of your pig with '+x+', then suddenly slapped the pink animal and  run away. At that moment '+x+ ' realized that your animal is tasty. So '+x+' finally '+z+' reached top alone. The reason of his solitude was that stupid animal snoozed. Int the end, '+ z + ' managed to to climb down from Shymbulak and tell you this cringe story.');
        
    });

});