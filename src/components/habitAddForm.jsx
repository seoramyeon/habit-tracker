import React from 'react';

const HabitAddForm = (props) => {
	const formRef = React.createRef();
	const inputRef = React.createRef();

	const handleSubmit =(event) => {
		event.preventDefault();
		const name = inputRef.current.value;
		name && props.onAdd(name);
		formRef.current.reset();
	}

	return (
		<form ref={formRef} className="add-form" onSubmit={handleSubmit}>
			<input 
				ref={inputRef} 
				type='text' 
				className="add-input" 
				placeholder="Add new habit">
			</input>
			<button className="add-button">Add</button>
		</form>
	);
};

export default HabitAddForm;