function filterSelection() {
	const filteredClasses = $("#filters :checked").get().map(el => '.' + el.value).filter(cls => cls !== '.all').join('');
	$(".content").hide();
	$(".content" + filteredClasses).show();
    if(!$(".content").hasClass(filteredClasses)) {
        console.log("no");
    }
}

document.addEventListener('DOMContentLoaded', () => {
	$("#filters").change(filterSelection);
});