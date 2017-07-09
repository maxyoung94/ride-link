var ServiceList = React.createClass({
	displayName: 'ServiceList',


	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(ServiceFilter, null),
			React.createElement(ServiceTable, null),
			React.createElement(ServiceAdd, null)
		);
	}

});

var ServiceFilter = React.createClass({
	displayName: 'ServiceFilter',

	render: function () {
		return React.createElement(
			'div',
			null,
			'this is the service filter component.'
		);
	}
});

var ServiceTable = React.createClass({
	displayName: 'ServiceTable',

	render: function () {
		return React.createElement(
			'div',
			null,
			'this is the service table component.'
		);
	}
});

var ServiceAdd = React.createClass({
	displayName: 'ServiceAdd',

	render: function () {
		return React.createElement(
			'div',
			null,
			'this is the service add component.'
		);
	}
});

ReactDOM.render(React.createElement(ServiceList, null), document.getElementById('main'));
