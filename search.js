var originalDropdownOptions = Array.from(document.getElementById("dropdown").options);
			
				function filterDropdown() {
					var searchInput = document.getElementById("searchInput").value.toLowerCase();
					var dropdown = document.getElementById("dropdown");
			
					dropdown.innerHTML = "";

					var filteredOptions = originalDropdownOptions.filter(function (option) {
						return option.text.toLowerCase().includes(searchInput);
					});
			
					for (var i = 0; i < filteredOptions.length; i++) {
						dropdown.appendChild(filteredOptions[i]);
					}
				}
			
				function search() {
					var dropdown = document.getElementById("dropdown");
					var selectedOption = document.getElementById("selectedOption");

					var selectedIndex = dropdown.selectedIndex;
					if (selectedIndex !== -1) {
						var selectedText = dropdown.options[selectedIndex].text;
						selectedOption.textContent = selectedText;
					} else {
						selectedOption.textContent = "";
					}
				}