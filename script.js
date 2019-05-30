const generateStudents = (i, studentContainer)=> {
	let student = document.createElement('div');
	student.className = 'student';
	student.innerHTML = "<img class='student_image' width='50' height='50' src='images/" + students[i].image + " '>";
	student.innerHTML += "<h2 class='student_name'>" + students[i].name + "</h2>";
	student.innerHTML += "<h3 class='student_college'>" + students[i].college + "</h3>";
	student.innerHTML += "<p class='student_join'>" + students[i].joined_at + "</p>";
	studentContainer.appendChild(student);
};
const removeAll = (className)=> {
	let removed = document.querySelectorAll('.'+className);
	for (let i = 0; i < removed.length; i++) {
		removed[i].remove();
	}
};

	window.addEventListener('load', ()=> {
		const studentContainer = document.querySelector('#students');

		// pagination Container
		const pagesContainer = document.createElement('div');

		const main = document.querySelector('#main');
		// nums of students to show
		const limit = 9;

		for (let i = 0; i < students.length; i++) {
			generateStudents(i, studentContainer);

			// loop through first limit (10) students
			if(i != students.length) {
				if(i == limit) {
					let numOfPages = students.length / limit ;				
					pagesContainer.className = 'page-links';
					main.appendChild(pagesContainer);
					for(let i = 0; i < numOfPages; i++){
						let pagination = document.createElement('button');
						pagination.className = "page"+i;
						pagination.innerHTML = "";
						pagination.innerHTML += i;
						pagesContainer.appendChild(pagination);
					}
					break;
				}
			}
		}
			let clearFix = document.createElement('div');
			clearFix.className = "clearfix";
			studentContainer.appendChild(clearFix);

			pagesContainer.addEventListener('click', (event)=> {
				let paginationClassName = event.target.className;
				let pageNumber = parseInt(paginationClassName.split('')[4]);
				removeAll('student');
				if(pageNumber != 0) {
					for(let i = pageNumber * 10 ; i < (pageNumber * 10 + limit);i++) {
						if(i >= students.length)
							break;
						generateStudents(i, studentContainer);
					}
				}else {
					for(let i = 0; i < limit;i++) {
						generateStudents(i, studentContainer);
					}
				}
			});


	});

const seachButton = document.querySelector('#search button');

