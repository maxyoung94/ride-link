var ServiceList = React.createClass({
	displayName: 'ServiceList',


	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Service History List'
			),
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
			'table',
			null,
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement(
						'th',
						null,
						'ID'
					),
					React.createElement(
						'th',
						null,
						'Title'
					),
					React.createElement(
						'th',
						null,
						'Date'
					),
					React.createElement(
						'th',
						null,
						'Author'
					),
					React.createElement(
						'th',
						null,
						'Category'
					)
				)
			),
			React.createElement(
				'tbody',
				null,
				React.createElement(ServiceRow, { id: 1, title: 'this is the first title', date: '07/02/17', author: 'Max Young', category: 'Steering & Suspension' }),
				React.createElement(ServiceRow, { id: 2, title: 'this is the second title', date: '07/04/17', author: 'Max Young', category: 'Engine Performance' })
			)
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

var ServiceRow = React.createClass({
	displayName: 'ServiceRow',


	render: function () {
		return React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				null,
				this.props.id
			),
			React.createElement(
				'td',
				null,
				this.props.title
			),
			React.createElement(
				'td',
				null,
				this.props.date
			),
			React.createElement(
				'td',
				null,
				this.props.author
			),
			React.createElement(
				'td',
				null,
				this.props.category
			)
		);
	}
});

ReactDOM.render(React.createElement(ServiceList, null), document.getElementById('main'));
