var ServiceList = React.createClass({
	displayName: 'ServiceList',


	render: function () {
		return React.createElement(
			'div',
			null,
			'This is the service list component.'
		);
	}

});

ReactDOM.render(React.createElement(ServiceList, null), document.getElementById('main'));
