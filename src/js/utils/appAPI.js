var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){

        $.ajax({
            url: 'https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=J2NIbcnSWo0ud0j3XD2f4Hdy-53b13DO',
            data: JSON.stringify(note),
            type: "POST",
            headers: {
                'Access-Control-Allow-Origin' : '*',
            },
            contentType: 'application/json',
            success: function(data){
                console.log(data);
            },
            error: function(xhr, status, err){
                console.log(data);
            }
        });
    }
}