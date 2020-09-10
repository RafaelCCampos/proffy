import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekday] = useState('');
	const [time, setTime] = useState('');

	useEffect( () => {
		if (subject !== '' && week_day !== '' && time !== '') {
			searchTeachers();	
		}
	
	},[subject, week_day, time]);

	async function searchTeachers() {

		const response = await api.get('/classes', {
			params: {
				subject,
				week_day,
				time,
			}
		})

		setTeachers(response.data);
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form id="search-teachers"> 
					<Select 
						name="subject" 
						label="Matéria"
						value={subject}
						onChange={e => {setSubject(e.target.value)}}
						options={[
							{ value: 'Artes', label: 'Artes'},
							{ value: 'Biologia', label: 'Biologia'},
							{ value: 'Ciências', label: 'Ciências'},
							{ value: 'Ed. Física', label: 'Ed. Física'},
							{ value: 'Física', label: 'Física'},
							{ value: 'Geografia', label: 'Geografia'},
							{ value: 'História', label: 'História'},
							{ value: 'Matemática', label: 'Matemática'},
							{ value: 'Português', label: 'Português'},
							{ value: 'Química', label: 'Química'},
							{ value: 'Filosofia', label: 'Filosofia'},
							{ value: 'Sociologia', label: 'Sociologia'},
						]}
					/>
					<Select 
						name="week_day" 
						label="Dia da semana"
						value={week_day}
						onChange={e => {setWeekday(e.target.value)}}
						options={[
							{ value: '0', label: 'Domingo'},
							{ value: '1', label: 'Segunda-feira'},
							{ value: '2', label: 'Terça-feira'},
							{ value: '3', label: 'Quarta-feira'},
							{ value: '4', label: 'Quinta-feira'},
							{ value: '5', label: 'Sexta-feira'},
							{ value: '6', label: 'Sábado'},
						]}
					/>
					<Input
						type="time" 
						label="Hora" 
						name="time"
						value={time}
						onChange ={ e => {setTime(e.target.value)}}
					/>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher: Teacher)  => {
					return <TeacherItem key={teacher.id} teacher={teacher}/>
				})}
			</main>
		</div>
	)
}

export default TeacherList;