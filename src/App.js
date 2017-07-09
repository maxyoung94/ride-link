var ServiceList = React.createClass({

	render: function() {
		return (
			<div>
				<ServiceFilter />
				<ServiceTable />
				<ServiceAdd />
			</div>
		);
	}

});

var ServiceFilter = React.createClass({
	render: function() {
		return (
			<div>this is the service filter component.</div>
		)
	}
});

var ServiceTable = React.createClass({
	render: function() {
		return (
			<div>this is the service table component.</div>
		)
	}
});

var ServiceAdd = React.createClass({
	render: function() {
		return (
			<div>this is the service add component.</div>
		)
	}
});

ReactDOM.render(
	<ServiceList />,
	document.getElementById('main')
);