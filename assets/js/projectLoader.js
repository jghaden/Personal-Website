main();

function main() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var projects = JSON.parse(this.responseText);
            
            for(var i = 0; i < projects.length; i++) {
                var sysName = projects[i].SystemName;
                var sysDir = 'projects/' + sysName + '/';
                var projName = projects[i].ProjectName;
                var sourceURL = projects[i].SourceURL;
                var images = projects[i].ProjectImages;
                var captions = projects[i].ImageCaptions;
                var description = projects[i].Description;
                var language = projects[i].Language;

                $('#projects').append('<article class="col-6 col-12-xsmall work-item" id="'+ sysName+ '"></article>')
                $('#' + sysName).append('<h3 class="projectTitle" style="display: inline">' + projName + ' </h3>');
                
                for(var j = 0; j < images.length; j++) {
                    if(j == 0) {
                        $('#' + sysName).append('<a href="' + sysDir + images[0] + '" class="image fit thumb"><img src="' + sysDir + images[0] + '" alt=""></a>')
                    }
                    else {
                        $('#' + sysName).append('<a href="' + sysDir + images[j] + '" class="image fit"></a>')
                    }

                    $('#' + sysName).append('<h3 class="img caption">' + captions[j] + '</h3>')
                }

                $('#' + sysName).append('<p>' + description + '</p>');

                var out = '(';

                for(var j = 0; j < language.length; j++) {
                    out += language[j];

                    if(j < language.length - 1)
                        out += ", ";
                }

                out += ')';

                $('#' + sysName).find('.projectTitle').append('<h3 class="lang">' + out + '<h3>');

                $('#' + sysName).find('.lang').append('<a href="' + sourceURL + '" target="_blank" class="icon brands fa-github srcIcon" style="padding-left: 0.6em;"></a>')
            }
        }
    };

    xmlhttp.open("GET", 'projects/index.json', true);
    xmlhttp.send();
}