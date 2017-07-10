var ServiceList = React.createClass({
	displayName: 'ServiceList',

	getInitialState: function () {
		return { services: dataList };
	},
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
			React.createElement(ServiceTable, { services: this.state.services }),
			React.createElement(ServiceAdd, null),
			React.createElement(
				'button',
				{ onClick: () => function () {
						console.log("it worked");
					} },
				'TEST'
			)
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

var ServiceRow = React.createClass({
	displayName: 'ServiceRow',


	render: function () {
		return React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				null,
				this.props.service.id
			),
			React.createElement(
				'td',
				null,
				this.props.service.title
			),
			React.createElement(
				'td',
				null,
				this.props.service.date
			),
			React.createElement(
				'td',
				null,
				this.props.service.author
			),
			React.createElement(
				'td',
				null,
				this.props.service.category
			)
		);
	}
});

var ServiceTable = React.createClass({
	displayName: 'ServiceTable',

	render: function () {
		var serviceRows = this.props.services.map(function (service) {
			return React.createElement(ServiceRow, { key: service.id, service: service });
		});
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
				serviceRows
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

var dataList = [{
	id: 1,
	title: 'Complete Brake Overhaul',
	date: '10/10/10',
	author: 'Max Young',
	category: 'Brakes'
}, {
	id: 2,
	title: 'Oil Change',
	date: '12/10/10',
	author: 'Max Young',
	category: 'General Maintence'
}];

ReactDOM.render(React.createElement(ServiceList, null), document.getElementById('main'));
