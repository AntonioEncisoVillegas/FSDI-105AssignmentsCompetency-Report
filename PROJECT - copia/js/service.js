        function initService(){
        $('#nails-service').hide();
        $('#grooming-service').hide();
        $('#full-service').hide();
        $('#hair').on('click',function(){
          $('#hair-service').show();   
          $('#nails-service').hide();
          $('#grooming-service').hide();
          $('#full-service').hide();
        });
    
        $('#nails').on('click',function(){
            $('#hair-service').hide();   
            $('#nails-service').show();
            $('#grooming-service').hide();
            $('#full-service').hide();
        });
    
        $('#grooming').on('click',function(){
            $('#hair-service').hide();   
            $('#nails-service').hide();
            $('#grooming-service').show();
            $('#full-service').hide();
        });
    
        $('#').on('click',function(){
            $('#hair-service').hide();   
            $('#nails-service').hide();
            $('#grooming-service').hide();
            $('#full-service').show();
        });
    }
    