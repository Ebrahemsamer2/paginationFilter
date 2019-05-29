	

	window.addEventListener('load', ()=> {
		let studentContainer = document.querySelector('#students');
		let limit = 9;
		for (let i = 0; i < students.length; i++) {
			let student = document.createElement('div');
			student.className = 'student';
			student.innerHTML = "<img class='student_image' width='50' height='50' src='images/" + students[i].image + " '>";
			student.innerHTML += "<h2 class='student_name'>" + students[i].name + "</h2>";
			student.innerHTML += "<h3 class='student_college'>" + students[i].college + "</h3>";
			student.innerHTML += "<p class='student_join'>" + students[i].joined_at + "</p>";
			studentContainer.appendChild(student);

			if(i != students.length) {

				if(i == limit) {
					let numOfPages = students.length / limit ;
					let pagesContainer = document.createElement('div');
					pagesContainer.className = 'page-links';
					studentContainer.appendChild(pagesContainer);
					for(let i = 0; i < numOfPages; i++){
						let pagination = document.createElement('a');
						pagination.className = "page"+i;
						pagination.setAttribute('href', "#");
						pagination.innerHTML = "";
						pagination.innerHTML += i;
						pagesContainer.appendChild(pagination);
					} break;
				}
			}

		}

			let clearFix = document.createElement('div');
			clearFix.className = "clearfix";
			studentContainer.appendChild(clearFix);

	});

const seachButton = document.querySelector('#search button');

