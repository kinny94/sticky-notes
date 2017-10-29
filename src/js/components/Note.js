var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Note = React.createClass({

	render: function(){
        console.log(this.props.notes);
		return(
            
			<div className="column ">
                <div className="note"><p>{this.props.notes}</p></div>
			</div>
		);
    }

});

module.exports = Note; 