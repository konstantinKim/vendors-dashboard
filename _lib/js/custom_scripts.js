$(document).ready(function()
{

    $(document.body).on('submit', 'form.validate_user', function(){
        this_form = $(this);
        var msg   = $(this).serialize();
        this_form.attr('is_valid', 'false');
        $.ajax({
            type: 'POST',
            url: '/users/validateuser/',
            data: msg,
            success:function(data)
            {
                if('ok' == data){
                    this_form.attr('is_valid', 'true');
                }
                else{
                    alert(data);
                }
            },
            error:  function(xhr, str){
                alert('Error: ' + xhr.responseCode);
            },
            async: false
        });

        if('true' == this_form.attr('is_valid')){
            return true;
        }

        return false;

    });
}
);

function convertToTons(weight, units, density){
    // convert to tons if given in units based on density
    if('yards' == units){
        weight = parseFloat(weight * density);
    }
    if('pounds' == units){
        weight = parseFloat(weight / 2000);
    }
    if('metric_tons' == units){
        weight = parseFloat(weight * 1.10231);
    }
    if('cubic_meter' == units){
        cy = parseFloat(weight * 1.30795062);
        weight = parseFloat(cy * density);
    }
    if('kilograms' == units){
        pounds =  parseFloat(weight * 2.20462);
        weight = parseFloat(pounds / 2000);
    }

    return parseFloat(weight);
}

function getHashValue() {
    var split_href = location.href.split('#');
    if(split_href.length > 1){
        return split_href[1];
    }

    return false;
}