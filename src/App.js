var ServiceList = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Service History List</h1>
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
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Date</th>
						<th>Author</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					<ServiceRow id={1} title='this is the first title' date='07/02/17' author='Max Young' category='Steering & Suspension'/>
					<ServiceRow id={2} title='this is the second title' date='07/04/17' author='Max Young' category='Engine Performance'/>
				</tbody>
			</table>
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

var ServiceRow = React.createClass({
	
	render: function() {
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.title}</td>
				<td>{this.props.date}</td>
				<td>{this.props.author}</td>
				<td>{this.props.category}</td>
			</tr>				
		)
	}
});

ReactDOM.render(
	<ServiceList />,
	document.getElementById('main')
);