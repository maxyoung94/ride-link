var ServiceList = React.createClass({
	getInitialState: function() {
		return (
			{services: dataList}
		)
	},
	render: function() {
		return (
			<div>
				<h1>Service History List</h1>
				<ServiceFilter />
				<ServiceTable services={this.state.services}/>
				<ServiceAdd />
				<button onClick={() => function(){console.log("it worked")}}>TEST</button>
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

var ServiceRow = React.createClass({
	
	render: function() {
		return (
			<tr>
				<td>{this.props.service.id}</td>
				<td>{this.props.service.title}</td>
				<td>{this.props.service.date}</td>
				<td>{this.props.service.author}</td>
				<td>{this.props.service.category}</td>
			</tr>				
		)
	}
});

var ServiceTable = React.createClass({
	render: function() {
		var serviceRows = this.props.services.map(function(service){
			return <ServiceRow key={service.id} service={service} />
		})
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
					{serviceRows}
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

var dataList = [
	{		
		id: 1,
		title: 'Complete Brake Overhaul',
		date: '10/10/10',
		author: 'Max Young',
		category: 'Brakes'
	},
	{		
		id: 2,
		title: 'Oil Change',
		date: '12/10/10',
		author: 'Max Young',
		category: 'General Maintence'
	}
];

ReactDOM.render(
	<ServiceList />,
	document.getElementById('main')
);