var classTree={"plugins": ["search", "types","sort"],"search": {}, "core": { "data" :[]}}
function generateClassTree(){
	classTree["core"]["data"].push({ "id" : "http://www.opengis.net/ont/geosparql#Feature", "parent":"#", "text" : "Feature" })
	classTree["core"]["data"].push({ "id" : "Enumeration", "parent":"http://www.opengis.net/ont/geosparql#Feature", "text" : "Enumeration" })
	var counter=0;
	$('h3 > sup[title="class"]').each(function() {
		if(counter>0){
		var id=$(this).parent().parent().attr("id");
		console.log(id)
		var parentcls="";
		
		if(!(id.startsWith("4"))){
		$(this).parent().parent().children('dl').children('dt:contains("has super-classes")').next().children("a").each(function(){
			if(!($(this).attr("href").startsWith("4"))){
				parentcls=$(this).attr("href").substring(1)
				console.log($(this).attr("href"));
			}
		});
		if(parentcls==""){
			parentcls="#"
		}
		
		//console.log(superclasslist[0])
		//var topush={ "id" : id,parent:
		classTree["core"]["data"].push({ "id" : id, "parent":parentcls, "text" : id.substring(id.lastIndexOf('#')+1) })
		}
		}
		counter++;
		
	});
	console.log(classTree)
}