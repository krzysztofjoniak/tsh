$(document).ready(function(){

    function getData(url){    
        $('#employee_table tbody').empty();
        $.getJSON(url, function(data) {
            var employee_data = '';
            $.each(data, function(key, value) {
                employee_data += '<tr>';
                employee_data += '<td class="custom-th">' + value.name + '</td>';
                employee_data += '<td class="center rating pound-rating-' + value.rating + '"></td>';
                employee_data += '<td class="center">' + value.reference + '</td>';
                employee_data += '<td class="center">£' + value.value + '</td>';
                employee_data += '</tr>';
            
            });
           
            $('#employee_table').append(employee_data);
            
            
            var modalWindow = $('.modal');
            modalWindow.hide();
            $('.close').click(function() {
                modalWindow.hide();
            })
            
            $('tr').click(function() {
               $('.modal-body').empty();
               var modalCnt = $(this).html();
               $('.modal-body').append(modalCnt);
               modalWindow.show();
            });
        });
    } 
$('.prev-btn').hide();     
getData("data/page1.json");
    

 // Pagination
    
$('.next').click(function() {
     $('#employee_table tbody').empty();
     getData("data/page2.json");
     $('.page2').addClass('active');
     $('.page1').removeClass('active');
     $('.prev-btn').show();
     $('.next-btn').hide();
});   

$('.prev').click(function() {
     $('#employee_table tbody').empty();
     getData("data/page1.json");
     $('.page1').addClass('active');
     $('.page2').removeClass('active');
     $('.prev-btn').hide();
     $('.next-btn').show();
});  

});

// Reset

function resetTable(){
    document.getElementById("search").value = '';
} 



